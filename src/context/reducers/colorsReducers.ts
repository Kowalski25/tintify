import {
  TintsActionType,
  SET_TINTS_AND_SHADES,
  CLEAR_TINTS_AND_SHADES,
} from "../actions/colorsAction";

interface TintsAndShadesState {
  tintsAndShades: { tints: string[]; shades: string[] } | null;
}

const initialState: TintsAndShadesState = {
  tintsAndShades: null,
};

const tintsAndShadesReducer = (
  state = initialState,
  action: TintsActionType
): TintsAndShadesState => {
  switch (action.type) {
    case SET_TINTS_AND_SHADES:
      return { ...state, tintsAndShades: action.payload };

    case CLEAR_TINTS_AND_SHADES:
      return { ...state, tintsAndShades: null };

    default:
      return state;
  }
};

export default tintsAndShadesReducer;
