<template>
    <Navbar/>
  <section class="container mb-5">
<center>
  <div class="my-5">
  <p class="head">DEMO</p>
  <div class="hrrr"></div>
    </div>
  <iframe width="80%" height="480px" src="https://www.youtube.com/embed/TAJkOsUQV2k" frameborder="0" allowfullscreen></iframe>
</center>
  </section>

  <Base/>
</template>

<script>
import Navbar from "../Updated_src/components/Nav.vue"
import Base from "../components/Base.vue"
export default {
name: "DemoView",
components: {
    Navbar,
    Base
}
}
</script>

<style scoped>
.head {
  font-size: 20px;
  font-weight: 600;
  color: rgb(3, 101, 2);
  padding-top: 20px;
}
.hrrr {
  height: 3px;
  border-radius: 10px;
  width: 5%;
  background-color: rgb(3, 101, 2);
}
</style>