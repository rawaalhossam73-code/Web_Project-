document.addEventListener("DOMContentLoaded", function() {
    const cartCount = document.getElementById('cart-count');
    const buttons = document.querySelectorAll('.add-to-cart');
    
    let count = 0;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            count++;
            cartCount.innerText = count;

            const card = button.closest('.card');
            const img = card.querySelector('img');
            
            // إنشاء النسخة
            const imgClone = img.cloneNode(true);
            
            // التنسيق الأساسي للصورة المتحركة
            imgClone.style.position = 'fixed';
            imgClone.style.zIndex = '99999';
            imgClone.style.width = '60px';
            imgClone.style.height = '60px';
            imgClone.style.borderRadius = '50%';
            imgClone.style.transition = 'all 0.7s ease-in-out';
            imgClone.style.pointerEvents = 'none'; // مهمة جداً لعدم إعاقة النقر
            
            // موقع البداية (من مكان المنتج)
            const imgRect = img.getBoundingClientRect();
            imgClone.style.top = imgRect.top + 'px';
            imgClone.style.left = imgRect.left + 'px';
            
            document.body.appendChild(imgClone);

            // --- هنا يبدأ التعديل الاحترافي للوصول للسلة ---
            setTimeout(() => {
                const cartIcon = document.querySelector('.cart-icon');
                const cartRect = cartIcon.getBoundingClientRect();

                // الصورة ستتجه الآن إلى مكان الأيقونة الفعلي
                imgClone.style.top = cartRect.top + 'px';
                imgClone.style.left = cartRect.left + 'px';
                
                imgClone.style.width = '30px';
                imgClone.style.height = '30px';
                imgClone.style.opacity = '0';
            }, 50);
            // --- نهاية التعديل ---

            setTimeout(() => { imgClone.remove(); }, 800);

            // تغيير نص الزر كتأكيد للمستخدم
            button.innerText = "Added!";
            button.style.backgroundColor = "#28a745";
            setTimeout(() => {
                button.innerText = "Add to Cart";
                button.style.backgroundColor = "#0077ff";
            }, 1000);
        });
    });
});
