<template>
  <div id="page-wrapper" :class="{ open: isSidebarOpen, loading: isLoading }">
    <Sidebar @toggleSidebar="toggleSidebar"></Sidebar>
    <div id="content-wrapper">
      <div class="page-content">
        <Header></Header>
        <router-view></router-view>
      </div><!-- End Page Content -->
    </div><!-- End Content Wrapper -->
  </div><!-- End Page Wrapper -->
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default {
  name: 'Wrapper',
  components: {
    Sidebar,
    Header
  },
  data: () => {
    return {
      isSidebarOpen: true,
      isLoading: true,
    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  watch: {
    isAuthenticated: function (val) {
      if (!this.isAuthenticated) {
        this.$router.push({ name: 'login' })
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    }
  },
  beforeMount(){
    this.isLoading = false

    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth
    if (width < 560) {
      // close sidebar on mobile devices
      this.isSidebarOpen = false
    }
  }
}
</script>
