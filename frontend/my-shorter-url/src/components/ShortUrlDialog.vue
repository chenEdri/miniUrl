<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Send Link</md-dialog-title>
      <md-tabs md-dynamic-height>
        <md-tab md-label="General">
          <p>send your new link via: {{shortUrl}} to your friend by whatsapp sms</p>
        </md-tab>

        <md-tab md-label="Activity">
          <input type="text" v-model="phone"/>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false"
          >Close</md-button
        >
        <md-button class="md-primary"  @click="sendByWhatsapp()"
          >Send</md-button
        >
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "ShortUrlDialog",
  props:["shortUrl", "isOpen"],
  data: () => ({
    showDialog: false,
    phone:''
  }),
  created(){
      this.showDialog = this.$props.isOpen
  },
  watch:{
      "showDialog"(val){
          console.log(this.isOpen, val);

      },
      "shortUrl"(newVal){
          console.log(newVal);
      }
  },
  methods:{
      sendByWhatsapp(){
          console.log(this.phone);
        // http://api.whatsapp.com/send?phone=xxxxxxxxxx
          this.phone = '';
          this.showDialog = false;
      }
  }
};
</script>

