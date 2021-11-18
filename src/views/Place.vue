<template>
  <div class="place">
    <navBar-layout />
    <content-layout>
      <p
        class="text-ash tablet:text-4xl font-bold text-center  text-xl m-8 tablet:m-16"
      >
        Place
      </p>

      <div class="grid grid-cols-3 gap-10 w-full">
        <ul v-for="item in place" :key="item.p_name">
          <button @click="loy">
            <div class="flex justify-center">
              <img
                :src="
                  'https://www.loykrathong.tech/api/image/placeImage/' +
                    item.p_id
                "
                class="w-80 h-80 bg-sand rounded-full object-contain p-2 "
              />
            </div>

            <div class="flex justify-center">
              <button
                class=" bg-cloud text-indigo rounded-full hover:duration-300 hover:text-cloud hover:bg-indigo p-2 m-10 w-36  "
              >
                {{ item.p_name }}
              </button>
            </div>
          </button>

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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      //   place: {
      //     p_name: "",
      //     p_image: "",
      //     detail:"",
      //     tp_id:0,
      //   },
      place: [],
    };
  },
  methods: {
    ...mapActions({
      setTypePlace: "krathong/setTypePlace",
    }),
    fetchPlace() {
      axios.get(`${process.env.VUE_APP_API}/place/getPlace`).then((res) => {
        this.place = res.data.data.filter(
          (place) => place.tp_id == this.$route.query.tp_id
        );

        //   this.place = res.data.data;
        //     (this.$route.query.tp_id == this.place.tp_id)
      });
    },
    loy() {
      this.setTypePlace(this.$route.query.tp_id)
      this.$router.push(`/floating`);
    },
  },
  mounted() {
    this.fetchPlace();
  },
};
</script>
