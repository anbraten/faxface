<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="widget">
        <div class="widget-body no-padding">
          <div class="table-responsive">
            <table class="table table-hover table-filters">
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Level</th>
                  <th>Nachricht</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="log in logs">
                  <template v-if="category === null || category == log.module">
                    <td>{{ log.module || 'default' }}</td>
                    <td>{{ log.level }}</td>
                    <td v-html="prettyHTML(log.message)"></td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/common/api'

export default {
  name: 'AdminLogs',
  data: () => {
    return {
      logs: [],
      isLoading: false,
      reloader: null
    }
  },
  methods: {
    loadLogs () {
      var self = this
      this.isLoading = true
      api.get('admin', 'logs').then((res) => {
        var data = '[' + res.data.trim().replace(/(?:\r\n|\r|\n)/g, ',') + ']'
        this.logs = JSON.parse(data).reverse()
        self.isLoading = false
      })
    },
    prettyHTML(html) {
      return html.replace(/\n/g, "<br />")
    }
  },
  computed: {
    category() {
      return this.$route.params.category || null
    }
  },
  beforeMount() {
    this.loadLogs()
    this.reloader = setInterval(this.loadLogs, 5000)
  },
  beforeDestroy() {
    clearInterval(this.reloader)
  }
}
</script>
