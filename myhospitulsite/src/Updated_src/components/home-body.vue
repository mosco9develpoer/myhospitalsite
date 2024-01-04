<template>
    <center><section>
        <div class="flexthem">
            <div class="indic bck-color">
                <center><p style="color: white; font-size: 14px; padding: 8px;">News</p></center>
            </div>
            <div class="indicnext">
                <p style="font-size: 14px; padding: 8px; padding-right: 30px;">Get latest health news around the Globe ></p>
            </div>
        </div>
    </section>

    <h4 style="font-size: 50px; width: 60%;">Digital Health Solution at your beck and call on MyHosipitul</h4>
    
</center>
<div class="caurosel-body">
        <caurosel
        @next="next"
        @prev="prev" style="width: 80%;">
            <caurosel-slide v-for="(slide,index) in slides" :key="slide.id" :index="index"
            :visibleSlide = "visibleSlide" :direction="direction">
            
            <div class="row">
                <div class="col-6">
                    <h4 class="titlez">{{ slide.title }}</h4>
                    <h4 class="contx">{{ slide.body }}</h4>

                    <div class="butonz">
                        <button class="price button">Pricing</button>
                        <button class="demo button"> <router-link class="linkz" to="/demo">Play Demo</router-link></button>
                    </div>

                    <h4 style="font-size: 12px; color: rgb(78, 77, 77); margin-top: 20px; position: absolute; bottom: 60px;">Get one month free subscription on your first month installation</h4>
                </div>
                <div class="col-6 imgs">
                    <img :src="slide.images" class="imggg"/>
                </div>
            </div>
            </caurosel-slide>
        </caurosel>
    </div>
</template>

<script>
import Caurosel from "./caurosel/caurosel-home.vue";
import CauroselSlide from "./caurosel/Cauroselslider-home.vue";
export default {
name: "home_body",
components: {
    Caurosel,
    CauroselSlide
},
data(){
    return {
        slides: [
            {
                id: 1,
                title: "Book Appointment",
                body: "Book physical or virtual medical appointment with any hospital or doctor and get instant feedback in less than one minute.",
                images: require("../../assets/Intro_img.png"),
            },
            {
                id: 2,
                title: "Manage Medical Records",
                body: "Manage, share and secure all your medical appointment records and patient physical, social and medical history",
                images: require("../../assets/manage_img.png"),
            },
            {
                id: 3,
                title: "Track Billing And Debt",
                body: "Fast, easy and automated appointment billing and debt tracking system for both patients and hospitals.",
                images: require("../../assets/tracking_img.png"),
            },
        ],
        visibleSlide : 0,
        direction: 'left',
        intervalId: null,
        intervalDuration: 8000,
    }
},
computed: {
    Slideslen(){
        return this.slides.length;
    }
},
mounted() {
    this.startAutoSlide();
  },
methods: {
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, this.intervalDuration);
    },
    nextSlide() {
      this.visibleSlide = (this.visibleSlide + 1) % this.slides.length;
    },
  next(){
    if(this.visibleSlide >= this.Slideslen - 1){
        this.visibleSlide = 0;
    }else {
        this.visibleSlide++;
    }
    this.direction = "left";
  },
  
  prev(){
    if(this.visibleSlide <= 0){
        this.visibleSlide = this.Slideslen - 1;
    }else {
        this.visibleSlide--;
    }
    this.direction = "right";
  }
}
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
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
.caurosel-body {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.titlez {
    font-size: 30px;
    font-weight: 600;
    padding-top: 40px;
}
.contx {
    font-size: 20px;
    font-weight: 200;
    width: 90%;
    letter-spacing: 1px;
    line-height: 35px;
}
.imgs {
    border-radius: 40px;
    overflow: hidden;
    padding: 0;
    height: 350px;
}
.butonz{
    display: flex;
    margin-left: 20px;
    position: absolute;
    bottom: 100px;
}
.button {
    outline: none;
    border: none;
    font-size: 12px;
    width: 100px;
    height: 35px;
    border-radius: 30px;
    margin: 0px 10px 0px 0px;
    background-color: rgb(202, 199, 199);
}
.price {
    color: white;
    background-color: #146533;
}
.imggg {
    scale: 1.3;

}
.linkz {
    text-decoration: none;
    color: black;
}
</style>