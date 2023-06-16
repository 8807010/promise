const imgURLArr = [
  'img/1.jpeg',
  'img/2.jpeg',
  'img/3.jpeg',
  'img/4.jpeg',
  'img/5.jpeg',
  'img/6.jpeg',
  'img/7.jpeg',
  'img/8.jpeg',
  'img/9.jpeg',
  'img/10.jpeg',
];

const promiseArr = [];
for (const url of imgURLArr) {
  const promise = new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.classList.add("picture", "hidden");
    img.src = url;

    img.addEventListener("load", function () {
      resolve();
    });

    img.addEventListener("error", function () {
      reject();
    });

    document.body.append(img);
  });

  promiseArr.push(promise);
};

Promise.all(promiseArr).then(
  function () {
    document.querySelector(".spinner").classList.remove("loading");
    document.querySelectorAll('.picture').forEach(img => {
      img.classList.add("show");
    });
  },
  function () {
    document.querySelector(".spinner").classList.remove("loading");
    alert("Ошибка загрузки");
  }
);