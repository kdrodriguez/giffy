import { API_KEY, BASE_URL } from "./settings";

export default function getTrendingTerms() {
  const apiURL = `${BASE_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      const { data = [] } = response;
      return data;
    });
}
