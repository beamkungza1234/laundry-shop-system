

---


# 🧺 Laundry Shop System (SolidJS + Hono + Prisma)

โปรเจกต์ระบบจัดการร้านซักรีด พัฒนาด้วยเทคโนโลยีสมัยใหม่และรันด้วย **Bun** ทั้งระบบ

### โครงสร้างโฟลเดอร์ (Monorepo Directory Structure)

เราจะใช้โครงสร้างแบบ Monorepo เพื่อให้แชร์ Type และจัดการ Package ได้ง่ายขึ้น

```text
laundry-shop-system/
├── frontend/               # Solid.JS + Tailwind CSS
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/ # สำหรับ UI Components ที่ใช้ร่วมกัน
│   │   │   ├── pages/      # เก็บหน้า LoginPage และหน้าที่เพื่อนๆ จะมาทำต่อ
│   │   │   ├── utils/      # เก็บ api.ts สำหรับจัดการ HTTP Request
│   │   │   ├── routes.tsx  # ไฟล์จัดการ Routing หลัก
│   │   │   └── App.tsx
│   │   └── index.tsx
│   └── package.json
├── backend/                # Hono + Prisma + SQLite
│   ├── src/
│   │   ├── routes/         # แบ่ง API routes (auth, orders, customers, etc.)
│   │   ├── middleware/     # สำหรับ Auth validation, Error handling
│   │   └── index.ts        # Entry point ของ Server
│   ├── prisma/
│   │   └── schema.prisma   # ไฟล์ตั้งค่า Database Schema
│   └── package.json
├── package.json            # จัดการ Workspaces
└── .gitignore              # สำคัญมากสำหรับการทำงานเป็นทีม
```



## 🚀 ขั้นตอนการเริ่มทำงาน (สำหรับเพื่อนร่วมทีม)

เพื่อให้เครื่องของทุกคนรันโปรเจกต์ได้เหมือนกันเป๊ะ ให้ทำตามลำดับนี้ครับ:

### 1. ติดตั้ง Library
เปิด Terminal แล้วรันคำสั่งติดตั้งทั้งหน้าบ้านและหลังบ้าน:
```bash
# ติดตั้งในโฟลเดอร์ backend (ถ้าไม่ได้ให้ cd backend ก่อนแล้วค่อย bun install)
cd backend && bun install

# ติดตั้งในโฟลเดอร์ frontend (ถ้าไม่ได้ให้ cd backend ก่อนแล้วค่อย bun install)
cd frontend && bun install

```

### 2. ตั้งค่าฐานข้อมูล (Database)

1. ตรวจสอบไฟล์ `.env` ในโฟลเดอร์ `backend` (ถ้าไม่มีให้สร้างใหม่)
2. รันคำสั่งเพื่อ Sync ตารางและใส่ข้อมูลทดสอบ (Seed):

```bash
cd backend
bunx prisma db push
bun run db:seed

```

### 3. การรันโปรเจกต์ (Development)

เปิด 2 Terminal เพื่อรันคู่กัน:

* **Backend:** `cd backend && bun run dev` (URL: `http://localhost:3000`)
* **Frontend:** `cd frontend && bun run dev` (URL: `http://localhost:5173`)

---

## 📂 โครงสร้างโปรเจกต์และจุดที่ต้องทำต่อ

### 🔹 Backend (`backend/src`)

* **`routes/auth.ts`**: ระบบ Login/Auth (ใช้ Bcrypt เช็ครหัสผ่าน Hash)
* **`routes/`**: 🟢 **[เพื่อนๆ]** ถ้าจะทำฟีเจอร์ใหม่ (เช่น Orders, Customers) ให้สร้างไฟล์ `.ts` แยกไว้ในโฟลเดอร์นี้
* **`index.ts`**: 🟢 **[เพื่อนๆ]** เมื่อสร้าง Route ใหม่เสร็จ ต้องนำมา Import และลงทะเบียนด้วย `app.route()` ที่นี่เสมอ

### 🔹 Frontend (`frontend/src`)

* **`app/pages/`**: 🟢 **[เพื่อนๆ]** สร้างไฟล์หน้าจอใหม่ที่นี่ (เช่น `DashboardPage.tsx`)
* **`App.tsx`**: 🟢 **[เพื่อนๆ]** เพิ่มเส้นทาง URL ของหน้าตัวเองต่อจากหน้า Login
* **`app/utils/api.ts`**: 🟢 **[เพื่อนๆ]** เพิ่มฟังก์ชันเรียก API (Fetch) ต่อจาก `login` ที่นี่เพื่อให้คนอื่นเรียกใช้ได้ง่าย

---

## 🔐 ข้อมูลสำหรับการทดสอบ (Test Account)

คุณสามารถใช้ Account นี้ในการ Login เพื่อทดสอบระบบ:

* **เบอร์โทรศัพท์:** `0812345678`
* **รหัสผ่าน:** `123456`
*(รหัสผ่านใน DB จะเห็นเป็น Hash เพื่อความปลอดภัย แต่ตอนส่งผ่าน Postman/Frontend ให้ใช้เลขปกติได้เลย)*

---

## 🤝 กฎการทำงาน (Git Workflow)

* **ห้าม** Push งานลง `main` โดยตรง
* **ให้สร้าง Branch ใหม่** ของตัวเองทุกครั้ง: `git checkout -b feat/ชื่อหน้าของคุณ`
* เมื่อทำเสร็จแล้วให้ **Pull Request** มาที่ `main`



---

### 💡 คำแนะนำเพิ่มเติมก่อนส่งงาน:
1. **เช็ค `.gitignore` อีกรอบ:** มั่นใจว่าไม่ได้เอา `node_modules` หรือ `dev.db` ขึ้นไปนะครับ
2. **Push ขึ้น Git:** ```bash
   git add .
   git commit -m "docs: add complete readme for team setup"
   git push origin main

















