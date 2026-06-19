const products = [
  {
    id: "G001",
    name: "แว่นอ่านหนังสือกรอบเหลี่ยม รุ่นเบา",
    strength: "+1.00",
    shape: "เหลี่ยม",
    color: "ดำ",
    face: ["กลม", "รูปไข่"],
    link: "https://shopee.co.th/"
  },
  {
    id: "G002",
    name: "แว่นอ่านหนังสือกรอบเหลี่ยม รุ่นเบา",
    strength: "+1.50",
    shape: "เหลี่ยม",
    color: "น้ำตาล",
    face: ["กลม", "รูปไข่"],
    link: "https://shopee.co.th/"
  },
  {
    id: "G003",
    name: "แว่นอ่านหนังสือกรอบใหญ่ ใส่สบาย",
    strength: "+2.00",
    shape: "เหลี่ยมมน",
    color: "ดำ",
    face: ["กลม", "ยาว", "รูปไข่"],
    link: "https://shopee.co.th/"
  },
  {
    id: "G004",
    name: "แว่นอ่านหนังสือ Half Frame",
    strength: "+2.50",
    shape: "ครึ่งกรอบ",
    color: "เงิน",
    face: ["เหลี่ยม", "รูปไข่"],
    link: "https://shopee.co.th/"
  },
  {
    id: "G005",
    name: "แว่นอ่านหนังสือกรองแสง",
    strength: "+3.00",
    shape: "ทรงมน",
    color: "ชา",
    face: ["เหลี่ยม", "หัวใจ"],
    link: "https://shopee.co.th/"
  }
];

const form = document.getElementById("quizForm");
const resultCard = document.getElementById("resultCard");
const resultContent = document.getElementById("resultContent");
const productList = document.getElementById("productList");
const resetBtn = document.getElementById("resetBtn");

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

function calculateStrength(score) {
  if (score <= 3) return { strength: "+0.50", message: "ยังมีอาการน้อย หรืออาจยังไม่จำเป็นต้องใช้แว่นอ่านหนังสือ" };
  if (score <= 6) return { strength: "+1.00", message: "เหมาะกับผู้เริ่มมีอาการอ่านใกล้ไม่ชัดเล็กน้อย" };
  if (score <= 9) return { strength: "+1.50", message: "เหมาะกับการอ่านหนังสือ มือถือ และฉลากสินค้าในชีวิตประจำวัน" };
  if (score <= 12) return { strength: "+2.00", message: "เหมาะกับผู้ที่อ่านใกล้ลำบากระดับกลาง" };
  if (score <= 15) return { strength: "+2.50", message: "เหมาะกับผู้ที่ต้องการกำลังขยายมากขึ้นสำหรับอ่านใกล้" };
  return { strength: "+3.00", message: "อาจต้องการกำลังขยายสูง ควรลองเทียบหรือปรึกษาผู้เชี่ยวชาญก่อนซื้อ" };
}

function renderProducts(strength) {
  const matched = products.filter(product => product.strength === strength);
  if (matched.length === 0) {
    return "<p>ยังไม่มีสินค้า demo สำหรับค่านี้ ให้เพิ่มในไฟล์ script.js หรือ data/products.json</p>";
  }

  return `
    <h3>สินค้าแนะนำเบื้องต้น</h3>
    <div class="product-grid">
      ${matched.map(product => `
        <div class="product">
          <h4>${product.name}</h4>
          <p>กำลัง: ${product.strength}</p>
          <p>ทรง: ${product.shape}</p>
          <p>สี: ${product.color}</p>
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

  productList.innerHTML = renderProducts(result.strength);
  resultCard.classList.remove("hidden");
  resultCard.scrollIntoView({ behavior: "smooth" });
});

resetBtn.addEventListener("click", () => {
  form.reset();
  document.querySelectorAll(".risk").forEach(item => item.checked = false);
  resultCard.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
