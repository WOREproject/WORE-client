<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";


const message = ref<string>("");



function attachFile() {
  // Logic to attach a file
}
function sendMessage() {
  
  // Logic to send the message
}
</script>

<template>
<div class="messanger">
  <div class="chat-list"></div>

  <div class="chat-container">

    <div class="messages">

    </div>

    <div class="input-message">
        <Button icon="pi pi-paperclip" @click="attachFile" />

        <IftaLabel class="flex-1"> 
        <InputText  
            class="input-text-meassange w-full" 
            v-model="message" 
            placeholder="Input message..."
            @keyup.enter="sendMessage"
        />
        </IftaLabel>

      <Button 
      icon="pi pi-send"
      class="send-text-meassange" 
      @keyup.enter="sendMessage"
      />
    </div>
  </div>
</div>

</template>


<style>
.input-message {
  display: flex;
  align-items: center;

}

.flex-1 {
  flex: 1;
}

.input-text-meassange {
  width: 100%;
}


*{
  margin: 0 !important;
}
.messanger {
  display: flex;
  height: 100vh;
}
.chat-list {
  flex: 4;
  border: 1px solid #ccc;
  overflow-y: auto;
}
.chat-container {
  flex: 6;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  overflow-y: auto;

}
.messages {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
}
.input-message {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
}
.input-text-meassange {
  flex: 1;
  margin-right: 10px;
}
</style>