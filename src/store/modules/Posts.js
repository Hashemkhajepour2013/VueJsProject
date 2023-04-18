import axios from "axios";

const state = {
  posts: [],
};

const getters = { allPost: (state) => state.posts };

const mutations = {
  SET_POST: (state, payload) => {
    state.posts = payload;
  },
  ADD_POST: (state, payload) => {
    const newPost = {
      title: payload.title,
      body: payload.body,
      userId: payload.userId,
    };
    state.posts.unshift(newPost);
  },
  DELETE_POST: (state, payload) => {
    const index = state.posts.findIndex((post) => post.id === payload);
    state.posts.splice(index, 1);
  },
};

const actions = {
  async GetAllPost({ commit }) {
    const posts = await axios.get("https://localhost:7193/api/v1/Post/get-all");
    commit("SET_POST", posts.data);
  },

  addUser: (context, payload) => {
    context.commit("ADD_POST", payload);
  },

  deleteUser: (context, payload) => {
    context.commit("DELETE_POST", payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
