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

import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  FC,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import ReactModal from 'react-modal';
import { Global, css } from '@emotion/core';
import noScroll from 'no-scroll';

import { useStack, StackDispatch } from '../../hooks/useStack';
import { uniqueId } from '../../util/id';
import IS_IOS from '../../util/ios';

import { Modal, ModalProps } from './Modal';

if (typeof window !== 'undefined') {
  // These are the default app elements in Next.js and CRA.
  const appElement =
    document.getElementById('__next') || document.getElementById('root');

  if (appElement) {
    ReactModal.setAppElement(appElement);
  } else if (process.env.NODE_ENV !== 'production') {
    // FIXME: Add error message
    console.error('');
  }
}

type ModalState = ModalProps & { id: string };

export type ModalContextValue = [ModalState[], StackDispatch<ModalState>];

export const ModalContext = createContext<ModalContextValue>([[], () => {}]);

interface ModalProviderProps {
  initialState?: ModalState[];
  htmlOpenClassName?: string;
}

export const ModalProvider: FC<ModalProviderProps> = ({
  children,
  initialState,
  htmlOpenClassName = 'ReactModal__Html--open',
}) => {
  const [modals, dispatch] = useStack<ModalState>(initialState);

  const isOpen = modals.length > 0;

  useEffect(() => {
    const popModal = () => {
      dispatch({ type: 'pop' });
    };

    if (isOpen) {
      window.onpopstate = popModal;
      if (IS_IOS) {
        noScroll.on();
      }
    } else {
      window.onpopstate = null;
      if (IS_IOS) {
        noScroll.off();
      }
    }

    return () => {
      window.onpopstate = null;
      if (IS_IOS) {
        noScroll.off();
      }
    };
  }, [dispatch, isOpen]);

  return (
    <ModalContext.Provider value={[modals, dispatch]}>
      {children}

      {modals.map(({ id, onClose, ...modal }) => {
        const handleClose = (event?: MouseEvent | KeyboardEvent) => {
          if (onClose) {
            onClose(event);
          }
          dispatch({ type: 'remove', id });
        };
        return (
          <Modal
            key={id}
            {...modal}
            onClose={handleClose}
            htmlOpenClassName={htmlOpenClassName}
          />
        );
      })}

      {isOpen && (
        <Global
          styles={css`
            /* Remove scroll on the body when react-modal is open */
            .${htmlOpenClassName} {
              height: 100%;
              overflow-y: hidden;
              -webkit-overflow-scrolling: auto;
            }
          `}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = (): {
  setModal: (newModal: ModalProps) => void;
  removeModal: () => void;
} => {
  const id = useMemo(uniqueId, []);
  const [modals, dispatch] = useContext(ModalContext);

  const modal = useMemo(() => modals.find((m) => m.id === id), [id, modals]);

  const setModal = useCallback(
    (newModal: ModalProps): void => {
      dispatch({ type: 'push', item: { ...newModal, id } });
    },
    [dispatch, id],
  );

  const removeModal = useCallback((): void => {
    if (modal && modal.onClose) {
      modal.onClose();
    }
    dispatch({ type: 'remove', id });
  }, [dispatch, id, modal]);

  return { setModal, removeModal };
};
