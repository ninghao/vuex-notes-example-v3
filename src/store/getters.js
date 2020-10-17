import moment from 'moment';
moment.locale('zh-CN');

export const notes = state => {
  return state.notes.map(note => {
    note.meta.updated = moment(note.meta.created).fromNow();
    return note;
  });
};