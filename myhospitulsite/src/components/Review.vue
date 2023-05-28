<template>
  <center><p id="into" class="mt-5 pb-2">OUR REVIEWS THUS FAR....</p></center>
  <div class="container contain mb-4">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <div class="imgz">
        <center><div class="container">
          <div class="contain-circle">
            <img src="../assets/person-circle.svg" class="imgg"/>
          </div>
          <p class="tex">Odunukwe Blessing Nwabugo</p>
          <p class="tex">Goodheart Medical Consultants Hospital</p>
          <p class="tex">This is the best thing that happened to Goodheart. Easy to learn and it makes work faster. Kudos</p>
        </div></center>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
        <div class="imgz">
          <center><div class="container">
          <div class="contain-circle">
            <img src="../assets/person-circle.svg" class="imgg"/>
          </div>
          <p class="tex">Elechi Patience</p>
          <p class="tex">Goodheart Medical Consultants Hospital</p>
          <p class="tex">A good app.... Fast response.</p>
        </div></center>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
        <div class="imgz">
          <center><div class="container">
          <div class="contain-circle">
            <img src="../assets/person-circle.svg" class="imgg"/>
          </div>
          <p class="tex">Ogunka Gold</p>
          <p class="tex">KARIDEN SPECIALIST HOSPITAL HOSPITAL</p>
          <p class="tex">The app is slow. The template is not organized as it ought to be for a hospital software.</p>
        </div></center>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
        <div class="imgz">
          <center><div class="container">
          <div class="contain-circle">
            <img src="../assets/person-circle.svg" class="imgg"/>
          </div>
          <p class="tex">Odunukwe Blessing Nwabugo</p>
          <p class="tex">Goodheart Medical Consultants Hospital</p>
          <p class="tex">This is the best thing that happened to Goodheart. Easy to learn and it makes work faster. Kudos</p>
        </div></center>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
        <div class="imgz">
          <center><div class="container">
          <div class="contain-circle">
            <img src="../assets/person-circle.svg" class="imgg"/>
          </div>
          <p class="tex">Dr. Edwin Chukwudi</p>
          <p class="tex">Clared Hospitals LTD</p>
          <p class="tex">Satisfactory</p>
        </div></center>
      </div>
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
name: "ReView"
}
</script>

<style scoped>
.imgz {
    background-color: rgb(27,129,60);
    border-radius: 15px;
    text-align: center;
    height: 300px;
    padding: 15px;
}
#into {
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  color:rgb(3, 101, 2);
}
.tex {
  padding: 5px;
  font-size: 18px;
  width: 70%;
  letter-spacing: 2px;
  color: rgb(247, 249, 247);
}

.contain-circle{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
}
.imgg{
  width: 70px;
  height: 70px;
}
@media only screen and (max-width: 600px){
  .tex{
    width: 100%;
    font-size: 15px;
  }
}
</style>