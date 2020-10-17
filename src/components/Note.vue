<template lang="html">
  <div class="item">
    <div class="meta" v-if="note.meta">
      {{ note.meta.updated }}
    </div>
    <div class="content">
      <div class="header" v-on:click="open = !open">
        {{ title || '新建笔记' }}
      </div>
      <div class="extra">
        <Editor v-bind:note="note" v-if="open" />
        {{ note.body.length }} 字
        <button
          class="ui mini button right floated"
          v-on:click="deleteNote(note)"
          v-if="open"
        >
          删除
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from './Editor';
import _ from 'lodash';
import { mapActions } from 'vuex';

export default {
  props: ['note'],

  data() {
    return {
      open: false,
    };
  },

  computed: {
    title() {
      return _.truncate(this.note.body, { length: 30 });
    },
  },

  methods: {
    ...mapActions(['deleteNote']),
  },

  components: {
    Editor,
  },
};
</script>

<style></style>
