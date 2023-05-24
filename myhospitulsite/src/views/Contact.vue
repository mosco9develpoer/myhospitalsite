<template>
  <Navbar />

<div class="container box">
    <div class="row">
        <div class="col-md-6">
            <center><p class="primarycolor h3">CONTACT US</p></center>
            <form>
                <div class="py-2">
                    <label>Name</label><br>
                    <input class="form-control text-black" type="text" placeholder="name"/>
                </div>
                <div class="py-2">
                    <label>Email</label><br>
                    <input class="form-control text-black" type="email" placeholder="email address"/>
                </div>
                <div class="py-2">
                    <label>Phone Number</label><br>
                    <input class="form-control text-black" type="tel" placeholder="Phone Number"/>
                </div>
                <div class="py-2">
                    <label>Message</label><br>
                    <textarea class="form-control text-black" rows="3" placeholder="message"></textarea>
                </div>
                <center>
                    <button class="sub-button my-2">SUBMIT</button>
                </center>
            </form>
        </div>
        <div class="col-md-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642.7610678732954!2d7.032916567813991!3d4.86132862365381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cf854caae7db%3A0xd6e21c47c36ef831!2sMyHospitul!5e0!3m2!1sen!2sng!4v1684777668826!5m2!1sen!2sng"
        width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen data-aos="fade-left" data-aos-duration="3000"></iframe>
        </div>
    </div>
</div>
<BaSe class="mt-5"/>











  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"><img src="../assets/myhospitulogo.png" alt="myhospitul_logo" width="40" height="40" class="d-inline-block align-text-top">
      <p class="fw-900 my-2 title mx-2"><span style="color:red">MY</span> HOSPITUL</p></h5>
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
        <li data-bs-dismiss="offcanvas" aria-label="Close"><router-link class="linkz" to="/ContactUs">Contact Us</router-link></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import BaSe from "../components/Base.vue"
export default {
name: "ContactUs",
components: {
    Navbar,
    BaSe
}
}
</script>

<style scoped>
.box{
    /* border: 1px solid green; */
    transform: translateY(10%);
}
.sub-button {
    padding: 10px;
    font-size: 15px;
    letter-spacing: 2px;
    border-radius: 10px;
    background-color: rgb(3, 101, 2);
    color: white;
    border: none;
}
</style>