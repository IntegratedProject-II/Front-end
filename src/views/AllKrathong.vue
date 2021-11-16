<template>
  <div class="allKrathong">
    <navBar-layout />
    <content-layout>
      <p
        class="text-ash tablet:text-4xl font-bold text-center  text-xl m-8 tablet:m-16"
      >
        Krathong
      </p>
      <p>
        isUser :
        <button @click="changeUser" class="text-red-600">
          {{ this.isUser }}
        </button>
      </p>
      <router-link to="/addKrathong">
       ad
       d Krathong btn(Admin)
      </router-link>
      <div class="grid grid-cols-3 gap-10 w-full">
        
        <ul v-for="item in ktImage" :key="item.kt_id">
          <router-link :to="`/krathong/${item.kt_id}`">
            <div class="flex justify-center">
              <img
                :src="
                  'https://www.loykrathong.tech/api/image/krathongImage/' + item.kt_id
                "
                class="w-80 h-80 bg-sand rounded-full object-contain p-2 "
              />
            </div>

            <div v-if="isUser" class="flex justify-center">
              <button
                class=" bg-cloud text-indigo rounded-full hover:duration-300 hover:text-cloud hover:bg-indigo p-2 m-10 w-36  "
              >
                Choose
              </button>
            </div>
          </router-link>

          <!-- admin btn  -->
          <div v-if="!isUser" class="flex justify-center">
            <button
              class=" bg-cloud text-indigo rounded-full hover:duration-300 hover:text-cloud hover:bg-indigo p-2 m-10 w-36  "
            >
              Edit
            </button>
          </div>
        </ul>
      </div>
    </content-layout>
  </div>
</template>
<script>
import axios from "axios";
// import {  mapMutations } from "vuex";

export default {
  data() {
    return {
      ktImage: [],
      isUser: true,
      KrathongId: 0,
    };
  },
  methods: {
    //   ...mapMutations({
    //   setRole: "signin/setRole",
    // }),
    fetchKrathongImage() {
      axios
        .get(`${process.env.VUE_APP_API}/Krathong/getkrathong`)
        .then((res) => {
          this.ktImage = res.data.data;
          // console.log("fetchImage");
        });
    },
    changeUser() {
      if (this.isUser) {
        this.isUser = false;
      } else {
        this.isUser = true;
      }
    },
  },
  mounted() {
    this.fetchKrathongImage();
  },
};
</script>
