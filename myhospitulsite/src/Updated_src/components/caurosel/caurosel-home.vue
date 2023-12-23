<template>
  <div class="caurosel">
    <slot></slot>


    <button @click="next" class="next"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></button>
    <button @click="prev" class="prev"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg></button>
  </div>
</template>

<script>
export default {
name: "Cauro_sel",
methods: {
  next(){
    this.$emit('next')
  },
  prev(){
    this.$emit('prev')
  }
}
}
</script>

<style scoped>
.caurosel {
    position: relative;
    width: 600px;
    height: 500px;
    overflow: hidden;
}
button {
    position: absolute;
    font-size: 14px;
    height: 40px;
    width: 40px;
    top: calc(50% - 20px);
    color: white;
    background: #146533;
    border: none;
}
button:focus , button:hover {
  outline: none;
  background-color: whitesmoke;
  color: #146533;
  transition: 0.8s;
  cursor: pointer;
}
.next {
  right: 0;
  border-start-start-radius: 10px;
  border-end-start-radius: 10px;
}
.prev {
  left: 0;
  border-start-end-radius: 10px;
  border-end-end-radius: 10px;
}
</style>