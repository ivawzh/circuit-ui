/**
 * Copyright 2019, SumUp Ltd.
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

import { renderHook, act } from '@testing-library/react-hooks';

import { useStack } from './useStack';

describe('useStack', () => {
  const initialStack = [{ id: 1 }, { id: 2 }, { id: 3 }];

  it('should initialize the stack to an empty array', () => {
    const { result } = renderHook(() => useStack());

    const state = result.current[0];

    expect(state).toEqual([]);
  });

  it('should initialize the stack with an initial value', () => {
    const { result } = renderHook(() => useStack(initialStack));

    const state = result.current[0];

    expect(state).toEqual(initialStack);
  });

  it('should push an item to the top of the stack', () => {
    const { result } = renderHook(() => useStack(initialStack));

    act(() => {
      const dispatch = result.current[1];
      dispatch({ type: 'push', item: { id: 4 } });
    });

    const state = result.current[0];

    expect(state).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
  });

  it('should pop an item from the top of the stack', () => {
    const { result } = renderHook(() => useStack(initialStack));

    act(() => {
      const dispatch = result.current[1];
      dispatch({ type: 'pop' });
    });

    const state = result.current[0];

    expect(state).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove an item from the stack', () => {
    const { result } = renderHook(() => useStack(initialStack));

    act(() => {
      const dispatch = result.current[1];
      dispatch({ type: 'remove', id: 2 });
    });

    const state = result.current[0];

    expect(state).toEqual([{ id: 1 }, { id: 3 }]);
  });
});
