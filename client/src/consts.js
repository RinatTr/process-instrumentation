// Extracts group names from raw terms data
 const GROUP_KEY = "group_en";
 const MODULE_KEY = "presentation_ID";
 const TERM_EN_KEY = "term_en"; 
 const TERM_HEB_KEY = "term_heb";
 const DEFINITION_HEB_KEY = "definition_heb";
 const URL_KEY = "URL";

 function extractGroupNames(termsData) {
    return Array.from(new Set(termsData.map(term => term[GROUP_KEY]))).sort();
}

 function extractModuleNames(termsData) {
    return Array.from(new Set(termsData.map(term => term[MODULE_KEY]))).sort();
}

 function filterByGroup(terms, group, groups) {
    //check for reset
    if (!groups.includes(group)) return terms;

    return terms.filter(term => term[GROUP_KEY] === group);
}

function filterByModule(terms, moduleId, modules) {
    let parsed = parseFloat(moduleId);
    //check for reset
    if (!modules.includes(parsed)) return terms;

    return terms.filter(term => term[MODULE_KEY] === parsed);
}

 function filterBySearchInput(rawTerms, searchInput) {
    //check for reset
    searchInput = searchInput.toLowerCase();
    let sliceIndex = searchInput.length;

    if (!searchInput.length) return [];

    return rawTerms.filter(term => {
        let prefix = term["term_en"].slice(0, sliceIndex).toLowerCase();
        return prefix === searchInput
        });
}

export {
    GROUP_KEY,
    MODULE_KEY,
    TERM_EN_KEY,
    TERM_HEB_KEY,
    DEFINITION_HEB_KEY,
    URL_KEY,
    extractGroupNames,
    extractModuleNames,
    filterByGroup,
    filterBySearchInput,
    filterByModule
}