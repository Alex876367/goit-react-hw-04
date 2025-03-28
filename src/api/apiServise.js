import axios from "axios";

const API = {
  appID: 723211,
  accessKey: "rCXNwvuwkIdcVDItJWG9w3qrPej7sjLuaAZ7VYzT-WY",
  secretKey: "JaWiA5wieonet0w7JSlrDEdPMMR5xSH-r9Rwsdpjb2U"
};

// https://api.unsplash.com/search/photos?page=1&query=office

export default async function fetchFotos(query, page) {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: API.accessKey,
      orientation: "landscape",
      per_page: 12,
      query,
      page
    }
  });
  return data;
}
