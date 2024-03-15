import { useEffect } from "react";

const useScript = () => {
    useEffect(() => {
        // ---
        const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
        const smallMenu = document.querySelector('.header__sm-menu')
        const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
        const headerHamMenuCloseBtn = document.querySelector(
            '.header__main-ham-menu-close'
        )
        const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')


        const handleHamMenuClick = () => {
            if (smallMenu.classList.contains('header__sm-menu--active')) {
                smallMenu.classList.remove('header__sm-menu--active')
            } else {
                smallMenu.classList.add('header__sm-menu--active')
            }
            if (headerHamMenuBtn.classList.contains('d-none')) {
                headerHamMenuBtn.classList.remove('d-none')
                headerHamMenuCloseBtn.classList.add('d-none')
            } else {
                headerHamMenuBtn.classList.add('d-none')
                headerHamMenuCloseBtn.classList.remove('d-none')
            }
        }

        hamMenuBtn.addEventListener('click', handleHamMenuClick)

        const headerSmallMenuLinksClick = () => {
            smallMenu.classList.remove('header__sm-menu--active')
            headerHamMenuBtn.classList.remove('d-none')
            headerHamMenuCloseBtn.classList.add('d-none')
        }


        for (let i = 0; i < headerSmallMenuLinks.length; i++) {
            headerSmallMenuLinks[i].addEventListener('click', headerSmallMenuLinksClick)
        }

        // ---
        const headerLogoConatiner = document.querySelector('.header__logo-container')

        headerLogoConatiner.addEventListener('click', () => {
            location.href = 'index.html'
        })

        return () => {
            hamMenuBtn.removeEventListener('click', handleHamMenuClick);

            for (let i = 0; i < headerSmallMenuLinks.length; i++) {
                headerSmallMenuLinks[i].removeEventListener('click', headerSmallMenuLinksClick);
            }
        }
    }, []);
}

export default useScript;