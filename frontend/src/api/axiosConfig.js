import axios from "axios";

export default axios.create({
  baseURL: "https://89a8-197-2-145-183.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true"
    },
});
