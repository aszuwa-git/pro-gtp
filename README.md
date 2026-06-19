# AI Eyewear Assistant V6.1

AI Personal Eyewear Stylist เวอร์ชันต้นแบบ

## ความสามารถใน V6.1

- ประเมินกำลังแว่นอ่านหนังสือเบื้องต้น
- คัดกรองอาการเสี่ยงที่ควรไปตรวจสายตาก่อน
- อัปโหลดรูปหน้าตรงและ Preview รูป
- วิเคราะห์รูปหน้าผ่าน Gemini Backend หรือ Mock AI
- เพิ่ม Personal Profile:
  - เพศ
  - สีผิว
  - การใช้งานหลัก
  - ขนาดกรอบที่ชอบ
- เพิ่ม AI Stylist Rules Engine V1
- สร้าง AI Stylist Report
- แนะนำสีกรอบ วัสดุ ทรงแว่น และสิ่งที่ควรหลีกเลี่ยง
- Product Recommendation Engine ปรับคะแนนเพิ่มจากสีผิว การใช้งาน และขนาดกรอบ
- Product Database 20 SKU

## โครงสร้างไฟล์

```text
ai-eyewear-assistant-v6-1/
├── index.html
├── style.css
├── script.js
├── config.js
├── README.md
├── data/
│   └── products.json
└── apps-script/
    └── Code.gs
```

## วิธีใช้งาน

เปิด `index.html` ได้ทันที หรืออัปโหลดขึ้น GitHub Pages

## ตั้งค่า Gemini Backend

1. เปิด Google Apps Script
2. สร้าง Project ใหม่
3. วางโค้ดจาก `apps-script/Code.gs`
4. ไปที่ Project Settings > Script Properties
5. เพิ่ม `GEMINI_API_KEY`
6. Deploy เป็น Web App
7. Copy Web App URL
8. นำ URL ไปใส่ใน `config.js`

```js
window.AI_CONFIG = {
  appsScriptUrl: "https://script.google.com/macros/s/xxxxxxx/exec",
  useMockWhenNoBackend: true
};
```

## หมายเหตุ

- ระบบนี้ไม่ใช่เครื่องมือตรวจวัดสายตาทางการแพทย์
- AI Stylist Report เป็นคำแนะนำด้านสไตล์เบื้องต้น
- ห้ามใส่ Gemini API Key ในไฟล์ frontend เช่น `script.js` หรือ `config.js`
