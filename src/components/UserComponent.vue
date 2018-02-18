<template>
    <div>
        <h3>User Information</h3>
        <div>
            <p><strong>Name: </strong>{{User.name}}</p>
            <p><strong>E-Mail: </strong>{{User.email}}</p>
        </div>
        <button class="btn btn-primary" @click="back()">Back</button>
    </div>   
</template>
<script>
import UserService from "../services/UserService";

export default {
  data() {
    return {
      User: {}
    };
  },
  methods: {
    loadUser() {
      var id = this.$route.params.id;
      UserService.getUser(id).then(x => {
        this.User = x.data;
      });
    },
    back() {
      this.$router.push({ name: "Users" });
    }
  },
  created() {
    this.loadUser();
  },
  watch: {
    $route() {
      this.loadUser();
    }
  }
};
</script>
