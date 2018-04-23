import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import AvatarPicker from '../index';

import Store from '../../../store/configure';
import {
  reducer,
  handleKeyStrokesOnSub,
  handleKeyStrokesOnAdd
} from '../../../store/app-store/index';
import * as t from '../../../store/app-store/actionTypes';


const mockingData = [
  { 'label': 'Avatar 5', 'id': 10 },
  { 'label': 'Avatar 6', 'id': 11 },
  { 'label': 'Avatar 1', 'id': 1 },
  { 'label': 'Avatar 2', 'id': 2 },
  { 'label': 'Avatar 3', 'id': 3 },
  { 'label': 'Avatar 4', 'id': 4 },
  { 'label': 'Avatar 5', 'id': 5 },
  { 'label': 'Avatar 6', 'id': 6 },
  { 'label': 'Avatar 2', 'id': 7 },
  { 'label': 'Avatar 3', 'id': 8 },
  { 'label': 'Avatar 4', 'id': 9 }
];

const StoreInstance = Store();

test('AvatarPicker renders', () => {
  const component = renderer.create(
    <Provider store={StoreInstance}>
      <AvatarPicker />
    </Provider>
  );
  let tree;

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//  REDUCER
describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        indexOfActiveAvatar: 0,
        indexOfLoadingAvatar: 0,
        indexOfCandidateAvatar: null,
        isPopoverOpen: false,
        isLoading: false
      }
    );
  });

  it('should handle SELECT_AVATAR', () => {
    expect(
      reducer({}, {
        type: t.SELECT_AVATAR,
        payload: { data: mockingData, selectedAvatarId: 10 }
      })
    ).toEqual({
        indexOfActiveAvatar: 0,
        indexOfCandidateAvatar: null
      }
    );
  });

  it('should handle LOAD_AVATAR', () => {
    expect(
      reducer({}, {
        type: t.LOAD_AVATAR,
        payload: { data: mockingData, selectedAvatarId: 11 }
      })
    ).toEqual({
        indexOfLoadingAvatar: 1
      }
    );
  });

  it('should handle CLOSE_POPOVER', () => {
    expect(
      reducer({}, {
        type: t.CLOSE_POPOVER
      })
    ).toEqual({
        isPopoverOpen: false
      }
    );
  });
  it('should handle CANDIDATE_AVATAR', () => {
    expect(
      reducer({}, {
        type: t.CANDIDATE_AVATAR,
        payload: { data: mockingData, selectedAvatarId: 5 }
      })
    ).toEqual({
        indexOfCandidateAvatar: 6
      }
    );
  });
  it('should handle CLEAN_CANDIDATE_AVATAR', () => {
    expect(
      reducer({}, {
        type: t.CLEAN_CANDIDATE_AVATAR
      })
    ).toEqual({
        indexOfCandidateAvatar: null
      }
    );
  });
  it('should handle PRESS_ARROW_UP', () => {
    expect(
      reducer({}, {
        type: t.PRESS_ARROW_UP,
        payload: { indexOfCandidateAvatar: 5 }
      })
    ).toEqual({
        indexOfCandidateAvatar: 1
      }
    );
  });
  it('should handle PRESS_ARROW_UP', () => {
    expect(
      reducer({}, {
        type: t.PRESS_ARROW_UP,
        payload: { indexOfCandidateAvatar: 3 }
      })
    ).toEqual({
        indexOfCandidateAvatar: 0
      }
    );
  });
  it('should handle PRESS_ARROW_LEFT', () => {
    expect(
      reducer({}, {
        type: t.PRESS_ARROW_LEFT,
        payload: { indexOfCandidateAvatar: 5 }
      })
    ).toEqual({
        indexOfCandidateAvatar: 4
      }
    );
  });

  it('should handle PRESS_ARROW_LEFT', () => {
    expect(
      reducer({}, {
        type: t.PRESS_ARROW_LEFT,
        payload: { indexOfCandidateAvatar: 0 }
      })
    ).toEqual({
        indexOfCandidateAvatar: 0
      }
    );
  });
  it('should handle PRESS_ARROW_RIGHT 10', () => {
    expect(
      reducer({}, {
        type: t.PRESS_ARROW_RIGHT,
        payload: { indexOfCandidateAvatar: 10, dataLength: 11 }
      })
    ).toEqual({
        indexOfCandidateAvatar: 10
      }
    );
  });
  it('should handle PRESS_ARROW_RIGHT 1', () => {
    expect(
      reducer({}, {
        type: t.PRESS_ARROW_RIGHT,
        payload: { indexOfCandidateAvatar: 1, dataLength: 11 }
      })
    ).toEqual({
        indexOfCandidateAvatar: 2
      }
    );
  });
  it('should handle PRESS_ARROW_DOWN', () => {
    expect(
      reducer({}, {
        type: t.PRESS_ARROW_DOWN,
        payload: { indexOfCandidateAvatar: 2, dataLength: 11 }
      })
    ).toEqual({
        indexOfCandidateAvatar: 6
      }
    );
  });
  it('should handle PRESS_ARROW_DOWN', () => {
    expect(
      reducer({}, {
        type: t.PRESS_ARROW_DOWN,
        payload: { indexOfCandidateAvatar: 19, dataLength: 11 }
      })
    ).toEqual({
        indexOfCandidateAvatar: 10
      }
    );
  });
});


