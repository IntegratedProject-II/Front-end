<template>
  <div class="signIn">
    <!-- <img
      src="@/assets/bg-signIn.png"
      style="z-index :-1;"
      class="absolute z-0 top-0 left-0 w-screen h-screen object-contain bg-indigo"
    /> -->

    <content-layout class="my-36  flex justify-center">
      <div class="m-5 ">
        <!-- username -->
        <div class="flex justify-center">
          <div>
            <label for="username">Username</label><br />
            <input
              type="text"
              v-model.trim="entered.username"
              class="bg-cloud rounded-3xl py-1 px-2"
            />
            <p v-if="invalid.username" class="text-red-500">
              Please enter username!
            </p>
          </div>
        </div>

        <!-- password -->
        <div class="flex justify-center">
          <div>
            <label for="password">Password</label><br />
            <input
              type="password"
              v-model.trim="entered.password"
              class="bg-cloud rounded-3xl py-1 px-2"
            />
            <p v-if="invalid.password" class="text-red-500">
              Please enter password!
            </p>
          </div>
        </div>
      </div>
      <p v-if="!isMember" class="text-red-500 flex justify-center">
        Please check your username or password again
      </p>
      <!-- signIn btn  -->
      <div class="flex justify-center">
        <button
          class=" text-indigo bg-coin rounded-full hover:duration-300 hover:text-silver hover:bg-white p-2 m-10 px-10"
          @click="signIn"
        >
          Sign In
        </button>
      </div>

      <div class="border-t-2 border-gray-500 tablet:mx-20 mx-5">
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      entered: {
        username: "",
        password: "",
      },
      invalid: {
        username: "",
        password: "",
      },
      isValid: false,
      token: "",
      isMember: true,
    };
  },
  methods: {
    ...mapActions({
      setRole: "signin/setRole",
    }),
    signIn() {
      this.invalid.username =
        this.entered.username === undefined || this.entered.username === ""
          ? true
          : false;
      this.invalid.password =
        this.entered.password === undefined || this.entered.password === ""
          ? true
          : false;
      this.isValid = true;
      for (const [, value] of Object.entries(this.invalid)) {
        if (value) {
          this.isValid = false;
        }
      }
      if (this.isValid) {
        axios
          .post(`${process.env.VUE_APP_API}/person/signin`, this.entered)
          .then((res) => {
            this.setRole(res.data);
            this.$router.push("/");
            // console.log(res.data);
          })
          .catch((err) => {
            if (err.response.status == 401) {
              this.isMember = false;
              // console.log(this.isMember);
            } else {
              console.log(err);
            }
          });
      }
    },
  },
};
</script>
