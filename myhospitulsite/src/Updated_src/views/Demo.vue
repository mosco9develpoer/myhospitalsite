<template>
    <Navbar />
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
    <iframe width="80%" height="500px" src="https://www.youtube.com/embed/TAJkOsUQV2k" frameborder="0" allowfullscreen></iframe>
</center>

<section id="bodymobile">

</section>
</template>

<script>
import Navbar from "../components/Nav.vue"
export default {
name: "De_mo",
components: {
    Navbar
}
}
</script>

<style scoped>
#bodymobile {
    margin-top: 15px;
    height: 600px;
    background-color: #146533;
}
</style>