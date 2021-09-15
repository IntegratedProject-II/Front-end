<template>
  <div class="home">
      <navBar-layout />
    <content-layout>
      <img src="@/assets/homePage.png" class="w-full " />
      <router-link to="/krathong" class="flex justify-center">
        <button class="btn text-l tablet:text-xl laptop:text-3xl px-6 tablet:px-20 tablet:py-4 py-2 h-auto ">Select Krathong </button>
      </router-link >

      <!-- history -->
      <history></history>
    </content-layout>
  </div>
</template>

<script>
import history from '@/components/history.vue'
export default {
  name: "Home",
  components:{
    history,
  }
};
</script>
