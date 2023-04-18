import axios from "axios";

const state = {
  users: [],
};

const getters = { allUser: (state) => state.users };

const mutations = {
  SET_USER: (state, payload) => {
    state.users = payload;
  },
  ADD_USER: (state, payload) => {
    const newUser = {
      Name: payload.name,
      UserName: payload.userName,
      Email: payload.email,
      Phone: payload.phone,
      Website: payload.website,
      Company: payload.company,
    };
    state.users.unshift(newUser);
  },
  DELETE_USER: (state, payload) => {
    const index = state.users.findIndex((user) => user.id === payload);
    state.users.splice(index, 1);
  }
};

const actions = {
  async GetAllUser({ commit }) {
    const users = await axios.get("https://localhost:7193/api/v1/User/get-all");
    commit("SET_USER", users.data);
  },

  async AddUser({ commit }, payload) {
    const newUser = JSON.stringify({
      name: payload.Name,
      userName: payload.UserName,
      email: payload.Email,
      phone: payload.Phone,
      website: payload.Website,
      company: payload.Company,
    });

    const user = await axios.post(
      "https://localhost:7193/api/v1/User/add-user",
      {
        newUser,
        Headers: {
          "Content-Type": "application/json",
          accept: "text/plain",
        },
      }
    );
    commit("ADD_USER", user.data);
  },

  async deleteUser({ commit }, payload) {
    await axios.delete("https://localhost:7193/api/v1/User/delete/" + payload);
    commit("DELETE_USER", payload);
  },

  async changeStatusUser({ commit }, payload) {
    await axios.put(
      "https://localhost:7193/api/v1/User/change-state/" + payload
    );
    const users = await axios.get("https://localhost:7193/api/v1/User/get-all");
    commit("SET_USER", users.data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
