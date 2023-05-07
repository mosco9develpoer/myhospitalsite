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
    AOS.init()
    this.$router.push("/");
    store.commit(LOADING_SPINNER_SHOW_MUTATION, true);
      await new Promise(r=>setTimeout(r,500));
        store.commit(LOADING_SPINNER_SHOW_MUTATION, false);
  },
}
</script>

<style>
.primarycolor {
  color: rgb(3, 101, 2);
}
.secondarycolor {
  color: rgb(77, 75, 75);
}
p{
  font-family: Segoe UI;
}
</style>