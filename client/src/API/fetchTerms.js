/*
    fetches from Google Apps Script deployed Web APP 
    https://script.google.com/u/0/home/projects/1eoxtLje6Wsao2WnZlX4rto9cM-EyiP0l05lX8hKBQrXbaofMTUD3281Z/edit

    
*/
const URL = `https://script.google.com/macros/s/AKfycbzxu84D6_iUZNdAqYyCPulo090K3fqaUHy85nM0Ql2as0IcPclv2Nt4C7HKSBS0o4eX/exec`

const fetchTerms = async () => {
  try {
      let response = await fetch(URL);
      
      if (!response.ok) {
        throw new Error("")
      } else {
        let json = await response.json();
        return json;
      }

  } catch(e) {
      console.log("Error during fetching terms:", e);
  }
}

export default fetchTerms;