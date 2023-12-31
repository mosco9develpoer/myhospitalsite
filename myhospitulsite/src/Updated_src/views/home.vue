<template>
<Navbar />
  <Homebody />
  <Solutions />
  <Base />
</template>

<script>
import Navbar from "../components/Nav.vue"
import Homebody from "../components/home-body.vue"
import Solutions from "../components/solutions.vue"
import Base from "../components/Base.vue"
export default {
name: "Home_view",
components: {
    Homebody,
    Navbar,
    Solutions,
    Base
}
}
</script>

<style scoped>

</style>