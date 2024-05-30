import axios from "axios";

// const API_KEY = "563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74";
// axios.defaults.baseURL = "https://api.pexels.com/v1/";
// axios.defaults.headers.common["Authorization"] = API_KEY;
// axios.defaults.params = {
//   orientation: "landscape",
//   per_page: 15,
// };

axios.defaults.baseURL = "https://api.unsplash.com/";
const clientId = "7hxdiYTJvHBC-CTyrdPLd2nDHKqhAo1BrW1f-KawIac";


const fetchImages = async (query, page) => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        client_id: clientId,
        query: query,
        page: page,
        per_page: 12,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    // throw error;
  }
};

export default fetchImages;
