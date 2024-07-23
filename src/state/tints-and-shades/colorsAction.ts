export const SET_TINTS_AND_SHADES = "SET_TINTS_AND_SHADES";
export const CLEAR_TINTS_AND_SHADES = "CLEAR_TINTS_AND_SHADES";

interface SetTintsAndShadesAction {
  type: typeof SET_TINTS_AND_SHADES;
  payload: {
    tints: { value: string; percentage: number }[];
    shades: { value: string; percentage: number }[];
  };
}

interface ClearTintsAndShadesAction {
  type: typeof CLEAR_TINTS_AND_SHADES;
}

export type TintsActionTypes =
  | SetTintsAndShadesAction
  | ClearTintsAndShadesAction;

export const setTintsAndShades = (
  tints: { value: string; percentage: number }[],
  shades: { value: string; percentage: number }[]
): TintsActionTypes => ({
  type: SET_TINTS_AND_SHADES,
  payload: { tints, shades },
});

export const clearTintsAndShades = (): TintsActionTypes => ({
  type: CLEAR_TINTS_AND_SHADES,
});
