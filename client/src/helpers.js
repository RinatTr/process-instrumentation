// Extracts group names from raw terms data
const GROUP_KEY = "group_en";

export function extractGroupNames(termsData) {
    return Array.from(new Set(termsData.map(term => term[GROUP_KEY])));
}

export function filterByGroup(terms, group, groups) {
    //check for reset
    if (!groups.includes(group)) return terms;

    return terms.filter(term => term.group_en === group);
}

export function filterBySearchInput(rawTerms, searchInput) {
    //check for reset
    searchInput = searchInput.toLowerCase();
    let sliceIndex = searchInput.length;
    
    if (!searchInput.length) return rawTerms;

    return rawTerms.filter(term => {
        let prefix = term["term_en"].slice(0, sliceIndex).toLowerCase();
        return prefix === searchInput
        });
}