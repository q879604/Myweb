// Hero 滚动消失
const hero = document.getElementById('hero');
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            if (window.scrollY > 80) {
                hero.classList.add('scrolled');
            } else {
                hero.classList.remove('scrolled');
            }
            ticking = false;
        });
        ticking = true;
    }
});

// 内容区元素入场动画
const animEls = document.querySelectorAll('[data-animate], [data-card]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || 0);
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

animEls.forEach(el => observer.observe(el));

// 微信复制
document.querySelector('.icon-wechat')?.closest('.card')?.addEventListener('click', () => {
    navigator.clipboard.writeText('q677xl').then(() => {
        const toast = document.createElement('div');
        toast.textContent = '微信号已复制！';
        toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:rgba(102,126,234,0.9);color:#fff;padding:0.6rem 1.5rem;border-radius:30px;font-size:0.9rem;z-index:9999;animation:fadeInUp 0.3s ease;pointer-events:none;';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 1500);
    });
});
document.querySelector('.icon-wechat')?.closest('.card')?.style.cursor = 'pointer';
