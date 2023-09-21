/*
    fetches from Google Apps Script deployed Web APP 
    1. test small google sheet integration. 
    
*/
const URL = `https://script.googleusercontent.com/macros/echo?user_content_key=DTFTZoNElEa9uDlNV14kDh6lJ2mXA2KW-iO_gn8P4N_bL4mJA_jFayqoFu5MXzA2wjoeNQcKCerLAzhUVCuDuMFW--qOnZzYm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPgl21wt5AOGBdKefhheAoB16-vXNZEPT8_Dw-d9F_rTW7HCN-L09lT25aHa8p_lPsa9HMngmb0svn_QA7hlJc2mj4b9_eKOfg&lib=MlvXJ-2cgLfsxw8Rz716NcnojnVFkcFzH`


const fetchTerms = async () => {
  try {
      let response = await fetch(URL);
      
      if (!response.ok) {
        let json = await response.json();
        return json;
      }
      
  } catch(e) {
      console.log(e, "Error during fetch");
  }
}

export default fetchTerms;