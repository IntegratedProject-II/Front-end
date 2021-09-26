<template>
    <div class="allKrathong">
      <navBar-layout />
      <content-layout>
         <p class="text-ash tablet:text-4xl font-bold text-center  text-xl m-8 tablet:m-16">Krathong</p> 

          <!-- list of krathong -->
          <krathong-preview>
            <img src="../assets/logo.png"/>
          </krathong-preview>
         <div>
           
         </div>

    
      </content-layout>
    </div>
</template>
<script>
import krathongPreview from "@/components/krathongPreview.vue"
export default {
  component:{
  krathongPreview,
  }
}
</script>