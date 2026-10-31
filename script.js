/* ============================================
   UDUPI SAGAR – Main Script
   Vanilla JS · No frameworks
   ============================================ */

(function () {
    'use strict';

    /* ---------------------------------------------
       1. DATA & STATE
       --------------------------------------------- */

    // Elegant SVG fallback generator
    const generateSVG = (title, color1, color2) => {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
            <defs>
                <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${color1}" />
                    <stop offset="100%" stop-color="${color2}" />
                </linearGradient>
                <pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.1)"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
            <rect width="100%" height="100%" fill="url(#p)"/>
            <circle cx="400" cy="280" r="120" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
            <circle cx="400" cy="280" r="140" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
            <text x="400" y="295" font-family="Georgia, serif" font-size="32" fill="#fff" text-anchor="middle" font-weight="bold">${title}</text>
            <text x="400" y="330" font-family="sans-serif" font-size="14" fill="rgba(255,255,255,0.8)" text-anchor="middle" letter-spacing="3">UDUPI SAGAR</text>
        </svg>`;
        return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
    };

    // Signature dishes
    const signatureDishes = [
        { id: 'sig-1', name: 'Masala Dosa', desc: 'Crisp golden dosa filled with spiced potato masala.', price: 140, img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop', alt: 'Masala Dosa' },
        { id: 'sig-2', name: 'Mysore Masala Dosa', desc: 'Fiery red chutney spread, potato masala, and butter finish.', price: 170, img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop', alt: 'Mysore Masala Dosa' },
        { id: 'sig-3', name: 'Idli Vada', desc: 'Steamed idlis and crisp medu vada with sambar and chutney.', price: 90, img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop', alt: 'Idli Vada' },
        { id: 'sig-4', name: 'Ghee Roast Dosa', desc: 'Paper-thin dosa roasted generously in pure ghee.', price: 160, img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop', alt: 'Ghee Roast Dosa' },
        { id: 'sig-5', name: 'Udupi Meals', desc: 'A wholesome thali with rice, sambar, rasam, and seasonal sides.', price: 250, img: generateSVG('Udupi Meals', '#1e3a2f', '#6b7a5e'), alt: 'Udupi Meals' },
        { id: 'sig-6', name: 'Pongal', desc: 'Comforting rice and lentil dish tempered with pepper and ghee.', price: 110, img: generateSVG('Pongal', '#c4704b', '#b59b6b'), alt: 'Pongal' },
        { id: 'sig-7', name: 'Filter Coffee', desc: 'Strong decoction blended with frothy milk, served hot.', price: 60, img: generateSVG('Filter Coffee', '#3e2c1b', '#c4704b'), alt: 'Filter Coffee' },
        { id: 'sig-8', name: 'Kesari Bath', desc: 'Sweet semolina pudding with ghee, cardamom, and cashews.', price: 80, img: generateSVG('Kesari Bath', '#b59b6b', '#1e3a2f'), alt: 'Kesari Bath' }
    ];

    // Full menu items
    const menuItems = [
        { id: 'm-1', name: 'Idli (2 pcs)', desc: 'Soft steamed rice cakes with chutney.', price: 50, category: 'breakfast' },
        { id: 'm-2', name: 'Medu Vada (2 pcs)', desc: 'Crisp savoury lentil doughnuts.', price: 60, category: 'breakfast' },
        { id: 'm-3', name: 'Pongal', desc: 'Rice & lentil tempered with pepper, ghee.', price: 110, category: 'breakfast' },
        { id: 'm-4', name: 'Upma', desc: 'Semolina cooked with vegetables and cashews.', price: 80, category: 'breakfast' },
        { id: 'm-5', name: 'Idli Vada Combo', desc: 'Two idlis, one vada, sambar & chutney.', price: 90, category: 'breakfast' },
        { id: 'm-6', name: 'Plain Dosa', desc: 'Crisp rice-lentil crepe with chutney.', price: 90, category: 'dosa' },
        { id: 'm-7', name: 'Masala Dosa', desc: 'Classic with spiced potato filling.', price: 140, category: 'dosa' },
        { id: 'm-8', name: 'Mysore Masala Dosa', desc: 'Red chutney, potato masala, butter.', price: 170, category: 'dosa' },
        { id: 'm-9', name: 'Ghee Roast Dosa', desc: 'Extra thin, roasted in pure ghee.', price: 160, category: 'dosa' },
        { id: 'm-10', name: 'Onion Rava Dosa', desc: 'Crispy semolina dosa with onions & herbs.', price: 150, category: 'dosa' },
        { id: 'm-11', name: 'Set Dosa (3 pcs)', desc: 'Soft fluffy dosas served with saagu.', price: 120, category: 'dosa' },
        { id: 'm-12', name: 'Udupi Meals', desc: 'Rice, sambar, rasam, poriyal, curd, papad.', price: 250, category: 'meals' },
        { id: 'm-13', name: 'Mini Meals', desc: 'A lighter thali with seasonal specials.', price: 190, category: 'meals' },
        { id: 'm-14', name: 'Bisi Bele Bath', desc: 'Hearty rice-lentil dish with vegetables & ghee.', price: 160, category: 'meals' },
        { id: 'm-15', name: 'Curd Rice', desc: 'Comforting rice with yoghurt and tempering.', price: 110, category: 'meals' },
        { id: 'm-16', name: 'Kesari Bath', desc: 'Sweet semolina with ghee and cashews.', price: 80, category: 'snacks' },
        { id: 'm-17', name: 'Maddur Vada', desc: 'Crisp semolina & onion fritters.', price: 70, category: 'snacks' },
        { id: 'm-18', name: 'Bonda (2 pcs)', desc: 'Fried potato dumplings with chutney.', price: 60, category: 'snacks' },
        { id: 'm-19', name: 'Rava Kesari', desc: 'Soft semolina sweet with cardamom.', price: 80, category: 'snacks' },
        { id: 'm-20', name: 'Filter Coffee', desc: 'Traditional South Indian style.', price: 60, category: 'beverages' },
        { id: 'm-21', name: 'Masala Tea', desc: 'Spiced milk tea.', price: 50, category: 'beverages' },
        { id: 'm-22', name: 'Buttermilk', desc: 'Cooling spiced yoghurt drink.', price: 40, category: 'beverages' },
        { id: 'm-23', name: 'Rose Milk', desc: 'Chilled milk with rose syrup.', price: 70, category: 'beverages' }
    ];

    // Cart State (loaded from localStorage or empty array)
    let cart = JSON.parse(localStorage.getItem('udupiCart')) || [];

    /* ---------------------------------------------
       2. DOM REFERENCES
       --------------------------------------------- */
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const signatureGrid = document.getElementById('signatureGrid');
    const menuGrid = document.getElementById('menuGrid');
    const menuFilters = document.getElementById('menuFilters');
    const galleryGrid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const backToTop = document.getElementById('backToTop');
    const directionsBtn = document.getElementById('directionsBtn');

    // Cart UI
    const openCartBtn = document.getElementById('openCartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartModal = document.getElementById('cartModal');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const cartCount = document.getElementById('cartCount');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Checkout UI
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutFeedback = document.getElementById('checkoutFeedback');

    // Reservation UI
    const reserveBtn = document.getElementById('reserveBtn');
    const reserveModal = document.getElementById('reserveModal');
    const closeReserveBtn = document.getElementById('closeReserveBtn');
    const reserveForm = document.getElementById('reserveForm');
    const reserveFeedback = document.getElementById('reserveFeedback');

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    /* ---------------------------------------------
       3. RENDER SIGNATURE DISHES (with Add to Cart)
       --------------------------------------------- */
    function renderSignatures() {
        signatureGrid.innerHTML = signatureDishes.map(dish => `
            <article class="signature-card">
                <img class="signature-img" src="${dish.img}" alt="${dish.alt}" loading="lazy">
                <div class="signature-info">
                    <h3 class="signature-name">${dish.name}</h3>
                    <p class="signature-desc">${dish.desc}</p>
                    <div class="signature-price">₹${dish.price}</div>
                    <button class="add-to-cart-btn" data-id="${dish.id}" data-name="${dish.name}" data-price="${dish.price}">Add to Order</button>
                </div>
            </article>
        `).join('');
    }

    /* ---------------------------------------------
       4. RENDER MENU + FILTERING (with Add to Cart)
       --------------------------------------------- */
    function renderMenu(filter = 'all') {
        const filtered = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);
        
        menuGrid.innerHTML = filtered.map(item => `
            <div class="menu-item">
                <div>
                    <span class="menu-item-name">${item.name}</span>
                    <span class="menu-item-desc">${item.desc}</span>
                </div>
                <div class="menu-item-right">
                    <span class="menu-item-price">₹${item.price}</span>
                    <button class="btn-add-small" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">+ Add</button>
                </div>
            </div>
        `).join('');
    }

    if (menuFilters) {
        menuFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;
            menuFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.filter);
        });
    }

    /* ---------------------------------------------
       5. CART LOGIC
       --------------------------------------------- */
    function updateCartUI() {
        // Update badge
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Render items
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your order is empty.</p>';
            cartTotalPrice.textContent = '₹0';
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = '0.5';
            checkoutBtn.style.cursor = 'not-allowed';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div>
                        <div class="cart-item-name">${item.name}</div>
                        <div style="font-size: 0.8rem; color: #777;">Qty: ${item.quantity} × ₹${item.price}</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="cart-item-price">₹${item.price * item.quantity}</div>
                        <button class="remove-from-cart" data-id="${item.id}" style="background:none; border:none; color: #b23a3a; font-size: 0.75rem; cursor: pointer; margin-top: 0.2rem;">Remove</button>
                    </div>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotalPrice.textContent = `₹${total}`;
            checkoutBtn.disabled = false;
            checkoutBtn.style.opacity = '1';
            checkoutBtn.style.cursor = 'pointer';
        }

        // Save to local storage
        localStorage.setItem('udupiCart', JSON.stringify(cart));
    }

    function addToCart(id, name, price) {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price: parseInt(price), quantity: 1 });
        }
        updateCartUI();
        
        // Small visual feedback on the cart button
        openCartBtn.style.transform = 'scale(1.1)';
        setTimeout(() => { openCartBtn.style.transform = 'scale(1)'; }, 200);
    }

    // Event listener for all "Add to Cart" buttons
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn') || e.target.classList.contains('btn-add-small')) {
            const { id, name, price } = e.target.dataset;
            addToCart(id, name, price);
        }
        
        // Remove item from cart
        if (e.target.classList.contains('remove-from-cart')) {
            const id = e.target.dataset.id;
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
        }
    });

    /* ---------------------------------------------
       6. MODAL CONTROLS
       --------------------------------------------- */
    function openModal(modal) {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Cart Modal
    openCartBtn.addEventListener('click', () => openModal(cartModal));
    closeCartBtn.addEventListener('click', () => closeModal(cartModal));

    // Checkout Modal
    checkoutBtn.addEventListener('click', () => {
        closeModal(cartModal);
        openModal(checkoutModal);
    });
    closeCheckoutBtn.addEventListener('click', () => closeModal(checkoutModal));

    // Reservation Modal
    reserveBtn.addEventListener('click', () => openModal(reserveModal));
    closeReserveBtn.addEventListener('click', () => closeModal(reserveModal));

    // Close on backdrop click
    [cartModal, checkoutModal, reserveModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (cartModal.classList.contains('open')) closeModal(cartModal);
            if (checkoutModal.classList.contains('open')) closeModal(checkoutModal);
            if (reserveModal.classList.contains('open')) closeModal(reserveModal);
        }
    });

    /* ---------------------------------------------
       7. FORM SUBMISSIONS (Demo Simulation)
       --------------------------------------------- */
    // Checkout Form
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('checkoutName').value;
        checkoutFeedback.textContent = `Thank you, ${name}! Your order has been placed successfully (demo).`;
        checkoutFeedback.style.color = 'var(--forest)';
        
        // Clear cart after successful "order"
        cart = [];
        updateCartUI();
        checkoutForm.reset();
        
        setTimeout(() => {
            closeModal(checkoutModal);
            checkoutFeedback.textContent = '';
        }, 3000);
    });

    // Reservation Form
    reserveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('resName').value;
        const date = document.getElementById('resDate').value;
        const time = document.getElementById('resTime').value;
        const guests = document.getElementById('resGuests').value;
        
        reserveFeedback.textContent = `Table reserved for ${name} (${guests} guests) on ${date} at ${time}. (demo)`;
        reserveFeedback.style.color = 'var(--forest)';
        
        reserveForm.reset();
        
        setTimeout(() => {
            closeModal(reserveModal);
            reserveFeedback.textContent = '';
        }, 4000);
    });

    // Contact Form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formFeedback.textContent = 'Message sent successfully (demo).';
            formFeedback.style.color = 'var(--forest)';
            contactForm.reset();
            setTimeout(() => { formFeedback.textContent = ''; }, 3000);
        });
    }

    /* ---------------------------------------------
       8. STICKY HEADER & SCROLL
       --------------------------------------------- */
    function handleScroll() {
        if (window.scrollY > 40) header.classList.add('scrolled');
        else header.classList.remove('scrolled');

        if (window.scrollY > 500) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ---------------------------------------------
       9. MOBILE NAVIGATION
       --------------------------------------------- */
    function closeMenu() {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
               hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.forEach(link => link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) closeMenu();
    }));

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    /* ---------------------------------------------
       10. ACTIVE NAV LINK (SCROLL SPY)
       --------------------------------------------- */
    const sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink, { passive: true });

    /* ---------------------------------------------
       11. LIGHTBOX (Gallery)
       --------------------------------------------- */
    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }

    if (galleryGrid) {
        galleryGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (!item) return;
            const img = item.querySelector('img');
            if (img) openLightbox(img.src, img.alt);
        });
        
        galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
            item.setAttribute('tabindex', '0');
            item.setAttribute('role', 'button');
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
            });
        });
    }
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

    /* ---------------------------------------------
       12. SCROLL REVEAL
       --------------------------------------------- */
    function initReveal() {
        const targets = document.querySelectorAll('.section-title, .section-tag, .story-text, .story-image, .signature-card, .why-card, .testimonial-card, .gallery-item, .location-info, .contact-form-wrapper, .menu-item');
        
        if (!('IntersectionObserver' in window)) {
            targets.forEach(el => el.classList.add('visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        targets.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    }

    /* ---------------------------------------------
       13. SMOOTH SCROLL (Offset for sticky header)
       --------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const headerOffset = header.offsetHeight || 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset + 10;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });

    /* ---------------------------------------------
       14. INIT
       --------------------------------------------- */
    function init() {
        renderSignatures();
        renderMenu('all');
        updateCartUI();
        initReveal();
        handleScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();