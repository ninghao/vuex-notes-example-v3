import { loadCollection, db } from '../database';

/**
 * 笔记列表
 */
export const getNotes = async ({ commit }) => {
  // 加载笔记集合
  const notesCollection = await loadCollection('notes');

  // 查询出集合里的笔记列表
  const notes = notesCollection
    .chain()
    .find()
    .simplesort('$loki', 'isdesc')
    .data();

  // 提交修改
  commit('setNotes', notes);
};

/**
 * 创建笔记
 */
export const createNote = async ({ dispatch }, note) => {
  // 加载笔记集合
  const notesCollection = await loadCollection('notes');

  // 创建笔记
  notesCollection.insert(note);

  // 保存数据库
  db.saveDatabase();

  // 派发动作：获取笔记列表
  dispatch('getNotes');
};

/**
 * 更新笔记
 */
export const updateNote = async ({ dispatch }, note) => {
  // 加载笔记集合
  const notesCollection = await loadCollection('notes');

  // 创建笔记
  notesCollection.update(note);

  // 保存数据库
  db.saveDatabase();

  // 派发动作：获取笔记列表
  dispatch('getNotes');
};

/**
 * 更新笔记
 */
export const deleteNote = async ({ dispatch }, note) => {
  // 加载笔记集合
  const notesCollection = await loadCollection('notes');

  // 创建笔记
  notesCollection.remove(note);

  // 保存数据库
  db.saveDatabase();

  // 派发动作：获取笔记列表
  dispatch('getNotes');
};
