const app = Vue.createApp({
  data() {
    return {
      myName: "Jimmy Wan",
      myAge: 31,
      imgSrc: "https://s.udemycdn.com/meta/default-meta-image-v2.png",
    };
  },
  methods: {
    calculateAge() {
      return this.myAge + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
