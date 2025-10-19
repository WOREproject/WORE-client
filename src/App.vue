<script setup lang="ts">
import { ref, nextTick } from "vue";
import { invoke } from "@tauri-apps/api/core";

// -----------------------------
// Define the type for chat messages
// -----------------------------
type Message = {
  from: string;       // Sender of the message
  text: string;       // Message text
  time?: string;      // Optional timestamp
};

// -----------------------------
// Reactive state
// -----------------------------
const messages = ref<Message[]>([]); // Array to hold chat messages
const message = ref<string>("");     // Current input text

// -----------------------------
// Functions
// -----------------------------

// Function to attach a file (placeholder for now)
function attachFile() {
  // TODO: Implement file attachment logic
}

// Function to send a message
function sendMessage() {
  if (!message.value) return; // Do nothing if input is empty

  // Add message to the array
  messages.value.push({
    from: "Me",
    text: message.value,
    time: new Date().toLocaleTimeString()
  });

  message.value = ""; // Clear the input field

  // Scroll to the bottom after DOM update
  nextTick(() => {
    const container = document.querySelector(".messages");
    if (container) container.scrollTop = container.scrollHeight;
  });
}
</script>

<template>
  <div class="messenger">
    
    <!-- Sidebar for chat list -->
    <div class="chat-list"></div>

    <!-- Main chat area -->
    <div class="chat-container">

      <!-- Messages display area -->
      <div class="messages">
        <div v-for="(msg, index) in messages" :key="index" class="message">
          <b>{{ msg.from }}:</b> {{ msg.text }} {{ msg.time ? `(${msg.time})` : "" }}
        </div>
      </div>

      <!-- Input area for new messages -->
      <div class="input-message">
        <!-- Attach file button -->
        <Button icon="pi pi-paperclip" @click="attachFile" />

        <!-- Input field -->
        <IftaLabel class="flex-1"> 
          <InputText  
            class="input-text-message w-full" 
            v-model="message" 
            placeholder="Input message..."
            @keyup.enter="sendMessage"
          />
        </IftaLabel>

        <!-- Send button -->
        <Button 
          icon="pi pi-send"
          class="send-text-message" 
          @click="sendMessage"
        />
      </div>
    </div>
  </div>
</template>

<style>
/* -----------------------------
   General reset
----------------------------- */
* {
  margin: 0 !important;
  box-sizing: border-box;
}

/* -----------------------------
   Layout
----------------------------- */
.messenger {
  display: flex;
  height: 100vh; /* Full viewport height */
}

/* Sidebar with chat list */
.chat-list {
  flex: 4; /* 40% width */
  border: 1px solid #ccc;
  overflow-y: auto;
}

/* Main chat area */
.chat-container {
  flex: 6; /* 60% width */
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
}

/* Messages container */
.messages {
  flex: 1;           /* Take all remaining vertical space */
  padding: 10px;
  overflow-y: auto;   /* Scroll if content overflows */
  border: 1px solid #ccc;
}

/* Each message */
.message {
  margin-bottom: 6px;
}

/* Input area at the bottom */
.input-message {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
}

/* Flex helpers */
.flex-1 {
  flex: 1; /* Expand to fill available space */
}

/* Input field styling */
.input-text-message {
  flex: 1;          /* Take all remaining horizontal space */
  margin-right: 10px;
  width: 100%;
}

/* Optional: send button styling */
.send-text-message {
  /* Add styles if needed */
}
</style>
