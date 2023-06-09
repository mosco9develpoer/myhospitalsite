<template>
  <section id="bacc" class="container">
    <center><p id="into" class="mt-5 pb-2">OUR TRUSTED CUSTOMERS....</p></center>
    <div class="row container">
        <div class="col-md-4">
            <img src="../assets/Capstone_Hospitals.jpeg" class="image"/>
            <center><p class="fw-bold h5 py-2">Capstone Hospitals, Omoku</p></center>
        </div>
        <div class="col-md-4">
            <img src="../assets/Kencrest_private_Hospital.jpeg" class="image"/>
            <center><p class="fw-bold h5 py-2">Kencrest private Hospitals</p></center>
        </div>
        <div class="col-md-4">
            <img src="../assets/Goodheart_Hospitals.jpeg" class="image"/>
            <center><p class="fw-bold h5 py-2">Goodheart Hospitals</p></center>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <img src="../assets/Shelterd_specialist_Hospital.jpeg" class="image"/>
            <center><p class="fw-bold h5 py-2">Shelter'd specialist Hospitals</p></center>
        </div>
        <div class="col-md-4">
            <img src="../assets/Clared_Hospitals.jpeg" class="image"/>
            <center><p class="fw-bold h5 py-2">Clared Hospitals</p></center>
        </div>
        <div class="col-md-4">
            <img src="../assets/Mercyland_Specialist_Hospital.jpeg" class="image"/>
            <center><p class="fw-bold h5 py-2">Mercyland specialist Hospitals</p></center>
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
    height: 100px;
    width: 100%;
}
.h5 {
    color:rgb(3, 101, 2);
}
#bacc:hover {
    box-shadow: 4px 3px 8px 1px #7bd369;
    -webkit-box-shadow: 4px 3px 8px 1px #82c876;
    border-radius: 10px;
    transition: 4s;
}
</style>