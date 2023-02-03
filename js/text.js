window.onload = function () {
  let { pinyin } = pinyinPro; //在index.html中以浏览器导入的方式引入
  // console.log(pinyin("韶粉"));

  // let db;
  // //打开数据库
  // const request = window.indexedDB.open("colorDB", 1);
  // //error表示数据库打开失败,onsuccess表示打开成功
  // request.onerror = function (event) {
  //   console.log("数据库打开失败");
  // };
  // request.onsuccess = function (event) {
  //   db = request.result; //通过result属性拿到数据库对象
  //   console.log("数据库打开成功");
  // };
  // console.log(color_data);
  color_data.forEach((item, index, array) => {
    const article = document.querySelector("article");
    const div_card = document.createElement("div");
    div_card.className = `color_card num_${item.num}`;
    div_card.setAttribute("style", `background-color:${item.hex}`);
    article.appendChild(div_card);

    const ruby = document.createElement("ruby");
    ruby.innerText = item.name;
    div_card.appendChild(ruby);

    const rt = document.createElement("rt");
    rt.innerText = pinyin(item.name);
    ruby.appendChild(rt);

    const span_hex = document.createElement("span");
    span_hex.className = "hex";
    span_hex.innerText = item.hex;
    const span_rgb = document.createElement("span");
    span_rgb.className = "rgb";
    span_rgb.innerText = item.rgb;
    div_card.appendChild(span_hex);
    div_card.appendChild(span_rgb);
  });
};
