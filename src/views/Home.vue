<template>
  <div class="home">
    <content-layout>
      <img src="@/assets/homePage.png" class="w-full " />
      <div class="flex justify-center ">
        <button class="btn text-3xl px-20 py-4 h-auto">Select Krathong</button>
      </div>

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
