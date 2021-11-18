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
              'https://www.loykrathong.tech/api/image/krathongImage/' +
                this.$route.params.kt_id
            "
            class="w-80 h-80 bg-sand rounded-full object-contain p-2 "
          />
        </div>
        <div class="bg-cloud rounded-3xl p-5 py-10 w-3/5 ">
          <div><span class="font-bold">Name : </span>  {{ krathong.kt_name }}</div>
          <div><span class="font-bold">Type : </span>  {{ krathong.kt_type.type }}</div>
          <div><span class="font-bold">Detail : </span>  {{ krathong.detail }}</div>
          <div>
            <label for="wish" class="font-bold">Wish : </label>
            <input
              type="text"
              v-model.trim="entered.wish"
              class="rounded-3xl py-1 px-2 w-5/6 text-indigo  "
            />
            <p class="text-ash px-20">Enter wish no more than 200 characters</p>
            <p v-if="invalid.wish" class="text-red-500 px-20">
               This wish is Invalid !
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
import { mapActions, mapState } from "vuex";
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
        h_date:"",
        wish: "",
        kt_id:0,
        user_id:0,
        p_id:0,
      },
      invalid: {
        wish: null,
      },
      kt_id: "",
    };
  },

  methods: {
    ...mapActions({
      setKrathongId: "krathong/setKrathongId",
      setWish: "krathong/setWish",
    }),
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
      if(this.entered.wish == "" || this.entered.wish.length > 200){
          this.invalid.wish = true;

      }else{
        if (this.getRole == "") {
        this.setKrathongId(this.$route.params.kt_id);
        this.setWish(this.entered.wish);
        this.$router.push(`/floating`);
      } else {
        // axios
        //   .post(`${process.env.VUE_APP_API}/history/addHistory`, this.entered)
        //   .then((res) => {
        //     // console.log(res.data);
        //     this.setKrathongId(res.data.kt_id);
        //     this.setWish(res.data.wish);
        //     this.$router.push("/place");
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        this.setKrathongId(this.$route.params.kt_id);
        this.setWish(this.entered.wish);
         this.$router.push("/placeType");
      }
      }
    }
  },
  mounted() {
    this.fetchKrathong();
  },
  computed: {
    ...mapState({
      getRole: (state) => state.signin.role,
    }),
  },
};
</script>
