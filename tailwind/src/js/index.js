document.addEventListener('DOMContentLoaded', function () {
    // Lấy các phần tử cần thiết
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Kiểm tra xem các phần tử có tồn tại không
    if (!menuButton || !mobileMenu) {
        console.error('Không tìm thấy menu button hoặc mobile menu');
        return;
    }

    // Thêm sự kiện click cho nút menu
    menuButton.addEventListener('click', function () {

        // Đóng/mở menu
        mobileMenu.classList.toggle('hidden');

        // Đổi icon
        const icon = menuButton.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Đóng menu khi click vào link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
            const icon = menuButton.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        const projects = e.target.querySelectorAll('.project');
        if (e.isIntersecting) {
            projects.forEach(project => {
                project.classList.add('project_animation_all');
            });
            return;
        }
        projects.forEach(project => {

            project.classList.remove('project_animation_all');
        });
    });
});

const boxWrappers = document.querySelectorAll('.wraper');
boxWrappers.forEach(wrapper => {
    observer.observe(wrapper);
});


const observer2 = new IntersectionObserver(entries => {
    entries.forEach(e => {
        const skills = e.target.querySelectorAll('.skill');
        if (e.isIntersecting) {
            skills.forEach((skill, idx) => {
                setTimeout(() => {
                    skill.classList.add('skill_animation');
                }, idx * 120); // mỗi icon delay 120ms
            });
            return;
        }
        skills.forEach(skill => {
            skill.classList.remove('skill_animation');
        });

    });
}, {
    threshold: 0.1
});

const skillWrappers = document.querySelectorAll('#skills .wraper');
skillWrappers.forEach(wrapper => {
    observer2.observe(wrapper);
});


const light = document.querySelector('.light');
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

document.addEventListener('mousemove', (e) => {
    targetX = e.pageX;
    targetY = e.pageY;
});

// Hàm animate với độ trễ mượt mà
function animate() {
    currentX += (targetX - currentX) * 0.1; // 0.1 là tốc độ đuổi theo (nhỏ hơn = chậm hơn)
    currentY += (targetY - currentY) * 0.1;

    light.style.left = currentX + 'px';
    light.style.top = currentY + 'px';

    requestAnimationFrame(animate);
}

animate();

