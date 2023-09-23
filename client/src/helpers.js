// Extracts group names from raw terms data
const GROUP_KEY = "group_en";
export default function extractGroupNames(termsData) {
    return Array.from(new Set(termsData.map(term => term[GROUP_KEY])));
}