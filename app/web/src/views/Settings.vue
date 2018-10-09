<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="widget">
        <div class="widget-body">
          Settings
          <form v-on:submit.prevent="submit(currentUser.email, password, passwordConfirm)">
            <div class="form-group">
              <input type="text" v-model="currentUser.email" class="form-control" value="" placeholder="E-Mail">
            </div>
            <div class="form-group">
              <input type="password" v-model="password" class="form-control" value="" placeholder="Passwort">
            </div>
            <div class="form-group">
              <input type="password" v-model="passwordConfirm" class="form-control" value="" placeholder="Passwort bestätigen">
            </div>
            <input type="submit" class="btn btn-default" value="Speichern">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/common/api'
import { mapGetters } from 'vuex'

export default {
  name: 'settings',
  data: () => {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      error: false
    }
  },
  methods: {
    submit(email, password, passwordConfirm) {
      var data = {}

      if (password) {
        if(password !== passwordConfirm) {
          this.error = true
        } else {
          data.password = password
        }
      }

      if (email) {
        data.email = email
      }

      api.post('me/update', data).then((res) => {
        // TODO: success
      })
    }
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  }
}
</script>
