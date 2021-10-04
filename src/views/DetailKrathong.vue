<template>
  <div>
    <navBar-layout />

    Name Type
  
  </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            krathong:{
                kt_name:null,
                amount: null,
                kt_image:null,
                detail:null,
                t_id:null,

            }
          
        }
    },
  methods: {
    fetchKrathong() {
      axios
        .get(`${process.env.VUE_APP_API}/krathong/getKrathong`)
        .then((res) => {
          this.ktImage = res.data.data;

        });
    },
  },
  mounted(){
      this.fetchKrathong();
  }
};
</script>
