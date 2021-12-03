<template>
  <div>
    <navBar-layout />
    <content-layout>
                  <p
        class="m-8 text-xl font-bold text-center text-ash tablet:text-4xl tablet:m-16"
      >
        Admin : Place
      </p>
      <div
        class="flex flex-col items-center laptop:flex-row laptop:justify-center p-10 gap-10"
      >
        <Form @submit="submit" v-slot="{ errors }">
          <!-- add image  -->
          <div>
            <label class="label" for="p_image">Choose photo </label>
            <input
              type="file"
              id="p_image"
              accept="image/*"
              @change="onFileChange"
              required
            />
          </div>
          <!-- add name  -->

          <div class="bg-cloud rounded-3xl p-5 py-10 w-3/5 ">
            <div>
              <label for="placeName">
                Name
              </label>
              <Field
                name="p_name"
                type="text"
                v-model.trim="entered.p_name"
                rules="required"
              />
              <p class="text-red-500">{{ errors.p_name}}</p>
            </div>
            <!-- add type  -->
            <div>
              <label for="Type">
                Type
              </label>
              <br />

              <Field
                name="tp_id"
                as="select"
                v-model="entered.tp_id"
                rules="required"
              >
                <option
                  v-for="type in typePlace"
                  :key="type.tp_id"
                  :value="type.tp_id"
                >

                  {{ type.tp_name }}
                </option>
              </Field>
              <p class="text-red-500">{{ errors.tp_id }}</p>
            </div>
            <!-- add detail  -->
            <div>
              <label for="placeDetail">
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
import { mapState } from "vuex";
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
        p_name: "",
        p_image: "",
        detail: "",
        tp_id: 0,
      },
      typePlace:[],

    };
  },
  components: {
    Field,
    Form,
  },
  methods: {
    fetchType() {
      axios
        .get(`${process.env.VUE_APP_API}/placeType/getPlaceType`)
        .then((res) => {
          // console.log(res.data);
          this.typePlace = res.data.data;
        });
    },
  },
  mounted() {
    this.fetchType();
    if (this.getRole != 2) {
      this.$router.push(`/`);
    }
  },
  computed: {
    ...mapState({
      getRole: (state) => state.signin.role,
    }),
  },
};
</script>
