import axios from "axios";
export default axios.create({
  baseURL: "https://localhost:8080",
  withCredentials: false,
});

export function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}
