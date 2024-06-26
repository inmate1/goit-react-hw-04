import axios from "axios";

const clientId = import.meta.env.VITE_APP_API_KEY;
axios.defaults.baseURL = "https://api.unsplash.com/";


const fetchImages = async (query, page) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get("/search/photos", {
      params: {
        client_id: clientId,
        query: query,
        page: page,
        per_page: 12,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchImages;
