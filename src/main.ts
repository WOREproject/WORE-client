import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/lara-dark-blue/theme.css";


// ⚙️ начальная тема — светлая
import "primevue/resources/themes/lara-light-blue/theme.css";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import InputGroup from "primevue/inputgroup";
import Message from 'primevue/message';




const app = createApp(App);

app.use(PrimeVue, {
  ripple: true,
  inputStyle: "filled",
});

// регистрация компонентов
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Card", Card);
app.component("Avatar", Avatar);
app.component("Badge", Badge);
app.component("InputGroup", InputGroup);


app.config.globalProperties.$setTheme = (theme: string) => {
  const id = "primevue-theme";
  let link = document.getElementById(id) as HTMLLinkElement;
  if (!link) {
    link = document.createElement("link") as HTMLLinkElement;
    link.id = id;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  link.href = `node_modules/primevue/resources/themes/${theme}/theme.css`;
};


app.mount("#app");
