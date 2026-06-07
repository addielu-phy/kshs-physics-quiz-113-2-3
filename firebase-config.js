/* ===========================================================
   雲端設定（Firebase）— 老師端集中收集全班成績用
   -----------------------------------------------------------
   還沒設定前，enabled 維持 false：學生網站照常運作（成績只存本機），
   老師後台會顯示「尚未設定雲端」。
   設定步驟見 FIREBASE_SETUP.md。完成後把下面填好、並將 enabled 改成 true。
   =========================================================== */
window.CLOUD = {
  enabled: true,
  teacherEmail: "quantumlu0801@gmail.com",
  config: {
    apiKey: "AIzaSyD20ccAnJVtN2AEoj7HjeNWCWpe1Mo-vmM",
    authDomain: "kh-physics-self-20260607.firebaseapp.com",
    projectId: "kh-physics-self-20260607",
    storageBucket: "kh-physics-self-20260607.firebasestorage.app",
    messagingSenderId: "104254330422",
    appId: "1:104254330422:web:f5891aa0be5329eded2a97"
  }
};
