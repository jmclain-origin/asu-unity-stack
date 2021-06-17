// @ts-check

const mathintensity = {
  G: "General",
  M: "Moderate",
  S: "Substantial",
  undefined: "",
};

/**
 *
 * @param {Object.<string, any>} row
 *
 */
// @ts-ignore
function degreeDataPropResolverService(row = {}) {
  return {
    getMajorDesc: () => row["Descr100"],
    getInstitution: () => row["Institution"],
    getAcadPlan: () => row["AcadPlan"],
    getDegree: () => row["Degree"],
    getDegreeDesc: () => row["DegreeDescr"],
    getDegreeDescLong: () => row["DegreeDescrlong"],
    getDescrLongExtented: () => row["DescrlongExtns"],
    getCurriculumUrl: () => row["CurriculumUrl"],
    isOnline: () => row["managedOnlineCampus"],
    getOnlineMajorMapURL: () => row["onlineMajorMapURL"],
    getAsuCritTrackUrl: () => row["AsuCritTrackUrl"],
    /** @return {string []} */
    getCampusList: () => row["CampusStringArray"] || [],
    getAccelerateDegrees: () => row["accelerateDegrees"] || [],
    getConcurrentDegrees: () => row["concurrentDegrees"] || [],
    getCollegeDesc: () => row["CollegeDescr100"],
    getCollegeUrl: () => row["CollegeUrl"],
    /** @return {string} */
    getEmailAddress: () => row["EmailAddr"],
    /** @return {string} */
    getPhone: () => row["Phone"],
    /** @return {string} */
    getGDepartmentName: () => row["DepartmentName"],
    // AsuProgramFee
    getAsuProgramFee: () => row["AsuProgramFee"],
    hasAsuProgramFee: () => row["AsuProgramFee"] === "Y",
    // AsuLangReqFlag
    getAsuLangReqFlag: () => row["AsuLangReqFlag"],
    hasAsuLangReqFlag: () => row["AsuLangReqFlag"] === "Y",
    getAcadPlanText: () => row["asuAcadpLrfText"],
    // asuMathReqFlag
    getMathReqFlag: () => row["asuMathReqFlag"],
    hasMathReqFlag: () => row["asuMathReqFlag"] === "Y",
    getAdditionalMathReqCourse: () => row["additionalMathReqCourse"],
    getOtherMathReqCourse: () => row["asuAcadpMrfText"],
    getMathIntensity: () => mathintensity[row["MathIntensity"]],
    getMathIntensityRawValue: () => row["MathIntensity"],
    getMinMathReq: () => row["MinMathReq"] || "",
    getMarketText: () => row["marketText"],
    /** @return {string} */
    getAsuOfficeLoc: () => row["AsuOfficeLoc"] || "",
    /** @return {string} */
    getCampusWue: () => row["campusWue"] || "",
    getConcurrentDegreeMajorMaps: () => row["concurrentDegreeMajorMaps"],
    getChangeMajor: () => row["ChangeMajor"],
    getAsuCareerOpportunity: () => row["AsuCareerOpp"],
    getGlobalExp: () => row["globalExp"],
  };
}

export { degreeDataPropResolverService };
