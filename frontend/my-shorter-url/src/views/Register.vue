<template>
  <section>
    <form novalidate @submit.prevent="onSignup" class="md-layout form">
      <md-card class="md-layout-item md-size-100 md-medium-size-200">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>
      </md-card>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('userName')">
              <label for="userName">User Name</label>
              <md-input
                id="userName"
                v-model="form.userName"
                type="text"
                required
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.userName.required"
                >The name is required</span
              >
              <span class="md-error" v-else-if="!$v.form.userName.minlength"
                >Invalid name length</span
              >
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input
                autocomplete="email"
                :disabled="sending"
                name="email"
                id="email"
                v-model="form.email"
                type="email"
                required
              />
              <span class="md-error" v-if="!$v.form.email.required"
                >The email is required</span
              >
              <span class="md-error" v-else-if="!$v.form.email.email"
                >Invalid email</span
              >
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('password')">
              <label for="password">Paswword</label>
              <md-input
                :disabled="sending"
                name="password"
                id="password"
                v-model="form.password"
                type="password"
                required
              />

              <span class="md-error" v-if="!$v.form.password.required"
                >The password is required</span
              >
              <span class="md-error" v-else-if="!$v.form.password.password"
                >Invalid Password</span
              >
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field class="form-width">
              <label class="label">confirm Password</label>
              <md-input
                name="confirmPassword"
                id="confirmPassword"
                v-model="form.confirmPassword"
                type="password"
                :rules="[comparePasswords]"
              />
              <span class="md-error" v-if="!$v.form.confirmPassword.required"
                >The password is required</span
              >
              <span
                class="md-error"
                v-else-if="!$v.form.confirmPassword.sameAsPassword"
                >Incorect Password</span
              >
            </md-field>
          </div>
        </div>
      </md-card-content>
      <md-progress-bar md-mode="indeterminate" v-if="sending" />
      <md-card-actions>
        <md-button type="submit" class="md-primary" :disabled="sending"
          >Login</md-button
        >
      </md-card-actions>
    </form>
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      sending: false,
    };
  },
  validations: {
    form: {
      userName: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        password: minLength(5),
      },
      confirmPassword: {
        sameAsPassword: sameAs("password"),
      },
    },
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    user() {
      return this.$store.getters.user;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.userName = null;
      this.form.email = null;
      this.form.password = null;
    },
    onSignup() {
      this.$store.dispatch("login", {
        userName: this.form.userName,
        email: this.form.email,
        password: this.form.password,
      });
      this.clearForm()
    },
  },
};
</script>