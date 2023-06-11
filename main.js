// const response = fetch("/test.txt")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const apiUrl = "https://api.qrserver.com/v1/create-qr-code/";

const data = prompt("Shifrlamoqchi bo'lgan matningizni kiriting:");

fetch(
  `${apiUrl}?size=200x200&color=00FF00&bgcolor=000&data=${encodeURIComponent(
    data
  )}`
)
  .then((res) => res.blob())
  .then((blob) => {
    const qrCodeImage = document.createElement("img");
    qrCodeImage.src = URL.createObjectURL(blob);
    qrCodeImage.alt = "QR Code";

    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";

    qrcodeContainer.appendChild(qrCodeImage);
  })
  .catch((error) => {
    console.error(error);
  });

// const Urgench = fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=Urgench&appid=28824b46851a478eaa59e646200fd6cd"
// ).then((res) => res.json());

// const Tashkent = fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=28824b46851a478eaa59e646200fd6cd"
// ).then((res) => res.json());

// const Samarkand = fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=Samarkand&appid=28824b46851a478eaa59e646200fd6cd"
// ).then((res) => res.json());

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
