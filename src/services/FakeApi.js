import axios from "axios";
import { toast } from "react-toastify";

const userMock = {
  email: "",
  password: "",
  address: "",
  birth_date: "",
  name: "",
  tel: "",
  user_number: "",
  type: "",
  id: null,
};

const baseUrl = "https://doe-vida-api2.herokuapp.com";

//save token in localStorage
const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const loginUser = (data, type) =>
  axios({
    url: `${baseUrl}/login`,
    method: "POST",
    data: data,
  })
    .then((resp) => {
      if (
        (type === "user" && resp.data.user.type === "user") ||
        (type === "hospital" && resp.data.user.type === "hospital")
      ) {
        toast.success("Usuário Logado com sucesso");
        saveToken(resp.data.accessToken);
        return resp;
      } else {
        if (type === "user")
          toast.error("Uma conta de hospital não pode ser usada aqui");
        else toast.error("Uma conta de doador não pode ser usada aqui");
      }
    })
    .catch((error) => {
      toast.error(error.response.data);
      return error;
    });

export const registerUser = (data) =>
  axios({
    url: `${baseUrl}/register`,
    method: "POST",
    data: data,
  })
    .then((success) => {
      toast.success("Conta criada com sucesso!");
      return success;
    })
    .catch((err) => {
      if (err.response.data === "Email already exists") {
        toast.error("Email já cadastrado, tente outro!");
      } else {
        toast.error("Ocorreu algum erro. Tente novamente mais tarde");
      }
      return err;
    });

export const getHospitals = () => {
  return axios({
    url: `${baseUrl}/users?type=hospital`,
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((resp) => {
    return resp;
  });
};

export const getUser = async (id) => {
  const resp = await axios({
    url: `${baseUrl}/users/${id}`,
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  return resp.data;
};

export const createSchedule = (data) => {
  console.log(localStorage.getItem("token"));
  return axios({
    method: "POST",
    url: "https://doe-vida-api2.herokuapp.com/scheduling",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: data,
  }).then((resp) => {
    return resp;
  });
};

export const getShedule = () =>
  axios({
    method: "GET",
    url: `https://doe-vida-api2.herokuapp.com/scheduling`,
  }).then((resp) => resp);

export const editUser = (data, id) => {
  if (data.password === "") {
    delete data.password;
    delete data.confirmarSenha;
  }
  delete data.confirmarSenha;
  console.log(data);
  axios({
    url: `${baseUrl}/users/${id}`,
    method: "PATCH",
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((resp) => toast.success("Usuário editado com sucesso"));
};

export const delet = (id) => {
  axios({
    url: `https://doe-vida-api2.herokuapp.com/scheduling/${id}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((resp) => console.log(resp));
};
