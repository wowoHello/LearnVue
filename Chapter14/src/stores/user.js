import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  
  const user = ref({
    name: "張三",
    phone: "0900000000",
    emain: "sanzhang@test.com"
  });

  function isLoggedIn() {
    return user.value !== null;
  }

  return {
    user, isLoggedIn
  }
})