<template>
  <div id="app" class="text-xl py-5">
    <div
      id="nav"
      class="flex flex-row items-center divide-x divide-gray-400 px-10 "
    >
      <img src="@/assets/logo.png" class="h-52 mr-5" />
      <div class="flex flex-row justify-around w-full ml-5 items-center h-32">
        <button class="btn w-36 px-4 py-2 text-center">Home</button>
        <button class="btn w-36 px-4 py-2 text-center">Loy</button>
        <button class="btn w-36 px-4 py-2 text-center">History</button>
        <button class="btn w-36 px-4 py-2 text-center">Member</button>
        <button class="btn w-36 px-4 py-2 text-center">Login</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  background-color: #4d506c;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.btn {
  color: #4d506c;
  background-color: #c8cfd8;
  border-radius: 9999px;
}
.btn:hover {
  transition-duration: 300ms;
  color: #748ca3;
  background-color: #feffc1;
}
</style>
