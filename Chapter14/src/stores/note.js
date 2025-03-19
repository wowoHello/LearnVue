import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from './user'

// export const useNoteStore = defineStore("notes", () => {
  
//   const notes = ref([
//     {
//       id: 1,
//       title: "Pinia 學習記錄",
//       content:
//         "這是 Pinia 學習記錄，這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄",
//     },
//     {
//       id: 2,
//       title: "React 學習記錄",
//       content:
//         "這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄",
//     },
//     {
//       id: 3,
//       title: "Vue 學習記錄",
//       content:
//         "這是 Vue 學習記錄這是 Vue 學習記錄這是 Vue 學習記錄這是 Vue 學習記錄這是 Vue 學習記錄",
//     },
//     {
//       id: 4,
//       title: "JavaScript 學習記錄",
//       content:
//         "這是 JavaScript 學習記錄這是 JavaScript 學習記錄這是 JavaScript 學習記錄這是 JavaScript 學習記錄這是 JavaScript 學習記錄這是 JavaScript 學習記錄",
//     }    
//   ]);

//   const searchTerm = ref("");

//   const searchedNotes = computed(() => {
//     if (searchTerm.value === "") {
//       return notes.value;
//     } else {
//       return notes.value.filter((note) => {
//         return note.title.includes(searchTerm.value);
//       }) 
//     }
//   })

//   const userStore = useUserStore();

//   async function addNote(title, content) {
//     if (userStore.isLoggedIn()) {
//       setTimeout(() => {
//           notes.value.push({
//           id: notes.value.length + 1,
//           title,
//           content,
//         });
//       }, 2000);
//     }    
//     searchTerm.value = "";
//   };

//   return {
//     notes, searchTerm, searchedNotes, addNote
//   };
// })


// Option API 型式配置 pinia store
export const useNoteStore = defineStore("notes", {
  state() {
    return {
      notes: [
        {
          id: 1,
          title: "Pinia 學習記錄",
          content:
            "這是 Pinia 學習記錄，這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄這是 Pinia 學習記錄",
        },
        {
          id: 2,
          title: "React 學習記錄",
          content:
            "這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄這是 React 學習記錄",
        },
        {
          id: 3,
          title: "Vue 學習記錄",
          content:
            "這是 Vue 學習記錄這是 Vue 學習記錄這是 Vue 學習記錄這是 Vue 學習記錄這是 Vue 學習記錄",
        },
        {
          id: 4,
          title: "JavaScript 學習記錄",
          content:
            "這是 JavaScript 學習記錄這是 JavaScript 學習記錄這是 JavaScript 學習記錄這是 JavaScript 學習記錄這是 JavaScript 學習記錄這是 JavaScript 學習記錄",
        }    
      ],
    
      searchTerm:  "",
    };
  },
  getters: {
    searchedNotes: (state) => {
      if (state.searchTerm === "") {
        return state.notes;
      } else {
        return state.notes.filter((note) => {
          return note.title.includes(state.searchTerm);
        }) 
      }
    },
  },

  actions: {
    async addNote(title, content) {
      const userStore = useUserStore();
      if (userStore.isLoggedIn()) {
        setTimeout(() => {
            this.notes.push({
            id: this.notes.length + 1,
            title,
            content,
          });
        }, 2000);
      }    
      this.searchTerm = "";
    }
  }
})