import axios from "axios";

// const { default: axios } = require("axios")



// const axiosClient=axios.create({
//     baseURL:"https://localhost:8080/api/user/register"
// })

// const getCategory=()=>axiosClient.get('message?populate=*');
// export default{
//     getCategory
// }



const registerUser = (name, lastName, email, password) =>
  AxiosClient.post("https://localhost:8080/register", {
    name: name,
    lastName: lastName,
    email: email,
    password: password,
  });

export default {
  registerUser,
};
