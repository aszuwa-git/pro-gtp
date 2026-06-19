// AI Eyewear Assistant V4
// ไฟล์นี้เป็นตัวอย่าง config สำหรับเตรียมเชื่อม AI Vision API ในอนาคต
// หมายเหตุ: ไม่ควรใส่ API Key จริงในหน้าเว็บสาธารณะระยะยาว
// วิธีที่ปลอดภัยกว่าคือทำ Backend Proxy เช่น Cloudflare Workers, Firebase Functions, หรือ Apps Script Web App

window.AI_CONFIG = {
  provider: "mock",
  geminiApiKey: "",
  geminiModel: "gemini-1.5-flash"
};
