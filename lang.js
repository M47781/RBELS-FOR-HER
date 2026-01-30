const content = {
  fr: {
    bio: "Style • Confort • Qualité<br><i>Rebelle dans la décence</i>", // تم تعديلها للفرنسية
    btn1: "🧥 Nouvelle Collection",
    btn2: "🔥 Édition Limitée",
    btn3: "📲 Commander sur WhatsApp",
    btn4: "⭐ Avis Clientes",
    footer: "Made for confident women<br>🚚 Livraison | ✨ Qualité Premium | 💎 Édition Limitée",
    dir: "ltr"
  },
  en: {
    bio: "Style • Comfort • Quality<br><i>Rebellious in decency</i>", // بقيت بالإنجليزية الأصلية
    btn1: "🧥 New Collection",
    btn2: "🔥 Limited Edition",
    btn3: "📲 Order on WhatsApp",
    btn4: "⭐ Client Reviews",
    footer: "Made for confident women<br>🚚 Delivery | ✨ Premium Quality | 💎 Limited Edition",
    dir: "ltr"
  },
  ar: {
    bio: "أناقة • راحة • جودة<br><i>تمرد برقي</i>",
    btn1: "🧥 التشكيلة الجديدة",
    btn2: "🔥 إصدار محدود",
    btn3: "📲 اطلب عبر واتساب",
    btn4: "⭐ آراء الزبونات",
    footer: "صُنع للنساء الواثقات<br>🚚 توصيل | ✨ جودة عالية | 💎 إصدار محدود",
    dir: "rtl"
  }
};

function setLang(lang) {
  // ضبط اتجاه الصفحة (يمين لليسار أو العكس)
  document.body.dir = content[lang].dir;

  // تحديث النصوص
  document.getElementById("bio").innerHTML = content[lang].bio;
  document.getElementById("btn1").innerText = content[lang].btn1;
  document.getElementById("btn2").innerText = content[lang].btn2;
  document.getElementById("btn3").innerText = content[lang].btn3;
  document.getElementById("btn4").innerText = content[lang].btn4;
  document.getElementById("footer").innerHTML = content[lang].footer;

  // تمييز زر اللغة النشط
  document.querySelectorAll(".lang-switch button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.lang-switch button[onclick="setLang('${lang}')"]`).classList.add("active");
}

// اللغة الافتراضية عند الفتح
setLang("fr");