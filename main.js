const API_KEY =
  "pcSJxqNPg9q0QJP5-tX81Io5YY_XFBhjdEUK6Vd3gXKIiOCnXbp4ZSzXiEAagCvg";

const URL =
  "https://api.qr-code-generator.com/v1/create?access-token=pcSJxqNPg9q0QJP5-tX81Io5YY_XFBhjdEUK6Vd3gXKIiOCnXbp4ZSzXiEAagCvg";

// const response = fetch("/test.txt")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const data = {
  frame_name: "no-frame",
  qr_code_text: "https://www.qr-code-generator.com/",
  image_format: "SVG",
  background_color: "#ffffff",
  foreground_color: "#fa6e79",
  marker_right_inner_color: "#2d7cda",
  marker_right_outer_color: "#00bfff",
  marker_left_template: "version13",
  marker_right_template: "version13",
  marker_bottom_template: "version13",
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};

const Urgench = fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Urgench&appid=28824b46851a478eaa59e646200fd6cd"
).then((res) => res.json());

const Tashkent = fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=28824b46851a478eaa59e646200fd6cd"
).then((res) => res.json());

const Samarkand = fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Samarkand&appid=28824b46851a478eaa59e646200fd6cd"
).then((res) => res.json());

// Promise.all([Urgench, Tashkent, Samarkand])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([Urgench, Tashkent, Samarkand])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
