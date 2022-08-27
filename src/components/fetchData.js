// require('dotenv').config();

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dab41f6497msh726203711105271p12b49djsn370d6cbcea22',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchedData = async (url, headers) => {
  const data = await fetch(url, headers);
  const result = await data.json();
  return result;
};
