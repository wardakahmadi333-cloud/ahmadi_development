document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       ELEMENTS
    ========================================================= */

    const header = document.querySelector("header");
    const mobileMenuButton = document.querySelector(
        'button[aria-label="Open menu"]'
    );
    const desktopLanguageSelect = document.getElementById("languageSelect");

    const LANGUAGE_STORAGE_KEY = "portfolioLanguage";

    /* =========================================================
       TRANSLATIONS
    ========================================================= */

    const translations = {
        en: {
            "Home": "Home",
            "About": "About",
            "Skills": "Skills",
            "Services": "Services",
            "Experience": "Experience",
            "Projects": "Projects",
            "Contact": "Contact",
            "Language": "Language",

            "Hello, I'm Ahmadullah Ahmadi":
                "Hello, I'm Ahmadullah Ahmadi",

            "Full Stack Web Developer":
                "Full Stack Web Developer",

            "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and user-friendly websites and web applications using modern web technologies. My focus is on creating clean, functional, and practical digital solutions that solve real problems.":
                "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and user-friendly websites and web applications using modern web technologies. My focus is on creating clean, functional, and practical digital solutions that solve real problems.",

            "View My Work": "View My Work",
            "Contact Me": "Contact Me",

            "About Me": "About Me",
            "Who I Am": "Who I Am",
            "Hello! I'm Ahmadullah Ahmadi":
                "Hello! I'm Ahmadullah Ahmadi",

            "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and user-friendly websites and web applications. My main focus is developing practical digital solutions with clean code, good performance, and a smooth user experience.":
                "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and user-friendly websites and web applications. My main focus is developing practical digital solutions with clean code, good performance, and a smooth user experience.",

            "I work with technologies such as HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, databases, and REST APIs. I enjoy turning ideas into real-world projects and continuously improving my development skills.":
                "I work with technologies such as HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, databases, and REST APIs. I enjoy turning ideas into real-world projects and continuously improving my development skills.",

            "My goal is to create reliable web solutions that solve real problems and provide value to users and businesses.":
                "My goal is to create reliable web solutions that solve real problems and provide value to users and businesses.",

            "My Expertise": "My Expertise",
            "Connect With Me": "Connect With Me",

            "Projects": "Projects",
            "Internship": "Internship",
            "Technologies": "Technologies",

            "My Skills": "My Skills",
            "Skills & Tools": "Skills & Tools",

            "What I Do": "What I Do",
            "My Services": "My Services",

            "Web Development": "Web Development",
            "Building responsive and modern websites using current web technologies.":
                "Building responsive and modern websites using current web technologies.",

            "Frontend Development": "Frontend Development",
            "Creating responsive and user-friendly interfaces with modern frontend technologies.":
                "Creating responsive and user-friendly interfaces with modern frontend technologies.",

            "Backend Development": "Backend Development",
            "Developing server-side applications, APIs, and backend functionality.":
                "Developing server-side applications, APIs, and backend functionality.",

            "Database Development": "Database Development",
            "Designing and working with databases for web applications.":
                "Designing and working with databases for web applications.",

            "API Development": "API Development",
            "Creating and integrating REST APIs for web applications.":
                "Creating and integrating REST APIs for web applications.",

            "Responsive Design": "Responsive Design",
            "Building websites that work properly across desktop, tablet, and mobile devices.":
                "Building websites that work properly across desktop, tablet, and mobile devices.",

            "My Journey": "My Journey",
            "Experience": "Experience",
            "Ongoing": "Ongoing",
            "Personal Projects & Freelancing":
                "Personal Projects & Freelancing",

            "Building web applications and personal projects while improving my skills in frontend, backend, databases, and modern JavaScript development.":
                "Building web applications and personal projects while improving my skills in frontend, backend, databases, and modern JavaScript development.",

            "My Work": "My Work",
            "Featured Projects": "Featured Projects",

            "Lecwal Online Platform":
                "Lecwal Online Platform",

            "A web platform focused on providing useful digital tools and services for Pashto-speaking users.":
                "A web platform focused on providing useful digital tools and services for Pashto-speaking users.",

            "Hospital Management System":
                "Hospital Management System",

            "A web application concept for managing hospital information, patients, staff, and administrative workflows.":
                "A web application concept for managing hospital information, patients, staff, and administrative workflows.",

            "Employee Payment System":
                "Employee Payment System",

            "A web application concept for managing employee payment records and related information.":
                "A web application concept for managing employee payment records and related information.",

            "View Project →": "View Project →",

            "Get In Touch": "Get In Touch",
            "Let's Work Together": "Let's Work Together",

            "Have a project idea or need a web solution? Feel free to contact me.":
                "Have a project idea or need a web solution? Feel free to contact me.",

            "Email Me": "Email Me",
            "Call Me": "Call Me",

            "Quick Links": "Quick Links",

            "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and practical websites and web applications.":
                "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and practical websites and web applications.",

            "All rights reserved.": "All rights reserved.",

            "Open menu": "Open menu",
            "Close menu": "Close menu"
        },

        ps: {
            "Home": "کور",
            "About": "زما په اړه",
            "Skills": "مهارتونه",
            "Services": "خدمتونه",
            "Experience": "تجربه",
            "Projects": "پروژې",
            "Contact": "اړیکه",
            "Language": "ژبه",

            "Hello, I'm Ahmadullah Ahmadi":
                "سلام، زه احمدالله احمدي یم",

            "Full Stack Web Developer":
                "Full Stack Web Developer",

            "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and user-friendly websites and web applications using modern web technologies. My focus is on creating clean, functional, and practical digital solutions that solve real problems.":
                "زه په کابل، افغانستان کې مېشت Full Stack Web Developer یم. زه د عصري Web Technologies په کارولو سره عصري، Responsive او User-friendly ویب‌سایټونه او Web Applications جوړوم. زما تمرکز د پاکو، فعالو او عملي ډیجیټل حل‌لارو پر جوړولو دی چې واقعي ستونزې حل کړي.",

            "View My Work": "زما کارونه وګورئ",
            "Contact Me": "له ما سره اړیکه",

            "About Me": "زما په اړه",
            "Who I Am": "زه څوک یم",
            "Hello! I'm Ahmadullah Ahmadi":
                "سلام! زه احمدالله احمدي یم",

            "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and user-friendly websites and web applications. My main focus is developing practical digital solutions with clean code, good performance, and a smooth user experience.":
                "زه په کابل، افغانستان کې مېشت Full Stack Web Developer یم. زه عصري، Responsive او User-friendly ویب‌سایټونه او Web Applications جوړوم. زما اصلي تمرکز د Clean Code، ښه Performance او Smooth User Experience په کارولو سره د عملي ډیجیټل حل‌لارو پر جوړولو دی.",

            "I work with technologies such as HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, databases, and REST APIs. I enjoy turning ideas into real-world projects and continuously improving my development skills.":
                "زه د HTML، CSS، JavaScript، React، Node.js، Tailwind CSS، Databases او REST APIs په څېر ټکنالوژیو سره کار کوم. زه له دې څخه خوند اخلم چې نظریات په واقعي پروژو بدل کړم او په دوامداره توګه خپل Development Skills ښه کړم.",

            "My goal is to create reliable web solutions that solve real problems and provide value to users and businesses.":
                "زما هدف دا دی چې داسې باوري Web Solutions جوړې کړم چې واقعي ستونزې حل کړي او کاروونکو او کاروبارونو ته ارزښت وړاندې کړي.",

            "My Expertise": "زما تخصص",
            "Connect With Me": "له ما سره اړیکه",

            "Projects": "پروژې",
            "Internship": "انټرنشیپ",
            "Technologies": "ټکنالوژۍ",

            "My Skills": "زما مهارتونه",
            "Skills & Tools": "مهارتونه او وسایل",

            "What I Do": "زه څه کوم",
            "My Services": "زما خدمتونه",

            "Web Development": "Web Development",
            "Building responsive and modern websites using current web technologies.":
                "زه د اوسنیو Web Technologies په کارولو سره عصري او Responsive ویب‌سایټونه جوړوم.",

            "Frontend Development": "Frontend Development",
            "Creating responsive and user-friendly interfaces with modern frontend technologies.":
                "زه د عصري Frontend Technologies په کارولو سره Responsive او User-friendly Interfaces جوړوم.",

            "Backend Development": "Backend Development",
            "Developing server-side applications, APIs, and backend functionality.":
                "زه Server-side Applications، APIs او Backend Functionality جوړوم.",

            "Database Development": "Database Development",
            "Designing and working with databases for web applications.":
                "زه د Web Applications لپاره Databases ډیزاین او مدیریت کوم.",

            "API Development": "API Development",
            "Creating and integrating REST APIs for web applications.":
                "زه د Web Applications لپاره REST APIs جوړوم او له سیستمونو سره یې Integrate کوم.",

            "Responsive Design": "Responsive Design",
            "Building websites that work properly across desktop, tablet, and mobile devices.":
                "زه داسې ویب‌سایټونه جوړوم چې په Desktop، Tablet او Mobile Devices کې په سمه توګه کار وکړي.",

            "My Journey": "زما سفر",
            "Experience": "تجربه",
            "Ongoing": "روان",
            "Personal Projects & Freelancing":
                "شخصي پروژې او Freelancing",

            "Building web applications and personal projects while improving my skills in frontend, backend, databases, and modern JavaScript development.":
                "زه Web Applications او شخصي پروژې جوړوم او په ورته وخت کې په Frontend، Backend، Databases او Modern JavaScript Development کې خپل مهارتونه پیاوړي کوم.",

            "My Work": "زما کارونه",
            "Featured Projects": "ځانګړې پروژې",

            "Lecwal Online Platform":
                "Lecwal Online Platform",

            "A web platform focused on providing useful digital tools and services for Pashto-speaking users.":
                "Lecwal یو Web Platform دی چې د پښتو ژبې کاروونکو لپاره د ګټورو ډیجیټل وسایلو او خدماتو وړاندې کولو باندې تمرکز کوي.",

            "Hospital Management System":
                "Hospital Management System",

            "A web application concept for managing hospital information, patients, staff, and administrative workflows.":
                "دا د Web Application یوه طرحه ده چې د روغتون معلومات، ناروغان، کارکوونکي او اداري چارې مدیریت کوي.",

            "Employee Payment System":
                "Employee Payment System",

            "A web application concept for managing employee payment records and related information.":
                "دا د Web Application یوه طرحه ده چې د کارکوونکو د معاشونو ریکارډونه او اړوند معلومات مدیریت کوي.",

            "View Project →": "پروژه وګورئ →",

            "Get In Touch": "اړیکه ونیسئ",
            "Let's Work Together": "راځئ یوځای کار وکړو",

            "Have a project idea or need a web solution? Feel free to contact me.":
                "د کومې پروژې مفکوره لرئ یا Web Solution ته اړتیا لرئ؟ له ما سره په اړیکه کې شئ.",

            "Email Me": "ایمیل وکړئ",
            "Call Me": "زنګ ووهئ",

            "Quick Links": "چټک لینکونه",

            "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and practical websites and web applications.":
                "زه په کابل، افغانستان کې مېشت Full Stack Web Developer یم. زه عصري، Responsive او عملي ویب‌سایټونه او Web Applications جوړوم.",

            "All rights reserved.": "ټول حقوق خوندي دي.",

            "Open menu": "مینو پرانیزئ",
            "Close menu": "مینو وتړئ"
        },

        fa: {
            "Home": "خانه",
            "About": "درباره من",
            "Skills": "مهارت‌ها",
            "Services": "خدمات",
            "Experience": "تجربه",
            "Projects": "پروژه‌ها",
            "Contact": "تماس",
            "Language": "زبان",

            "Hello, I'm Ahmadullah Ahmadi":
                "سلام، من احمدالله احمدی هستم",

            "Full Stack Web Developer":
                "Full Stack Web Developer",

            "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and user-friendly websites and web applications using modern web technologies. My focus is on creating clean, functional, and practical digital solutions that solve real problems.":
                "من یک Full Stack Web Developer در کابل، افغانستان هستم. من با استفاده از تکنالوژی‌های مدرن وب، وب‌سایت‌ها و Web Applications مدرن، Responsive و User-friendly ایجاد می‌کنم. تمرکز من بر ساخت راه‌حل‌های دیجیتالی پاک، کاربردی و عملی است که مشکلات واقعی را حل کنند.",

            "View My Work": "مشاهده کارهای من",
            "Contact Me": "تماس با من",

            "About Me": "درباره من",
            "Who I Am": "من کی هستم",
            "Hello! I'm Ahmadullah Ahmadi":
                "سلام! من احمدالله احمدی هستم",

            "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and user-friendly websites and web applications. My main focus is developing practical digital solutions with clean code, good performance, and a smooth user experience.":
                "من یک Full Stack Web Developer در کابل، افغانستان هستم. من وب‌سایت‌ها و Web Applications مدرن، Responsive و User-friendly ایجاد می‌کنم. تمرکز اصلی من ساخت راه‌حل‌های دیجیتالی عملی با Clean Code، Performance خوب و تجربه کاربری روان است.",

            "I work with technologies such as HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, databases, and REST APIs. I enjoy turning ideas into real-world projects and continuously improving my development skills.":
                "من با تکنالوژی‌هایی مانند HTML، CSS، JavaScript، React، Node.js، Tailwind CSS، Databases و REST APIs کار می‌کنم. از تبدیل ایده‌ها به پروژه‌های واقعی لذت می‌برم و همیشه تلاش می‌کنم مهارت‌های Development خود را بهبود بدهم.",

            "My goal is to create reliable web solutions that solve real problems and provide value to users and businesses.":
                "هدف من ایجاد Web Solutions قابل اعتماد است که مشکلات واقعی را حل کنند و برای کاربران و کسب‌وکارها ارزش ایجاد نمایند.",

            "My Expertise": "تخصص من",
            "Connect With Me": "با من در تماس باشید",

            "Projects": "پروژه‌ها",
            "Internship": "کارآموزی",
            "Technologies": "تکنالوژی‌ها",

            "My Skills": "مهارت‌های من",
            "Skills & Tools": "مهارت‌ها و ابزارها",

            "What I Do": "کاری که انجام می‌دهم",
            "My Services": "خدمات من",

            "Web Development": "Web Development",
            "Building responsive and modern websites using current web technologies.":
                "من با استفاده از تکنالوژی‌های جدید وب، وب‌سایت‌های مدرن و Responsive ایجاد می‌کنم.",

            "Frontend Development": "Frontend Development",
            "Creating responsive and user-friendly interfaces with modern frontend technologies.":
                "من با استفاده از تکنالوژی‌های مدرن Frontend، رابط‌های کاربری Responsive و User-friendly ایجاد می‌کنم.",

            "Backend Development": "Backend Development",
            "Developing server-side applications, APIs, and backend functionality.":
                "من Server-side Applications، APIs و قابلیت‌های Backend را توسعه می‌دهم.",

            "Database Development": "Database Development",
            "Designing and working with databases for web applications.":
                "من Databases را برای Web Applications طراحی و مدیریت می‌کنم.",

            "API Development": "API Development",
            "Creating and integrating REST APIs for web applications.":
                "من REST APIs را برای Web Applications ایجاد و یکپارچه می‌کنم.",

            "Responsive Design": "Responsive Design",
            "Building websites that work properly across desktop, tablet, and mobile devices.":
                "من وب‌سایت‌هایی ایجاد می‌کنم که در Desktop، Tablet و Mobile Devices به‌درستی کار کنند.",

            "My Journey": "مسیر من",
            "Experience": "تجربه",
            "Ongoing": "در حال انجام",
            "Personal Projects & Freelancing":
                "پروژه‌های شخصی و Freelancing",

            "Building web applications and personal projects while improving my skills in frontend, backend, databases, and modern JavaScript development.":
                "من Web Applications و پروژه‌های شخصی ایجاد می‌کنم و هم‌زمان مهارت‌های خود را در Frontend، Backend، Databases و Modern JavaScript Development بهبود می‌دهم.",

            "My Work": "کارهای من",
            "Featured Projects": "پروژه‌های منتخب",

            "Lecwal Online Platform":
                "Lecwal Online Platform",

            "A web platform focused on providing useful digital tools and services for Pashto-speaking users.":
                "Lecwal یک Web Platform است که بر ارائه ابزارها و خدمات دیجیتالی مفید برای کاربران پشتوزبان تمرکز دارد.",

            "Hospital Management System":
                "Hospital Management System",

            "A web application concept for managing hospital information, patients, staff, and administrative workflows.":
                "این یک طرح Web Application برای مدیریت معلومات شفاخانه، بیماران، کارمندان و امور اداری است.",

            "Employee Payment System":
                "Employee Payment System",

            "A web application concept for managing employee payment records and related information.":
                "این یک طرح Web Application برای مدیریت سوابق پرداخت معاش کارمندان و معلومات مربوط به آن است.",

            "View Project →": "مشاهده پروژه →",

            "Get In Touch": "تماس بگیرید",
            "Let's Work Together": "بیایید با هم کار کنیم",

            "Have a project idea or need a web solution? Feel free to contact me.":
                "آیا ایده یک پروژه دارید یا به یک Web Solution نیاز دارید؟ با من در تماس شوید.",

            "Email Me": "ایمیل کنید",
            "Call Me": "تماس بگیرید",

            "Quick Links": "لینک‌های سریع",

            "I'm a Full Stack Web Developer based in Kabul, Afghanistan. I build modern, responsive, and practical websites and web applications.":
                "من یک Full Stack Web Developer در کابل، افغانستان هستم. من وب‌سایت‌ها و Web Applications مدرن، Responsive و عملی ایجاد می‌کنم.",

            "All rights reserved.": "تمام حقوق محفوظ است.",

            "Open menu": "منو را باز کنید",
            "Close menu": "منو را ببندید"
        }
    };

    /* =========================================================
       SEO TRANSLATIONS
    ========================================================= */

    const seoTranslations = {
        en: {
            title: "Ahmadullah Ahmadi | Web Developer | Full Stack Web Development",
            description:
                "Ahmadullah Ahmadi is a Full Stack Web Developer based in Kabul, Afghanistan, building modern, responsive, and practical websites and web applications."
        },

        ps: {
            title: "احمدالله احمدي | ویب ډیولپر | Full Stack Web Development",
            description:
                "احمدالله احمدي په کابل، افغانستان کې Full Stack Web Developer دی چې عصري، Responsive او عملي ویب‌سایټونه او Web Applications جوړوي."
        },

        fa: {
            title: "احمدالله احمدی | توسعه‌دهنده وب | Full Stack Web Development",
            description:
                "احمدالله احمدی یک Full Stack Web Developer در کابل، افغانستان است که وب‌سایت‌ها و Web Applications مدرن، Responsive و عملی ایجاد می‌کند."
        }
    };

    /* =========================================================
       HELPERS
    ========================================================= */

    function normalizeText(text) {
        return text.replace(/\s+/g, " ").trim();
    }

    function getTranslatedText(text, dictionary) {
        const normalized = normalizeText(text);

        if (!normalized) {
            return null;
        }

        return dictionary[normalized] ?? null;
    }

    /* =========================================================
       TRANSLATE TEXT NODES
    ========================================================= */

    function translateTextNodes(language) {
        const dictionary = translations[language];

        if (!dictionary) {
            return;
        }

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    const parent = node.parentElement;

                    if (!parent) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    const tagName = parent.tagName;

                    if (
                        tagName === "SCRIPT" ||
                        tagName === "STYLE" ||
                        tagName === "SELECT" ||
                        tagName === "OPTION" ||
                        tagName === "NOSCRIPT"
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    if (!normalizeText(node.nodeValue)) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const textNodes = [];

        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        textNodes.forEach((node) => {
            const originalText = node.nodeValue;
            const translatedText = getTranslatedText(
                originalText,
                dictionary
            );

            if (translatedText) {
                const leadingSpaces =
                    originalText.match(/^\s*/)?.[0] || "";

                const trailingSpaces =
                    originalText.match(/\s*$/)?.[0] || "";

                node.nodeValue =
                    leadingSpaces +
                    translatedText +
                    trailingSpaces;
            }
        });
    }

    /* =========================================================
       TRANSLATE ATTRIBUTES
    ========================================================= */

    function translateAttributes(language) {
        const dictionary = translations[language];

        if (!dictionary) {
            return;
        }

        const elements = document.querySelectorAll(
            "[aria-label], [title], [alt]"
        );

        elements.forEach((element) => {
            ["aria-label", "title", "alt"].forEach((attribute) => {
                if (!element.hasAttribute(attribute)) {
                    return;
                }

                const value = element.getAttribute(attribute);
                const translated = getTranslatedText(
                    value,
                    dictionary
                );

                if (translated) {
                    element.setAttribute(attribute, translated);
                }
            });
        });
    }

    /* =========================================================
       SEO
    ========================================================= */

    function updateSEO(language) {
        const seo = seoTranslations[language];

        if (!seo) {
            return;
        }

        document.title = seo.title;

        const description = document.querySelector(
            'meta[name="description"]'
        );

        if (description) {
            description.setAttribute(
                "content",
                seo.description
            );
        }
    }

    /* =========================================================
       LANGUAGE STYLE
    ========================================================= */

    function applyLanguageStyle(language) {
        const isRTL = language === "ps" || language === "fa";

        document.documentElement.lang = language;
        document.documentElement.dir = isRTL ? "rtl" : "ltr";

        document.body.style.direction = isRTL ? "rtl" : "ltr";

        if (isRTL) {
            document.body.style.fontFamily =
                '"Bahij Zar", "Noto Sans Arabic", sans-serif';
        } else {
            document.body.style.fontFamily =
                '"Poppins", sans-serif';
        }
    }

    /* =========================================================
       MOBILE MENU
    ========================================================= */

    let mobileMenu = null;

    function createMobileMenu() {
        if (mobileMenu || !mobileMenuButton) {
            return;
        }

        mobileMenu = document.createElement("div");

        mobileMenu.id = "mobileMenu";

        mobileMenu.className =
            "sm:hidden hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-700 p-4 z-50";

        const navLinks = [
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Services", "#services"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Contact", "#contact"]
        ];

        navLinks.forEach(([label, href]) => {
            const link = document.createElement("a");

            link.href = href;
            link.textContent = label;

            link.className =
                "block py-3 px-3 text-white hover:text-sky-400 transition";

            link.addEventListener("click", () => {
                closeMobileMenu();
            });

            mobileMenu.appendChild(link);
        });

        const languageWrapper = document.createElement("div");

        languageWrapper.className =
            "mt-3 pt-3 border-t border-slate-700";

        const languageLabel = document.createElement("label");

        languageLabel.setAttribute(
            "for",
            "mobileLanguageSelect"
        );

        languageLabel.className =
            "block text-sm text-slate-400 mb-2";

        languageLabel.textContent = "Language";

        const languageSelect = document.createElement("select");

        languageSelect.id = "mobileLanguageSelect";

        languageSelect.className =
            "w-full bg-slate-800 text-white border border-slate-600 rounded-lg px-3 py-2";

        languageSelect.innerHTML = `
            <option value="en">English</option>
            <option value="ps">پښتو</option>
            <option value="fa">دری</option>
        `;

        languageSelect.addEventListener("change", (event) => {
            changeLanguage(event.target.value);
            closeMobileMenu();
        });

        languageWrapper.appendChild(languageLabel);
        languageWrapper.appendChild(languageSelect);

        mobileMenu.appendChild(languageWrapper);

        const navContainer =
            mobileMenuButton.closest("header") ||
            document.querySelector("header");

        if (navContainer) {
            navContainer.style.position = "relative";
            navContainer.appendChild(mobileMenu);
        }
    }

    function openMobileMenu() {
        if (!mobileMenu) {
            return;
        }

        mobileMenu.classList.remove("hidden");

        const icon =
            mobileMenuButton?.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }

        const currentLanguage =
            localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";

        const dictionary = translations[currentLanguage];

        if (mobileMenuButton) {
            mobileMenuButton.setAttribute(
                "aria-label",
                dictionary["Close menu"] || "Close menu"
            );
        }
    }

    function closeMobileMenu() {
        if (!mobileMenu) {
            return;
        }

        mobileMenu.classList.add("hidden");

        const icon =
            mobileMenuButton?.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

        const currentLanguage =
            localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";

        const dictionary = translations[currentLanguage];

        if (mobileMenuButton) {
            mobileMenuButton.setAttribute(
                "aria-label",
                dictionary["Open menu"] || "Open menu"
            );
        }
    }

    function toggleMobileMenu() {
        if (!mobileMenu) {
            return;
        }

        if (mobileMenu.classList.contains("hidden")) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    }

    /* =========================================================
       LANGUAGE SELECT
    ========================================================= */

    function updateLanguageSelectors(language) {
        if (desktopLanguageSelect) {
            desktopLanguageSelect.value = language;
        }

        const mobileLanguageSelect =
            document.getElementById(
                "mobileLanguageSelect"
            );

        if (mobileLanguageSelect) {
            mobileLanguageSelect.value = language;
        }
    }

    function changeLanguage(language) {
        if (!translations[language]) {
            language = "en";
        }

        localStorage.setItem(
            LANGUAGE_STORAGE_KEY,
            language
        );

        /*
         * The HTML starts in English.
         * Reloading guarantees that we always translate
         * from the original English text and prevents
         * double-translation.
         */
        window.location.reload();
    }

    /* =========================================================
       EMAIL FIX
    ========================================================= */

    function fixEmailLinks() {
        document
            .querySelectorAll(
                'a[href=":wardak.ahmadi333@gmail.com"]'
            )
            .forEach((link) => {
                link.href =
                    "mailto:wardak.ahmadi333@gmail.com";
            });
    }

    /* =========================================================
       CURRENT YEAR
    ========================================================= */

    function updateCurrentYear(language) {
        const year = new Date().getFullYear();

        const dictionary = translations[language];

        document
            .querySelectorAll("[data-current-year]")
            .forEach((element) => {
                element.textContent = year;
            });

        document
            .querySelectorAll("[data-copyright]")
            .forEach((element) => {
                if (language === "ps") {
                    element.textContent =
                        `© ${year} احمدالله احمدي. ټول حقوق خوندي دي.`;
                } else if (language === "fa") {
                    element.textContent =
                        `© ${year} احمدالله احمدی. تمام حقوق محفوظ است.`;
                } else {
                    element.textContent =
                        `© ${year} Ahmadullah Ahmadi. All rights reserved.`;
                }
            });

        /*
         * Fallback for an existing footer copyright
         * if it does not use data-copyright.
         */
        if (!document.querySelector("[data-copyright]")) {
            const footerTexts =
                document.querySelectorAll("footer p");

            footerTexts.forEach((element) => {
                const text = normalizeText(
                    element.textContent
                );

                if (
                    text.includes("©") &&
                    text.includes("Ahmadullah Ahmadi")
                ) {
                    if (language === "ps") {
                        element.textContent =
                            `© ${year} احمدالله احمدي. ټول حقوق خوندي دي.`;
                    } else if (language === "fa") {
                        element.textContent =
                            `© ${year} احمدالله احمدی. تمام حقوق محفوظ است.`;
                    } else {
                        element.textContent =
                            `© ${year} Ahmadullah Ahmadi. All rights reserved.`;
                    }
                }
            });
        }
    }

    /* =========================================================
       SMOOTH SCROLL
    ========================================================= */

    function enableSmoothScroll() {
        document
            .querySelectorAll('a[href^="#"]')
            .forEach((link) => {
                link.addEventListener("click", (event) => {
                    const targetId =
                        link.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                });
            });
    }

    /* =========================================================
       HEADER SCROLL EFFECT
    ========================================================= */

    function enableHeaderEffect() {
        if (!header) {
            return;
        }

        const handleScroll = () => {
            if (window.scrollY > 20) {
                header.classList.add(
                    "shadow-lg",
                    "backdrop-blur-md"
                );
            } else {
                header.classList.remove(
                    "shadow-lg",
                    "backdrop-blur-md"
                );
            }
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        handleScroll();
    }

    /* =========================================================
       INITIALIZE
    ========================================================= */

    const savedLanguage =
        localStorage.getItem(
            LANGUAGE_STORAGE_KEY
        ) || "en";

    const currentLanguage =
        translations[savedLanguage]
            ? savedLanguage
            : "en";

    /*
     * Fix malformed email before anything else.
     */
    fixEmailLinks();

    /*
     * Create mobile menu.
     */
    createMobileMenu();

    /*
     * Translate page.
     */
    if (currentLanguage !== "en") {
        translateTextNodes(currentLanguage);
        translateAttributes(currentLanguage);
    }

    /*
     * Apply RTL/LTR and fonts.
     */
    applyLanguageStyle(currentLanguage);

    /*
     * Update SEO.
     */
    updateSEO(currentLanguage);

    /*
     * Update language selectors.
     */
    updateLanguageSelectors(currentLanguage);

    /*
     * Update mobile menu labels after translation.
     */
    if (mobileMenu) {
        const dictionary =
            translations[currentLanguage];

        const mobileLinks =
            mobileMenu.querySelectorAll(
                "a"
            );

        mobileLinks.forEach((link) => {
            const original =
                normalizeText(
                    link.textContent
                );

            if (dictionary[original]) {
                link.textContent =
                    dictionary[original];
            }
        });

        const languageLabel =
            mobileMenu.querySelector(
                'label[for="mobileLanguageSelect"]'
            );

        if (languageLabel) {
            languageLabel.textContent =
                translations[currentLanguage][
                "Language"
                ];
        }
    }

    /*
     * Update copyright/year.
     */
    updateCurrentYear(currentLanguage);

    /*
     * Mobile menu button.
     */
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener(
            "click",
            toggleMobileMenu
        );

        const dictionary =
            translations[currentLanguage];

        mobileMenuButton.setAttribute(
            "aria-label",
            dictionary["Open menu"] ||
            "Open menu"
        );
    }

    /*
     * Desktop language selector.
     */
    if (desktopLanguageSelect) {
        desktopLanguageSelect.addEventListener(
            "change",
            (event) => {
                changeLanguage(
                    event.target.value
                );
            }
        );
    }

    /*
     * Smooth scrolling.
     */
    enableSmoothScroll();

    /*
     * Header scroll effect.
     */
    enableHeaderEffect();

    /*
     * Close mobile menu when clicking outside.
     */
    document.addEventListener("click", (event) => {
        if (!mobileMenu || !mobileMenuButton) {
            return;
        }

        const clickedInsideMenu =
            mobileMenu.contains(event.target);

        const clickedButton =
            mobileMenuButton.contains(
                event.target
            );

        if (
            !clickedInsideMenu &&
            !clickedButton &&
            !mobileMenu.classList.contains(
                "hidden"
            )
        ) {
            closeMobileMenu();
        }
    });

    console.log(
        `Ahmadi Development loaded successfully — Language: ${currentLanguage}`
    );
});