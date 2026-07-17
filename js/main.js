/* ==========================================================================
   共通スクリプト: モバイルナビ開閉 / 予約ボタンのリンク設定 / SNSリンク設定
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // モバイルメニュー開閉
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // 予約ボタン・フッター予約リンクに config.js のURLを反映
  if (typeof SITE_CONFIG !== "undefined") {
    document.querySelectorAll("[data-reservation-link]").forEach(el => {
      el.setAttribute("href", SITE_CONFIG.reservationUrl);
    });
    document.querySelectorAll("[data-contact-email]").forEach(el => {
      el.setAttribute("href", `mailto:${SITE_CONFIG.contactEmail}`);
      if (el.dataset.contactEmail === "text") el.textContent = SITE_CONFIG.contactEmail;
    });
    const socialMap = {
      youtube: SITE_CONFIG.social.youtube,
      tiktok: SITE_CONFIG.social.tiktok,
      line: SITE_CONFIG.social.line,
      wechat: SITE_CONFIG.social.wechat
    };
    document.querySelectorAll("[data-social]").forEach(el => {
      const key = el.getAttribute("data-social");
      if (socialMap[key]) el.setAttribute("href", socialMap[key]);
    });
  }
});
