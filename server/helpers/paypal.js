const paypal = require("paypal-rest-sdk");
// Paypal configuration need to configure
paypal.configure({
  mode: "sandbox",
  client_id: "AXl7pDixZBGlE5s_yMZxQAgeEstMZv1KLN51VlzypREAoIVx11mH6b9NGAuzSS_1H8EdjyeDSkbLwU8s",
  client_secret: "EDI3zZtU1pzTFQKbqdU4qIuwEc6vwHJ9Xs8Tl577RBiQwY2uW1MBfPYyGczppvcZck6uvMSK2_jQ6cgL",
});

module.exports = paypal;
