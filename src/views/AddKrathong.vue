<template>
  <div>
    <navBar-layout />
    <content-layout>
      <div
        class="flex flex-col items-center laptop:flex-row laptop:justify-center p-10 gap-10"
      >
        <Form @submit="submit" v-slot="{ errors }">
          <!-- add image  -->
          <div>
             <label class="label" for="kt_image">Choose photo </label>
            <input
            type="file"
            id="kt_image"
            accept="image/*" 
            @change="onFileChange"
            required
          />

          </div>
          <!-- add name  -->

          <div class="bg-cloud rounded-3xl p-5 py-10 w-3/5 ">
            <div>
              <label for="krathongName">
                Name(Krathong)
              </label>
              <Field
                name="kt_name"
                type="text"
                 v-model.trim="entered.kt_name"
                rules="required"
              />
              <p class="text-red-500">{{ errors.kt_name }}</p>
            </div>
            <!-- add type  -->
            <div>
              <label for="Type">
                Type
              </label>
              <br />

              <Field
               
                name="type"
                as="select"
                v-model="entered.t_id"
                rules="required"
              >
                <option
                  v-for="type in kt_type"
                  :key="type.t_id"
                  :value="type.t_id"
                >
                  {{ type.type }}
                </option>
              </Field>
            </div>
            <!-- add amount  -->
            <div>
              <label for="Total">
                Total
              </label>
              <Field
                name="total"
                type="number"
                v-model="entered.amount"
                rules="required"
              />
              <!-- <Field name="total" type="text" v-model="entered.amount"></Field> -->
            </div> 
            <!-- add detail  -->
            <div>
              <label for="krathongDetail">
                Detail
              </label>
              <Field
                name="detail"
                type="text"
                v-model.trim="entered.detail"
                rules="required"
              />
              <p class="text-red-500">{{ errors.detail }}</p>
            </div>

            <div class="flex justify-end">
              <button
                class=" bg-rose rounded-full hover:duration-300 hover:text-rose hover:bg-white p-2 tablet:m-10 m-3 w-36 text-white"
                @click="clear"
              >
                Clear
              </button>

              <button
                class=" bg-fern rounded-full hover:duration-300 hover:text-fern hover:bg-white p-2 tablet:m-10 m-3 w-36 text-white"
              >
                Create
              </button>
            </div>
          </div>
        </Form>
      </div>
    </content-layout>
  </div>
</template>

<script>
import axios from "axios";
import { Form, Field, defineRule } from "vee-validate";
defineRule("required", (value) => {
  if (!value) {
    return "This field is required ";
  }
  return true;
});
export default {
  data() {
    return {
      entered: {
        kt_name: "",
        amount: 1,
        kt_image: "",
        detail: "",
        t_id: 0,
      },
      kt_type: []
      ,
    };
  },
  components: {
    Field,
    Form,
  },
  methods: {
    fetchType(){
         axios.get(`${process.env.VUE_APP_API}/krathongType/getType`).then((res) => {
        // console.log(res.data);
        this.kt_type = res.data.data;
      });
    },
    clear() {
      console.log("clear method");
    },
    submit() {

      console.log("create method");
      // console.log(this.entered)
      this.addKrathong();
    },
    onFileChange(e){
      this.entered.kt_image = e.target.files[0]
      console.log(e.target.files[0])
    },
    addKrathong(){
      let data = {
        kt_name: this.entered.kt_name,
        amount: Number(this.entered.amount),
        kt_image : this.entered.kt_image.name,
        detail: this.entered.detail,
        t_id: this.entered.t_id
      }
      console.log(data)

     let convertToJSON = JSON.stringify(data);
      const blob = new Blob([convertToJSON], {
        type: "application/json"
      });
      let formData = new FormData();

      formData.append("image", this.entered.kt_image, this.entered.kt_image.name);
      formData.append("data", blob, "data.json");
     axios.post(
          "https://www.loykrathong.tech/api/krathong/addKrathong",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" }
          }
        )
        .then(res => {
          console.log(res);
        })  
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  mounted() {
    this.fetchType()
  },
};
</script>
