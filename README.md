# AI Eyewear Assistant V4

ระบบต้นแบบผู้ช่วยเลือกแว่นอ่านหนังสือ พร้อมโครงสร้างสำหรับ AI Face Analysis

## ความสามารถใน Version 4

- ประเมินกำลังแว่นอ่านหนังสือเบื้องต้น
- เช็กอาการเสี่ยงที่ควรไปตรวจสายตาก่อน
- อัปโหลดรูปหน้าตรงและ Preview รูป
- เพิ่มปุ่มทดลอง AI วิเคราะห์รูปหน้า
- Mock AI Face Analysis เพื่อทดสอบ Flow
- เลือกรูปหน้าเองได้เหมือนเดิม
- แนะนำทรงแว่นตามรูปหน้า
- เลือกสไตล์และงบประมาณ
- Product Database V1 จำนวน 20 รายการ
- Product Recommendation Engine พร้อม Ranking Score
- เตรียมไฟล์ `config.example.js` สำหรับเชื่อม AI Vision API ภายหลัง

## วิธีเปิดใช้งาน

เปิดไฟล์ `index.html` ด้วย Browser ได้ทันที

## วิธีนำขึ้น GitHub Pages

1. อัปโหลดไฟล์ทั้งหมดขึ้น Repository
2. ไปที่ Settings
3. เลือก Pages
4. Source: Deploy from branch
5. Branch: main
6. Folder: /root
7. Save

## วิธีแก้ลิงก์สินค้า

แก้ในไฟล์ `script.js` หรือ `data/products.json`

```js
link: "https://shopee.co.th/"
```

ให้เปลี่ยนเป็น Shopee Affiliate Link หรือสินค้าร้านจริง

## หมายเหตุเรื่อง AI API

Version 4 ยังไม่เรียก AI API จริง เพื่อป้องกันปัญหา API Key รั่วบนหน้าเว็บสาธารณะ

แนวทางที่ควรใช้ในระบบจริง:

```text
Frontend
↓
Backend Proxy
↓
Gemini Vision / GPT Vision
↓
ส่งผลกลับหน้าเว็บ
```

Backend Proxy ที่ใช้ได้:
- Google Apps Script Web App
- Cloudflare Workers
- Firebase Functions
- Node.js Server

## โครงสร้างไฟล์

```text
ai-eyewear-assistant-v4/
├── index.html
├── style.css
├── script.js
├── config.example.js
├── README.md
└── data/
    └── products.json
```

## หมายเหตุสำคัญ

ระบบนี้เป็นเพียงเครื่องมือประเมินเบื้องต้น ไม่ใช่เครื่องมือตรวจวัดสายตาทางการแพทย์
การวิเคราะห์รูปหน้าเป็นการแนะนำด้านสไตล์ ไม่ใช่การวิเคราะห์ทางชีวมิติหรือการยืนยันตัวตน
