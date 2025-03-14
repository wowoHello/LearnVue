const Playlist = {
  data() {
    return {
      playlist: ["愛情的大壞蛋", "稻香", "我可以", "我以為"],
      searchTerm: "",
    };
  },
  computed: {
    filterPlaylist() {
      if (this.searchTerm) {
        return this.playlist.filter(song => song.toLowerCase().includes(this.searchTerm.toLowerCase()))
      } else {
        return this.playlist;
      }
    }
  }
};

Vue.createApp(Playlist).mount('#app');
