var RandomUser = new Vue({
  el: '#personWaitingApp',
  data: {
    persons: {
  }
},

  methods:{
    fetchPersons() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json=>{RandomUser.persons=json.results[0]});
    }
  },

  created() {
    this.fetchPersons();
  }

});
