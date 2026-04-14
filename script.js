
// Year
document.getElementById('year').textContent = new Date().getFullYear();
// Navbar scroll
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});
// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('open');
});

function closeMobile() {
    document.getElementById('mobile-nav').classList.remove('open');
}
// Tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});
// Video boxes — replace these URLs with your actual YouTube links
document.getElementById('mainVideoBox').addEventListener('click', () => {
    window.open('https://youtu.be/qrh3BvWi9Ug', '_blank');
});
// Card hover glow
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--x', (e.clientX - r.left) + 'px');
        card.style.setProperty('--y', (e.clientY - r.top) + 'px');
    });
});
// Skill bars animate on scroll
const barObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.w;
            barObs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});
document.querySelectorAll('.fill').forEach(el => barObs.observe(el));
// Motion video play button
document.getElementById('motionVideo').addEventListener('play', () => {
    document.getElementById('motionVideo').controls = true;
    document.querySelector('#motion .play-btn').style.display = 'none';
});
document.getElementById('motionVideo').addEventListener('pause', () => {
    document.querySelector('#motion .play-btn').style.display = 'flex';
});
document.getElementById('motionVideo').addEventListener('ended', () => {
    document.querySelector('#motion .play-btn').style.display = 'flex';
});
