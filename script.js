
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
    // Loader fade out after minimal 1 second
    window.addEventListener('load', () => {
      const loader = document.querySelector('.loader');
      if (loader) {
        setTimeout(() => {
          loader.style.opacity = '0';
          setTimeout(() => {
            loader.style.display = 'none';
          }, 500); // fade out 0.5s
        }, 1000); // minimal 1 detik tampil loading
      }
    });

const fallingLeavesContainer = document.querySelector('.falling-leaves');

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.style.left = Math.random() * window.innerWidth + 'px';
  leaf.style.animationDuration = '6s'; // fix 6 detik
  leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
  fallingLeavesContainer.appendChild(leaf);

  // Hapus daun setelah animasi selesai
  leaf.addEventListener('animationend', () => {
    leaf.remove();
  });
}

// Interval setiap 3 detik
setInterval(() => {
  // Hitung daun yang masih aktif di container
  const activeLeaves = fallingLeavesContainer.querySelectorAll('.leaf').length;

  // Kalau masih kurang dari 2, buat daun baru
  if (activeLeaves < 3) {
    createLeaf();
  }
}, 3000);

