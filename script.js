// كود الـ Smooth Scroll اللي كان عندك (متصلح الأقواس)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// كود الإرسال لجوجل شيت
const scriptURL = 'https://script.google.com/macros/s/AKfycbymuSuGUtdI5B97Xc3xbG6DBtzV1XRHL5T-eH905yDuSFzxUMrWGxDcgDxiS1ECjyus/exec'; 
const form = document.getElementById('contact-form');
const btn = document.getElementById('submit-btn');
const msg = document.getElementById('response-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerText = "جاري الإرسال...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerText = "تم إرسال طلبك بنجاح! شكراً لك.";
        msg.style.display = "block";
        msg.style.color = "green";
        form.reset();
        btn.disabled = false;
        btn.innerText = "إرسال";
    })
    .catch(error => {
        console.error('Error!', error.message);
        msg.innerText = "عذراً، حدث خطأ ما.";
        msg.style.display = "block";
        msg.style.color = "red";
        btn.disabled = false;
        btn.innerText = "إرسال";
    });
});
