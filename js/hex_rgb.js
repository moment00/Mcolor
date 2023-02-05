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
