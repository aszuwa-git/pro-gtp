# AI Eyewear Assistant V5

ระบบผู้ช่วยเลือกแว่นอ่านหนังสือ พร้อม Backend สำหรับเชื่อม Gemini Vision ผ่าน Google Apps Script

## ความสามารถใน Version 5

- ประเมินกำลังแว่นอ่านหนังสือเบื้องต้น
- เช็กอาการเสี่ยงที่ควรไปตรวจสายตาก่อน
- อัปโหลดรูปหน้าตรงและ Preview รูป
- วิเคราะห์รูปหน้าด้วย AI ผ่าน Backend
- ถ้ายังไม่ได้ตั้งค่า Backend จะใช้ Mock AI
- เลือกรูปหน้าเองได้
- แนะนำทรงแว่นตามรูปหน้า
- เลือกสไตล์และงบประมาณ
- Product Recommendation Engine
- Product Database V1 จำนวน 20 รายการ

## โครงสร้างไฟล์

```text
ai-eyewear-assistant-v5/
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

## ขั้นตอนติดตั้ง Google Apps Script Backend

1. ไปที่ Google Apps Script
2. สร้าง Project ใหม่
3. คัดลอกโค้ดจาก `apps-script/Code.gs` ไปวาง
4. ไปที่ Project Settings
5. Script Properties
6. เพิ่ม Property:
   - Name: `GEMINI_API_KEY`
   - Value: API Key ของ Gemini
7. กด Deploy
8. เลือก New deployment
9. Type: Web app
10. Execute as: Me
11. Who has access: Anyone
12. Copy Web App URL
13. นำ URL ไปใส่ใน `config.js`

```js
window.AI_CONFIG = {
  appsScriptUrl: "https://script.google.com/macros/s/xxxxxxx/exec",
  useMockWhenNoBackend: true
};
```

## หมายเหตุสำคัญ

- อย่าใส่ Gemini API Key ลงใน `script.js` หรือ `config.js`
- API Key ต้องอยู่ใน Google Apps Script Script Properties เท่านั้น
- ระบบนี้ไม่ใช่เครื่องมือตรวจวัดสายตาทางการแพทย์
- การวิเคราะห์รูปหน้าเป็นการแนะนำด้านสไตล์ ไม่ใช่การยืนยันตัวตนหรือวิเคราะห์ชีวมิติ
