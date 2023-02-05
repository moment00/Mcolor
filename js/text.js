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

  // 单色
  one_color_data.forEach((item, index, array) => {
    const article_one_color = document.querySelector("#one_color_page");
    const div_one_color_card = document.createElement("div");
    div_one_color_card.className = `one_color_card num_${item.num}`;
    div_one_color_card.setAttribute("style", `background-color:${item.hex}`);
    article_one_color.appendChild(div_one_color_card);

    const ruby = document.createElement("ruby");
    ruby.innerText = item.name;
    div_one_color_card.appendChild(ruby);

    const rt = document.createElement("rt");
    rt.innerText = pinyin(item.name);
    ruby.appendChild(rt);

    const span_hex = document.createElement("span");
    span_hex.className = "hex";
    span_hex.innerText = item.hex;
    const span_rgb = document.createElement("span");
    span_rgb.className = "rgb";
    span_rgb.innerText = hexToRgba(item.hex).rgb;
    div_one_color_card.appendChild(span_hex);
    div_one_color_card.appendChild(span_rgb);
  });

  // 将hex颜色转成rgb
  function hexToRgba(hex, opacity = 1) {
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
        parseInt("0x" + hex.slice(1, 3)) +
        "," +
        parseInt("0x" + hex.slice(3, 5)) +
        "," +
        parseInt("0x" + hex.slice(5, 7)),
      rgba: RGBA,
    };
  }
  // 双色
  two_color_data.forEach((item, index, array) => {
    const article_two_color = document.querySelector("#two_color_page");
    const div_two_color = document.createElement("div");
    div_two_color.className = "two_color_card";
    div_two_color.setAttribute(
      "style",
      `background-image:linear-gradient(${item.color_1} 50%,${item.color_2} 50%)`
    );
    article_two_color.appendChild(div_two_color);

    const circle1 = document.createElement("div");
    const circle2 = document.createElement("div");
    circle1.className = "circle";
    circle2.className = "circle";

    circle1.setAttribute(
      "style",
      `background:${item.color_2};box-shadow:5px -5px 13px ${item.color_1},
                        -5px 5px 13px ${item.color_1};border:10px double ${item.color_1}`
    );
    circle2.setAttribute("style", ``);
    circle2.setAttribute(
      "style",
      `background:${item.color_1};box-shadow:5px -5px 13px ${item.color_2},
                        -5px 5px 13px ${item.color_2};border:8px double ${item.color_2}`
    );
    div_two_color.appendChild(circle1);
    div_two_color.appendChild(circle2);

    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    span1.className = "color_name";
    span2.className = "hex";
    span1.innerText = item.name_2;
    span2.innerText = item.color_2;
    circle1.appendChild(span1);
    circle1.appendChild(span2);

    const span3 = document.createElement("span");
    const span4 = document.createElement("span");
    span3.className = "color_name";
    span4.className = "hex";
    span3.innerText = item.name_1;
    span4.innerText = item.color_1;
    circle2.appendChild(span3);
    circle2.appendChild(span4);
  });
};
