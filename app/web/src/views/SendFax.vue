<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="widget">
        <div class="widget-body">
          <form v-on:submit.prevent="onSubmit()">
            <div class="form-group">
              <select class="form-control" required>
                <option value=""></option>
                <option value="+491234">+491293717239821739</option>
              </select>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="destination" placeholder="Empfänger (Nummer)" v-model="destination" required />
            </div>
            <div class="form-group">
              <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" accept="application/pdf" required />
            </div>
            <input v-if="!loading" type="submit" class="btn btn-dark" value="Senden"/>
            <button v-else class="btn btn-dark"><i class="fa fa-spinner fa-pulse fa-fw"></i> Wird gesendet ...</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/common/api'
import jwt from '@/common/jwt'

export default {
  name: 'SendFax',
  data: function () {
    return {
      loading: false,
      file: '',
      destination: ''
    }
  },
  methods: {
    onSubmit() {
      var self = this
      this.loading = true

      var payload = new FormData()
      payload.append('destination', this.destination)
      payload.append('faxfile', this.file)

      api.upload('send', payload)
        .then((response) => {
          // TODO
          console.log(response.data)
          self.loading = false
        })
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0]
    }
  }
}
</script>

<style>
</style>
