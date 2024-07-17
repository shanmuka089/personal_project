document.addEventListener('DOMContentLoaded', function () {
    const navLinks = Array.from(document.getElementsByClassName('link-item'));

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active-link'));
            const targetId = this.getAttribute('href').substring(1);
            if (targetId === 'about') {
                const element = document.getElementById('nav-about-item');
                element.classList.add('active-link');
            } else {
                this.classList.add('active-link');
            }
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" })
            history.pushState(null, null, `# ${targetId}`);
        })
    })

    window.addEventListener('scroll', () => {
        const menuSections = Array.from(document.getElementsByTagName('section'));
        let current = '';

        menuSections.forEach(section => {
            console.log('scroll working1');
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active-link');
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);
            tabContents.forEach(content => {
                content.classList.remove('skills-active');
            })

            target.classList.add('skills-active');

            tabs.forEach(tab => {
                tab.classList.remove('skills-active');
            })

            tab.classList.add('skills-active');
        })
    })
})



