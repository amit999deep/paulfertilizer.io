:root {
    /* Color Palette */
    --primary-color: #2e7d32; /* Deep Earth Green */
    --primary-light: #4caf50;
    --primary-dark: #1b5e20;
    
    --accent-color: #d84315; /* Rust/Terracotta */
    --accent-light: #ff7043;
    
    --bg-color: #fcfbf9; /* Warm off-white */
    --surface-color: #ffffff;
    
    --text-primary: #2d3748;
    --text-secondary: #718096;
    
    --border-color: #e2e8f0;
    
    /* Typography */
    --font-main: 'Outfit', sans-serif;
    --font-heading: 'Playfair Display', serif;
    
    /* Shadows & Effects */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-border: rgba(255, 255, 255, 0.5);
    --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
    
    /* Transitions */
    --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-main);
    background-color: var(--bg-color);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    font-size: clamp(0.95rem, 0.9rem + 0.2vw, 1.1rem);
}

h1 { font-size: clamp(2.5rem, 1.5rem + 5vw, 4.5rem); }
h2 { font-size: clamp(2rem, 1.5rem + 3vw, 3.25rem); }

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Typography */
h1, h2, h3, h4 {
    font-family: var(--font-heading);
    color: var(--text-primary);
    line-height: 1.2;
}

p {
    color: var(--text-secondary);
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 2.5rem;
    border-radius: 100px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    cursor: pointer;
    font-family: var(--font-main);
    position: relative;
    overflow: hidden;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
    color: white;
    box-shadow: 0 10px 20px -5px rgba(46, 125, 50, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 30px -5px rgba(46, 125, 50, 0.4);
}

/* Shimmer effect for primary buttons */
.btn-primary::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -60%;
    width: 20%;
    height: 200%;
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(30deg);
    transition: none;
}

.btn-primary:hover::after {
    left: 120%;
    transition: all 0.8s ease;
}

.btn-outline {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    background: transparent;
}

.btn-outline:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--glass-border);
    z-index: 1000;
    transition: var(--transition-normal);
}

.navbar.scrolled {
    padding: 0.75rem 0;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: var(--shadow-sm);
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.lang-selector select {
    padding: 0.4rem 0.8rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.9rem;
    background: white;
    cursor: pointer;
    outline: none;
    transition: var(--transition-fast);
}

.lang-selector select:focus {
    border-color: var(--primary-color);
}

.mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: var(--text-primary);
    cursor: pointer;
    z-index: 1001;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-dark);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo i {
    color: var(--primary-color);
}

.nav-links {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    transition: var(--transition-fast);
}

.nav-links a:not(.btn):hover {
    color: var(--primary-color);
}

.nav-login {
    position: relative;
    color: var(--primary-color) !important;
}

.nav-login::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition-normal);
}

.nav-login:hover::after {
    width: 100%;
}

/* Hero Section */
.hero {
    position: relative;
    padding: 12rem 0 8rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 10;
}

.hero-text h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.8s forwards;
}

.hero-text h1 span {
    color: var(--primary-color);
    font-style: italic;
}

.hero-text p {
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
    max-width: 480px;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.8s 0.2s forwards;
}

.hero-text .btn {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.8s 0.4s forwards;
}

.hero-image-wrapper {
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    opacity: 0;
    transform: scale(0.95);
    animation: scaleIn 1s 0.3s forwards;
}

.hero-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    aspect-ratio: 4/3;
    transition: transform 0.5s ease;
}

.hero-image-wrapper:hover .hero-image {
    transform: scale(1.05);
}

.glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
}

.trust-badge {
    position: absolute;
    bottom: -20px;
    left: -20px;
    display: flex;
    align-items: center;
    gap: 1rem;
    animation: float 6s ease-in-out infinite;
    z-index: 20;
}

.trust-badge i {
    font-size: 2rem;
    color: var(--accent-color);
}

.trust-badge strong {
    display: block;
    color: var(--text-primary);
    font-size: 1.1rem;
    line-height: 1.2;
}

.trust-badge span {
    font-size: 0.875rem;
    color: var(--text-secondary);
}

.hero-bg-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    overflow: hidden;
}

.shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
}

.shape-1 {
    top: -10%;
    left: -10%;
    width: 50vw;
    height: 50vw;
    background: #e8f5e9;
    animation: pulse 15s ease-in-out infinite alternate;
}

.shape-2 {
    bottom: -20%;
    right: -10%;
    width: 60vw;
    height: 60vw;
    background: #f1f8e9;
    animation: pulse 20s ease-in-out infinite alternate-reverse;
}

