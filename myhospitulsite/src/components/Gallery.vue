<template>
  <center><p id="into" class="mt-5 pb-2">OUR GALLERY</p></center>
  <div class="container mb-4">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner" style="background-color:rgb(3, 101, 2);padding: 20px;">
    <div class="carousel-item active" data-bs-interval="2000">
      <center>
      <img src="../assets/goodheart1.png" class=" imgz" alt="...">
      </center>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <center>
      <img src="../assets/goodheart2.png" class=" imgz" alt="...">
      </center>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <center>
      <img src="../assets/goodheart6.png" class=" imgz" alt="...">
      </center>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <center>
      <img src="../assets/goodheart3.png" class=" imgz" alt="...">
      </center>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <center>
      <img src="../assets/goodheart7.png" class=" imgz" alt="...">
      </center>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
</template>

<script>
export default {
name: "GalLery",
components: {

},
// data(){
//   return{
//     images: [
//       { url: '../assets/goodheart1.png', alt: 'goodheartpicture', id:1},
//       { url: '../assets/goodheart2.png', alt: 'goodheartpicture', id:2},
//       { url: '../assets/goodheart3.png', alt: 'goodheartpicture', id:3},
//       { url: '../assets/goodheart4.png', alt: 'goodheartpicture', id:4},
//       { url: '../assets/goodheart5.png', alt: 'goodheartpicture', id:5}
//     ]
//   }
// },
}
</script>

<style scoped>
.imgz {
  height: 500px;

}
#into {
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  color:rgb(3, 101, 2);
}
</style>