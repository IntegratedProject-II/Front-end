<template>
  <div class="register">
    <content-layout>
      <div class="relative">
        <p class="header">Register</p>

        <!-- change role btn  -->
        <Toggle
          v-model="isUser"
          class="absolute right-0 top-5  px-5"
          :classes="{
            container: 'outline-none',
            toggleOn: 'bg-gray-400 text-white border-gray-200',
            label: ' w-5 p-1 ',
          }"
          onLabel="user"
          offLabel="admin"
        ></Toggle>
      </div>

      <!-- input part -->
      <div class="grid grid-cols-2 gap-x-14 px-24 ">
        <!-- firstName -->
        <div>
          <label for="firstname">First name</label><br />
          <input
            type="text"
            v-model.trim="entered.firstname"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
        </div>

        <!-- lastName -->
        <div>
          <label for="lastname">Last name</label><br />
          <input
            type="text"
            v-model.trim="entered.lastname"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
        </div>

        <!-- email -->
        <div>
          <label for="email">Email</label><br />
          <input
            type="email"
            v-model.trim="entered.email"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
        </div>

        <!-- country -->
        <div>
          <label for="country">Country</label><br />
          <select
            v-model.trim="entered.country"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          >
            <option value="franch">Franch</option>
            <option value="america">America</option>
            <option value="swizerland">Swizterland</option>
            <option value="canada">Canada</option>
          </select>
        </div>

        <!-- admin role  -->
        <!-- phone number -->

        <div v-if="!isUser">
          <label for="phoneNumber">Phone number</label><br />
          <input
            type="tel"
            v-model.trim="entered.phoneNumber"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
        </div>
        <!-- ID card -->
        <div v-if="!isUser">
          <label for="idCard">Id card</label><br />
          <input
            type="number"
            v-model.trim="entered.idCard"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
        </div>

        <!-- end admin role -->

        <!-- username -->
        <div>
          <label for="username">Username</label><br />
          <input
            type="text"
            v-model.trim="entered.username"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
        </div>

        <!-- password -->
        <div>
          <label for="password">Password</label><br />
          <input
            type="password"
            v-model.trim="entered.password"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
        </div>
      </div>
      <div class="flex justify-center ">
        <router-link to="/signin">
          <button
            class="btn p-2 m-10 w-36 text-white "
            style=" background-color:#DA9999 "
          >
            Cancel
          </button>
        </router-link>
        <button
          @click="submit"
          style="background-color:#90B493"
          class="btn p-2 m-10 w-36 text-white"
        >
          Confirm
        </button>
      </div>
    </content-layout>
  </div>
</template>
<script>
import Toggle from "@vueform/toggle";
export default {
  components: { Toggle },

  data() {
    return {
      isUser: true,
      entered: {
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        phoneNumber: "",
        idCard: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    changeRole() {
      if (!this.isUser) {
        this.isUser = true;
        console.log("if " + this.isUser);
      } else {
        this.isUser = false;
        console.log("else " + this.isUser);
      }
    },
    submit() {
      console.log("submit method");
      console.log(this.isUser ? "user" : "admin");
      console.log(this.entered.firstname);
      console.log(this.entered.lastname);
      console.log(this.entered.email);
      console.log(this.entered.country);
      if (!this.isUser) {
        console.log(this.entered.phoneNumber);
        console.log(this.entered.idCard);
      }
      console.log(this.entered.username);
      console.log(this.entered.password);
    },
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
