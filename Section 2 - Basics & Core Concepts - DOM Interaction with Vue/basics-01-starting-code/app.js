const app = Vue.createApp({
  //data is a function to return an object
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!", //you can output anything here, e.g. string, integer, array and object
      vueLink: "https://vuejs.org/",
    };
  },
  //methods is an object which is full of methods
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue!";
      }
    },
  },
});

//Define which HTML element will be controlled by Vue
app.mount("#user-goal"); //css selector
