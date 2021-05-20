/**
 * Copyright 2021, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Dispatch, useReducer } from 'react';

type Id = string | number;
type BaseItem = { id: Id };

type Action<T extends BaseItem> =
  | { type: 'push'; item: T }
  | { type: 'pop' }
  | { type: 'remove'; id: Id };

export type StackDispatch<T extends BaseItem> = Dispatch<Action<T>>;

function createReducer<T extends BaseItem>() {
  return (state: T[], action: Action<T>) => {
    switch (action.type) {
      case 'push':
        return [...state, action.item];
      case 'pop':
        return state.slice(0, -1);
      case 'remove':
        return state.filter((s) => s.id !== action.id);
      default:
        return state;
    }
  };
}

export function useStack<T extends BaseItem>(
  initialStack: T[] = [],
): [T[], StackDispatch<T>] {
  const reducer = createReducer<T>();
  return useReducer(reducer, initialStack);
}
