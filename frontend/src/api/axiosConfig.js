import axios from "axios";

export default axios.create({
  baseURL: "https://48f2-197-2-145-183.ngrok-free.app/api/v1/items",
  headers: { "ngrok-skip-browser-warning": "true"
    },
});
