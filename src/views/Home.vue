<template>
  <div class="home">
    <navBar-layout />
    <content-layout>
      <img src="@/assets/homePage.png" class="w-full " />
      <router-link to="/loy" class="flex justify-center">
        <button
          class="text-indigo bg-coin rounded-full hover:duration-300 hover:text-silver hover:bg-white text-l  tablet:text-xl laptop:text-3xl px-6 tablet:px-20 tablet:py-4 py-2 h-auto "
        >
          Select Krathong
        </button>
      </router-link>
      <div class="flex justify-center">
<p >.. Register for select more location ..</p>
      </div>
    
      <!-- history -->
      <history></history>
    </content-layout>
  </div>
</template>

<script>
import history from "@/components/history.vue";
export default {
  name: "Home",
  components: {
    history,
  },
};
</script>
