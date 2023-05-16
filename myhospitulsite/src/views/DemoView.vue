<template>
    <Navbar/>
  <section class="container mb-5">
<center>
  <div class="my-5">
  <p class="head">DEMO</p>
  <div class="hrrr"></div>
    </div>
  <iframe width="80%" height="480px" src="https://www.youtube.com/watch?v=TAJkOsUQV2k"></iframe>
</center>
  </section>

  <Base/>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"><img src="../assets/myhospitulogo.png" alt="myhospitul_logo" width="40" height="40" class="d-inline-block align-text-top">
      <p class="fw-900 my-2 title">MY HOSPITUL</p></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="body">
      <ul data-aos="zoom-out"
        data-aos-duration="2000"
        data-aos-delay="0"
        data-aos-once="true">
        <li data-bs-dismiss="offcanvas" aria-label="Close"><router-link class="linkz" to="/">Home</router-link></li>
        <li data-bs-dismiss="offcanvas" aria-label="Close"><router-link class="linkz" to="/demo">Demo</router-link></li>
        <li data-bs-dismiss="offcanvas" aria-label="Close"><router-link class="linkz" to="/modulesview">What we do</router-link></li>
        <li data-bs-dismiss="offcanvas" aria-label="Close"><router-link class="linkz" to="/FAQ">FAQ</router-link></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
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
  font-size: 49px;
  font-weight: 500;
  line-height: 60.48px;
  color: rgb(3, 101, 2);
}
.hrrr {
  height: 6px;
  border-radius: 20px;
  width: 10%;
  background-color: rgb(3, 101, 2);
}
</style>