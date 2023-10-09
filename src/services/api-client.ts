import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cc28c7025406485ca30e411f152c0a98",
  },
});
