<template lang="html">
  <div class="ui container notes">
    <h4 class="ui horizontal divider header">
      <i class="paw icon"></i>
      Ninghao Notes App _ Vue.js
    </h4>
    <a
      class="ui right floated basic violet button"
      v-on:click="createNote({ body: '' })"
    >
      添加笔记
    </a>
    <div class="ui divided items">
      <Note v-for="note in notes" v-bind:note="note" v-bind:key="note.$loki" />
      <span class="ui small disabled header" v-if="!notes.length">
        还没有笔记，请按下 '添加笔记' 按钮。
      </span>
    </div>
  </div>
</template>

<script>
import Note from './Note';
import { mapGetters, mapActions } from 'vuex';

export default {
  async created() {
    // 获取笔记列表
    await this.getNotes();
  },

  methods: {
    ...mapActions(['createNote', 'getNotes']),
  },

  computed: {
    ...mapGetters(['notes']),
  },

  components: {
    Note,
  },
};
</script>

<style></style>
