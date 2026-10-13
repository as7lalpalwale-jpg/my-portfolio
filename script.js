
document.addEventListener("DOMContentLoaded", function () {
    // ===== 1. MOBILE MENU =====
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            const menuIcon = menuToggle.querySelector("i");

            if (menuIcon) {
                menuIcon.classList.toggle("fa-bars", !isOpen);
                menuIcon.classList.toggle("fa-times", isOpen);
            }
        });

        // Close menu after clicking a navigation link
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");

                const menuIcon = menuToggle.querySelector("i");

                if (menuIcon) {
                    menuIcon.classList.add("fa-bars");
                    menuIcon.classList.remove("fa-times");
                }
            });
        });

        // Close menu when switching to desktop layout
        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");

                const menuIcon = menuToggle.querySelector("i");

                if (menuIcon) {
                    menuIcon.classList.add("fa-bars");
                    menuIcon.classList.remove("fa-times");
                }
            }
        });
    }

    // ===== 2. CONTACT FORM =====
    const contactForm = document.getElementById("contactForm");
    const formNote = document.getElementById("formNote");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            if (!nameInput || !emailInput || !messageInput) {
                if (formNote) {
                    formNote.textContent =
                        "Contact form fields nahi mile. HTML IDs check karo.";
                }
                return;
            }

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !email || !message) {
                if (formNote) {
                    formNote.textContent = "Please fill in all fields.";
                }
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                if (formNote) {
                    formNote.textContent =
                        "Please enter a valid email address.";
                }
                emailInput.focus();
                return;
            }

            const recipient = "as7lalpalwale@gmail.com";
            const subject = encodeURIComponent(
                "Portfolio Contact Message from " + name
            );

            const body = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );

            if (formNote) {
                formNote.textContent =
                    "Opening your email app to send the message...";
            }

            window.location.href =
                "mailto:" + recipient +
                "?subject=" + subject +
                "&body=" + body;
        });
    }

    // ===== 3. AUTOMATIC FOOTER YEAR =====
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
