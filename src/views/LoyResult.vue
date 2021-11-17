<template>
  <div>
    <navBar-layout />
    <div class="relative">
      <img src="../assets/defaultResult.png" class="z-0 absolute pr-7 " />

      <div class="flex justify-end">
        <router-link
          to="/"
          class=" text-indigo bg-coin rounded-full hover:duration-300 hover:text-silver hover:bg-white p-2 m-10 px-10"
        >
          Exit
        </router-link>
      </div>
    
    </div>
    <div class="relative top-64 px-8">
       <marquee truespeed="180">
      <div class="z-10 relative w-max  animate-floating">
        <div class="flex justify-center ">
          <img
            :src="
              'https://www.loykrathong.tech/api/image/krathongImage/' +
                this.$route.params.kt_id
            "
            class="w-96 "
          />
        </div>
        <div
          class="rounded-lg bg-lemon text-indigo p-5 w-max flex justify-center absolute right-4 bottom-4"
        > 
            <p>{{ this.getWish }}</p>
     
        </div>
      </div>
      </marquee>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isUser: true,
      ktImage: [],
    };
  },
  methods: {
    fetchKrathong() {
      axios
        .get(
          `${process.env.VUE_APP_API}/krathong/getKrathong/${this.$route.params.kt_id}`,
          console.log(this.$route.params.kt_id)
        )
        .then((res) => {
          this.ktImage = res.data.data;
        });
    },
  },
  computed: {
    ...mapState({
      getWish: (state) => state.krathong.wish,
    }),
  },
  mounted() {
    this.fetchKrathong();
  },
};
</script>

