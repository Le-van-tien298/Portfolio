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
            skills.forEach(skill => {
                skill.classList.add('skill_animation');
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

