// const response = fetch("/test.txt")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const dataChangeHandler = () => {
  if (document.getElementById("url").value.length > 0) {
    document.querySelector("button").classList.add("submit-active");
  } else {
    document.querySelector("button").classList.remove("submit-active");
  }
};

const apiUrl = "https://api.qrserver.com/v1/create-qr-code/";

const submitHandler = () => {
  event.preventDefault();
  const data = document.getElementById("url").value;
  const color = document.getElementById("color").value.slice(1);
  const bgcolor = document.getElementById("bgcolor").value.slice(1);
  const size = document.getElementById("size").value;

  fetch(
    `${apiUrl}?size=${size}x${size}&color=${color}&bgcolor=${bgcolor}&data=${encodeURIComponent(
      data
    )}`
  )
    .then((res) => res.blob())
    .then((blob) => {
      const qrCodeImage = document.createElement("img");
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.setAttribute("download", "");
      qrCodeImage.src = URL.createObjectURL(blob);
      qrCodeImage.alt = "QR Code";

      const qrcodeContainer = document.getElementById("qrcode-resolt");
      qrcodeContainer.innerHTML = "";

      a.appendChild(qrCodeImage);
      qrcodeContainer.appendChild(a);
    })
    .catch((error) => {
      console.error(error);
    });
};
