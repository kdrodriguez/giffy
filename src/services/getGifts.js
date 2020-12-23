import { API_KEY, BASE_URL } from "./settings";
const resource = "gifs";

export default function getGifts({ keyword = "country", page = 0 } = {}) {
  const apiURL = `${BASE_URL}/${resource}/search?api_key=${API_KEY}&q=${keyword}&limit=5&offset=${
    page * 10
  }&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;
          return { id, title, url };
        });
        return gifs;
      }
    });
}
