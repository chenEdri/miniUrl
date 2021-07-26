<template>
  <section class="footer-container">
    <div class="foot-col">
      <div class="bold"><p>TECHNOLOGY</p></div>
      <p>Vue js</p>
      <p>Node.js</p>
      <p>Mongo DB</p>
      <p>MySql</p>
    </div>
    <div class="foot-col">
      <div class="bold"><p>CONTACT</p></div>
      <div class="mb10">
        <a class="foot-a mb10" href="mailto:chenedri22@gmail.com"
          >chenedri22@gmail.com</a
        >
        <div
          @click="
            openSource('https://api.whatsapp.com/send?phone=972537616607')
          "
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="icon cp"/>
        </div>
      </div>
    </div>
    <div class="foot-col">
      <div class="bold"><p>Media</p></div>
      <div
        @click="openSource('https://www.linkedin.com/in/chen-edri-46290776')"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" class="icon cp"/>
      </div>
      <div @click="openSource('https://github.com/chenEdri ')">
        <font-awesome-icon :icon="['fab', 'github']" class="icon cp"/>
      </div>
      <div @click="openSource('https://www.facebook.com/chen.edri.3')">
        <font-awesome-icon :icon="['fab', 'facebook']" class="icon cp"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openSource(source) {
      window.open(source, "_blank");
    },
  },
};
</script>

