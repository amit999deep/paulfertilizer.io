
  
const products = [
    {
        id: 1,
        name: {
            en: "Paul's Premium Organic Compost",
            hi: "पॉल का प्रीमियम ऑर्गेनिक कम्पोस्ट",
            bn: "পলের প্রিমিয়াম জৈব কম্পোস্ট"
        },
        category: "organic",
        description: {
            en: "Rich, dark compost made from 100% organic plant matter. Perfect for enriching soil structure.",
            hi: "100% जैविक पौधों के पदार्थ से बनी समृद्ध, गहरे रंग की खाद। मिट्टी की संरचना को समृद्ध करने के लिए उत्तम।",
            bn: "১০০% জৈব উদ্ভিদ পদার্থ থেকে তৈরি সমৃদ্ধ, গাঢ় কম্পোস্ট। মাটির গঠন সমৃদ্ধ করার জন্য উপযুক্ত।"
        },
        price: "₹450",
        icon: "fa-seedling",
        featured: true
    },
    {
        id: 2,
        name: {
            en: "Nitro-Boost NPK 20-10-10",
            hi: "नाइट्रो-बूस्ट एनपीके 20-10-10",
            bn: "নাইট্রো-বুস্ট এনপিকে ২০-১০-১০"
        },
        category: "synthetic",
        description: {
            en: "High-nitrogen synthetic blend for rapid vegetative growth. Ideal for early spring application.",
            hi: "तेजी से वानस्पतिक विकास के लिए उच्च-नाइट्रोजन सिंथेटिक मिश्रण। शुरुआती वसंत प्रयोग के लिए आदर्श।",
            bn: "দ্রুত উদ্ভিজ্জ বৃদ্ধির জন্য উচ্চ-নাইট্রোজেন সিন্থেটিক মিশ্রণ। বসন্তের শুরুতে প্রয়োগের জন্য আদর্শ।"
        },
        price: "₹650",
        icon: "fa-bolt",
        featured: false
    },
    {
        id: 3,
        name: {
            en: "Orchid Bloom Booster",
            hi: "ऑर्किड ब्लूम बूस्टर",
            bn: "অরকিড ব্লুম বুস্টার"
        },
        category: "specialty",
        description: {
            en: "Gentle, specialized formula designed specifically for orchids and delicate epiphytes.",
            hi: "विशेष रूप से ऑर्किड और नाजुक पौधों के लिए तैयार किया गया कोमल, विशेष सूत्र।",
            bn: "অরকিড এবং সূক্ষ্ম এপিফাইটদের জন্য বিশেষভাবে ডিজাইন করা কোমল, বিশেষ ফর্মুলা।"
        },
        price: "₹350",
        icon: "fa-spa",
        featured: true
    },
    {
        id: 4,
        name: {
            en: "Liquid Seaweed Extract",
            hi: "तरल समुद्री शैवाल का अर्क",
            bn: "তরল সামুদ্রিক শৈবাল নির্যাস"
        },
        category: "organic",
        description: {
            en: "Cold-pressed kelp extract loaded with trace minerals and natural growth hormones.",
            hi: "ट्रेस खनिजों और प्राकृतिक विकास हार्मोन से भरा कोल्ड-प्रेस्ड समुद्री केल्प का अर्क।",
            bn: "ট্রেস মিনারেল এবং প্রাকৃতিক গ্রোথ হরমোন সমৃদ্ধ কোল্ড-প্রেসড কেল্প নির্যাস।"
        },
        price: "₹550",
        icon: "fa-water",
        featured: false
    }
];

