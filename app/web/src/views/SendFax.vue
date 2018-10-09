<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="widget">
        <div class="widget-body">
          <form v-on:submit.prevent="onSubmit()">
            <div class="form-group">
              <select class="form-control">
                <option value="">+491293717239821739</option>
              </select>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="name" placeholder="Empfänger (Name)" v-model="name">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="number" placeholder="Empfänger (Nummer)" v-model="number">
            </div>
            <div class="form-group">
              <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
            </div>
            <input type="submit" class="btn btn-dark" value="Senden"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'

import api from '@/common/api'
import jwt from '@/common/jwt'

export default {
  name: 'SendFax',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
        url: 'ts',
        maxFiles: 1,
        acceptedFiles: 'image/*,application/pdf',
        createImageThumbnails: false,
        autoQueue: false,
        addRemoveLinks: false,
        headers: {
          'authorization': jwt.getToken()
        },
      },
      name: '',
      number: ''
    }
  },
  methods: {
    onSubmit() {
      var payload = {
        name: this.name,
        number: this.number,
        faxfile: this.$refs.myVueDropzone.getAcceptedFiles()
      }
      api.post('send', payload)
        .then((response) => {
          // TODO
          console.log(response)
        })
    }
  }
}
</script>

<style>
</style>
