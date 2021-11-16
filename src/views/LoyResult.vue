<template>
  <div>
    <navBar-layout />
    <content-layout>
      <p>Wish :{{ this.getWish }}</p>

      <div class="flex justify-center">
        <img
          :src="
            'https://www.loykrathong.tech/api/image/krathongImage/' +
              this.$route.params.kt_id
          "
          class="w-96  animate-bounce"
        />
      </div>
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
