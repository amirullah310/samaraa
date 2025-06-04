
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });

        const navbar = document.querySelector(".navbar");
        const menu = document.querySelector(".menu-list");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");

        menuBtn.onclick = () => {
            menu.classList.add("active");
            menuBtn.classList.add("hide");
        };

        cancelBtn.onclick = () => {
            menu.classList.remove("active");
            menuBtn.classList.remove("hide");
        };

        // Tutup menu jika klik di luar menu saat mode responsif aktif
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = menu.contains(event.target);
            const isClickOnMenuBtn = menuBtn.contains(event.target);

            if (!isClickInsideMenu && !isClickOnMenuBtn && menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuBtn.classList.remove('hide');
            }
        });

        // Optional: navbar sticky saat scroll
        // window.onscroll = () => {
        //     window.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        // };
