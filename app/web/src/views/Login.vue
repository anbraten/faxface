<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="widget">
        <div class="widget-body">
          Login
          <ul v-if="errors" class="error-messages">
            <li v-for="(v, k) in errors" :key="k">
              {{k}} {{ v | error }}
            </li>
          </ul>
          <form v-on:submit.prevent="login(username, password)">
            <div class="form-group">
              <input type="text" name="username" class="form-control" v-model="username" placeholder="Benutzername">
            </div>
            <div class="form-group">
              <input type="password" name="password" class="form-control" v-model="password" placeholder="Passwort">
            </div>
            <input type="submit" class="btn btn-default" value="Login">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.widget {
  margin-top: 15px;
}
</style>

<script>
import { mapState } from 'vuex'
import { LOGIN } from '@/store/actions.type'

export default {
  name: 'Login',
  data: () => {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login (username, password) {
      this.$store
        .dispatch(LOGIN, { username, password })
        .then(() => {
          this.$router.push({ name: 'home' })
        })
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
</script>
