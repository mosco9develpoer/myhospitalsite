<template>
  <div style="font-size: 18px">
    <div
      style="
        background-color: rgb(3, 101, 2);
        padding: 20px;
        margin-bottom: 20px;
      "
    >
      <center>
        <p class="h3" style="color: white">Delete Account & Data From MyHospitul</p>
      </center>
    </div>
    <div style="display: flex;margin: 20px;justify-content: center;align-items: center;column-gap: 20px;">
        <div>
            <img style="border: whitesmoke 3px solid; 
        box-shadow: 3px 3px 3px whitesmoke;width: 400px;height: 400px;border-radius: 50%;" src="../assets/delete-icon.jpeg"/>
        </div>
        <div>
            <h3 style="line-height: 2.0;">Please Note That Deleting your account is irreversible and you will lose access to all your information and medical reports!!!</h3>
            <p><b>Email Address: </b><input v-model="email" style="width:300px" placeholder="Please enter email address"></p>
            <p><input type="checkbox" v-model="agree"> I agree to delete all my account information and data from MyHospitul</p>
            <button style="background-color: red;color:white;border-radius: 10px;width:200px;border: none;" @click="deleteAccount()">Delete Account</button>
            <p>{{message }}</p>
        </div>
    </div>
  </div>
</template>
<script>
import store from "../store/store";
import {LOADING_SPINNER_SHOW_MUTATION,} from "../store/storeconstants";
export default {
  name: "DeleteAccount",
  data:()=>{
    return {
        agree:false,
        email:'',
        message:''
    }
  },
  methods:{
    async deleteAccount(){
        if(this.email==''){
            this.message="Kindly enter verification email"
            return
        }
        if(this.agree){
            store.commit(LOADING_SPINNER_SHOW_MUTATION, true);
            await new Promise(r=>setTimeout(r,3000));
            store.commit(LOADING_SPINNER_SHOW_MUTATION, false);

            this.message='A delete account prompt has been sent to your email, click on the prompt to delete your account'
        }
        else{
            this.message="You must choose the agree checkbox to proceed"
        }
    }
  }
};
</script>
<style scoped>
</style>