import Vue from "vue";

export default {
  getUsers() {
    return Vue.http.get("https://jsonplaceholder.typicode.com/users");
  },
  getUser(id){
      return Vue.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
};
