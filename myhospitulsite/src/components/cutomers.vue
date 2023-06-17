<template>
  <section id="bacc" class="container">
    <center><p id="head" class="pb-2">OUR CLIENTS....</p></center>
    <div class="review-container">
        <div >
            <img src="../assets/Capstone_Hospitals.jpeg" class="image"/>
        </div>
        <div>
            <img src="../assets/Kencrest_private_Hospital.jpeg" class="image"/>
        </div>
        <div>
            <img src="../assets/Goodheart_Hospitals.jpeg" class="image"/>
        </div>
        <div>
            <img src="../assets/Shelterd_specialist_Hospital.jpeg" class="image"/>
        </div>
        <div>
            <img src="../assets/Clared_Hospitals.jpeg" class="image"/>
        </div>
        <div>
            <img src="../assets/Mercyland_Specialist_Hospital.jpeg" class="image"/>
        </div>
    </div>
  </section>
</template>

<script>
export default {
name: "CusTomers",
}
</script>

<style scoped>
#bacc{
    background-color: white;
    padding: 20px 0px 40px 0px;
}
#into {
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  color:rgb(3, 101, 2);
}
.image {
    height: 50px;
}
.review-container{
    display:flex;
    flex-flow:row wrap;
    justify-content: center;
    align-items:center;
    column-gap:20px;
    row-gap:20px
}
.review-title{
    font-size:12px;
    color:rgb(3, 101, 2);
}
#bacc:hover {
    box-shadow: 4px 3px 8px 1px #7bd369;
    -webkit-box-shadow: 4px 3px 8px 1px #82c876;
    border-radius: 10px;
    transition: 4s;
}
</style>