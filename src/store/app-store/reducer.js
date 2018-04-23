import * as t from './actionTypes';


const INITIAL_STATE = {
  indexOfActiveAvatar: 0,
  indexOfLoadingAvatar: 0,
  indexOfCandidateAvatar: null,
  isPopoverOpen: false,
  isLoading: false
};

export const setIndexFromId = (data, selectedAvatarId) =>
  parseInt(Object.keys(data).findIndex((index) => data[index].id === selectedAvatarId))
;
export const handleKeyStrokesOnSub = (indexOfCandidateAvatar, value) => {
  if (indexOfCandidateAvatar == null)
    return 0;
  else if (indexOfCandidateAvatar !== null && indexOfCandidateAvatar - value >= 0)
    return indexOfCandidateAvatar - value;
  else
    return 0;
};
const handleKeyStrokesOnAdd = (indexOfCandidateAvatar, value, dataLength) => {
  if (indexOfCandidateAvatar == null)
    return 0;
  else if (indexOfCandidateAvatar !== null && indexOfCandidateAvatar + value < dataLength)
    return indexOfCandidateAvatar + value;
  else
    return dataLength - 1;
};
export const reducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  const { indexOfCandidateAvatar, dataLength } = payload;
  switch (type) {
    case t.SELECT_AVATAR:
      return {
        ...state,
        indexOfActiveAvatar: setIndexFromId(payload.data, payload.selectedAvatarId),
        indexOfCandidateAvatar: INITIAL_STATE.indexOfCandidateAvatar
      };

    case t.LOAD_AVATAR:
      return {
        ...state,
        indexOfLoadingAvatar: setIndexFromId(payload.data, payload.selectedAvatarId)

      };

    case t.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };

    //  POPOVER
    case t.TOGGLE_POPOVER:
      return {
        ...state,
        isPopoverOpen: !state.isPopoverOpen
      };
    case t.CLOSE_POPOVER:
      return {
        ...state,
        isPopoverOpen: INITIAL_STATE.isPopoverOpen
      };

    case t.CANDIDATE_AVATAR:
      return {
        ...state,
        indexOfCandidateAvatar: setIndexFromId(payload.data, payload.selectedAvatarId)
      };

    case t.CLEAN_CANDIDATE_AVATAR:
      return {
        ...state,
        indexOfCandidateAvatar: INITIAL_STATE.indexOfCandidateAvatar
      };


    //   KEY PRESSES
    case t.PRESS_ARROW_UP:

      return {
        ...state,
        indexOfCandidateAvatar: handleKeyStrokesOnSub(indexOfCandidateAvatar, 4)
      };
    case t.PRESS_ARROW_LEFT:
      return {
        ...state,
        indexOfCandidateAvatar: handleKeyStrokesOnSub(indexOfCandidateAvatar, 1)
      };

    case t.PRESS_ARROW_RIGHT:
      return {
        ...state,
        indexOfCandidateAvatar: handleKeyStrokesOnAdd(indexOfCandidateAvatar, 1, dataLength)
      };
    case t.PRESS_ARROW_DOWN:
      return {
        ...state,
        indexOfCandidateAvatar: handleKeyStrokesOnAdd(indexOfCandidateAvatar, 4, dataLength)
      };
  }
  return state;
};