import { createApp } from "vue";

createApp({
  data() {
    return {
      skills: [
        {name: "Github", icon_path:"./images/download.svg", description:"Use of github to track down changes during my projects"},
        {name: "Test", icon_path:"./images/download.svg", description:"Use of github to track down changes during my projects"}
      ],
    };
  },
  methods: {
    displayTodo() {
      console.log("test vue JS");
    }
  }

}).mount('#skills');
