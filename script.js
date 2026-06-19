const products = [
  {
    "id": "G001",
    "name": "แว่นอ่านหนังสือ กรอบเหลี่ยมคลาสสิก +1.00",
    "strength": "+1.00",
    "frameShape": "กรอบเหลี่ยม",
    "color": "ดำ",
    "faceMatch": [
      "round",
      "oval"
    ],
    "style": "classic",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G002",
    "name": "แว่นอ่านหนังสือ ทรงมนใส่สบาย +1.00",
    "strength": "+1.00",
    "frameShape": "กรอบมน",
    "color": "ชา",
    "faceMatch": [
      "square",
      "heart"
    ],
    "style": "casual",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G003",
    "name": "แว่นอ่านหนังสือ Half Frame น้ำหนักเบา +1.00",
    "strength": "+1.00",
    "frameShape": "ครึ่งกรอบ",
    "color": "เงิน",
    "faceMatch": [
      "oval",
      "diamond"
    ],
    "style": "lightweight",
    "budget": "high",
    "priceRange": "300 บาทขึ้นไป",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G004",
    "name": "แว่นอ่านหนังสือ Wayfarer ทันสมัย +1.00",
    "strength": "+1.00",
    "frameShape": "Wayfarer",
    "color": "ดำ",
    "faceMatch": [
      "round",
      "oval",
      "long"
    ],
    "style": "modern",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G005",
    "name": "แว่นอ่านหนังสือ กรอบเหลี่ยมคลาสสิก +1.50",
    "strength": "+1.50",
    "frameShape": "กรอบเหลี่ยม",
    "color": "ดำ",
    "faceMatch": [
      "round",
      "oval"
    ],
    "style": "classic",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G006",
    "name": "แว่นอ่านหนังสือ ทรงมนใส่สบาย +1.50",
    "strength": "+1.50",
    "frameShape": "กรอบมน",
    "color": "ชา",
    "faceMatch": [
      "square",
      "heart"
    ],
    "style": "casual",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G007",
    "name": "แว่นอ่านหนังสือ Half Frame น้ำหนักเบา +1.50",
    "strength": "+1.50",
    "frameShape": "ครึ่งกรอบ",
    "color": "เงิน",
    "faceMatch": [
      "oval",
      "diamond"
    ],
    "style": "lightweight",
    "budget": "high",
    "priceRange": "300 บาทขึ้นไป",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G008",
    "name": "แว่นอ่านหนังสือ Wayfarer ทันสมัย +1.50",
    "strength": "+1.50",
    "frameShape": "Wayfarer",
    "color": "ดำ",
    "faceMatch": [
      "round",
      "oval",
      "long"
    ],
    "style": "modern",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G009",
    "name": "แว่นอ่านหนังสือ กรอบเหลี่ยมคลาสสิก +2.00",
    "strength": "+2.00",
    "frameShape": "กรอบเหลี่ยม",
    "color": "ดำ",
    "faceMatch": [
      "round",
      "oval"
    ],
    "style": "classic",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G010",
    "name": "แว่นอ่านหนังสือ ทรงมนใส่สบาย +2.00",
    "strength": "+2.00",
    "frameShape": "กรอบมน",
    "color": "ชา",
    "faceMatch": [
      "square",
      "heart"
    ],
    "style": "casual",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G011",
    "name": "แว่นอ่านหนังสือ Half Frame น้ำหนักเบา +2.00",
    "strength": "+2.00",
    "frameShape": "ครึ่งกรอบ",
    "color": "เงิน",
    "faceMatch": [
      "oval",
      "diamond"
    ],
    "style": "lightweight",
    "budget": "high",
    "priceRange": "300 บาทขึ้นไป",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G012",
    "name": "แว่นอ่านหนังสือ Wayfarer ทันสมัย +2.00",
    "strength": "+2.00",
    "frameShape": "Wayfarer",
    "color": "ดำ",
    "faceMatch": [
      "round",
      "oval",
      "long"
    ],
    "style": "modern",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G013",
    "name": "แว่นอ่านหนังสือ กรอบเหลี่ยมคลาสสิก +2.50",
    "strength": "+2.50",
    "frameShape": "กรอบเหลี่ยม",
    "color": "ดำ",
    "faceMatch": [
      "round",
      "oval"
    ],
    "style": "classic",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G014",
    "name": "แว่นอ่านหนังสือ ทรงมนใส่สบาย +2.50",
    "strength": "+2.50",
    "frameShape": "กรอบมน",
    "color": "ชา",
    "faceMatch": [
      "square",
      "heart"
    ],
    "style": "casual",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G015",
    "name": "แว่นอ่านหนังสือ Half Frame น้ำหนักเบา +2.50",
    "strength": "+2.50",
    "frameShape": "ครึ่งกรอบ",
    "color": "เงิน",
    "faceMatch": [
      "oval",
      "diamond"
    ],
    "style": "lightweight",
    "budget": "high",
    "priceRange": "300 บาทขึ้นไป",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G016",
    "name": "แว่นอ่านหนังสือ Wayfarer ทันสมัย +2.50",
    "strength": "+2.50",
    "frameShape": "Wayfarer",
    "color": "ดำ",
    "faceMatch": [
      "round",
      "oval",
      "long"
    ],
    "style": "modern",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G017",
    "name": "แว่นอ่านหนังสือ กรอบเหลี่ยมคลาสสิก +3.00",
    "strength": "+3.00",
    "frameShape": "กรอบเหลี่ยม",
    "color": "ดำ",
    "faceMatch": [
      "round",
      "oval"
    ],
    "style": "classic",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G018",
    "name": "แว่นอ่านหนังสือ ทรงมนใส่สบาย +3.00",
    "strength": "+3.00",
    "frameShape": "กรอบมน",
    "color": "ชา",
    "faceMatch": [
      "square",
      "heart"
    ],
    "style": "casual",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G019",
    "name": "แว่นอ่านหนังสือ Half Frame น้ำหนักเบา +3.00",
    "strength": "+3.00",
    "frameShape": "ครึ่งกรอบ",
    "color": "เงิน",
    "faceMatch": [
      "oval",
      "diamond"
    ],
    "style": "lightweight",
    "budget": "high",
    "priceRange": "300 บาทขึ้นไป",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  },
  {
    "id": "G020",
    "name": "แว่นอ่านหนังสือ Wayfarer ทันสมัย +3.00",
    "strength": "+3.00",
    "frameShape": "Wayfarer",
    "color": "ดำ",
    "faceMatch": [
      "round",
      "oval",
      "long"
    ],
    "style": "modern",
    "budget": "mid",
    "priceRange": "150-299 บาท",
    "link": "https://shopee.co.th/",
    "note": "เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง"
  }
];

