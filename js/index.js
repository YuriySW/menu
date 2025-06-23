// document.addEventListener('DOMContentLoaded', function () {
//   const dropdownMenu = document.querySelector('.header__menu-appears');
//   let isMenuOpen = false;

//   document.addEventListener('click', function (e) {
//     if (e.target.closest('.header__icon_open')) {
//       e.stopPropagation();

//       if (isMenuOpen) {
//         dropdownMenu.classList.remove('show');
//         isMenuOpen = false;
//       } else {
//         dropdownMenu.classList.add('show');
//         isMenuOpen = true;
//       }
//     } else {
//       if (isMenuOpen) {
//         dropdownMenu.classList.remove('show');
//         isMenuOpen = false;
//       }
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const mobileContactBtn = document.querySelector('.header-mobile-open .header__icon_open');
//   if (mobileContactBtn) {
//     mobileContactBtn.addEventListener('click', function (e) {
//       e.stopPropagation();

//       const dropdownMenu = this.querySelector('.header__menu-appears');

//       if (dropdownMenu) {
//         dropdownMenu.classList.toggle('show');
//       }
//     });
//   } else {
//   }

//   const openBtn = document.querySelector('.mobil-menu-btn-open');
//   const closeBtn = document.querySelector('.header-mobile-closed');
//   const mobileMenu = document.querySelector('.header-mobile-open');

//   if (openBtn) {
//     openBtn.addEventListener('click', function (e) {
//       e.preventDefault();
//       e.stopPropagation();
//       mobileMenu.classList.add('show');
//     });
//   }

//   if (closeBtn) {
//     closeBtn.addEventListener('click', function (e) {
//       e.preventDefault();
//       e.stopPropagation();
//       mobileMenu.classList.remove('show');
//       document.querySelectorAll('.header__menu-appears.show').forEach((menu) => {
//         menu.classList.remove('show');
//       });
//     });
//   }

//   if (mobileMenu) {
//     document.addEventListener('click', function (e) {
//       if (
//         mobileMenu.classList.contains('show') &&
//         !mobileMenu.contains(e.target) &&
//         !openBtn.contains(e.target)
//       ) {
//         mobileMenu.classList.remove('show');
//         document.querySelectorAll('.header__menu-appears.show').forEach((menu) => {
//           menu.classList.remove('show');
//         });
//       }
//     });

//     mobileMenu.addEventListener('click', function (e) {
//       e.stopPropagation();
//     });
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  const dropdownMenu = document.querySelector('.header__menu-appears');
  let isMenuOpen = false;

  document.addEventListener('click', function (e) {
    if (e.target.closest('.header__icon_open')) {
      e.stopPropagation();
      if (isMenuOpen) {
        dropdownMenu.classList.remove('show');
        isMenuOpen = false;
      } else {
        dropdownMenu.classList.add('show');
        isMenuOpen = true;
      }
    } else {
      if (isMenuOpen) {
        dropdownMenu.classList.remove('show');
        isMenuOpen = false;
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const mobileContactBtn = document.querySelector('.header-mobile-open .header__icon_open');
  if (mobileContactBtn) {
    mobileContactBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const dropdownMenu = this.querySelector('.header__menu-appears');
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('show');
      }
    });
  }

  const openBtn = document.querySelector('.mobil-menu-btn-open');
  const closeBtn = document.querySelector('.header-mobile-closed');
  const mobileMenu = document.querySelector('.header-mobile-open');

  if (openBtn) {
    openBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      mobileMenu.classList.add('show');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      mobileMenu.classList.remove('show');
      document.querySelectorAll('.header__menu-appears.show').forEach((menu) => {
        menu.classList.remove('show');
      });
    });
  }

  if (mobileMenu) {
    document.addEventListener('click', function (e) {
      if (
        mobileMenu.classList.contains('show') &&
        !mobileMenu.contains(e.target) &&
        !openBtn.contains(e.target)
      ) {
        mobileMenu.classList.remove('show');
        document.querySelectorAll('.header__menu-appears.show').forEach((menu) => {
          menu.classList.remove('show');
        });
      }
    });

    mobileMenu.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  // Плавная анимация для submenu
  function showMenu(menuElement) {
    menuElement.style.display = 'flex';
    menuElement.offsetHeight;
    requestAnimationFrame(() => {
      menuElement.classList.add('show');
    });
  }

  function hideMenu(menuElement) {
    menuElement.classList.remove('show');
    setTimeout(() => {
      if (!menuElement.classList.contains('show')) {
        menuElement.style.display = 'none';
      }
    }, 3000);
  }

  // Обработчик для submenu
  const menu = document.querySelector('.header__menu-appears-sub');
  if (menu) {
    document.addEventListener('click', function (e) {
      if (e.target.closest('.header__icon-sub.contact')) {
        e.stopPropagation();
        if (menu.classList.contains('show')) {
          hideMenu(menu);
        } else {
          showMenu(menu);
        }
      }
    });
  }
});
