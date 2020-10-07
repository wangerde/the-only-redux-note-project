export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const SHOW_ALL = 'SHOW_ALL';
export const HIDE_ALL = 'HIDE_ALL';

export function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content };
}

export function removeNote(id) {
    return { type: REMOVE_NOTE, id: id }
}

export function showAll() {
  return { type: SHOW_ALL };
}

export function hideAll() {
  return { type: HIDE_ALL };
}