<template>
  <div class="placeType">
    <navBar-layout />
    <content-layout>
      <p
        class="text-ash tablet:text-4xl font-bold text-center  text-xl m-8 tablet:m-16"
      >
        Place Type
      </p>

      <div class="grid grid-cols-3 gap-10 w-full">
        <ul v-for="item in placeType" :key="item.tp_id">
          <router-link :to="`/place/getPlace?tp_id=`+item.tp_id">
          <div class="flex justify-center">
            <img
              :src="
                'https://www.loykrathong.tech/api/image/placeTypeImage/' +
                  item.tp_id
              "
              class="w-80 h-80 bg-sand rounded-full object-contain p-2 "
            />
          </div>

          <div  class="flex justify-center">
            <button
              class=" bg-cloud text-indigo rounded-full hover:duration-300 hover:text-cloud hover:bg-indigo p-2 m-10 w-36  "
            >
              {{item.tp_name}}
            </button>
          </div>
          </router-link>

          <!-- admin btn 
          <div v-if="!isUser" class="flex justify-center">
            <button
              class=" bg-cloud text-indigo rounded-full hover:duration-300 hover:text-cloud hover:bg-indigo p-2 m-10 w-36  "
            >
              Edit
            </button>
          </div> -->
        </ul>
      </div>
    </content-layout>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      placeType: {
        tp_name: "",
        tp_image: "",
      },
    };
  },
  methods: {

    fetchPlaceType() {
      axios
        .get(`${process.env.VUE_APP_API}/placeType/getPlaceType`)
        .then((res) => {
          this.placeType = res.data.data;
       
        });
    },
  },
  mounted() {
    this.fetchPlaceType();
  },
};
</script>
