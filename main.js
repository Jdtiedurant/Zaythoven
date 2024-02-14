/** @format */

import QRCode from "qrcode";

const qrDiv = document.body.getElementById("qr-code");

new QRCode(qrDiv, {
  text: "https://www.frontendmentor.io/home",
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
