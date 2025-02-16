// @ts-check

import { degreeDataPropResolverService } from "../services";

/** @typedef {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"} tagHeadings */

/**
 * @template S
 * @typedef {[S, import("react").Dispatch<import("react").SetStateAction<S>>]} UseStateTuple
 */

// dummy type to help the intellisense
const DegreeDataPropResolverServiceType = degreeDataPropResolverService({});
/** @typedef {DegreeDataPropResolverServiceType} DegreeDataPropResolver */

/**
 * @typedef {import("@asu/components-core").ImageProps} ImageProps
 */

/**
 * @typedef {import("@asu/components-core").VideoProps} VideoItem
 */

/** This type set the `text` optional
 * @typedef {{
 *    url: string
 *    text?: string
 * }} SoftLinkItem
 */

/**
 * @typedef {import("@asu/components-core").ImageProps} ImageItem
 */

/**
 * @typedef {Object} AppTitleProps
 * @property {string} text
 * @property {Array.<string>} [cssClass]
 * @property {keyof tagHeadings} [component]
 */

/**
 * @typedef {import("@asu/components-core").CardProps} CardProps
 */

/**
 * @typedef {{
 *  color?: "gold" | "maroon" | "gray" | "dark"
 *  content: {
 *    icon?: string
 *    header: string
 *    body: string
 *   }
 * }} AccordionCard
 */

/**
 * @typedef {{
 *  targetIdName: string
 *  text: string
 * }} AnchorItem
 */

/**
 * @typedef  {{
 *    id?: string | number
 *    text: string
 *    value: string
 * }} FilterOption
 *
 *  @typedef  {{
 *    isActive?: boolean
 *    keyword?: string
 *    collegeAcadOrg?: string
 *    departmentCode?: string
 *    locations?: FilterOption []
 *    asuLocals?: FilterOption []
 *    acceleratedConcurrent?: FilterOption
 *    showInactivePrograms?: boolean | "true" | "false"
 *    blacklistAcadPlans?: Array
 * }} FiltersState
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
