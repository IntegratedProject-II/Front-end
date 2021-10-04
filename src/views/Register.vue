<template>
  <div class="register">
    <content-layout class="m-16">
      <div class="relative">
        <p class="text-ash tablet:text-4xl font-bold text-center">Register</p>

        <!-- change role btn  -->
        <!-- <Toggle
          v-model="isUser"
          class="absolute right-0 top-5  px-5"
          :classes="{
            container: 'outline-none',
            toggleOn: 'bg-gray-400 text-white border-gray-200',
            label: ' w-5 p-1 ',
          }"
          onLabel="user"
          offLabel="admin"
        ></Toggle> -->
      </div>

      <!-- input part -->
      <div class="grid grid-cols-2 gap-x-14 px-24 ">
        <!-- firstName -->
        <div>
          <label for="fname">First name</label><br />
          <input
            type="text"
            v-model.trim="entered.fname"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
          <p v-if="invalid.fname" class="text-red-500">
            Please enter fname !
          </p>
        </div>

        <!-- lastName -->
        <div>
          <label for="lname">Last name</label><br />
          <input
            type="text"
            v-model.trim="entered.lname"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
          <p v-if="invalid.lname" class="text-red-500">
            Please enter lname !
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
            v-model.trim="entered.ct_id"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          >
            <option v-for="item in country" :key="item.ct_id" :value="item.ct_id">{{
              item.country
            }}</option>
          </select>
          <p v-if="invalid.country" class="text-red-500">
            Please enter country!
          </p>
        </div>

        <!-- admin role  -->
        <!-- phone number -->

        <!-- <div v-if="!isUser">
          <label for="phoneNumber">Phone number</label><br />
          <input
            type="number"
            v-model.trim="entered.phoneNumber"
            class="w-full rounded-full border border-black focus:outline-none px-2 h-9"
          />
          <p v-if="invalid.phoneNumber" class="text-red-500">
            Please enter phone number !
          </p>
        </div>
         ID card 
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
        </div> -->

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
import axios from "axios";
// import Toggle from "@vueform/toggle";
export default {
  // components: { Toggle },
  data() {
    return {
      isUser: true,
      entered: {
        fname: "",
        lname: "",
        email: "",
        ct_id: null,
        // phoneNumber: "",
        // idCard: "",
        username: "",
        password: "",
        role_id: 1,
      },
      invalid: {
        fname: false,
        lname: false,
        email: false,
        ct_id: false,
        // phoneNumber: false,
        // idCard: false,
        username: false,
        password: false,
      },
      isValid: false,
      country: [],
    };
  },
  methods: {
    // changeRole() {
    //   if (!this.isUser) {
    //     this.isUser = true;
    //     console.log("if " + this.isUser);
    //   } else {
    //     this.isUser = false;
    //     console.log("else " + this.isUser);
    //   }
    // },
    submit() {
      this.invalid.fname =
        this.entered.fname === undefined || this.entered.fname === ""
          ? true
          : false;
      this.invalid.lname =
        this.entered.lname === undefined || this.entered.lname === ""
          ? true
          : false;
      this.invalid.email =
        this.entered.email === undefined || this.entered.email === ""
          ? true
          : false;
      this.invalid.ct_id =
        this.entered.ct_id === undefined || this.entered.ct_id === ""
          ? true
          : false;
      // this.invalid.phoneNumber =
      //   this.entered.phoneNumber === undefined ||
      //   this.entered.phoneNumber === ""
      //     ? true
      //     : false;
      // this.invalid.idCard =
      //   this.entered.idCard === undefined || this.entered.idCard === ""
      //     ? true
      //     : false;
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
        // this.entered.firstname = "";
        // this.entered.lastname = "";
        // this.entered.email = "";
        // this.entered.country = "";
        // // this.entered.phoneNumber = "";
        // // this.entered.idCard = "";
        // this.entered.username = "";
        // this.entered.password = "";
        axios
          .post(`${process.env.VUE_APP_API}/person/register`, this.entered)
          .then((res) => {
            console.log(res.data);
            alert("Register successfully")
          })
          .catch((err) => {
            console.log(err);
          });
 
      }
    
    },
    fetchCountry() {
      axios.get(`${process.env.VUE_APP_API}/country/getCountry`)
      .then((res) => {
        console.log(res.data);
        this.country = res.data.data;
        // console.log(this.country);
      });
    },
  },
  mounted() {
    this.fetchCountry();
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
