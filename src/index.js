import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("js-add-txt").value;
  document.getElementById("js-add-txt").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "flex-box";
  console.log(li);

  //div生成
  const p = document.createElement("p");
  p.innerText = inputText;
  console.log(p);
};

document
  .getElementById("js-add-btn")
  .addEventListener("click", () => onClickAdd());
