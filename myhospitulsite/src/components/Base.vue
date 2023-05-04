<template>
  <section>
    <center>
    <div class="pt-5 pb-2">
      <a class="mail py-3" href="mailto:company@myhospitul.com">company@myhospitul.com</a>
      <p class="py-2">No. 8, Adele Close, Rumuodara, Port Harcourt, Nigeria</p>
      <p><a class="tel" href="tel:07037520334">07037520334</a>,<span><a class="tel" href="tel:09031844175">09031844175</a></span></p>
    </div>

    <div class="pb-5">
        <a href="http://facebook.com"><img src="../assets/facebook.png" alt="facebook" class="mx-2"/></a>
        <a href="http://twitter.com"><img src="../assets/tweet.png" alt="facebook" class="mx-2"/></a>
        <a href="http://linkedin.com"><img src="../assets/linkin.png" alt="facebook" class="mx-2"/></a>
    </div>
  </center>
  </section>
</template>

<script>
export default {
name:"BaSe",
}
</script>

<style scoped>
section {
    background-color: rgb(230,240,230);
}
.tel{
  font-size: 15px;
  text-decoration: none;
  padding: 6px;
  color: rgb(44, 42, 42);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.mail {
  font-size: 15px;
  padding: 6px;
  color: rgb(44, 42, 42);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>