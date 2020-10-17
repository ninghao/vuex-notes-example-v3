<template lang="html">
  <div class="ui form">
    <div class="field">
      <textarea
        rows="5"
        placeholder="写点东西..."
        v-model="content"
        v-on:input="updateNote(updatedNote)"
      >
      </textarea>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['note'],

  data() {
    return {
      content: this.note.body,
    };
  },

  computed: {
    updatedNote() {
      return { ...this.note, body: this.content };
    },
  },

  methods: {
    ...mapActions(['updateNote']),
  },
};
</script>

<style></style>
