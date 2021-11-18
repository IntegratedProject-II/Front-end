<template>
      <div class="place">
    <navBar-layout />
    <content-layout>
      <p
        class="text-ash tablet:text-4xl font-bold text-center  text-xl m-8 tablet:m-16"
      >
        Place
      </p>

      <!-- <router-link to="/addKrathong">
       add Place btn(Admin)
      </router-link> -->
      <div class="grid grid-cols-3 gap-10 w-full">
        
        <ul v-for="item in ktImage" :key="item.kt_id">
          <router-link :to="`/krathong/${item.kt_id}`">
            <div class="flex justify-center">
              <img
                :src="
                  'https://www.loykrathong.tech/api/image/krathongImage/' + item.kt_id
                "
                class="w-80 h-80 bg-sand rounded-full object-contain p-2 "
              />
            </div>

            <div v-if="isUser" class="flex justify-center">
              <button
                class=" bg-cloud text-indigo rounded-full hover:duration-300 hover:text-cloud hover:bg-indigo p-2 m-10 w-36  "
              >
                Choose
              </button>
            </div>
          </router-link>

          <!-- admin btn  -->
          <div v-if="!isUser" class="flex justify-center">
            <button
              class=" bg-cloud text-indigo rounded-full hover:duration-300 hover:text-cloud hover:bg-indigo p-2 m-10 w-36  "
            >
              Edit
            </button>
          </div>
        </ul>
      </div>
    </content-layout>
  </div>
</template>
<script>
export default {
data() {
  return {
    // place:{
    //   kt_name:"",

    // }
  }
},
}
</script>