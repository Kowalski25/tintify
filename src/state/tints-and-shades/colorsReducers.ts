import {
  TintsActionTypes,
  SET_TINTS_AND_SHADES,
  CLEAR_TINTS_AND_SHADES,
} from "../tints-and-shades/colorsAction";

interface TintsAndShadesState {
  tintsAndShades: {
    tints: { value: string; percentage: number }[];
    shades: { value: string; percentage: number }[];
  } | null;
}

const initialState: TintsAndShadesState = {
  tintsAndShades: null,
};

const tintsAndShadesReducer = (
  state = initialState,
  action: TintsActionTypes
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
