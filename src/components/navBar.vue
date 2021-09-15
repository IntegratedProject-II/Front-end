<template>
  <div id="nav" class="laptop:contents hidden ">
    <!-- navbar -->
    <div
      class="flex flex-row items-center laptop:divide-x laptop:divide-gray-300 laptop:px-10"
    >
      <img
        src="@/assets/logo.png"
        class="h-32 tablet:h-40 desktop:h-52 desktop:mr-5 "
      />

      <div
        class="flex flex-row justify-around w-full laptop:ml-5 items-center h-32"
      >
        <router-link
          :to="item.route"
          class="btn w-10 tablet:w-24  desktop:w-36 px-4 py-2 text-center"
          @click="dropDown"
          v-for="(item, index) in route"
          :key="index"
        >
          {{ item.name }}
        </router-link>
        <router-link
          to="/signin"
          class="btn w-10 tablet:w-24  desktop:w-36 px-4 py-2 text-center bg-lemon "
        >
          SignIn
        </router-link>
      </div>
    </div>
  </div>

  <!-- responsive -->
  <div class="laptop:hidden flex justify-between  mx-5">
    <div
      class="fixed w-screen h-screen left-0 top-0 bg-black opacity-50 "
      v-if="isDropDown"
      @click="dropDown"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    />
    <img
      src="@/assets/logo.png"
      class="h-32 tablet:h-40 desktop:h-52 desktop:mr-5 "
    />

    <div class="flex items-center " style="color:#C4C4C4">
      <i v-if="!isDropDown" class="fi-rr-align-justify " @click="dropDown" />
      <div v-else class="relative">
        <i class="fi-rr-cross " @click="dropDown" />
        <div
          class="-left-32 absolute flex flex-col w-32 tablet:w-44 tablet:-left-40 px-2 py-3 text-center rounded-3xl  divide-y divide-offWhite
          bg-cloud text-indigo "
        >
          <router-link
            :to="item.route"
            class="list"
            @click="dropDown"
            v-for="(item, index) in route"
            :key="index"
          >
            {{ item.name }}
          </router-link>
          <router-link to="/signin" class="list"> 
            SignIn
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDropDown: false,
      route: [
        { name: "Home", route: "/" },
        { name: "Loy", route: "/loy" },
        { name: "History", route: "/history" },
        { name: "Member", route: "/member" },
      ],
    };
  },
  methods: {
    dropDown() {
      if (!this.isDropDown) {
        this.isDropDown = true;
      } else {
        this.isDropDown = false;
      }
      console.log("Drop down status : " + this.isDropDown);
    },
  },
};
</script>
