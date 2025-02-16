import PropTypes from "prop-types";
import React from "react";

import { engineNames } from "../../../helpers/search";
import { ASUSearchResultsList } from "../../../SearchResultsList/index";
import { StudentsTabLayout } from "./index.styles";

const StudentsTab = ({ engines, term, loggedIn }) => {
  return (
    <StudentsTabLayout>
      <ASUSearchResultsList
        term={term}
        engine={engines[engineNames.STUDENTS]}
        itemsPerPage={6}
        type="full"
        GASource="all student results"
        titleText="All Student results"
        loggedIn={loggedIn}
        showSearchMessage
      />
    </StudentsTabLayout>
  );
};

StudentsTab.propTypes = {
  term: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: PropTypes.object,
  loggedIn: PropTypes.bool,
};

export { StudentsTab };
