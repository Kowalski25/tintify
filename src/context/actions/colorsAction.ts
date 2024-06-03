export const SET_TINTS_AND_SHADES = "SET_TINTS_AND_SHADES";
export const CLEAR_TINTS_AND_SHADES = "CLEAR_TINTS_AND_SHADES";

interface SetTintsAndShadesAction {
  type: typeof SET_TINTS_AND_SHADES;
  payload: {
    tints: string[];
    shades: string[];
  };
}

interface ClearTintsAndShadesAction {
  type: typeof CLEAR_TINTS_AND_SHADES;
}

export type TintsActionType = SetTintsAndShadesAction | ClearTintsAndShadesAction;


export const setTintsAndShades = (tints: string[], shades: string[]): TintsActionType => ({
  type: SET_TINTS_AND_SHADES,
  payload: {tints, shades}
});

export const clearTintsAndShades = (): TintsActionType => ({
  type: CLEAR_TINTS_AND_SHADES,
});
