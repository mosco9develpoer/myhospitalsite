<template>
    <div class="loading-box">
    
      <div class="image">
        <img src="../assets/myhospitul_name_logo.png" style="scale: 1.7;"/>
       <div style="display: flex;">
        <div class="glow-border"></div> 
       </div>
      </div>
    </div>
  </template>
    <script>
  export default {
    name: "LoaDer",
    data() {
      return {};
    },
    methods: {},
  };
  </script>
    
    <style scoped>
  .loading-box {
    opacity: 0.97;
    background-color: white;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .glow-border {
    margin-top: 15px;
    scale: 1.5;
    height: 2px;
    width: 60px;
    border-radius: 15px;
    background-color: red;
    color: black;
    margin-right: 24px;
    animation: slide 1s infinite;
  }

  @keyframes slide {
  0% {
    transform: translateX(-20%);
    opacity: 0.6;
    transition: 0.5s ease-in-out;
    background-color: #146533;
  }
  50% {
    transform: translateX(120%);
    opacity: 0.4;
  }
  100% {
    transform: translateX(-20%);
    opacity: 0.6;
  }
}
  </style>