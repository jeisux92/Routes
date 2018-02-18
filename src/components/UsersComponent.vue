<template>
  <div>
      <p>User List</p>
      <ul class="list-group">
          <li class="list-group-item" v-for="(user, index) in Users" v-bind:key="index">
              <router-link :to="{name:'userInfo',params:{id:user.id}}" exact>{{user.email}}</router-link>  
          </li>
      </ul>

  </div>
</template>
<script>
import UserService from "../services/UserService";

export default {
  data() {
    return {
      Users: []
    };
  },
  created() {
    UserService.getUsers().then(x => {
      this.Users = x.data;
    });
  }
};
</script>