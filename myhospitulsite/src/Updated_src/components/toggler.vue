<template>
  <div class="toggler-box">
   <div style="padding-top: 10px;">
    <a href="#">Health News</a>
    <router-link to="/demo">Request a demo</router-link>
    <router-link to="/modulesview">Solutions</router-link>
    <router-link to="/FAQ">FAQs</router-link>
    <router-link to="/ContactUs">Contact Us</router-link>
    <a href="#">Play a demo</a>
   </div>
  </div>

</template>

<script>
export default {
name: "Togg_ler"
}
</script>

<style scoped>
.toggler-box {
    width: 100%;
    height: 50px;
    background-color: #146533;
}
a{
    font-size: 10px;
    color: white;
    padding: 5px;
    text-decoration: none;
}
@media only screen and (max-width: 500px){
  a {
    font-size: 9px;
  }
}
</style>