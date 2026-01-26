// 1. استيراد Firebase (ممكن تحطهم في آخر ملف الـ HTML)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

// 2. إعدادات المشروع (اللي نسختها من الخطوة رقم 4)
const firebaseConfig = {
    apiKey: "AIzaSyBBRGrnIr_ZeZjuQ0LDu4Kjfyn2YYVWFFk",
    authDomain: "joba-9c289.firebaseapp.com",
    projectId: "joba-9c289",
    storageBucket: "joba-9c289.firebasestorage.app",
    messagingSenderId: "1042717374258",
    appId: "1:1042717374258:web:eb77191125685be26d892b",
    measurementId: "G-JZ98LF6SCK"
};

// 3. تشغيل Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 4. كود الإرسال
const form = document.getElementById('contact-form');
const btn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    btn.disabled = true;
    btn.innerText = "جاري الحفظ...";

    // تجميع البيانات من الفورم
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };

    // إرسال البيانات لجدول اسمه "orders"
    const ordersRef = ref(db, 'orders');
    push(ordersRef, data)
    .then(() => {
        alert("تم استلام طلبك في قاعدة البيانات بنجاح!");
        form.reset();
        btn.disabled = false;
        btn.innerText = "إرسال";
    })
    .catch((error) => {
        console.error("Error:", error);
        btn.disabled = false;
    });
});

// كود الـ Smooth Scroll (عشان التنقل بين أقسام الموقع يكون ناعم)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
