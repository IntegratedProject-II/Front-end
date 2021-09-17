<template>
  <div class="register">
    <content-layout>
      <div class="relative">
        <p class="text-ash tablet:text-4xl font-bold text-center">Register</p>

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
          <p v-if="invalid.firstname" class="text-red-500">
            Please enter firstname !
          </p>
        </div>

        <!-- lastName -->
        <div>
          <label for="lastname">Last name</label><br />
          <input
            type="text"
            v-model.trim="entered.lastname"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
          <p v-if="invalid.lastname" class="text-red-500">
            Please enter lastname !
          </p>
        </div>

        <!-- email -->
        <div>
          <label for="email">Email</label><br />
          <input
            type="email"
            v-model.trim="entered.email"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
          <p v-if="invalid.email" class="text-red-500">
            Please enter email !
          </p>
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
          <p v-if="invalid.country" class="text-red-500">
            Please enter country!
          </p>
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
          <p v-if="invalid.phoneNumber" class="text-red-500">
            Please enter phone number !
          </p>
        </div>
        <!-- ID card -->
        <div v-if="!isUser">
          <label for="idCard">Id card</label><br />
          <input
            type="number"
            v-model.trim="entered.idCard"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
          <p v-if="invalid.idCard" class="text-red-500">
            Please enter ID card!
          </p>
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
          <p v-if="invalid.username" class="text-red-500">
            Please enter username!
          </p>
        </div>

        <!-- password -->
        <div>
          <label for="password">Password</label><br />
          <input
            type="password"
            v-model.trim="entered.password"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
          <p v-if="invalid.password" class="text-red-500">
            Please enter password!
          </p>
        </div>
      </div>
      <div class="flex justify-center ">
        <router-link to="/signin">
          <button
            class=" bg-rose rounded-full hover:duration-300 hover:text-rose hover:bg-white p-2 m-10 w-36 text-white "
            
          >
            Cancel
          </button>
        </router-link>
        <button
          @click="submit"
          class=" bg-fern rounded-full hover:duration-300 hover:text-fern hover:bg-white p-2 m-10 w-36 text-white"
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
      invalid: {
        firstname: false,
        lastname: false,
        email: false,
        country: false,
        phoneNumber: false,
        idCard: false,
        username: false,
        password: false,
      },
      isValid: false,
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
      this.invalid.firstname =
        this.entered.firstname === undefined || this.entered.firstname === ""
          ? true
          : false;
      this.invalid.lastname =
        this.entered.lastname === undefined || this.entered.lastname === ""
          ? true
          : false;
      this.invalid.email =
        this.entered.email === undefined || this.entered.email === ""
          ? true
          : false;
      this.invalid.country =
        this.entered.country === undefined || this.entered.country === ""
          ? true
          : false;
      this.invalid.phoneNumber =
        this.entered.phoneNumber === undefined ||
        this.entered.phoneNumber === ""
          ? true
          : false;
      this.invalid.idCard =
        this.entered.idCard === undefined || this.entered.idCard === ""
          ? true
          : false;
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
        this.entered.firstname = "";
        this.entered.lastname = "";
        this.entered.email = "";
        this.entered.country = "";
        this.entered.phoneNumber = "";
        this.entered.idCard = "";
        this.entered.username = "";
        this.entered.password = "";
      }

      // console.log("submit method");
      // console.log(this.isUser ? "user" : "admin");
      // console.log(this.entered.firstname);
      // console.log(this.entered.lastname);
      // console.log(this.entered.email);
      // console.log(this.entered.country);
      // if (!this.isUser) {
      //   console.log(this.entered.phoneNumber);
      //   console.log(this.entered.idCard);
      // }
      // console.log(this.entered.username);
      // console.log(this.entered.password);
    },
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
