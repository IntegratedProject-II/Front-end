<template>
  <div>
    <navBar-layout />
    <!-- <div class="animate-bounce ">
            <img src="../assets/krathong/kt10.png" >
        </div>
         -->
    <content-layout>
      <p
        class="text-ash tablet:text-4xl font-bold text-center  text-xl m-8 tablet:m-16"
      >
        Transaction Log
      </p>

      <!-- content -->
      <div class="px-10">
        <div >
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
              v-for="log in logs"
              :key="log.h_id"
              class="grid grid-cols-3 py-4 "
            >
              <div><p>{{ log.h_date }}</p></div>
              <div ><p class="text-center">{{ log.kt_name }}</p></div>
              <div><p class="text-right">{{ log.p_name }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </content-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortSelected: "",
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
    },
  },
};
</script>
