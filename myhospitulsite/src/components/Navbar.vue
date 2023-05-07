<template>
  <nav class="navbar navbar-light bg-light">
  <div class="row">
    <div class="col-2">
      <button
        class="navbar-toggler mx-3 my-2 btn btn-primary"
        type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
        >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  <div class="container-fluid col-8">
    <div class="navbar-brand navvlink" style="cursor:pointer" @click="showHome">
      <div style="display:flex;align-self: center;">
        <img src="../assets/myhospitulogo.png" alt="myhospitul_logo" height="50" 
        style="margin-right: 0px;">
      <p class="title" style="font-weight: bold;margin-top:15px;margin-left: 0px;"><span style="color:red">MY</span>HOSPITUL</p>
      </div>
    </div>
  </div>
</div>
</nav>
</template>

<script>
export default {
name: "NavBar",
methods:{
  showHome(){
    this.$router.push("/")
  }
}
}
</script>

<style scoped>
.navvlink {
  display: flex;
}
.title {
  font-size: 20px;
  letter-spacing: 2px; 
  padding-left: 5%;
}
.navbar-toggler{
  border: none;
}
.navbar-toggler:hover{
  background-color: rgb(248,249,250);
  border: none;
}
.navbar-toggler:focus{
  background-color: rgb(248,249,250);
  border: none;
}
</style>