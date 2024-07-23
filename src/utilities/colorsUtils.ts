import { RGB, ShadeTint } from "../types";

// parse color values from a string
export function parseColorValues(colorValues: string): string[] | null {
  let colorValuesArray = colorValues.match(
    /\b[0-9A-Fa-f]{3}\b|\b[0-9A-Fa-f]{6}\b/g
  );
  if (colorValuesArray) {
    colorValuesArray = colorValuesArray.map((item) => {
      if (item.length === 3) {
        return item.split("").reduce((acc, it) => acc + it + it, "");
      }
      return item;
    });
  }
  return colorValuesArray;
}

// pad a number with leading zeros
function pad(str: string, length: number): string {
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}

// convert hex color value to RGB
export function hexToRGB(colorValue: string) {
  return {
    red: parseInt(colorValue.substr(0, 2), 16),
    green: parseInt(colorValue.substr(2, 2), 16),
    blue: parseInt(colorValue.substr(4, 2), 16),
  };
}

// convert an RGB integer value to hex
function intToHex(rgbint: number): string {
  return pad(Math.min(Math.max(Math.round(rgbint), 0), 255).toString(16), 2);
}

// convert an RGB object to hex color value
export function rgbToHex(rgb: RGB): string {
  return intToHex(rgb.red) + intToHex(rgb.green) + intToHex(rgb.blue);
}

// generate a tint of an RGB color
export function rgbShade(rgb: RGB, i: number): RGB {
  return {
    red: rgb.red * (1 - 0.1 * i),
    green: rgb.green * (1 - 0.1 * i),
    blue: rgb.blue * (1 - 0.1 * i),
  };
}

//  generate a tint of an RGB color
export function rgbTint(
  rgb: { red: number; green: number; blue: number },
  i: number
) {
  return {
    red: rgb.red + (255 - rgb.red) * i * 0.1,
    green: rgb.green + (255 - rgb.green) * i * 0.1,
    blue: rgb.blue + (255 - rgb.blue) * i * 0.1,
  };
}

// calculate shades or tints of a color value
function calculate(
  colorValue: string,
  shadeOrTint: (rgb: RGB, i: number) => RGB
) {
  const color = hexToRGB(colorValue);
  const values = [];

  for (let i = 0; i < 10; i++) {
    values[i] = rgbToHex(shadeOrTint(color, i));
  }
  return values;
}

export function calculateShades(colorValue: string): ShadeTint[] {
  const shades = calculate(colorValue, rgbShade);
  return shades
    .map((shade, index) => ({ value: shade, percentage: index * 10 }))
    .concat({ value: "000000", percentage: 100 });
}

export function calculateTints(colorValue: string): ShadeTint[] {
  const tints = calculate(colorValue, rgbTint);
  return tints
    .map((tint, index) => ({ value: tint, percentage: index * 10 }))
    .concat({ value: "ffffff", percentage: 100 });
}
