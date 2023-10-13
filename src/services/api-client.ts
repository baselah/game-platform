import axios from "axios";

export default axios.create({
  params: {
    key: "22152688ba5c41ee85d5c3a3a8f3a8d2",
  },
  baseURL: "https://api.rawg.io/api",
});