const faceShapeMap = {
  round: { label: "หน้ากลม", recommend: ["กรอบเหลี่ยม", "กรอบสี่เหลี่ยมผืนผ้า", "Wayfarer", "กรอบสีเข้ม"], avoid: ["กรอบกลมเล็ก", "กรอบบางมาก"] },
  square: { label: "หน้าเหลี่ยม", recommend: ["กรอบกลม", "กรอบมน", "ทรงวงรี", "Aviator"], avoid: ["กรอบเหลี่ยมแข็ง", "กรอบมุมชัดมาก"] },
  long: { label: "หน้ายาว", recommend: ["กรอบใหญ่", "Oversize", "กรอบทรงสูง", "Wayfarer"], avoid: ["กรอบเล็กแคบ", "กรอบเตี้ยมาก"] },
  oval: { label: "หน้ารูปไข่", recommend: ["Wayfarer", "เหลี่ยมมน", "ครึ่งกรอบ", "กรอบทรงกลาง"], avoid: ["กรอบใหญ่เกินใบหน้า"] },
  heart: { label: "หน้าหัวใจ", recommend: ["กรอบบาง", "กรอบมน", "ทรงวงรี", "Cat-eye เบา ๆ"], avoid: ["กรอบหนาด้านบน", "กรอบใหญ่กดช่วงหน้าผาก"] },
  diamond: { label: "หน้าเพชร", recommend: ["Cat-eye", "วงรี", "ครึ่งกรอบ", "กรอบที่เน้นช่วงคิ้ว"], avoid: ["กรอบแคบมาก", "กรอบเล็กเกินไป"] }
};

