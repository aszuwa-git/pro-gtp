const products = [
  {
    id: "G001",
    name: "แว่นอ่านหนังสือกรอบเหลี่ยม รุ่นเบา",
    strength: "+1.00",
    frameShape: "กรอบเหลี่ยม",
    color: "ดำ",
    faceMatch: ["round", "oval"],
    link: "https://shopee.co.th/"
  },
  {
    id: "G002",
    name: "แว่นอ่านหนังสือกรอบเหลี่ยม สีชา",
    strength: "+1.50",
    frameShape: "กรอบเหลี่ยม",
    color: "น้ำตาล",
    faceMatch: ["round", "oval"],
    link: "https://shopee.co.th/"
  },
  {
    id: "G003",
    name: "แว่นอ่านหนังสือกรอบใหญ่ ใส่สบาย",
    strength: "+2.00",
    frameShape: "กรอบเหลี่ยมมน",
    color: "ดำ",
    faceMatch: ["round", "long", "oval"],
    link: "https://shopee.co.th/"
  },
  {
    id: "G004",
    name: "แว่นอ่านหนังสือ Half Frame",
    strength: "+2.50",
    frameShape: "ครึ่งกรอบ",
    color: "เงิน",
    faceMatch: ["square", "oval", "diamond"],
    link: "https://shopee.co.th/"
  },
  {
    id: "G005",
    name: "แว่นอ่านหนังสือทรงมนกรองแสง",
    strength: "+3.00",
    frameShape: "กรอบมน",
    color: "ชา",
    faceMatch: ["square", "heart"],
    link: "https://shopee.co.th/"
  },
  {
    id: "G006",
    name: "แว่นอ่านหนังสือทรง Wayfarer",
    strength: "+1.50",
    frameShape: "Wayfarer",
    color: "ดำ",
    faceMatch: ["oval", "round", "long"],
    link: "https://shopee.co.th/"
  },
  {
    id: "G007",
    name: "แว่นอ่านหนังสือทรงวงรี",
    strength: "+2.00",
    frameShape: "วงรี",
    color: "ทอง",
    faceMatch: ["square", "diamond", "heart"],
    link: "https://shopee.co.th/"
  }
];

const faceShapeMap = {
  round: {
    label: "หน้ากลม",
    recommend: ["กรอบเหลี่ยม", "กรอบสี่เหลี่ยมผืนผ้า", "Wayfarer", "กรอบสีเข้ม"],
    avoid: ["กรอบกลมเล็ก", "กรอบบางมาก"]
  },
  square: {
    label: "หน้าเหลี่ยม",
    recommend: ["กรอบกลม", "กรอบมน", "ทรงวงรี", "Aviator"],
    avoid: ["กรอบเหลี่ยมแข็ง", "กรอบมุมชัดมาก"]
  },
  long: {
    label: "หน้ายาว",
    recommend: ["กรอบใหญ่", "Oversize", "กรอบทรงสูง", "Wayfarer"],
    avoid: ["กรอบเล็กแคบ", "กรอบเตี้ยมาก"]
  },
  oval: {
    label: "หน้ารูปไข่",
    recommend: ["Wayfarer", "เหลี่ยมมน", "ครึ่งกรอบ", "กรอบทรงกลาง"],
    avoid: ["กรอบใหญ่เกินใบหน้า"]
  },
  heart: {
    label: "หน้าหัวใจ",
    recommend: ["กรอบบาง", "กรอบมน", "ทรงวงรี", "Cat-eye เบา ๆ"],
    avoid: ["กรอบหนาด้านบน", "กรอบใหญ่กดช่วงหน้าผาก"]
  },
  diamond: {
    label: "หน้าเพชร",
    recommend: ["Cat-eye", "วงรี", "ครึ่งกรอบ", "กรอบที่เน้นช่วงคิ้ว"],
    avoid: ["กรอบแคบมาก", "กรอบเล็กเกินไป"]
  }
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

function renderStyleResult(faceShapeKey) {
  const face = faceShapeMap[faceShapeKey];
  if (!face) return "";

  return `
    <div class="style-box">
      <h3>ผลวิเคราะห์รูปหน้าเบื้องต้น</h3>
      <p>รูปหน้าที่เลือก: <strong>${face.label}</strong></p>

      <p><strong>ทรงแว่นที่เหมาะ:</strong></p>
      <ul class="recommend-list">
        ${face.recommend.map(item => `<li>✓ ${item}</li>`).join("")}
      </ul>

      <p><strong>ควรหลีกเลี่ยง:</strong></p>
      <ul class="recommend-list">
        ${face.avoid.map(item => `<li>✕ ${item}</li>`).join("")}
      </ul>

      <p><strong>หมายเหตุ:</strong> เป็นการแนะนำด้านสไตล์เบื้องต้น ผลลัพธ์อาจคลาดเคลื่อนตามมุมกล้อง แสง และความชอบส่วนบุคคล</p>
    </div>
  `;
}

function renderProducts(strength, faceShapeKey) {
  let matched = products.filter(product => product.strength === strength && product.faceMatch.includes(faceShapeKey));

  if (matched.length === 0) {
    matched = products.filter(product => product.strength === strength);
  }

  if (matched.length === 0) {
    return "<p>ยังไม่มีสินค้า demo สำหรับค่านี้ ให้เพิ่มในไฟล์ script.js หรือ data/products.json</p>";
  }

  return `
    <h3>สินค้าแนะนำเบื้องต้น</h3>
    <p>ระบบเลือกจากกำลังแว่น + รูปหน้าที่เหมาะสม</p>
    <div class="product-grid">
      ${matched.map(product => `
        <div class="product">
          <h4>${product.name}</h4>
          <p>กำลัง: ${product.strength}</p>
          <p>ทรง: ${product.frameShape}</p>
          <p>สี: ${product.color}</p>
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

  styleResult.innerHTML = renderStyleResult(faceShapeKey);
  productList.innerHTML = renderProducts(result.strength, faceShapeKey);
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
