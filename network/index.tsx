export const ENDPOINT = "https://fakestoreapi.com";

export const  get = ({ route }:any) => {
    return fetch(ENDPOINT + route, {
      method: "GET", // or 'PUT'
      headers: {
       "Content-Type": 'application/json'
      },
    })
      .then((response) => response.json());
};


