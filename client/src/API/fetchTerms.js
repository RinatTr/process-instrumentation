/*
    fetches from Google Apps Script deployed Web APP 
    https://script.google.com/u/0/home/projects/1eoxtLje6Wsao2WnZlX4rto9cM-EyiP0l05lX8hKBQrXbaofMTUD3281Z/edit

    
*/
const URL = `https://script.googleusercontent.com/macros/echo?user_content_key=9BbL4TUh_1Befsbr5dj_KqxAwWJR6u9_3EATkc9GyP8gYXvmbAA3FiO6CsjipiM1T0jxhSDWfEUMz4mq3X6Lp8c2m2ZE_ZqUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnP1kXEdaUxc84CK1q7LGwcM7MFbX28u71OD45MXpNRHpexz9muvNZc9BTHSU8t0llWeRZ_UMzsyqhxzHKaD9NaucWCw46yokYQ&lib=MlvXJ-2cgLfsxw8Rz716NcnojnVFkcFzH`


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
      console.log(e, "Error during fetching terms");
  }
}

export default fetchTerms;