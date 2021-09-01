<template>
  <div id="app" class=" desktop:text-xl text-l py-5">
    <div
      id="nav"
      class="laptop:contents hidden "
    >
    <div class="flex flex-row items-center laptop:divide-x laptop:divide-gray-300 laptop:px-10">
<img
        src="@/assets/logo.png"
        class="h-32 tablet:h-40 desktop:h-52 desktop:mr-5 "
      />

   
      <div class="flex flex-row justify-around w-full laptop:ml-5 items-center h-32">
        <router-link to="/" class="btn w-10 tablet:w-24  desktop:w-36 px-4 py-2 text-center">
          Home
        </router-link>
        <router-link to="/loy" class="btn w-10 tablet:w-24  desktop:w-36 px-4 py-2 text-center">
          Loy
        </router-link>

        <a href="/history" class="btn w-10 tablet:w-24  desktop:w-36 px-4 py-2 text-center">
          History
        </a>
        <router-link to="/member" class="btn w-10 tablet:w-24  desktop:w-36 px-4 py-2 text-center">
          Member
        </router-link>
        <router-link to="/login" class="btn w-10 tablet:w-24  desktop:w-36 px-4 py-2 text-center bg-lemon ">
          Login
        </router-link>
      </div>
    </div>

    </div>
      
    <!-- responsive -->
    <div class="laptop:hidden flex justify-between  mx-5">
      <img
        src="@/assets/logo.png"
        class="h-32 tablet:h-40 desktop:h-52 desktop:mr-5 "
      />

      <div class="flex items-center " style="color:#C4C4C4">
        <i
          v-if="isDropDown == false"
          class="fi-rr-align-justify "
          @click="dropDown"
        />
        <div v-else class="relative">
          <i class="fi-rr-cross " @click="dropDown" />
          <div
            class="-left-32 absolute flex flex-col w-32 tablet:w-44 tablet:-left-40 px-2 py-3 text-center rounded-3xl  divide-y divide-offWhite
          bg-cloud text-indigo "
          >
            <router-link to="/" class="list" @click="dropDown">
              Home
            </router-link>
            <router-link to="/loy" class="list" @click="dropDown">
              Loy
            </router-link>
            <router-link to="/history" class="list" @click="dropDown">
              History
            </router-link>
            <router-link to="/member" class="list" @click="dropDown">
              Member
            </router-link>
            <router-link to="/login" class="list" @click="dropDown">
             Login
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDropDown: false,
    };
  },
  methods: {
    dropDown() {
      if (this.isDropDown == false) {
        this.isDropDown = true;
      } else {
        this.isDropDown = false;
      }
      console.log("Drop down status : " + this.isDropDown);
    }
  },

};
</script>

<style>
@import "https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css";
#app {
  background-color: #4d506c;
  font-family: "prompt", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.btn {
  color: #4d506c;
  background-color: #c8cfd8;
  border-radius: 9999px;
}
.btn:focus {
  transition-duration: 300ms;
  color: #748ca3;
  background-color: #feffc1;
}
.list:focus {
  color: #748ca3;
  
}
</style>
