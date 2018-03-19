const vm = new Vue ({
  el: "#app",  //everything has to be in the container to be rendered by Vue

  data : {
    WelcomeMessage : " Welcome to your first Vue app",
    hasVue :  false,

    vuemessage: "You can has vue",

    targeturl: "http:vuejs.org",

    anchoroff : true,

    deliciousFruit : [
      {name: "apples", flavour: "tangy!"},
      {name: "peaches", flavour: "sweet"},
      {name: "grapes", flavour: "squishy"}
    ]
  },

  methods : {
    logFruit(e){
      console.log(e.currentTarget);
    }
  }
});
