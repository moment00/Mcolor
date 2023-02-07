// 将hex颜色转成rgb
function hexToRgba(hex, opacity) {
  let RGBA =
    "rgba(" +
    parseInt("0x" + hex.slice(1, 3)) +
    "," +
    parseInt("0x" + hex.slice(3, 5)) +
    "," +
    parseInt("0x" + hex.slice(5, 7)) +
    "," +
    opacity +
    ")";
  return {
    rgb:
      (parseInt("0x" + hex.slice(1, 3)),
      parseInt("0x" + hex.slice(3, 5)),
      parseInt("0x" + hex.slice(5, 7))),
    rgba: RGBA,
  };
}

// 将rgb颜色转成hex  输入(24,12,255)
function colorRGB2Hex(r, g, b) {
  let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}
console.log(colorRGB2Hex(214, 51, 41));
console.log(colorRGB2Hex(0, 110, 143));
