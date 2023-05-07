<template>
  <Navbar/>
  <div class="my-4">
  <center><p id="into">Digital Healthcare Solution<br> Provider</p></center>
  <center><div class="hrr"></div></center>
</div>

<div class="second">
<center><div class="row py-2">
  <div class="col-md-4">
    <img src="../assets/left.png" id="imageset"/>
    <p class="par">
      Book physical or virtual medical appointment with any hospital or doctor and get instant feedback in less than one minute
    </p>
  </div>
  <div class="col-md-4">
    <img src="../assets/center.png" id="imageset"/>
    <p class="par">
      Manage, share  and secure all your medical appointment records and patient physical, social and medical history
    </p>
  </div>
  <div class="col-md-4">
    <img src="../assets/right.png" id="imageset"/>
    <p class="par">
      Fast, easy and automated appointment billing and debt tracking system for both patients and hospitals.
    </p>
  </div>
</div></center>
</div>

<section id="third">
<center>
  <p id="head">OUR DRIVE</p>
  <p class="tex">Customer Centric || Innovation || Excellence</p>
  <p class="contx">MyHospitul Technologies is a Health Technology company that has developed Hospital Management Software that enables hospitals easily access, input, edit, and share medical records from the comfort of a computer. MyHospitul software gives the hospital better control over their hospital administrative processes and saves them time and energy.</p>
  <p class="contx">
    We are on a mission to improve the way hospital processes are carried out through the use of our Healthcare Management Software in Nigerian Hospitals and Africa at large
  </p>
  <div id="separ"></div>

  <div class="row thrrr">
    <div class="col-md-4">
      <img src="../assets/thirdfirst.png"/>
      <p class="contxx">Medical Appointment Scheduling</p>
    </div>
    <div class="col-md-4">
      <img src="../assets/thirdsec.png"/>
      <p class="contxx">Complete Bill Management & Debt Tracking</p>
    </div>
    <div class="col-md-4">
      <img src="../assets/thirdthird.png"/>
      <p class="contxx">Integrated Medical Records Management</p>
    </div>
  </div>
  <div class="row thrrr">
    <div class="col-md-4">
      <img src="../assets/thirdfirst.png"/>
      <p class="contxx">Prescription Management & Drug Monitoring</p>
    </div>
    <div class="col-md-4">
      <img src="../assets/thirdsec.png"/>
      <p class="contxx">Complete Human Resource Management Module (Shift Tracking, Payroll etc.)</p>
    </div>
    <div class="col-md-4">
      <img src="../assets/thirdthird.png"/>
      <p class="contxx">Laboratory and Medical Investigations Management</p>
    </div>
  </div>
</center>
</section>

<section id="fourth">
  <center>
  <p id="head" class="py-4">WE ARE VALUE DRIVEN</p></center>
  <div style="margin: auto auto; width: 90%;">
    <div class="row">
      <div class="col-md-6">
        <div class="row py-3">
          <div class="col-md-3"><img src="../assets/numone.png"/></div>
          <div class="col-md-9">
            <p class="topicc">18 Hospital Clients</p>
            <p class="contxx">Since inception in September 2021, we have partnered with 18 hospitals in Port Harcourt alone</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row py-3">
          <div class="col-md-3"><img src="../assets/numtwo.png"/></div>
        <div class="col-md-9">
          <p class="topicc">100% Customer retention</p>
          <p class="contxx">So far since 2021, we have had a 100% customer retention</p>
        </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="row py-3">
          <div class="col-md-3">
         <img src="../assets/numthree.png"/>
        </div>
        <div class="col-md-9">
          <p class="topicc">18 Hospital Clients</p>
          <p class="contxx">Since inception in September 2021, we have partnered with 18 hospitals in Port Harcourt alone</p>
        </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row py-3">
          <div class="col-md-3">
          <img src="../assets/numfour.png"/>
        </div>
        <div class="col-md-9">
          <p class="topicc">100% Customer retention</p>
          <p class="contxx">So far since 2021, we have had a 100% customer retention</p>
        </div>
        </div>
      </div>
    </div>
  </div>
<BaSe />
</section>

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
import BaSe from "../components/Base.vue"
export default {
 name: "HomeView",
 components: {
  Navbar,
  BaSe
 }
}
</script>

<style>
#into {
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  color:rgb(3, 101, 2);
}
.hrr {
  height: 6px;
  border-radius: 20px;
  width: 10%;
  background-color: rgb(3, 101, 2);
}
.second{
  background-color: rgb(230,240,230);
}
.par{
  padding: 10px;
  color: rgb(3, 101, 2);
  font-size: 18px;
}
#head{
  font-size: 20px;
  font-weight: 600;
  color: rgb(3, 101, 2);
  padding-top: 20px;
}
#third{
  margin: 20px 0px 10px 0px;
}
.tex {
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 2px;
}
.contx{
  width: 65%;
  font-size: 17px;
  letter-spacing: 1px;
  line-height: 38px;
}
#separ{
  margin-top: 60px;
  width: 80%;
  height: 1px;
  border-radius: 20px;
  background-color: rgb(211,211,211);
}
.thrrr{
  width: 85%;
  padding-top: 15px;
}
.contxx {
  padding: 5px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 2px;
}
#fourth{
  background-color: rgb(230,240,230);
}
.topicc{
  padding: 5px;
  color: rgb(3, 101, 2);
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 600;
}
.offcanvas-title{
  display: flex;
}
.title {
  color: rgb(3, 101, 2);
}
.linkz{
  text-decoration: none;
  color: rgb(130, 132, 133);
  font-size: 18px;
}
li{
  padding: 10px 0px 20px 0px;
}
ul {
  list-style-type: none;
}
@media only screen and (max-width: 600px) {
 #imageset{
  height: 60vh;
  width: 60%;
 }
}
</style>