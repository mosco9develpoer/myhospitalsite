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
    <a class="navbar-brand navvlink" href="#">
      <img src="../assets/myhospitulogo.png" alt="myhospitul_logo" width="40" height="40" class="d-inline-block align-text-top">
      <p class="fw-900 my-2 title">MY HOSPITUL</p>
    </a>
  </div>
</div>
</nav>
</template>

<script>
export default {
name: "NavBar",
}
</script>

<style scoped>
.navvlink {
  display: flex;
}
.title {
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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