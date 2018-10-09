<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="widget">
        <div class="widget-body no-padding">
          <div class="table-responsive">
            <table class="table table-hover table-filters">
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Absender</th>
                  <th>Empfänger</th>
                  <th>Seiten</th>
                  <th width="1%"></th>
                </tr>
              </thead>
              <tbody>
                <tr @click="openFax(fax.id)" v-for="fax in faxes">
                  <td>{{ fax.received }}</td>
                  <td>{{ fax.sender }} ({{ fax.callID1 }})</td>
                  <td>{{ fax.receiver }}</td>
                  <td>{{ fax.pages }}</td>
                  <td>
                    <router-link :to="{ name: 'fax', params: {id: fax.id} }" class="btn btn-default"><i aria-hidden="true" class="fa fa-eye"></i> Öffnen</router-link>
                  </td>
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
import router from '@/router'
import api from '@/common/api'

export default {
  name: 'List',
  data: () => {
    return {
      faxes: [],
      isLoading: false,
      reloader: null
    }
  },
  computed: {
    list () {
      return this.$route.params.list
    }
  },
  watch: {
    list (value) {
      this.loadFaxes(value)
    }
  },
  methods: {
    loadFaxes () {
      var self = this
      this.isLoading = true
      api.get('faxes', this.list).then((res) => {
        self.faxes = res.data
        self.isLoading = false
      })
    },
    openFax (id) {
      router.push({ name: 'fax', params: { id: id }})
    }
  },
  beforeMount(){
    this.loadFaxes()
    this.reloader = setInterval(this.loadFaxes, 5000)
  },
  beforeDestroy() {
    clearInterval(this.reloader)
  }
}
</script>
