import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

// 全局錯誤處理
// app.config.errorHandler = (err, vm, info) => {
//   console.log(err);
//   console.log(vm);
//   console.log(info)
// }

app.mount('#app');
