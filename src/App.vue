<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

const value = ref(null);



</script>

<template>

<div class="card flex justify-center">
  <IftaLabel>
    <InputText id="message" v-model="value" />
  </IftaLabel>

  <Button label="Send" />

  
  
</div>



</template>


<style>


</style>