const styleMap = {
  classic: "สุภาพ / คลาสสิก",
  casual: "ใส่ง่าย / ใช้ทุกวัน",
  modern: "ทันสมัย",
  lightweight: "เบา / สบาย"
};

const budgetMap = {
  low: "ต่ำกว่า 150 บาท",
  mid: "150-299 บาท",
  high: "300 บาทขึ้นไป",
  any: "ไม่จำกัด"
};

const form = document.getElementById("quizForm");
const resultCard = document.getElementById("resultCard");
const resultContent = document.getElementById("resultContent");
const styleResult = document.getElementById("styleResult");
const productList = document.getElementById("productList");
const resetBtn = document.getElementById("resetBtn");
const faceImage = document.getElementById("faceImage");
const previewBox = document.getElementById("previewBox");
const facePreview = document.getElementById("facePreview");

faceImage.addEventListener("change", () => {
  const file = faceImage.files && faceImage.files[0];
  if (!file) {
    previewBox.classList.add("hidden");
    facePreview.src = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = event => {
    facePreview.src = event.target.result;
    previewBox.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
});

function getCheckedRiskItems() {
  return Array.from(document.querySelectorAll(".risk:checked")).map(item => item.value);
}

function getFormValue(name) {
  const field = form.elements[name];
  if (!field) return 0;
  if (field instanceof RadioNodeList) {
    const checked = Array.from(field).find(input => input.checked);
    return checked ? Number(checked.value) : 0;
  }
  return Number(field.value || 0);
}

function getSelectedRadioValue(name) {
  const field = form.elements[name];
  if (!field) return "";
  const checked = Array.from(field).find(input => input.checked);
  return checked ? checked.value : "";
}

function calculateStrength(score) {
  if (score <= 3) return { strength: "+0.50", message: "ยังมีอาการน้อย หรืออาจยังไม่จำเป็นต้องใช้แว่นอ่านหนังสือ" };
  if (score <= 6) return { strength: "+1.00", message: "เหมาะกับผู้เริ่มมีอาการอ่านใกล้ไม่ชัดเล็กน้อย" };
  if (score <= 9) return { strength: "+1.50", message: "เหมาะกับการอ่านหนังสือ มือถือ และฉลากสินค้าในชีวิตประจำวัน" };
  if (score <= 12) return { strength: "+2.00", message: "เหมาะกับผู้ที่อ่านใกล้ลำบากระดับกลาง" };
  if (score <= 15) return { strength: "+2.50", message: "เหมาะกับผู้ที่ต้องการกำลังขยายมากขึ้นสำหรับอ่านใกล้" };
  return { strength: "+3.00", message: "อาจต้องการกำลังขยายสูง ควรลองเทียบหรือปรึกษาผู้เชี่ยวชาญก่อนซื้อ" };
}

function renderStyleResult(faceShapeKey, stylePref, budget) {
  const face = faceShapeMap[faceShapeKey];
  if (!face) return "";
  return `
    <div class="style-box">
      <h3>ผลวิเคราะห์สไตล์เบื้องต้น</h3>
      <p>รูปหน้าที่เลือก: <strong>${face.label}</strong></p>
      <p>สไตล์ที่ชอบ: <strong>${styleMap[stylePref] || "-"}</strong></p>
      <p>งบประมาณ: <strong>${budgetMap[budget] || "-"}</strong></p>
      <p><strong>ทรงแว่นที่เหมาะ:</strong></p>
      <ul class="recommend-list">${face.recommend.map(item => `<li>✓ ${item}</li>`).join("")}</ul>
      <p><strong>ควรหลีกเลี่ยง:</strong></p>
      <ul class="recommend-list">${face.avoid.map(item => `<li>✕ ${item}</li>`).join("")}</ul>
      <p><strong>หมายเหตุ:</strong> เป็นการแนะนำด้านสไตล์เบื้องต้น ผลลัพธ์อาจคลาดเคลื่อนตามมุมกล้อง แสง และความชอบส่วนบุคคล</p>
    </div>
  `;
}

function scoreProduct(product, strength, faceShapeKey, stylePref, budget) {
  let score = 0;
  if (product.strength === strength) score += 50;
  if (product.faceMatch.includes(faceShapeKey)) score += 25;
  if (product.style === stylePref) score += 15;
  if (budget === "any" || product.budget === budget) score += 10;
  return score;
}

function renderProducts(strength, faceShapeKey, stylePref, budget) {
  const ranked = products
    .map(product => ({ ...product, matchScore: scoreProduct(product, strength, faceShapeKey, stylePref, budget) }))
    .filter(product => product.matchScore >= 50)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 6);

  if (ranked.length === 0) {
    return "<p>ยังไม่มีสินค้า demo ที่ตรงกับเงื่อนไข ให้เพิ่มข้อมูลในไฟล์ script.js หรือ data/products.json</p>";
  }

  return `
    <h3>สินค้าแนะนำเบื้องต้น</h3>
    <p>ระบบจัดอันดับจากกำลังแว่น + รูปหน้า + สไตล์ + งบประมาณ</p>
    <div class="product-grid">
      ${ranked.map(product => `
        <div class="product">
          <h4>${product.name}</h4>
          <p class="score">คะแนนความเหมาะสม: ${product.matchScore}/100</p>
          <p>กำลัง: ${product.strength}</p>
          <p>ทรง: ${product.frameShape}</p>
          <p>สี: ${product.color}</p>
          <p>สไตล์: ${styleMap[product.style]}</p>
          <p>งบ: ${product.priceRange}</p>
          <p>${product.faceMatch.map(key => `<span class="tag">${faceShapeMap[key]?.label || key}</span>`).join("")}</p>
          <a href="${product.link}" target="_blank" rel="noopener">ดูสินค้า</a>
        </div>
      `).join("")}
    </div>
  `;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const risks = getCheckedRiskItems();

  if (risks.length > 0) {
    resultContent.innerHTML = `
      <div class="result-box danger">
        <h3>ระบบไม่แนะนำให้ซื้อแว่นจากการประเมินนี้ทันที</h3>
        <p>คุณเลือกอาการที่ควรตรวจสายตาก่อน ได้แก่:</p>
        <ul>${risks.map(item => `<li>${item}</li>`).join("")}</ul>
        <p>แนะนำให้ตรวจสายตากับผู้เชี่ยวชาญก่อนเลือกซื้อแว่น เพื่อความปลอดภัย</p>
      </div>
    `;
    styleResult.innerHTML = "";
    productList.innerHTML = "";
    resultCard.classList.remove("hidden");
    resultCard.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const score =
    getFormValue("age") +
    getFormValue("phone") +
    getFormValue("labelText") +
    getFormValue("strain") +
    getFormValue("distance") +
    getFormValue("screenText");

  const result = calculateStrength(score);
  const faceShapeKey = getSelectedRadioValue("faceShape");
  const stylePref = getSelectedRadioValue("stylePref");
  const budget = getSelectedRadioValue("budget");

  resultContent.innerHTML = `
    <div class="result-box">
      <p>คะแนนรวมของคุณ</p>
      <div class="result-strength">${score} คะแนน</div>
      <p>กำลังแว่นอ่านหนังสือที่แนะนำเบื้องต้น</p>
      <div class="result-strength">${result.strength}</div>
      <p>${result.message}</p>
      <p><strong>หมายเหตุ:</strong> ผลลัพธ์นี้เป็นการประเมินเบื้องต้นสำหรับเลือกแว่นอ่านหนังสือสำเร็จรูป ไม่ใช่การตรวจวัดสายตาทางการแพทย์</p>
    </div>
  `;

  styleResult.innerHTML = renderStyleResult(faceShapeKey, stylePref, budget);
  productList.innerHTML = renderProducts(result.strength, faceShapeKey, stylePref, budget);
  resultCard.classList.remove("hidden");
  resultCard.scrollIntoView({ behavior: "smooth" });
});

resetBtn.addEventListener("click", () => {
  form.reset();
  document.querySelectorAll(".risk").forEach(item => item.checked = false);
  resultCard.classList.add("hidden");
  previewBox.classList.add("hidden");
  facePreview.src = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
});
