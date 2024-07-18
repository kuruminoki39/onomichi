// ハンバーガーメニュー
// idがjs-drawer-iconの要素を取得、クリックイベントを設定
// document.getElementById("js-drawer-icon").addEventListener("click", function () {
//   // 画像を取得
//   const img = this.querySelector(".drawer-icon__image");
//   // 画像のURLを属性から取得
//   const currentSrc = img.getAttribute("src");
//   // 画像のURLを切り替える
//   // もし今の画像がhamburger-menu-icon.pngだったらclose.pngに切り替える
//   // そうでなければhamburger-menu-icon.pngに切り替える
//   const newSrc = currentSrc.includes("hamburger-menu-icon.png") ? "./images/header/close.png" : "./images/header/hamburger-menu-icon.png";
//   // 画像のURLを切り替える
//   img.setAttribute("src", newSrc);
//   // ボタンのクラスを切り替える
//   this.classList.toggle("is-checked");
// });

// ページが読み込まれたときに実行
document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニューのアイコンを探す
  const drawerIcon = document.getElementById("js-drawer-icon");
  // ドロワーアイコンの中身を探す
  const drawerContent = document.getElementById("js-drawer-content");
  // メニューのリンクを全部探す
  const drawerLinks = document.querySelectorAll(".drawer-content__link");

  // ハンバーガーメニューのボタンがクリックされたときにやること
  drawerIcon.addEventListener("click", function () {
    // ハンバーガーアイコンであればバツボタンに変える。バツボタンであればハンバーガーアイコンに変える
    const img = this.querySelector(".drawer-icon__image");
    const currentSrc = img.getAttribute("src");
    const newSrc = currentSrc.includes("hamburger-menu-icon.png") ? "./images/header/close.png" : "./images/header/hamburger-menu-icon.png";

    img.setAttribute("src", newSrc);
    drawerContent.classList.toggle("is-open");

    // ページ全体のスクロールを制御
    if (drawerContent.classList.contains("is-open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  drawerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      drawerContent.classList.remove("is-open");
      drawerIcon.classList.remove("is-checked");

      const img = drawerIcon.querySelector(".drawer-icon__image");
      img.setAttribute("src", "./images/header/hamburger-menu-icon.png");

      document.body.style.overflow = "auto";

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
