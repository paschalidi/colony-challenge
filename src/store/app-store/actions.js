import * as t from './actionTypes';


export const setIndexOfActiveAvatar = (data, selectedAvatarId) => ({
  type: t.SELECT_AVATAR,
  payload: { data, selectedAvatarId }
});

export const setIndexOfLoadingAvatar = (data, selectedAvatarId) => ({
  type: t.LOAD_AVATAR,
  payload: { data, selectedAvatarId }
});

export const setIndexOfCandidateAvatar = (data, selectedAvatarId) => ({
  type: t.CANDIDATE_AVATAR,
  payload: { data, selectedAvatarId }
});

export const cleanIndexOfCandidateAvatar = () => ({
  type: t.CLEAN_CANDIDATE_AVATAR
});

//AVATAR LOADING
export const toggleLoading = () => ({
  type: t.TOGGLE_LOADING
});

//POPOVER
export const togglePopover = () => ({
  type: t.TOGGLE_POPOVER
});

export const closePopover = () => ({
  type: t.CLOSE_POPOVER
});

// KEYPRESSES
export const keypressUp = (indexOfCandidateAvatar) => {
  return {
    type: t.PRESS_ARROW_UP,
    payload: { indexOfCandidateAvatar }
  };
};

export const keypressLeft = (indexOfCandidateAvatar) => {
  return {
    type: t.PRESS_ARROW_LEFT,
    payload: { indexOfCandidateAvatar }
  };
};

export const keypressRight = (indexOfCandidateAvatar, dataLength) => {
  return {
    type: t.PRESS_ARROW_RIGHT,
    payload: { indexOfCandidateAvatar, dataLength }
  };
};

export const keypressDown = (indexOfCandidateAvatar, dataLength) => {
  return {
    type: t.PRESS_ARROW_DOWN,
    payload: { indexOfCandidateAvatar, dataLength }
  };
};

