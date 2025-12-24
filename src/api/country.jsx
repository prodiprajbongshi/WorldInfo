import axios from "axios";

const api = axios.create({
     baseURL: "https://restcountries.com/v3.1",
})

// get all country data 

export const getAllCountryData =  () => {
    return api.get("/all?fields=name,population,region,capital,flags")
}


// get each country details 
export const getCountryIndData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};