<script setup lang="ts">
import { BriefcaseBusiness, Rocket } from "lucide-vue-next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ref } from "vue";

const available = ref<boolean>(true);
</script>

<template>
  <div class="section">
    <Alert
      class="border-2 border-green-600"
      v-if="available"
    >
      <Rocket class="h-4 w-4" />
      <AlertTitle>I'm available for work!</AlertTitle>
      <AlertDescription>Reach me at buczekmatthias@gmail.com</AlertDescription>
    </Alert>
    <Alert
      class="border-0"
      v-else
    >
      <BriefcaseBusiness class="h-4 w-4" />
      <AlertTitle>I'm hired but my inbox is still open!</AlertTitle>
      <AlertDescription>Reach me at buczekmatthias@gmail.com</AlertDescription>
    </Alert>
  </div>
</template>
