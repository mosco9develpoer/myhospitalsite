<template>
    <nav>
    <section id="top" class="bck-color">
        <div class="row arrng">
            <div class="col-3" style="display: flex;">
                <a class="arrtxt" href="#">Health News</a>
                <router-link class="arrtxt" to="/demo">Request a demo</router-link>
            </div>
        </div>
    </section>
    <section id="body_top">
        <div class="row">
            <div class="col-3" style="display: flex;"> <router-link to="/">
                <img src="../../assets/myhospitulogo.png" id="logo"/></router-link>
                <p style="padding-top: 42px; font-size: 18px; margin-left: -55px; color: red;">My<span style="color: #146533;">Hospitul</span></p>
            </div>
            <div class="col-4">
                <div class="row" style="margin-top: 45px;">
                    <div class="col-3">
                        <a class="linkz" href="#solutions">Solutions</a>
                    </div>
                    <div class="col-3">
                        <router-link class="linkz" to="/FAQ">FAQS</router-link>
                    </div>
                    <div class="col-3">
                        <router-link class="linkz" to="/ContactUs">Contact Us</router-link>
                    </div>
                    <div class="col-3">
                        <router-link class="linkz" to="/demo">Play Demo</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </nav>
</template>

<script>
export default {
name: "Nav_bar",
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
    font-size: 12px;
    color: rgb(239, 235, 235);
    padding: 7px;
    text-decoration: none;
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
    text-decoration: none;
}
</style>