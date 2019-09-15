var RandomUser = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients:{ }
  },

  methods:{
    fetchPatients() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json=>{RandomUser.patients=json.results[0]})
    }
  },

  created() {
    this.fetchPatients();
  }

});
