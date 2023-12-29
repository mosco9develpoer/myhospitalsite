<template>
  <nav>
    <section id="top" class="bck-color">
        <div class="row arrng">
            <div class="col-1">
                <p class="arrtxt">Health News</p>
            </div>
            <div class="col-2">
                <p class="arrtxt">Request a demo</p>
            </div>
        </div>
    </section>
    <section id="body_top">
        <div class="row">
            <div class="col-3" style="display: flex;">
                <img src="../../assets/myhospitulogo.png" id="logo"/>
                <p style="padding-top: 42px; font-size: 18px; margin-left: -55px; color: red;">My<span style="color: #146533;">Hospitul</span></p>
            </div>
            <div class="col-4">
                <div class="row" style="margin-top: 45px;">
                    <div class="col-3">
                        <p class="linkz">Solutions</p>
                    </div>
                    <div class="col-3">
                        <p class="linkz">FAQS</p>
                    </div>
                    <div class="col-3">
                        <p class="linkz">Contact Us</p>
                    </div>
                    <div class="col-3">
                        <p class="linkz">Play Demo</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </nav>
  <Homebody />
  <Solutions />
  <Base />
</template>

<script>
import Homebody from "../components/home-body.vue"
import Solutions from "../components/solutions.vue"
import Base from "../components/Base.vue"
export default {
name: "Home_view",
components: {
    Homebody,
    Solutions,
    Base
}
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
#top {
    width: 100%;
    height: 40px;
}
.arrng {
    display: flex;
    justify-content: end;
}
.arrtxt {
    font-size: 13px;
    color: rgb(239, 235, 235);
    padding: 7px;
}
#body_top {
    height: 90px;
    width: 100%;
    border: 1px solid transparent; 
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2); 
}
#logo {
    scale: 0.25;
    margin-top: -62px;
}
.linkz {
    font-size: 13px;
    color: black;
}
</style>