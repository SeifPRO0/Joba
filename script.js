// كود الإرسال إلى Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbymuSuGUtdI5B97Xc3xbG6DBtzV1XRHL5T-eH905yDuSFzxUMrWGxDcgDxiS1ECjyus/exec'; // <--- حط اللينك بتاع جوجل هنا
const form = document.getElementById('contact-form');
const btn = document.getElementById('submit-btn');
const msg = document.getElementById('response-message');

form.addEventListener('submit', e => {
    e.preventDefault(); // بيمنع إعادة تحميل الصفحة

    // تغيير حالة الزرار أثناء الإرسال
    btn.disabled = true;
    btn.innerText = "جاري الإرسال...";

    // إرسال البيانات باستخدام Fetch API
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        // في حالة النجاح
        msg.innerText = "تم إرسال طلبك بنجاح! شكراً لك.";
        msg.style.display = "block";
        msg.style.color = "green";
        
        form.reset(); // مسح الخانات بعد الإرسال
        btn.disabled = false;
        btn.innerText = "إرسال";
        
        // إخفاء الرسالة بعد 5 ثواني
        setTimeout(() => { msg.style.display = "none"; }, 5000);
    })
    .catch(error => {
        // في حالة وجود خطأ
        console.error('Error!', error.message);
        msg.innerText = "عذراً، حدث خطأ في الاتصال. حاول مرة أخرى.";
        msg.style.display = "block";
        msg.style.color = "red";
        
        btn.disabled = false;
        btn.innerText = "إرسال";
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