const translations = {
    en: {
        logo: "Paul Fertilizer",
        nav_home: "Home",
        nav_products: "Products",
        nav_about: "About",
        nav_login: "Login",
        nav_contact: "Contact Us",
        hero_title: "Nourish Your Soil,",
        hero_subtitle: "Elevate Your Harvest.",
        hero_desc: "Discover our premium selection of organic and specialized fertilizers designed to bring out the best in your crops and gardens.",
        hero_btn: "Shop Now",
        trust_title: "100% Organic",
        trust_subtitle: "Certified Quality",
        products_title: "Our Premium Selection",
        products_desc: "Find the perfect nutrient blend for your specific needs.",
        search_placeholder: "Search for 'nitrogen', 'orchids', or product name...",
        cat_all: "All Categories",
        cat_organic: "Organic",
        cat_synthetic: "Synthetic",
        cat_specialty: "Specialty",
        no_results_title: "No products found",
        no_results_desc: "Try adjusting your search or filters.",
        footer_brand_desc: "Premium nutrients for a greener tomorrow.",
        footer_links_title: "Quick Links",
        footer_contact_title: "Contact",
        address: "chebri, khowai, tripura pin 799207",
        copyright: "© 2026 Paul Fertilizer. All rights reserved.",
        contact_title: "Send an Enquiry",
        contact_subtitle: "Have questions? Send us a message and we'll get back to you soon.",
        label_name: "Name",
        label_email: "Email",
        label_message: "Message",
        placeholder_name: "Enter your name",
        placeholder_email: "Enter your email",
        placeholder_message: "What are you looking for?",
        btn_submit: "Send Message",
        msg_success: "Your enquiry has been sent successfully!",
        msg_error: "Something went wrong. Please try again later.",
        login_welcome: "Welcome Back",
        login_subtitle: "Enter your details to access your account",
        label_password: "Password",
        label_remember: "Remember me",
        link_forgot: "Forgot Password?",
        btn_signin: "Sign In",
        login_footer_text: "Don't have an account?",
        link_create: "Create Account",
        err_required: "This field is required.",
        err_invalid_email: "Please enter a valid email address.",
        err_password_short: "Password must be at least 6 characters.",
        err_message_short: "Message must be at least 10 characters.",
        err_name_short: "Name must be at least 2 characters.",
        login_success: "Login successful! Redirecting...",
        login_error: "Invalid email or password. Please try again.",
        sending: "Sending...",
        signing_in: "Signing in..."
    },
    hi: {
        logo: "पॉल उर्वरक",
        nav_home: "होम",
        nav_products: "उत्पाद",
        nav_about: "हमारे बारे में",
        nav_login: "लॉगिन",
        nav_contact: "संपर्क करें",
        hero_title: "अपनी मिट्टी को पोषण दें,",
        hero_subtitle: "अपनी फसल को बेहतर बनाएं।",
        hero_desc: "आपकी फसलों और बगीचों में बेहतरीन निखार लाने के लिए डिज़ाइन किए गए जैविक और विशेष उर्वरकों के हमारे प्रीमियम चयन की खोज करें।",
        hero_btn: "अभी खरीदारी करें",
        trust_title: "100% जैविक",
        trust_subtitle: "प्रमाणित गुणवत्ता",
        products_title: "हमारा प्रीमियम चयन",
        products_desc: "अपनी विशिष्ट आवश्यकताओं के लिए सही पोषक तत्व मिश्रण खोजें।",
        search_placeholder: "'नाइट्रोजन', 'ऑर्किड' या उत्पाद का नाम खोजें...",
        cat_all: "सभी श्रेणियां",
        cat_organic: "जैविक",
        cat_synthetic: "सिंथेटिक",
        cat_specialty: "विशिष्ट",
        no_results_title: "कोई उत्पाद नहीं मिला",
        no_results_desc: "अपनी खोज या फ़िल्टर समायोजित करने का प्रयास करें।",
        footer_brand_desc: "कल की हरियाली के लिए प्रीमियम पोषक तत्व।",
        footer_links_title: "त्वरित लिंक",
        footer_contact_title: "संपर्क",
        address: "चेबड़ी, खोवाई, त्रिपुरा पिन 799207",
        copyright: "© 2026 पॉल उर्वरक। सर्वाधिकार सुरक्षित।",
        contact_title: "एक पूछताछ भेजें",
        contact_subtitle: "कोई प्रश्न है? हमें एक संदेश भेजें और हम जल्द ही आपसे संपर्क करेंगे।",
        label_name: "नाम",
        label_email: "ईमेल",
        label_message: "संदेश",
        placeholder_name: "अपना नाम दर्ज करें",
        placeholder_email: "अपना ईमेल दर्ज करें",
        placeholder_message: "आप क्या खोज रहे हैं?",
        btn_submit: "संदेश भेजें",
        msg_success: "आपकी पूछताछ सफलतापूर्वक भेज दी गई है!",
        msg_error: "कुछ गलत हो गया। कृपया बाद में पुन: प्रयास करें।",
        login_welcome: "वापसी पर स्वागत है",
        login_subtitle: "अपने खाते तक पहुँचने के लिए अपना विवरण दर्ज करें",
        label_password: "पासवर्ड",
        label_remember: "मुझे याद रखें",
        link_forgot: "पासवर्ड भूल गए?",
        btn_signin: "साइन इन करें",
        login_footer_text: "क्या आपके पास खाता नहीं है?",
        link_create: "खाता बनाएँ",
        err_required: "यह फ़ील्ड आवश्यक है।",
        err_invalid_email: "कृपया एक मान्य ईमेल पता दर्ज करें।",
        err_password_short: "पासवर्ड कम से कम 6 अक्षर का होना चाहिए।",
        err_message_short: "संदेश कम से कम 10 अक्षर का होना चाहिए।",
        err_name_short: "नाम कम से कम 2 अक्षर का होना चाहिए।",
        login_success: "लॉगिन सफल! रीडायरेक्ट हो रहा है...",
        login_error: "अमान्य ईमेल या पासवर्ड। कृपया पुनः प्रयास करें।",
        sending: "भेज रहा हूँ...",
        signing_in: "साइन इन हो रहा है..."
    },
    bn: {
        logo: "পল ফার্টিলাইজার",
        nav_home: "হোম",
        nav_products: "পণ্যসমূহ",
        nav_about: "আমাদের সম্পর্কে",
        nav_login: "লগইন",
        nav_contact: "যোগাযোগ করুন",
        hero_title: "আপনার মাটির পুষ্টি দিন,",
        hero_subtitle: "আপনার ফসল উন্নত করুন।",
        hero_desc: "আপনার ফসল এবং বাগানের সেরা ফলন নিশ্চিত করতে ডিজাইন করা আমাদের জৈব এবং বিশেষ সারের প্রিমিয়াম সংগ্রহটি দেখুন।",
        hero_btn: "এখনই কিনুন",
        trust_title: "১০০% জৈব",
        trust_subtitle: "প্রত্যয়িত গুণমান",
        products_title: "আমাদের প্রিমিয়াম সংগ্রহ",
        products_desc: "আপনার নির্দিষ্ট প্রয়োজনের জন্য নিখুঁত পুষ্টি মিশ্রণ খুঁজে নিন।",
        search_placeholder: "'নাইট্রোজেন', 'অরকিড' বা পণ্যের নাম দিয়ে খুঁজুন...",
        cat_all: "সব বিভাগ",
        cat_organic: "জৈব",
        cat_synthetic: "সিন্থেটিক",
        cat_specialty: "বিশেষ",
        no_results_title: "কোনো পণ্য পাওয়া যায়নি",
        no_results_desc: "আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করে দেখুন।",
        footer_brand_desc: "সবুজ আগামীর জন্য প্রিমিয়াম পুষ্টি।",
        footer_links_title: "দ্রুত লিঙ্ক",
        footer_contact_title: "যোগাযোগ",
        address: "চেবড়ি, খোয়াই, ত্রিপুরা পিন ৭৯৯২০৭",
        copyright: "© ২০২৬ পল ফার্টিলাইজার। সমস্ত অধিকার সংরক্ষিত।",
        contact_title: "একটি অনুসন্ধান পাঠান",
        contact_subtitle: "কোনো প্রশ্ন আছে? আমাদের একটি বার্তা পাঠান এবং আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        label_name: "নাম",
        label_email: "ইমেইল",
        label_message: "বার্তা",
        placeholder_name: "আপনার নাম লিখুন",
        placeholder_email: "আপনার ইমেইল লিখুন",
        placeholder_message: "আপনি কি খুঁজছেন?",
        btn_submit: "বার্তা পাঠান",
        msg_success: "আপনার অনুসন্ধান সফলভাবে পাঠানো হয়েছে!",
        msg_error: "কিছু ভুল হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।",
        login_welcome: "ফিরে আসার জন্য স্বাগতম",
        login_subtitle: "আপনার অ্যাকাউন্ট অ্যাক্সেস করতে আপনার বিবরণ লিখুন",
        label_password: "পাসওয়ার্ড",
        label_remember: "আমাকে মনে রাখুন",
        link_forgot: "পাসওয়ার্ড ভুলে গেছেন?",
        btn_signin: "সাইন ইন করুন",
        login_footer_text: "অ্যাকাউন্ট নেই?",
        link_create: "অ্যাকাউন্ট তৈরি করুন",
        err_required: "এই ক্ষেত্রটি আবশ্যক।",
        err_invalid_email: "দয়া করে একটি বৈধ ইমেইল ঠিকানা লিখুন।",
        err_password_short: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।",
        err_message_short: "বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে।",
        err_name_short: "নাম কমপক্ষে ২ অক্ষরের হতে হবে।",
        login_success: "লগইন সফল হয়েছে! রিডাইরেক্ট করা হচ্ছে...",
        login_error: "অবৈধ ইমেইল বা পাসওয়ার্ড। আবার চেষ্টা করুন।",
        sending: "পাঠানো হচ্ছে...",
        signing_in: "সাইন ইন হচ্ছে..."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const noResults = document.getElementById('noResults');
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const langSelect = document.getElementById('langSelect');
    const loginModal = document.getElementById('loginModal');
    const loginTriggers = document.querySelectorAll('.nav-login');
    const closeModal = document.getElementById('closeModal');
    const contactModal = document.getElementById('contactModal');
    const contactTriggers = document.querySelectorAll('.nav-contact');
    const closeContactModal = document.getElementById('closeContactModal');

    let currentLang = 'en';

    // ─── Validation Helpers ───────────────────────────────────

    function t(key) {
        return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showFieldError(inputEl, errorSpanId, message) {
        const span = document.getElementById(errorSpanId);
        if (span) {
            span.textContent = message;
            span.classList.remove('hidden');
        }
        if (inputEl) {
            inputEl.classList.add('input-error');
            inputEl.classList.remove('input-success');
        }
    }

    function clearFieldError(inputEl, errorSpanId) {
        const span = document.getElementById(errorSpanId);
        if (span) {
            span.textContent = '';
            span.classList.add('hidden');
        }
        if (inputEl) {
            inputEl.classList.remove('input-error');
        }
    }

    function markFieldSuccess(inputEl) {
        inputEl.classList.remove('input-error');
        inputEl.classList.add('input-success');
    }

    function showFormStatus(statusEl, message, type) {
        if (!statusEl) return;
        const icon = type === 'success'
            ? '<i class="fa-solid fa-circle-check"></i>'
            : '<i class="fa-solid fa-circle-exclamation"></i>';
        statusEl.innerHTML = icon + ' ' + message;
        statusEl.classList.remove('hidden', 'success', 'error');
        statusEl.classList.add(type);
    }

    function hideFormStatus(statusEl, delay) {
        if (!statusEl) return;
        setTimeout(() => {
            statusEl.classList.add('hidden');
            statusEl.classList.remove('success', 'error');
            statusEl.innerHTML = '';
        }, delay);
    }

    function shakeForm(formEl) {
        formEl.classList.add('shake');
        formEl.addEventListener('animationend', () => {
            formEl.classList.remove('shake');
        }, { once: true });
    }

    // Real-time validation on a single field
    function validateField(inputEl, errorSpanId, rules) {
        const val = inputEl.value.trim();
        if (rules.required && val.length === 0) {
            showFieldError(inputEl, errorSpanId, t('err_required'));
            return false;
        }
        if (rules.minLength && val.length > 0 && val.length < rules.minLength) {
            showFieldError(inputEl, errorSpanId, t(rules.minLengthKey));
            return false;
        }
        if (rules.email && val.length > 0 && !validateEmail(val)) {
            showFieldError(inputEl, errorSpanId, t('err_invalid_email'));
            return false;
        }
        clearFieldError(inputEl, errorSpanId);
        if (val.length > 0) markFieldSuccess(inputEl);
        return true;
    }

    // Attach real-time validation listeners to a field
    function attachFieldValidation(inputEl, errorSpanId, rules) {
        if (!inputEl) return;
        inputEl.addEventListener('blur', () => {
            validateField(inputEl, errorSpanId, rules);
        });
        inputEl.addEventListener('input', () => {
            // Clear error on typing — re-validate only if there's already an error shown
            if (inputEl.classList.contains('input-error')) {
                validateField(inputEl, errorSpanId, rules);
            }
        });
    }

    // ─── Language switching ───────────────────────────────────

    function updateLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // Keep the icon if it's there
                const icon = el.querySelector('i');
                if (icon) {
                    el.innerHTML = '';
                    el.appendChild(icon);
                    el.appendChild(document.createTextNode(' ' + translations[lang][key]));
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        renderProducts(filterProducts());
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }

    // ─── Modal logic ─────────────────────────────────────────

    const hideModal = () => {
        if (loginModal) {
            loginModal.classList.add('hidden');
            document.body.style.overflow = '';
            if (window.location.hash === '#login') {
                history.pushState("", document.title, window.location.pathname + window.location.search);
            }
        }
    };

    if (loginTriggers.length > 0 && loginModal && closeModal) {
        loginTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                loginModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });

        closeModal.addEventListener('click', hideModal);

        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) hideModal();
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
                hideModal();
            }
        });
    }

    const hideContactModal = () => {
        if (contactModal) {
            contactModal.classList.add('hidden');
            document.body.style.overflow = '';
            if (window.location.hash === '#contact') {
                history.pushState("", document.title, window.location.pathname + window.location.search);
            }
        }
    };

    // Contact Modal logic
    if (contactTriggers.length > 0 && contactModal && closeContactModal) {
        contactTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                contactModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });

        closeContactModal.addEventListener('click', hideContactModal);

        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) hideContactModal();
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !contactModal.classList.contains('hidden')) {
                hideContactModal();
            }
        });
    }

    // Hash-based triggers (handles cached navigations or bookmark links)
    const handleHashNavigation = () => {
        const hash = window.location.hash;
        if (hash === '#contact') {
            if (contactModal) {
                contactModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        } else if (hash === '#login') {
            if (loginModal) {
                loginModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }
    };

    window.addEventListener('hashchange', handleHashNavigation);
    handleHashNavigation(); // Run on initial load

    // ─── Mobile menu toggle ──────────────────────────────────

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-ellipsis-vertical');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-ellipsis-vertical');
            }
        });
    }

    // ─── Enquiry Form ────────────────────────────────────────

    const enquiryForm = document.getElementById('enquiryForm');
    const formStatus = document.getElementById('formStatus');
    const userNameInput = document.getElementById('userName');
    const userEmailInput = document.getElementById('userEmail');
    const userMessageInput = document.getElementById('userMessage');

    // Attach real-time validation
    attachFieldValidation(userNameInput, 'userNameError', { required: true, minLength: 2, minLengthKey: 'err_name_short' });
    attachFieldValidation(userEmailInput, 'userEmailError', { required: true, email: true });
    attachFieldValidation(userMessageInput, 'userMessageError', { required: true, minLength: 10, minLengthKey: 'err_message_short' });

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Validate all fields
            const nameOk = validateField(userNameInput, 'userNameError', { required: true, minLength: 2, minLengthKey: 'err_name_short' });
            const emailOk = validateField(userEmailInput, 'userEmailError', { required: true, email: true });
            const msgOk = validateField(userMessageInput, 'userMessageError', { required: true, minLength: 10, minLengthKey: 'err_message_short' });

            if (!nameOk || !emailOk || !msgOk) {
                shakeForm(enquiryForm);
                // Focus the first invalid field
                if (!nameOk) userNameInput.focus();
                else if (!emailOk) userEmailInput.focus();
                else userMessageInput.focus();
                return;
            }

            const btn = enquiryForm.querySelector('button[type="submit"]');
            const originalBtnText = btn.textContent;

            // Show loading state
            btn.disabled = true;
            btn.textContent = t('sending');

            const userName = userNameInput.value.trim();
            const userEmail = userEmailInput.value.trim();
            const userMessage = userMessageInput.value.trim();

            try {
                const ownerEmail = 'hello@paulfertilizer.com';
                const subject = encodeURIComponent(`New Enquiry from ${userName}`);
                const body = encodeURIComponent(`Name: ${userName}\nEmail: ${userEmail}\n\nMessage:\n${userMessage}`);

                window.location.href = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;

                showFormStatus(formStatus, t('msg_success'), 'success');
                enquiryForm.reset();

                // Clear all success states
                [userNameInput, userEmailInput, userMessageInput].forEach(el => {
                    if (el) el.classList.remove('input-success');
                });

                // Close modal after a delay
                setTimeout(() => {
                    if (contactModal) {
                        contactModal.classList.add('hidden');
                        document.body.style.overflow = '';
                    }
                }, 2500);

            } catch (error) {
                showFormStatus(formStatus, t('msg_error'), 'error');
            } finally {
                btn.disabled = false;
                btn.textContent = originalBtnText;
                hideFormStatus(formStatus, 5000);
            }
        });
    }

    // ─── Close mobile menu when clicking a link ──────────────

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-ellipsis-vertical');
                }
            }
        });
    });

    // ─── Navbar scroll effect ────────────────────────────────

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ─── Render products ─────────────────────────────────────

    function renderProducts(items) {
        productGrid.innerHTML = '';

        if (items.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }

        noResults.classList.add('hidden');

        items.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.animation = `fadeUp 0.5s ${index * 0.1}s forwards`;
            card.style.opacity = '0';

            const name = typeof product.name === 'object' ? product.name[currentLang] : product.name;
            const desc = typeof product.description === 'object' ? product.description[currentLang] : product.description;

            card.innerHTML = `
                <div class="product-image">
                    <span class="product-category-tag">${capitalizeFirstLetter(translations[currentLang]['cat_' + product.category] || product.category)}</span>
                    ${product.featured ? `<span class="product-badge">${t('featured') || 'Featured'}</span>` : ''}
                    <i class="fa-solid ${product.icon}"></i>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${name}</h3>
                    <p class="product-desc">${desc}</p>
                    <div class="product-meta">
                        <span class="product-price">${product.price}</span>
                        <button class="add-btn" aria-label="Add to cart">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // ─── Filter logic ────────────────────────────────────────

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;

        const filtered = products.filter(product => {
            const name = typeof product.name === 'object' ? product.name[currentLang].toLowerCase() : product.name.toLowerCase();
            const desc = typeof product.description === 'object' ? product.description[currentLang].toLowerCase() : product.description.toLowerCase();

            const matchesSearch = name.includes(searchTerm) ||
                desc.includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'all' || product.category === category;

            return matchesSearch && matchesCategory;
        });

        return filtered;
    }

    // Event listeners
    searchInput.addEventListener('input', () => renderProducts(filterProducts()));
    categoryFilter.addEventListener('change', () => renderProducts(filterProducts()));

    // ─── Login Form ──────────────────────────────────────────

    const loginForm = document.getElementById('loginForm');
    const loginStatus = document.getElementById('loginStatus');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Attach real-time validation for login fields
    attachFieldValidation(emailInput, 'emailError', { required: true, email: true });
    attachFieldValidation(passwordInput, 'passwordError', { required: true, minLength: 6, minLengthKey: 'err_password_short' });

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate all fields
            const emailOk = validateField(emailInput, 'emailError', { required: true, email: true });
            const passOk = validateField(passwordInput, 'passwordError', { required: true, minLength: 6, minLengthKey: 'err_password_short' });

            if (!emailOk || !passOk) {
                shakeForm(loginForm);
                if (!emailOk) emailInput.focus();
                else passwordInput.focus();
                return;
            }

            const btn = loginForm.querySelector('.btn-login');
            const originalText = btn.textContent;

            btn.disabled = true;
            btn.textContent = t('signing_in');

            setTimeout(() => {
                showFormStatus(loginStatus, t('login_success'), 'success');
                btn.disabled = false;
                btn.textContent = originalText;

                // Clear success states
                [emailInput, passwordInput].forEach(el => {
                    if (el) el.classList.remove('input-success');
                });

                setTimeout(() => {
                    if (loginModal) loginModal.classList.add('hidden');
                    document.body.style.overflow = '';
                    loginForm.reset();
                    hideFormStatus(loginStatus, 0);
                }, 1800);
            }, 1500);
        });
    }

    // ─── Chatbot assistant ──────────────────────────────────

    const chatToggle = document.getElementById('chatToggle');
    const chatPanel = document.getElementById('chatPanel');
    const chatClose = document.getElementById('chatClose');
    const chatWidget = document.getElementById('chatbotWidget');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    function addChatMessage(text, sender = 'bot') {
        const message = document.createElement('div');
        message.className = `message ${sender}`;
        message.textContent = text;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function openChat() {
        chatWidget.classList.add('open');
        chatInput.focus();
    }

    function closeChat() {
        chatWidget.classList.remove('open');
    }

    function getRecommendedProducts(query) {
        const lowerQuery = query.toLowerCase();

        if (/(tomato|vegetable|brinjal|pepper|cabbage)/.test(lowerQuery)) {
            return ['Paul\'s Premium Organic Compost', 'Liquid Seaweed Extract'];
        }

        if (/(orchid|flower|rose|hibiscus)/.test(lowerQuery)) {
            return ['Orchid Bloom Booster', 'Liquid Seaweed Extract'];
        }

        if (/(rice|wheat|maize|corn|paddy)/.test(lowerQuery)) {
            return ['Nitro-Boost NPK 20-10-10', 'Paul\'s Premium Organic Compost'];
        }

        if (/(soil|sandy|clay|loamy|acidic|alkaline)/.test(lowerQuery)) {
            return ['Paul\'s Premium Organic Compost', 'Liquid Seaweed Extract'];
        }

        return ['Paul\'s Premium Organic Compost', 'Orchid Bloom Booster'];
    }

    function getChatReply(query) {
        const normalizedQuery = query.toLowerCase();

        if (/(hi|hello|hey|help)/.test(normalizedQuery)) {
            return 'Hello! I can help you choose the best fertilizer for your crop or soil and suggest products to buy.';
        }

        if (/(buy|purchase|product|products|shop|available)/.test(normalizedQuery)) {
            const suggestions = getRecommendedProducts(normalizedQuery).join(' and ');
            return `For your needs, I would suggest ${suggestions}. These are great choices for healthy growth and better yields.`;
        }

        if (/(tomato|vegetable|brinjal|pepper|cabbage)/.test(normalizedQuery)) {
            return 'For tomatoes and other vegetables, a balanced organic compost plus a seaweed tonic usually works very well. I recommend Paul\'s Premium Organic Compost and Liquid Seaweed Extract.';
        }

        if (/(orchid|flower|rose|hibiscus)/.test(normalizedQuery)) {
            return 'For orchids and flowering plants, a gentle specialty formula is best. Orchid Bloom Booster is a strong match, and Liquid Seaweed Extract can support healthy blooms.';
        }

        if (/(rice|wheat|maize|corn|paddy)/.test(normalizedQuery)) {
            return 'For cereals and field crops, a balanced NPK fertilizer helps with early growth. Nitro-Boost NPK 20-10-10 and Paul\'s Premium Organic Compost are excellent options.';
        }

        if (/(soil|sandy|clay|loamy|acidic|alkaline)/.test(normalizedQuery)) {
            return 'For sandy soil, add organic compost and moisture-retaining nutrients. For clay soil, lighter feeding and good drainage help. Paul\'s Premium Organic Compost is a safe first choice.';
        }

        return 'Tell me your crop or soil type, and I can suggest the best fertilizer and products to buy. For example: “best fertilizer for tomato” or “products for sandy soil”.';
    }

    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            if (chatWidget.classList.contains('open')) {
                closeChat();
            } else {
                openChat();
            }
        });
    }

    if (chatClose) {
        chatClose.addEventListener('click', closeChat);
    }

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (!message) return;

            addChatMessage(message, 'user');
            chatInput.value = '';

            setTimeout(() => {
                addChatMessage(getChatReply(message));
            }, 400);
        });
    }

    // ─── Scroll Reveal ───────────────────────────────────────

    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealOnScroll.observe(el));

    // Initial render
    updateLanguage('en');
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

