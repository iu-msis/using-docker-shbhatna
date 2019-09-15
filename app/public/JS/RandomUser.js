var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },

  methods:{
    fetchPatients() {
      fetch('https://randomuser.me/api/')
      .then(function(response){
        waitingApp.patients = response.json();
      });
    }
  },

  created() {
    this.fetchPatients();
  }

});
