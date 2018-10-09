<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="widget">
        <div class="widget-body">
          <h2>Fax von {{ fax.sender }} ({{ fax.callID1 }})</h2>
          <table class="table">
            <tbody>
              <tr>
                <th  width="20%">Empfänger</th>
                <td>{{ fax.receiver }}</td>
              </tr>
              <tr>
                <th>Datum</th>
                <td>{{ fax.received }}</td>
              </tr>
              <tr>
                <th>Seiten</th>
                <td>{{ fax.pages }}</td>
              </tr>
              <tr>
                <th>Seiteneigenschaften</th>
                <td>{{ fax.page }}</td>
              </tr>
              <tr>
                <th>Qualität</th>
                <td>{{ fax.quality }}</td>
              </tr>
              <tr>
                <th>Dauer der Übertragung</th>
                <td>{{ fax.timeToRecv }}</td>
              </tr>
              <tr>
                <th>Signalrate</th>
                <td>{{ fax.signalRate }}</td>
              </tr>
              <tr>
                <th>Datenformat</th>
                <td>{{ fax.dataFormat }}</td>
              </tr>
              <tr>
                <th>Fehler Korrektur</th>
                <td>{{ fax.errCorrect }}</td>
              </tr>
              <tr>
                <th>Anrufer</th>
                <td>{{ fax.sender }} ({{ fax.callID1 }})</td>
              </tr>
              <tr>
                <th>Anrufer ID 1</th>
                <td>{{ fax.callID1 }}</td>
              </tr>
              <tr>
                <th>Anrufer ID 2</th>
                <td>{{ fax.callID2 }}</td>
              </tr>
              <tr>
                <th>Anrufer ID 3</th>
                <td>{{ fax.callID3 }}</td>
              </tr>
              <tr>
                <th>Anrufer ID 4</th>
                <td>{{ fax.callID4 }}</td>
              </tr>
            </tbody>
          </table>
          <button @click="openPdf(fax.id)" class="btn btn-dark"><i aria-hidden="true" class="fa fa-download"></i> Download</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/common/api'

export default {
  name: 'List',
  data: () => {
    return {
      fax: [],
      isLoading: false
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  watch: {
    id (value) {
      this.loadFax(value)
    }
  },
  methods: {
    loadFax(id) {
      var self = this
      this.isLoading = true
      api.get('fax', id).then((res) => {
        self.fax = res.data
        self.isLoading = false
      })
    },
    openPdf(id) {
      let routeData = this.$router.resolve({name: 'pdf', params: {id: id}});
      window.open(routeData.href, '_blank');
    }
  },
  beforeMount(){
    this.loadFax(this.id)
  }
}
</script>
