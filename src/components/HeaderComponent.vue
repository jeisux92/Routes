<template>
    <div><ul class="nav justify-content-end nav-pills">

  <li class="">
      <router-link active-class="active" exact class="nav-item nav-link" to="/">Home</router-link>
  </li>
  <li class="nav-item">
      <router-link active-class="active" exact class="nav-item nav-link" to="/Users">Users</router-link>
  </li>
</ul>
            <h3 class="text muted">Users Application</h3>
    </div>  
</template>
<script>
export default {
  name: "HeaderRouting"
};
</script>
<style>

</style>

∆