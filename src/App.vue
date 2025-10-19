<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

const value = ref(null);



</script>

<template>
<div class="messanger">
  <div class="chat-list"></div>
  <div class="chat">
    <div class="card flex justify-center">

      <IftaLabel>
        <InputText id="message" v-model="value" />
      </IftaLabel>

      <Button label="Send" />
    </div>
  </div>
</div>

</template>


<style>
.messanger {
  display: flex;
  height: 100vh;
}
.chat-list {
  flex: 4;
  border: 1px solid #ccc;
  overflow-y: auto;
}
.chat {
  flex: 6;
  border: 1px solid #ccc;
  overflow-y: auto;

}

</style>