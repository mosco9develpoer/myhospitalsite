<template>
  <Navbar/>

  <section id="faq">
    <p class="primarycolor tex my-3">Frequently Asked Questions</p>
    <p class="secondarycolor">Jump to a question:</p>

    <div class="my-3 gridnow">
      <a id="refer" href="#" class="secondarycolor py-2">Frequently Asked Questions</a>
      <a id="refer" href="#first" class="secondarycolor py-2">What operating system can I run MyHospitul application?</a>
      <a id="refer" href="#second" class="secondarycolor py-2">Does MyHospitul have a trial version?</a>
      <a id="refer" href="#fourt" class="secondarycolor py-2">After using the trial version, do I need to re-install MyHospitul if I purchase a license?</a>
      <a id="refer" href="#fifth" class="secondarycolor py-2">Do I have to be online to use MyHospitul?</a>
      <a id="refer" href="#sixth" class="secondarycolor py-2">How long does my subscription last?</a>
      <a id="refer" href="#seventh" class="secondarycolor py-2">How do I reactivate my license?</a>
      <a id="refer" href="#eigth" class="secondarycolor py-2">Will my data be stored in the cloud?</a>
      <a id="refer" href="#ninth" class="secondarycolor py-2">How do I get support for MyHospitul application usage?</a>
      <a id="refer" href="#tenth" class="secondarycolor py-2">Can I set user permission for information access on MyHospitul?</a>
      <a id="refer" href="#eleventh" class="secondarycolor py-2">Can I track drugs using MyHospitul?</a>
      <a id="refer" href="#twelveth" class="secondarycolor py-2">How do I buy credit unit for NotifyPlug?</a>
    </div>

    <section id="first">
      <p class="toptex mt-5 mb-2">What operating system can I run MyHospitul application?</p>
      <p class="bottex mb-2">You can run MyHospitul application on Windows and Apple Macintosh Operating systems. For Windows, it can be run on windows 7 to windows 10. We advise that you use a windows 10 or 11 OS for the smoothest experience.</p>
    </section>
    <section id="second">
      <p class="toptex mt-5 mb-2">Does MyHospitul have a trial version?</p>
      <p class="bottex mb-2">Yes, you can use MyHospitul freely for your first month, after which you would have to subscribe.</p>
    </section>
    <section id="third">
      <p class="toptex mt-5 mb-2">Does the trial version require internet access?</p>
      <p class="bottex mb-2">The trial version is the same as the real version; therefore, it depends on if you want to use MyHospitul offline or online. If you choose to use it offline, then it doesn't require internet access.</p>
    </section>
    <section id="fourt">
      <p class="toptex mt-5 mb-2">After using the trial version, do I need to re-install MyHospitul if I purchase a license?</p>
      <p class="bottex mb-2">You don't need to re-install MyHospitul after purchasing a license. When you subscribe, you would get your license key.</p>
    </section>
    <section id="fifth">
      <p class="toptex mt-5 mb-2">Do I have to be online to use MyHospitul?</p>
      <p class="bottex mb-2">You don't have to be online to use MyHospitul. MyHospitul can be used both offline and online, so if you choose to use it offline, then you don't have to be online.</p>
    </section>
    <section id="sixth">
      <p class="toptex mt-5 mb-2">How long does my subscription last?</p>
      <p class="bottex mb-2">You subscription lasts for the timeframe you subscribed for (i.e., 1year, 6month, 1month etc.).</p>
    </section>
    <section id="seventh">
      <p class="toptex mt-5 mb-2">How do I reactivate my license?</p>
      <p class="bottex mb-2">After subscribing, MyHospitul will send you a code to reactivate your license. Then you would go to your profile, click on update license, and input the code.</p>
    </section>
    <section id="eigth">
      <p class="toptex mt-5 mb-2">Will my data be stored in the cloud?</p>
      <p class="bottex mb-2">This is dependent on if you use MyHospitul online and if you back up your files to MyHospitul server.</p>
    </section>
    <section id="ninth">
      <p class="toptex mt-5 mb-2">How do I get support for MyHospitul application usage?</p>
      <p class="bottex mb-2">MyHospitul automatically sends an agent to your hospital as a software support personnel, kindly interact and contact the agent for support. If you can't get to the agent, contact us at <a class="primarycolor" href="#">myhospitul@gmail.com.</a></p>
    </section>
    <section id="tenth">
      <p class="toptex mt-5 mb-2">Can I set user permission for information access on MyHospitul?</p>
      <p class="bottex mb-2">Yes, you can. Using the administrative system, go to the profile page on MyHospitul, go to the “edit profile” option and then scroll down till you see “manage users”.</p>
    </section>
    <section id="eleventh">
      <p class="toptex mt-5 mb-2">Can I track drugs using MyHospitul?</p>
      <p class="bottex mb-2">Yes, you can. If you impute all your drug details and information into MyHospitul application, you can track the sales, the expiry date, the stock of the drugs etc.</p>
    </section>
    <section id="twelveth">
      <p class="toptex mt-5 mb-2">How do I buy credit unit for NotifyPlug?</p>
      <p class="bottex mb-2">Simply contact 07037520334 and pay the requisite fee to buy credit units for NotifyPlug.</p>
    </section>
  </section>

 <Base class="mt-5"/>




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
import Base from "../components/Base.vue"
import Navbar from "../components/Navbar.vue"
export default {
name: "FaQ",
components: {
    Navbar,
    Base
}
}
</script>

<style scoped>
#faq{
    width: 90%;
    margin: auto auto;
}
.tex {
    font-size: 20px;
}
.gridnow {
  display:  grid;
}
.toptex {
  font-size: 18px;
  font-weight: 700;
  line-height: 28.2533px;
  color: rgb(56, 118, 29);
}
.bottex{
  font-size: 16px;
  font-weight: 400;
  line-height: 22.08px;
  color: rgb(0, 0, 0);
}
</style>