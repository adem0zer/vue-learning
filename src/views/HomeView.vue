<template>
  Ad:
  <input v-model="message" />
  <p>{{ message }}</p>
  <button @click="messageChange()">Message Change</button>
  <AboutView></AboutView>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ref } from "vue";
import AboutView from "./AboutView.vue";

@Options({
  components: { AboutView },
})
export default class HomeView extends Vue {
  message = ref<string>("");

  messageChange() {
    this.message.value = "Message Changed";
  }
}
</script>
