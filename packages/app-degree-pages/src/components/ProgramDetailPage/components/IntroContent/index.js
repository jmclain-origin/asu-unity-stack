// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { contentPropType } from "../../../../core/models/app-prop-types";
import { sanitizeHTML, spreadClasses } from "../../../../core/utils";

/**
 * @typedef {import('../../../../core/models/program-detail-types').IntroContentProps} IntroContentProps
 * @typedef {import('../../../../core/models/shared-types').AppTitleProps} AppTitleProps
 */

/**
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
function IntroContent({ contents = [] }) {
  return (
    <section>
      {contents.map((content, index) => (
        <div
          key={`content-${index + 1}`}
          className={`${spreadClasses(content.cssClass)}`}
          dangerouslySetInnerHTML={sanitizeHTML(content.text)}
        />
      ))}
    </section>
  );
}

IntroContent.propTypes = {
  contents: PropTypes.arrayOf(contentPropType),
};

export { IntroContent };
