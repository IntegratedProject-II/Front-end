<template>
  <div class="signIn">
    <img src="@/assets/bg-signIn.png" style="z-index :-1;" class="absolute z-0 top-0 left-0 w-screen h-screen object-contain bg-indigo"/>
  
    <content-layout class="ml-64 p-10 flex justify-center">
      <div class="m-5 ">
        <!-- username -->
        <div>
          <label for="username">Username</label><br /> 
          <input type="text" id="username" class ="bg-cloud "/>
        </div>

        <!-- password -->
        <div>
          <label for="password">Password</label><br />
          <input type="password" class ="bg-cloud "/>
        </div>
      </div>

      <!-- signIn btn  -->
      <div class="flex justify-center">
        <button class=" btn p-2 m-10 px-10">
          signIn
        </button>
      </div>
      
      <div class="border-t-2 border-gray-500 mx-20 ">
        Not a member ?
        <router-link to="/register" class="underline">
          Register
        </router-link>
      </div>
    </content-layout>
  </div>
</template>
