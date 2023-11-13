/*
    fetches from Google Apps Script deployed Web APP 
    https://script.google.com/u/0/home/projects/1eoxtLje6Wsao2WnZlX4rto9cM-EyiP0l05lX8hKBQrXbaofMTUD3281Z/edit

    
*/
import { TEST_DATA } from "../consts";

const URL = `https://script.google.com/macros/s/AKfycbxbuFfvOmncutqq_InwRgKHYSL5hVQaqp8Umyyw3W_VMNZ2XqHgrlaPTcgYkfUPleck/exec`;

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

// const fetchTerms = () => {return TEST_DATA};

export default fetchTerms;