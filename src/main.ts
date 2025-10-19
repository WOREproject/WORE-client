import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

// ⚙️ начальная тема — светлая
import "primevue/resources/themes/lara-light-blue/theme.css";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import InputGroup from "primevue/inputgroup";
import Terminal from 'primevue/terminal';
import IftaLabel from 'primevue/iftalabel';



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

// 🌙 функция для смены темы (по желанию)
app.config.globalProperties.$setTheme = (theme) => {
  const id = "primevue-theme";
  let link = document.getElementById(id);
  if (!link) {
    link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  link.href = `node_modules/primevue/resources/themes/${theme}/theme.css`;
};

// пример: app.config.globalProperties.$setTheme("lara-dark-blue")

app.mount("#app");
