//atoms.tsx

import { atom, selector } from 'recoil';

export interface IToDo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE'; //아무 string을 받는게 아니라고 제한을 만들어주는 역할.
}

export const toDoState = atom<IToDo[]>({
  key: 'toDoList',
  default: [], //기본 default값을 빈 배열로 설정. list로 정리할 것이므로.
});

export const toDoSelector = selector({
  key: 'selector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((todo) => todo.category === 'TO_DO'),
      toDos.filter((todo) => todo.category === 'DOING'),
      toDos.filter((todo) => todo.category === 'DONE'),
    ];
  },
});
