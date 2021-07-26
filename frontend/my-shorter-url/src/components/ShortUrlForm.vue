<template>
  <section>
    <form
      class="flex column url-form-container"
      novalidate
      @submit.prevent="validateUrl"
    >
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('nickname')">
              <label for="nickname">Website Name</label>
              <md-input
                name="nickname"
                id="nickname"
                type="text"
                v-model="form.nickname"
                :disabled="sending"
                required
              />
              <span class="md-error" v-if="!$v.form.nickname.required"
                >Nickname is required</span
              >
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('dbName')">
              <label for="dbName">Database</label>
              <md-select
                v-model="form.dbName"
                name="dbName"
                id="dbName"
                md-dense
                :disabled="sending"
              >
                <md-option value="mg">Mongo Db</md-option>
                <md-option value="sql">SQL Db</md-option>
                <md-option value="all">All</md-option>
              </md-select>
             
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('src')">
              <label for="url.src">Enter URL</label>
              <md-input
                name="src"
                id="src"
                v-model="form.src"
                required
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.src.required"
                >URL is required</span
              >
              <span class="md-error" v-else-if="!$v.form.src.url"
                >Invalid url</span
              >
            </md-field>
          </div>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button type="submit" class="md-primary" :disabled="sending"
          >Add</md-button
        >
      </md-card-actions>
    </form>
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, url } from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  props: ["currentDb", "userId"],
  data() {
    return {
      form: {
        src: "",
        nickname: "",
        userId: null,
        dbName: null,
        createdAt: null,
        updatedAt: null,
      },
      sending: false,
    };
  },
  async created() {
    this.form.userId = this.$props.userId;
  },
  validations: {
    form: {
      src:{
        required,
        url
      },
      nickname: {
        required
      },
    },
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      console.log(fieldName);
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },
    async addUrl() {
      const dbName = this.form.dbName;
      let newUrl = this.form;
      delete newUrl.dbName;
      this.$store.dispatch({
        type: "addUrl",
        url: newUrl,
        dbName: dbName,
        currentDb: this.$props.currentDb,
      });
      this.clearForm();
    },
    clearForm() {
      this.$v.$reset();
      this.form.src = null;
      this.form.nickname = null;
      this.form.dbName = null;
      this.form.createdAt = null;
      this.form.updatedAt = null;
    },
    async saveUrl() {
      await this.addUrl();
      this.sending = true;
    },
    validateUrl() {
      console.log("validate-", this.form);
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUrl();
      }
    },
  },
};
</script>