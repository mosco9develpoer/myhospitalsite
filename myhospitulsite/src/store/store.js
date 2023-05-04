import { createStore } from 'vuex'
import { LOADING_SPINNER_SHOW_MUTATION } from './storeconstants';
const store=createStore({
  state(){
    return {
        showLoading:false,
        showSideBar:false
    };
},
  mutations:{ 
    [LOADING_SPINNER_SHOW_MUTATION](state,payload){
        state.showLoading=payload;
    },
    showSideBarAction(state){
      state.showSideBar=!state.showSideBar;
  }
}
})

export default store;