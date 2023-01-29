import axios from 'axios';

export default axios.create({
  //baseURL:'https://dafd-2604-3d08-2c7b-900-b90e-4f33-b07-61e2.ngrok.io',
  baseURL: 'http://localhost:8080',
  headers: {"ngrok-skip-browser-warning": "true"}
});
