    document.addEventListener("DOMContentLoaded", () => {

        const header = document.querySelector("header");

        const mobileMenuButton = document.querySelector(
            'button[aria-label="Open menu"]'
        );

        const languageSelect = document.querySelector(
            'select[name="language"]'
        );

        const navLinks = document.querySelectorAll(
            'header nav a[href^="#"]'
        );

        const allInternalLinks = document.querySelectorAll(
            'a[href^="#"]'
        );


        // Mobile Menu
        if (mobileMenuButton && header) {

            const mobileMenu = document.createElement("nav");

            mobileMenu.className =
                "mobile-menu hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-700 p-5 sm:hidden";

            mobileMenu.innerHTML = `
                <div class="flex flex-col gap-4 font-semibold">

                    <a href="#home"
                        class="mobile-nav-link hover:text-sky-400 transition">
                        Home
                    </a>

                    <a href="#about"
                        class="mobile-nav-link hover:text-sky-400 transition">
                        About
                    </a>

                    <a href="#skills"
                        class="mobile-nav-link hover:text-sky-400 transition">
                        Skills
                    </a>

                    <a href="#services"
                        class="mobile-nav-link hover:text-sky-400 transition">
                        Services
                    </a>

                    <a href="#experience"
                        class="mobile-nav-link hover:text-sky-400 transition">
                        Experience
                    </a>

                    <a href="#projects"
                        class="mobile-nav-link hover:text-sky-400 transition">
                        Projects
                    </a>

                    <a href="#contact"
                        class="mobile-nav-link hover:text-sky-400 transition">
                        Contact
                    </a>

                </div>
            `;

            header.appendChild(mobileMenu);


            mobileMenuButton.addEventListener("click", () => {

                const isHidden =
                    mobileMenu.classList.contains("hidden");

                mobileMenu.classList.toggle("hidden");

                mobileMenuButton.setAttribute(
                    "aria-label",
                    isHidden ? "Close menu" : "Open menu"
                );

                const icon =
                    mobileMenuButton.querySelector("i");

                if (icon) {

                    icon.classList.toggle(
                        "fa-bars",
                        !isHidden
                    );

                    icon.classList.toggle(
                        "fa-xmark",
                        isHidden
                    );
                }
            });


            const mobileLinks =
                mobileMenu.querySelectorAll(
                    ".mobile-nav-link"
                );

            mobileLinks.forEach((link) => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.add("hidden");

                    mobileMenuButton.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                    const icon =
                        mobileMenuButton.querySelector("i");

                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );
                    }
                });
            });
        }


        // Smooth Scroll
        allInternalLinks.forEach((link) => {

            link.addEventListener("click", (event) => {

                const targetId =
                    link.getAttribute("href");

                if (!targetId || targetId === "#") {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerHeight =
                    header ? header.offsetHeight : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            });
        });


        // Header Scroll Effect
        function updateHeader() {

            if (!header) {
                return;
            }

            if (window.scrollY > 50) {

                header.classList.add(
                    "bg-slate-950",
                    "shadow-lg"
                );

                header.classList.remove(
                    "bg-slate-900"
                );

            } else {

                header.classList.remove(
                    "bg-slate-950",
                    "shadow-lg"
                );

                header.classList.add(
                    "bg-slate-900"
                );
            }
        }

        window.addEventListener(
            "scroll",
            updateHeader
        );

        updateHeader();


        // Active Navigation
        const sections =
            document.querySelectorAll(
                "section[id]"
            );

        function updateActiveNavigation() {

            let currentSection = "";

            sections.forEach((section) => {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {
                    currentSection = section.id;
                }
            });


            navLinks.forEach((link) => {

                const linkTarget =
                    link.getAttribute("href");

                link.classList.remove(
                    "text-sky-400"
                );

                if (
                    linkTarget ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "text-sky-400"
                    );
                }
            });
        }

        window.addEventListener(
            "scroll",
            updateActiveNavigation
        );

        updateActiveNavigation();


        // Language Selector
        if (languageSelect) {

            languageSelect.addEventListener(
                "change",
                (event) => {

                    const selectedLanguage =
                        event.target.value;

                    if (selectedLanguage === "ps") {

                        alert(
                            "Pashto version is currently under development."
                        );

                        languageSelect.value = "en";
                    }
                }
            );
        }


        // Disable Empty Links
        const emptyLinks =
            document.querySelectorAll(
                'a[href="#"]'
            );

        emptyLinks.forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {
                    event.preventDefault();
                }
            );
        });


        // Current Year
        const copyrightText =
            document.querySelector(
                "footer .border-t p"
            );

        if (copyrightText) {

            const currentYear =
                new Date().getFullYear();

            copyrightText.textContent =
                `© ${currentYear} Ahmadullah Ahmadi. All rights reserved.`;
        }


        console.log(
            "Ahmadi Development Portfolio loaded successfully."
        );

    });