/* Products Section */
.products-section {
    padding: 6rem 0;
    background-color: var(--surface-color);
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.section-header p {
    font-size: 1.125rem;
}

/* Search Area */
.glass-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    box-shadow: var(--shadow-md);
    border-radius: 1rem;
    padding: 1.5rem;
    margin-bottom: 3rem;
    display: flex;
    gap: 1rem;
    align-items: center;
}

.search-bar {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
}

.search-bar i {
    position: absolute;
    left: 1.25rem;
    color: var(--text-secondary);
}

.search-bar input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border: 2px solid var(--border-color);
    border-radius: 50px;
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition-fast);
    outline: none;
    background: white;
}

.search-bar input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
}

.filter-group select {
    padding: 1rem 2rem 1rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: 50px;
    font-family: inherit;
    font-size: 1rem;
    background-color: white;
    cursor: pointer;
    outline: none;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231b5e20%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem top 50%;
    background-size: 0.65rem auto;
}

.filter-group select:focus {
    border-color: var(--primary-color);
}

/* Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
}

.product-card {
    background: white;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    transition: var(--transition-normal);
    position: relative;
    display: flex;
    flex-direction: column;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-light);
}

.product-image {
    height: 200px;
    background: #f0f4f8;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.product-image i {
    font-size: 4rem;
    color: var(--primary-light);
    opacity: 0.8;
    transition: var(--transition-normal);
}

.product-card:hover .product-image i {
    transform: scale(1.1);
}

.product-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--accent-color);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.product-category-tag {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(255,255,255,0.9);
    color: var(--primary-dark);
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
}

.product-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.product-title {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.product-desc {
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

.product-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
}

.product-price {
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-dark);
}

.add-btn {
    background: transparent;
    border: none;
    color: var(--primary-color);
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition-fast);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f4f8;
}

.product-card:hover .add-btn {
    background: var(--primary-color);
    color: white;
}

.no-results {
    text-align: center;
    padding: 4rem;
    color: var(--text-secondary);
}

.no-results i {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #cbd5e0;
}

.hidden:not(.modal-overlay) {
    display: none !important;
}

/* Footer */
.footer {
    background: #1a202c;
    color: #edf2f7;
    padding: 5rem 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
}

.footer .logo {
    color: white;
    margin-bottom: 1rem;
}

.footer-brand p {
    color: #a0aec0;
}

.footer h4 {
    color: white;
    margin-bottom: 1.5rem;
    font-family: var(--font-main);
    font-size: 1.1rem;
}

.footer ul {
    list-style: none;
}

.footer ul li {
    margin-bottom: 0.75rem;
}

.footer ul a {
    color: #a0aec0;
    text-decoration: none;
    transition: var(--transition-fast);
}

.footer ul a:hover {
    color: var(--primary-light);
}

.footer-contact p {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    color: #a0aec0;
}

.footer-contact i {
    color: var(--primary-light);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #2d3748;
    color: #718096;
    font-size: 0.875rem;
}

/* Animations */
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}

@keyframes pulse {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
}

/* Contact Section */
.contact-section {
    padding: 100px 0;
    background: #f8fafc;
}

.contact-container {
    max-width: 800px;
    margin: 0 auto;
}

.contact-form-wrapper {
    padding: 3rem;
    border-radius: 2rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-primary);
}

.form-group input {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    font-family: inherit;
    font-size: 1rem;
    background: white;
    transition: var(--transition-fast);
}

.form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--border-color);
    border-radius: 12px;
    font-family: inherit;
    font-size: 1rem;
    background: white;
    transition: var(--transition-normal);
    outline: none;
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(46, 125, 50, 0.1);
}

/* Inline field errors */
.field-error {
    display: block;
    font-size: 0.8rem;
    color: #dc2626;
    margin-top: 0.4rem;
    padding-left: 0.25rem;
    animation: fadeUp 0.3s ease;
}

/* Input error state */
.input-error {
    border-color: #ef4444 !important;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
}

/* Input success state */
.input-success {
    border-color: #10b981 !important;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12) !important;
}

/* Form status banners */
.form-status {
    margin-top: 1.5rem;
    padding: 1rem 1.25rem;
    border-radius: 12px;
    text-align: center;
    font-weight: 500;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    animation: slideDown 0.35s ease;
}

.form-status.success {
    background: #ecfdf5;
    color: #065f46;
    border: 1px solid #10b981;
}

.form-status.error {
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #ef4444;
}

/* Shake animation for invalid form submissions */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    15% { transform: translateX(-6px); }
    30% { transform: translateX(5px); }
    45% { transform: translateX(-4px); }
    60% { transform: translateX(3px); }
    75% { transform: translateX(-2px); }
}

@keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
}

.shake {
    animation: shake 0.5s ease;
}

.w-100 {
    width: 100%;
}

