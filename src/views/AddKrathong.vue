<template>
  <div>
    <content-layout>
      <div
        class="flex flex-col items-center laptop:flex-row laptop:justify-center p-10 gap-10"
      >
        <Form @submit="submit" v-slot="{ errors }">
          <div>
            <img
              src="/src/assets/kratong2_color.png"
              class="w-80 h-80 bg-sand rounded-full object-contain p-2 "
            />
            <button @click="choosePhoto">
              Choose photo
            </button>
          </div>
          <div class="bg-cloud rounded-3xl p-5 py-10 w-3/5 ">
            <div>
              <label for="krathongName">
                Name(Krathong)
              </label>
              <Field
                name="kt_name"
                type="text"
                v-model.trim="kt_name"
                rules="required"
              />
              <p class="text-red-500">{{ errors.kt_name }}</p>
            </div>
            <div>
              <label for="Type">
                <Field name="type" as="select"
                v-model="entered.t_id"
                rules = "required" />
              </label>
              
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
                @click="create"
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
        amount: 0,
        kt_image: "",
        detail: "",
        t_id: 0,
      },
    };
  },
  components: {
    Field,
    Form,
  },
  methods: {
    clear() {
      console.log("clear method");
    },
    create() {
      axios
        .post(`${process.env.VUE_APP_API}/addKrathong`, this.entered)
        .then((res) => {
          console.log(res.data);
          alert("Create Krathong successfully");
          this.$router.push("/loy");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("create method");
    },
    choosePhoto() {},
  },
};
</script>
