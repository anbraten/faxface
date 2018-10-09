<template>
  <div class="row header">
    <div class="col-xs-12">
      <div class="user pull-right">
        <div class="item">
          <a href="#" @click="logout"><i class="fa fa-sign-out-alt"></i></a>
        </div>
      </div>
      <div class="meta">
        <div class="page">
          Faxface
        </div>
        <div class="breadcrumb-links">
          Home / ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { LOGOUT } from '@/store/actions.type'

export default {
  name: 'sidebar',
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT)
      this.$router.push({ name: 'login' })
    }
  },
  computed: {
    ...mapGetters([
      'isAdmin'
    ])
  }
}
</script>
