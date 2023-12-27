const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!", //you can output anything here, e.g. string, integer, array and object
    };
  },
});

//Define which HTML element will be controlled by Vue
app.mount("#user-goal"); //css selector
