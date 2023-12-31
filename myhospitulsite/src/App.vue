<template>
  <router-view/>
  <LoaDer v-if="showLoading"/>
</template>

<script>
import LoaDer from "../src/components/Loader.vue"
import AOS from 'aos'
import {mapState} from 'vuex';
import store from "./store/store";
import {LOADING_SPINNER_SHOW_MUTATION,} from "./store/storeconstants";
export default {
name: "App",
computed:{
    ...mapState({
        showLoading:(state)=>state.showLoading,
    })
  },
components: {
  LoaDer,
},
async mounted() {
    AOS.init({ once: true });
    store.commit(LOADING_SPINNER_SHOW_MUTATION, true);
      await new Promise(r=>setTimeout(r,500));
        store.commit(LOADING_SPINNER_SHOW_MUTATION, false);
  },
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
.primarycolor {
  color: rgb(3, 101, 2);
}
.secondarycolor {
  color: rgb(77, 75, 75);
}
p{
  font-family: Segoe UI;
}
.bck-color{
  background-color: #146533;
}
.flexthem {
    margin: 40px;
    display: flex;
    justify-content: center;
    width: 450px;
    border-radius: 30px;
    height: 40px;
}
.indic {
    overflow: hidden;
    border-radius: 30px;
    width: 100px;
    height: 40px;
    transform: translateX(80px)
}
.indicnext {
    width: 380px;
    text-align: end;
    overflow: hidden;
    border-radius: 30px;
    background-color: whitesmoke;
}
</style>