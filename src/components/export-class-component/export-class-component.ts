import { ref } from "vue";

export default class Adem {
  message = ref<string>("Adem 1.2.3");
}
export const adem = new Adem();
