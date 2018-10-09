<template>
  <div id="sidebar-wrapper">
    <ul class="sidebar">
      <li class="sidebar-main">
        <a href="#" @click="$emit('toggleSidebar')">
          Faxface
          <span class="menu-icon glyphicon glyphicon-transfer"></span>
        </a>
      </li>
      <li class="sidebar-title"><span>NAVIGATION</span></li>
      <li class="sidebar-list">
        <router-link :to="{ name: 'home'}">Dashboard <span class="menu-icon fa fa-tachometer-alt"></span></router-link>
        <router-link :to="{ name: 'faxes', params: { list: 'received' }}">Empfangen <span class="menu-icon fa fa-download"></span></router-link>
        <router-link :to="{ name: 'faxes', params: { list: 'sent' }}">Gesendet <span class="menu-icon fa fa-upload"></span></router-link>
        <!--<router-link :to="{ name: 'faxes', params: { list: 'queue' }}">Warteschlange <span class="menu-icon fa fa-spinner"></span></router-link>-->
        <router-link :to="{ name: 'send'}">Fax senden <span class="menu-icon fa fa-pen"></span></router-link>
        <router-link :to="{ name: 'settings'}">Einstellungen <span class="menu-icon fa fa-cog"></span></router-link>
        <router-link v-if="isAdmin" :to="{ name: 'adminLogs'}">Logs <span class="menu-icon fa fa-bug"></span></router-link>
        <a href="#" @click="logout">Logout <span class="menu-icon fa fa-times"></span></a>
      </li>
    </ul>
    <div class="sidebar-footer">
      <div class="col-xs-4">
        <a href="https://github.com/garogat/faxface" target="_blank">
          Github
        </a>
      </div>
      <div class="col-xs-4">
        <a href="#" target="_blank">
          About
        </a>
      </div>
      <div class="col-xs-4">
        <a href="#">
          Support
        </a>
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
