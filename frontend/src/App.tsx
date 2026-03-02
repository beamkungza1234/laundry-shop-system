// frontend/src/App.tsx
import { Router, Route } from "@solidjs/router"; // นำเข้าแค่ Route พอ (ไม่มี Routes แล้ว)
import LoginPage from "./app/pages/LoginPage";

function Layout(props: any) {
  return (
    <div class="min-h-screen bg-gray-50">
      {/* ใน Solid Router v0.15+ 
         เราจะใช้ props.children เป็นตัวแสดงผลหน้าที่ถูกเลือกตาม Path 
      */}
      {props.children}
    </div>
  );
}

export default function App() {
  return (
    // 💡 เอา Router มาครอบ Route โดยตรงเลยครับ ตัดปัญหาเรื่องท่อตัน
    <Router>
      <Route path="/" component={LoginPage} />
      {/* <Route path="/dashboard" component={DashboardPage} /> */}
    </Router>
  );
}