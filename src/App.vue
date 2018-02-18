<template>
  <div id="app" class="container">
    <HeaderRouting></HeaderRouting>
   <div class="jumbotron">
     <router-view ></router-view>
   </div>
  </div>
</template>

<script>
import HeaderRouting from "./components/HeaderComponent";

export default {
  name: "app",
  data() {
    return{
      select:'HeaderRouting2'
    }
  },
  components: {
    HeaderRouting
  }
};
</script>

<style>

</style>
