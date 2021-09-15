<template>
  <div id="app" class=" desktop:text-xl text-l py-5">
  
    <router-view />
  </div>
</template>
<style>
@import "https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css";
body {
  background-color: #4d506c;
}

#app {
  font-family: "prompt", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.btn {
  color: #4d506c;
  background-color: #c8cfd8;
  border-radius: 9999px;
}
.btn:hover {
  transition-duration: 300ms;
  color: #748ca3;
  background-color: white;
}
.list:focus {
  color: #748ca3;
}
.header {
  color: #636363;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 4rem;
}
</style>
