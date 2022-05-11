import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("js-add-txt").value;
  document.getElementById("js-add-txt").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "flex-box";

  //p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    ////以下の処理は上の関数にまとめられる
    // const deleteTarget = completeButton.parentNode;
    // document.getElementById("js-incomplete-lists").removeChild(deleteTarget);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TODO内容テキスト取得
    const text = addTarget.firstElementChild.innerText;
    //li以下初期化
    addTarget.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //liタグの子要素に各子要素をを追加
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("js-complete-lists").appendChild(addTarget);
  });

  //button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    ////以下の処理は上の関数にまとめられる
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("js-incomplete-lists").removeChild(deleteTarget);
  });

  //liタグのｐ子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  //未完了リストに追加
  document.getElementById("js-incomplete-lists").appendChild(li);
};

//未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("js-incomplete-lists").removeChild(target);
};

document
  .getElementById("js-add-btn")
  .addEventListener("click", () => onClickAdd());
