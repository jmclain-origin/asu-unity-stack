// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { trackGAEvent } from "../../core/services/googleAnalytics";
import { iff } from "../../core/utils/conditionals";
import { createRange } from "../../core/utils/numbers";
import { PageItem } from "./PageItem";

const defaultGAEvent = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content",
};

/**
 * @typedef {import('../../core/types/shared-types').PaginationProps} PaginationProps
 */

const X_SMALL_DEDVICE_WIDTH = 413;
const SMALL_DEDVICE_WIDTH = 450;
const SMALL_DEDVICE_TOTAL_NUMBER = 3;

/**
 * @param {PaginationProps} props
 * @returns {JSX.Element}
 */
export const Pagination = ({
  type,
  background,
  currentPage,
  totalPages,
  showFirstButton,
  showLastButton,
  totalNumbers,
  onChange,
}) => {
  const [selectedPage, setSelectedPage] = useState(null);
  // Start small device
  const [currentTotalNumbers, setCurrentTotalNumbers] = useState(totalNumbers);
  const [isSmallDevice, setSmallDevice] = useState(
    window.innerWidth < SMALL_DEDVICE_WIDTH
  );
  const [isXSmallDevice, setXSmallDevice] = useState(
    window.innerWidth < X_SMALL_DEDVICE_WIDTH
  );
  // End small device
  const [showArrowIcons, setShowArrowIcons] = useState(true);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  // start small device
  const mediaQuerySmallDevice = window.matchMedia(
    `(max-width: ${SMALL_DEDVICE_WIDTH}px)`
  );

  mediaQuerySmallDevice.addEventListener("change", e => {
    if (e.matches) {
      setCurrentTotalNumbers(SMALL_DEDVICE_TOTAL_NUMBER);
      setSmallDevice(true);
      setShowArrowIcons(true);
    } else {
      setCurrentTotalNumbers(totalNumbers);
      setSmallDevice(false);
      setXSmallDevice(false);
      setShowArrowIcons(true);
    }
  });

  const mediaQueryXSmallDevice = window.matchMedia(
    `(max-width: ${X_SMALL_DEDVICE_WIDTH}px)`
  );

  mediaQueryXSmallDevice.addEventListener("change", e =>
    setXSmallDevice(e.matches)
  );
  // end small device

  const trackEvent = page => {
    trackGAEvent({ ...defaultGAEvent, text: `page ${page}` });
  };

  const handleChangePage = (e, page) => {
    const actions = {
      first: 1,
      prev: selectedPage - 1,
      next: selectedPage + 1,
      last: totalPages,
    };
    const action = actions[page] ?? page;
    setSelectedPage(action);
    onChange?.(e, action);
  };

  const renderPages = () => {
    // Set the ranges to be shown in the pagination
    const lowerRangeLimit = iff(
      selectedPage === totalPages - 1,
      2,
      selectedPage === totalPages ? 3 : 1
    );
    const upperRangeLimit = iff(
      selectedPage === 1,
      3,
      selectedPage === 2 ? 2 : 1
    );
    const lowerRange = createRange(
      selectedPage - lowerRangeLimit,
      selectedPage,
      totalPages
    );
    const upperRange = createRange(
      selectedPage,
      selectedPage + 1 + upperRangeLimit,
      totalPages
    );
    const renderedPages = [...lowerRange, ...upperRange];

    return (
      <>
        {renderedPages[0] !== 1 && (
          <PageItem
            isClickeable
            selectedPage={selectedPage === 1}
            onClick={e => handleChangePage(e, "first")}
          >
            1
          </PageItem>
        )}
        {renderedPages[0] > 2 && <PageItem ellipses>...</PageItem>}
        {renderedPages.map(page => (
          <PageItem
            isClickeable
            key={page}
            selectedPage={selectedPage === page}
            onClick={e => handleChangePage(e, page)}
          >
            {page}
          </PageItem>
        ))}
        {renderedPages[renderedPages.length - 1] < totalPages - 1 && (
          <PageItem ellipses>...</PageItem>
        )}
        {renderedPages[renderedPages.length - 1] !== totalPages && (
          <PageItem
            ariaLabel={`Page ${totalPages} of ${totalPages}`}
            isClickeable
            selectedPage={selectedPage === totalPages}
            onClick={e => handleChangePage(e, "last")}
          >
            {totalPages}
          </PageItem>
        )}
      </>
    );
  };

  return (
    <nav aria-label="Pagination" data-testid="pagination">
      <ul
        className={classNames(
          "pagination",
          "justify-content-center",
          "pt-2",
          "pb-2",
          {
            [`border`]: type === "bordered",
            [`uds-bg-gray1`]: background === "gray1",
            [`uds-bg-gray`]: background === "gray2",
            [`uds-bg-dark`]: background === "gray7",
          }
        )}
      >
        <PageItem
          dataId="prev"
          isClickeable
          disabled={selectedPage === 1}
          pageLinkIcon={showArrowIcons}
          onClick={e => handleChangePage(e, "prev")}
          ariaLabel="Previous"
        />
        {renderPages()}
        <PageItem
          dataId="next"
          isClickeable
          disabled={selectedPage === totalPages}
          pageLinkIcon={showArrowIcons}
          onClick={e => handleChangePage(e, "next")}
          ariaLabel="Next"
        />
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  /**
   * Type of pagination
   */
  type: PropTypes.oneOf(["default", "bordered"]).isRequired,
  /**
   * Background of pagination
   */
  background: PropTypes.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired,
  /**
   * Current page
   */
  currentPage: PropTypes.number,
  /**
   * Total number of pages
   */
  totalPages: PropTypes.number,
  /**
   * Show first page button
   */
  showFirstButton: PropTypes.bool,
  /**
   * Show last page button
   */
  showLastButton: PropTypes.bool,
  /**
   * Total number of pages to show. Should be an odd number to center the current page un the middle
   */
  totalNumbers: PropTypes.number,
  /**
   * Callback fired when the page is changed.
   */
  onChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 10,
  showFirstButton: false,
  showLastButton: false,
  totalNumbers: 3,
};
