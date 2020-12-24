import { API_KEY, BASE_URL } from "./settings";
const resource = "gifs";

const fromAPIResponseToGif = (apiResponse) => {
  const { data } = apiResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { id, title, url };
};

const getSingleGif = ({ id }) => {
  const apiURL = `${BASE_URL}/${resource}/${id}?api_key=${API_KEY}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromAPIResponseToGif);
};

export default getSingleGif;
