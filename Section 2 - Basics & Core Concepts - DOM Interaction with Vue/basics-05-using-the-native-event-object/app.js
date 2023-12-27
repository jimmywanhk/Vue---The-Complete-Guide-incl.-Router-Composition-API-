const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullname: "",
    };
  },
  watch: {
    //you can use the same name that is defined in the data function, or in the computed property (e.g. counter, name, fullname)
    //if this.name changes, the following watcher method will re-execute
    //the "value" parameter here is refer to "this.name"
    name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + "Wan";
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = this.name + " " + value;
      }
    },
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 1000);
      }
    },
  },

  computed: {
    // Commenting out the fullname computed property
    // fullname() {
    //   console.log("Running again...");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Wan";
    // },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
