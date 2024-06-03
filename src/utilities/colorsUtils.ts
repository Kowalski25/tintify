export function parseColorValues(colorValues: string): string[] | null {
  let colorValuesArray = colorValues.match(/\b[0-9A-Fa-f]{3}\b|\b[0-9A-Fa-f]{6}\b/g);
  if (colorValuesArray) {
    colorValuesArray = colorValuesArray.map(item => {
      if (item.length === 3) {
        return item.split('').reduce((acc, it) => acc + it + it, '');
      }
      return item;
    });
  }
  return colorValuesArray;
}

function pad(number: number, length: number): string {
  let str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}

export function hexToRGB(colorValue: string) {
  return {
    red: parseInt(colorValue.substr(0, 2), 16),
    green: parseInt(colorValue.substr(2, 2), 16),
    blue: parseInt(colorValue.substr(4, 2), 16),
  };
}

function intToHex(rgbint: number): string {
  return pad(Math.min(Math.max(Math.round(rgbint), 0), 255).toString(16), 2);
}

export function rgbToHex(rgb: { red: number; green: number; blue: number }): string {
  return intToHex(rgb.red) + intToHex(rgb.green) + intToHex(rgb.blue);
}

export function rgbShade(rgb: { red: number; green: number; blue: number }, i: number) {
  return {
    red: rgb.red * (1 - 0.1 * i),
    green: rgb.green * (1 - 0.1 * i),
    blue: rgb.blue * (1 - 0.1 * i),
  };
}

export function rgbTint(rgb: { red: number; green: number; blue: number }, i: number) {
  return {
    red: rgb.red + (255 - rgb.red) * i * 0.1,
    green: rgb.green + (255 - rgb.green) * i * 0.1,
    blue: rgb.blue + (255 - rgb.blue) * i * 0.1,
  };
}

function calculate(colorValue: string, shadeOrTint: Function): string[] {
  const color = hexToRGB(colorValue);
  const shadeValues = [];
  for (let i = 0; i < 10; i++) {
    shadeValues[i] = rgbToHex(shadeOrTint(color, i));
  }
  return shadeValues;
}

export function calculateShades(colorValue: string): string[] {
  return calculate(colorValue, rgbShade).concat("000000");
}

export function calculateTints(colorValue: string): string[] {
  return calculate(colorValue, rgbTint).concat("ffffff");
}
