<template>
    <nav>
    <section id="top" class="bck-color">
        <div class="row arrng">
            <div style="display: flex; justify-self: start; justify-content: start; flex-flow: nowrap;" id="toggler">
                <button
                    class="navbar-toggler"
                    type="button"
                    @click="showSideMenu()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="35" height="35" fill="white"><path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path></svg>
                </button><p class="comp" style="padding-left: 50px; padding-top: 10px; font-size: 12px; color: red;">My<span style="color: white;">Hospitul</span></p>
            </div>
            <div class="col-6" style="display: flex; flex-wrap: nowrap; justify-content: start; justify-self: end;">
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
            <div class="col-md-4">
                <div class="row" style="margin-top: 45px;">
                    <div class="col-3">
                        <router-Link class="linkz" to="/modulesview">Solutions</router-Link>
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

    <section id="nav-system">
       <toggler class="toogle" v-if="showSideBar" :showSideBar="true"
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-delay="0"
        data-aos-once="false"/>
    </section>
  </nav>
</template>

<script>
import store from '@/store/store';
import toggler from "./toggler.vue"
import {mapState} from 'vuex';
export default {
name: "Nav_bar",
components: {
    toggler,
},
methods: {
    showSideMenu(){
      store.commit("showSideBarAction")
    }
},
computed:{
    ...mapState({
        showSideBar: (state) => state.showSideBar,
    })
  },
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
    display: grid;
    grid-template-columns: 50% 40%;
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
.navbar-toggler {
       background-color: #146533;
       position: absolute;
       left: 10px;
       top: 3px;
    }
    .navbar-toggler, .comp {
        display: none;
    }

    
@media only screen and (max-width: 600px){
    .arrng {
        display: grid;
        grid-template-columns: 0% 100%;
        justify-content: end;
    }
    .arrtxt {
        font-size: 10px;
        display: none;
    }
    #body_top {
        display: none;
    }
    .navbar-toggler {
        position: absolute;
        scale: 0.8;
    }
    .navbar-toggler, .comp {
        display: flex;
    }
}

@media only screen and (min-width: 700px){
    #nav-system {
        display: none;
    }
   
}
</style>