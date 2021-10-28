<template>
  <div>
    <navBar-layout />
    <content-layout>
      <div
        class="flex flex-col items-center laptop:flex-row laptop:justify-center p-10 gap-10"
      >
        <div>
          <img
            :src="
              'http://52.187.149.36/api/image/krathongImage/' +
                this.$route.params.kt_id
            "
            class="w-80 h-80 bg-sand rounded-full object-contain p-2 "
          />
        </div>
        <div class="bg-cloud rounded-3xl p-5 py-10 w-3/5 ">
          <div>Name : {{ krathong.kt_name }}</div>
          <div>Type : {{ krathong.kt_type.type }}</div>
          <div>Detail : {{ krathong.detail }}</div>
          <div>
            <label for="wish">Wish : </label>
            <input
              type="text"
              v-model.trim="entered.wish"
              class="rounded-3xl py-1 px-2 w-5/6 text-indigo  "
            />
            <p v-if="invalid.wish" class="text-red-500 px-20">
              Please enter wish!
            </p>
          </div>
          <div class="flex justify-end">
            <button
              class=" text-indigo bg-coin rounded-full hover:duration-300 hover:text-silver hover:bg-white p-2 m-10 px-10"
              @click="loy"
            >
              Loy
            </button>
            <router-link to="/loy">
              <button
                class=" text-indigo bg-coin rounded-full hover:duration-300 hover:text-silver hover:bg-white p-2 m-10 px-10"
              >
                Back
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </content-layout>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      krathong: {
        kt_name: null,
        amount: null,
        kt_image: null,
        detail: null,
        kt_type: {
          t_id: null,
          type: null,
        },
      },
      entered: {
        wish: null,
      },
      invalid: {
        wish: null,
      },
      kt_id: "",
    };
  },
  methods: {
    fetchKrathong() {
      axios
        .get(
          `${process.env.VUE_APP_API}/krathong/getKrathong/${this.$route.params.kt_id}`
        )
        .then((res) => {
          this.krathong = res.data.data;
        });
    },
    loy() {
      console.log(this.entered.wish);
      this.invalid.wish =
        this.entered.wish === undefined || this.entered.wish === ""
          ? true
          : false;
      axios
        .post(`${process.env.VUE_APP_API}/person/register`, this.entered)
        .then((res) => {
          console.log(res.data);
          // this.$router.push("/place");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchKrathong();
  },
};
</script>
