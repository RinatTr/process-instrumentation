/*
    fetches from Google Apps Script deployed Web APP 
    https://script.google.com/u/0/home/projects/1eoxtLje6Wsao2WnZlX4rto9cM-EyiP0l05lX8hKBQrXbaofMTUD3281Z/edit

    
*/
const URL = `https://script.google.com/macros/s/AKfycbwiB7jQkQD7BBBQ2oTLqNO69GUtGO1uC1SKy5gotlEQM9tQ8EFAwBzauxKFJRrLlTcD/exec`;

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
      console.log("Error during fetching terms", e);
  }
}

export default fetchTerms;