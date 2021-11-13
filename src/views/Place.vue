<template>
  <div>
    <navBar-layout />
    <content-layout>
      <p
        class="text-ash tablet:text-4xl font-bold text-center  text-xl m-8 tablet:m-16"
      >
        Place
      </p>
      <p>Wish :{{this.getWish}}</p>
      <!-- just copy form detailKT  -->
      <!-- <div class="grid grid-cols-3 gap-10 w-full">
        <ul v-for="item in ktImage" :key="item.kt_id">
          <router-link :to="`/krathong/${item.kt_id}`">
            <div class="flex justify-center">
              <img
                :src="
                  'http://52.187.149.36/api/image/krathongImage/' + item.kt_id
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

          <div v-if="!isUser" class="flex justify-center">
            <button
              class=" bg-cloud text-indigo rounded-full hover:duration-300 hover:text-cloud hover:bg-indigo p-2 m-10 w-36  "
            >
              Edit
            </button>
          </div>
        </ul>
      </div> -->
    </content-layout>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isUser: true,
    };
  },
  methods: {
      fetchPlace(){
        //   just copy form detailKT
          axios
        .get(
          `${process.env.VUE_APP_API}/krathong/getKrathong/${this.$route.params.kt_id}`
        )
        .then((res) => {
          this.krathong = res.data.data;
        });
      }
  },
   computed: {
    ...mapState({
      getWish: (state) => state.krathong.wish,
    })
  },
 
};
</script>
