<template>
  <div class="place">
    <navBar-layout />
    <content-layout>
      <p
        class="m-8 text-xl font-bold text-center text-ash tablet:text-4xl tablet:m-16"
      >
        Place
      </p>

      <div class="grid w-full grid-cols-1 gap-10 laptop:grid-cols-3">
        <ul v-for="item in place" :key="item.p_name" class="flex justify-center">
          <button @click="loy">
            <div class="flex justify-center">
              <img
                :src="
                  'https://www.loykrathong.tech/api/image/placeImage/' +
                    item.p_id
                "
                class="object-contain w-64 h-64 p-2 rounded-full tablet:w-80 tablet:h-80 bg-sand "
              />
            </div>

            <div class="flex justify-center">
              <button
                class="p-2 m-10 rounded-full bg-cloud text-indigo hover:duration-300 hover:text-cloud hover:bg-indigo w-36"
              >
                {{ item.p_name }}
              </button>
            </div>
          </button>

          <!-- admin btn 
          <div v-if="!isUser" class="flex justify-center">
            <button
              class="p-2 m-10 rounded-full bg-cloud text-indigo hover:duration-300 hover:text-cloud hover:bg-indigo w-36"
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
      this.setTypePlace(this.$route.query.tp_id);
      this.$router.push(`/floating`);
    },
  },
  mounted() {
    this.fetchPlace();
  },
};
</script>
