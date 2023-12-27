const app = Vue.createApp({
  data() {
    return { inputText1: "", inputText2: "" };
  },
  methods: {
    showAlert() {
      alert("Wow!");
    },
    updateText1(event) {
      this.inputText1 = event.target.value;
    },
    updateText2(event) {
      this.inputText2 = event.target.value;
    },
  },
});
app.mount("#assignment");
