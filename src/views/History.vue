<template>
  <div>
    <navBar-layout />
    <content-layout>
      <p
        class="text-ash tablet:text-4xl font-bold text-center  text-xl m-8 tablet:m-16"
      >
        Transaction Log <br />
      </p>

      <!-- content -->
      <div class="px-10">
        <div>
          <!-- filter -->
          <div class=" flex justify-end  py-2">
            <select
              @click="sortBy()"
              v-model="sortSelected"
              class="rounded-full bg-indigo text-offWhite px-4 py-2"
            >
              <option disabled value=""></option>
              <option value="lastest">Lastest</option>
              <option value="earliest">Earliest</option>
            </select>
          </div>

          <!-- log -->
          <div class="p-3 divide-y divide-indigo bg-coin rounded-2xl">
            <div
              v-for="item in history"
              :key="item.h_id"
              class="grid grid-cols-3 py-4 "
            >
              <div>
                <p>{{ formatDate(item.h_date) }}</p>
              </div>
              <div>
                <p class="text-center">{{ item.wish }}</p>
              </div>
              <div>
                <p class="text-right">{{ item.place?.p_name || "" }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </content-layout>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import * as dayjs from "dayjs";
export default {
  data() {
    return {
      sortSelected: "",
      history: {
        h_date: "",
        wish: "",
        kt_id: 0,
        p_id: 0,
      },
      // user_id:1,
      logs: [
        {
          h_date: "2021-09-09 00:00:23",
          kt_name: "name of Krathong A",
          p_name: "place name A",
        },
        {
          h_date: "2021-09-09 00:00:24",
          kt_name: "name of Krathong B",
          p_name: "place name B",
        },
        {
          h_date: "2021-09-09 00:00:25",
          kt_name: "name of Krathong C",
          p_name: "place name C",
        },
      ],
    };
  },
  methods: {
    sortBy() {
      console.log(this.sortSelected);
      // switch (this.sortSelected) {
      //   case "lastest":

      //     break;
      //   case "earliest":

      //   break;
      //   default:
      //     break;
      // }
    },
    fetchHistory() {
      axios
        .get(`${process.env.VUE_APP_API}/history/getHistory/${this.$route.params.user_id}`)
        .then((res) => {
          this.history = res.data.data;
          console.log(this.history);
        });
    },
    formatDate(date) {
      return dayjs(date).format("MMMM D, YYYY h:mm A");
    },
  },
  computed: {
    ...mapState({
      getUserId: (state) => state.signin.user_id,
    }),
  },
  mounted() {
    this.fetchHistory();
  },
};
</script>
