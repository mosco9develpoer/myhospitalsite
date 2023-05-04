<template>
  <section id="side">
    <div class="tooglebar">
        <ul>
            <li><router-link id="link">Home</router-link></li>
            <li><router-link id="link">Demo</router-link></li>
            <li><router-link id="link">What we do</router-link></li>
            <li><router-link id="link">FAQ</router-link></li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {
name: "SideBar",
}
</script>

<style scoped>
#side{
    background-color: rgba(3, 3, 3, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
}
.tooglebar{
    width: 300px;
    height: 100vh;
    background-color: white;
}
li {
    padding: 10px 0px 10px 20px;
}
#link {
    color: rgb(139,139,139);
}
</style>