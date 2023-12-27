const app = Vue.createApp({
  //data is a function to return an object
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!", //you can output anything here, e.g. string, integer, array and object
      courseGoalB: "<h2>Master Vue and building amazing apps!</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  //methods is an object which is full of methods
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        //why you can use "this" syntax here? -> Vue takes all the data the data methods and merges into a global Vue instance object
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

//Define which HTML element will be controlled by Vue
app.mount("#user-goal"); //css selector