/* Modal System */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-overlay:not(.hidden) {
    opacity: 1;
    visibility: visible;
}

.modal-container {
    width: 90%;
    max-width: 480px;
    transform: translateY(30px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-overlay:not(.hidden) .modal-container {
    transform: translateY(0);
}

.login-card {
    position: relative;
    padding: 3rem;
    border-radius: 2.5rem;
    box-shadow: var(--shadow-xl);
    text-align: center;
}

.close-modal-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: #f1f5f9;
    color: var(--text-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: var(--transition-fast);
}

.close-modal-btn:hover {
    background: #fee2e2;
    color: #ef4444;
}

.login-header {
    margin-bottom: 2.5rem;
}

.login-header .logo {
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 2rem;
}

.login-header h2 {
    font-size: 2.25rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.login-header p {
    color: var(--text-secondary);
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.input-wrapper i {
    position: absolute;
    left: 1rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
}

.input-wrapper input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border: 2px solid var(--border-color);
    border-radius: 12px;
    font-family: inherit;
    font-size: 1rem;
    background: white;
    transition: var(--transition-normal);
    outline: none;
}

.input-wrapper input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(46, 125, 50, 0.1);
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 0.9rem;
}

.remember-me {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    color: var(--text-secondary);
}

.forgot-password {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
}

.forgot-password:hover {
    text-decoration: underline;
}

.btn-login {
    padding: 1.1rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.login-footer {
    margin-top: 2rem;
    font-size: 0.95rem;
    color: var(--text-secondary);
}

.login-footer a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
}

.login-footer a:hover {
    text-decoration: underline;
}

/* Responsive */
@media (max-width: 992px) {
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-text p {
        margin: 0 auto 2.5rem;
    }
    
    .trust-badge {
        bottom: 20px;
        left: 20px;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
    }
    
    .nav-links {
        position: fixed;
        top: 80px;
        right: 2rem;
        width: calc(100% - 4rem);
        max-width: 300px;
        background: var(--surface-color);
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        padding: 1rem;
        border-radius: 1.5rem;
        box-shadow: var(--shadow-xl);
        border: 1px solid var(--border-color);
        transform: translateY(-20px);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
    }
    
    .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
    }

    .nav-links li {
        width: 100%;
        text-align: center;
        margin: 0.5rem 0;
    }

    .nav-links a {
        display: block;
        padding: 1rem;
        background: #f8fafc;
        border-radius: 1rem;
        font-weight: 600;
        color: var(--text-primary);
        transition: var(--transition-fast);
    }

    .nav-links a:hover {
        background: var(--primary-light);
        color: white;
    }

    .nav-links a.btn-outline {
        border: 2px solid var(--primary-color);
        background: transparent;
    }

    .nav-links a.btn-outline:hover {
        background: var(--primary-color);
        color: white;
    }
    
    .hero-text h1 {
        font-size: 3rem;
    }
    
    .glass-panel {
        flex-direction: column;
        align-items: stretch;
    }

    .modal-container {
        width: 100%;
        margin: 1rem;
    }

    .login-card {
        padding: 2rem 1.5rem;
    }

    /* Reduce hero vertical spacing on smaller devices to avoid excessive scroll */
    .hero {
        padding: 6rem 0 4rem;
        min-height: auto;
    }

    .hero-image {
        max-height: 320px;
        aspect-ratio: auto;
    }

    /* Slightly reduce container padding on mobile to give more horizontal space */
    .container {
        padding: 0 1rem;
    }

    /* Make search and filter inputs more compact on narrow screens */
    .glass-panel {
        padding: 1rem;
        gap: 0.5rem;
    }

    .search-bar input {
        padding: 0.75rem 0.75rem 0.75rem 2.5rem;
        font-size: 0.95rem;
    }

    .filter-group select {
        padding: 0.75rem 1rem 0.75rem 0.75rem;
        font-size: 0.95rem;
    }

    /* Increase tap targets for buttons */
    .btn, .add-btn {
        min-height: 44px;
        padding: 0.75rem 1.25rem;
    }
}

/* Extra small devices */
@media (max-width: 480px) {
    .hero {
        padding: 4rem 0 2.5rem;
    }

    .hero-text h1 {
        font-size: clamp(1.6rem, 4.5vw, 2.2rem);
    }

    .nav-controls {
        gap: 0.5rem;
    }

    .lang-selector {
        display: none;
    }

    .nav-links {
        top: 72px;
        right: 1rem;
        width: calc(100% - 2rem);
        max-width: none;
    }

    .product-image {
        height: 160px;
    }

    .footer-content {
        gap: 1.25rem;
    }

    .login-card {
        border-radius: 1rem;
        padding: 1.25rem;
    }
}

/* Scroll Reveal classes */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}
