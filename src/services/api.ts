import axios from "axios";
import { BASE_URL } from "~/utils/config";
import { resAPIType } from "~/utils/interface";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchAPI = () =>
  instance("/v1/search?query=")
    .then((res) => res.data as Promise<resAPIType>)
    .then((res) => res.hits.filter((res) => res.story_id));
