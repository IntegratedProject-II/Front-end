<template>
  <div class="signIn">
    <img
      src="@/assets/bg-signIn.png"
      style="z-index :-1;"
      class="absolute z-0 top-0 left-0 w-screen h-screen object-contain bg-indigo"
    />

    <content-layout class="my-36  flex justify-center">
      <div class="m-5 ">
        <!-- username -->
        <div>
          <label for="username">Username</label><br />
          <input
            type="text"
            v-model.trim="entered.username"
            class="bg-cloud rounded-3xl py-1 px-2"
          />
        </div>

        <!-- password -->
        <div>
          <label for="password">Password</label><br />
          <input
            type="password"
            v-model.trim="entered.password"
            class="bg-cloud rounded-3xl py-1 px-2"
          />
        </div>
      </div>

      <!-- signIn btn  -->
      <div class="flex justify-center">
        <button
          class=" text-indigo bg-coin rounded-full hover:duration-300 hover:text-silver hover:bg-white p-2 m-10 px-10"
          @click="signIn"
        >
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
<script>
import axios from "axios";
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      entered: {
        username: "",
        password: "",
      },
      token: ""
    };
  },
  methods: {
    ...mapActions({
      setRole:"signin/setRole",
    }),
    signIn() {
      axios.post(`${process.env.VUE_APP_API}/person/signin`,this.entered)
      .then((res)=>{
        this.setRole(res.data)
        console.log(res.data)
      })
      .catch((err)=>{
         console.log(err)
      });

    },
  },
};
</script>
