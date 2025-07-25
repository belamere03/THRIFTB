// Rentals Page JavaScript

// Sample rental items data
const rentalItems = [
    {
        id: 1,
        title: "Vintage Wooden Dining Table",
        description: "Beautiful reclaimed wood dining table perfect for events or temporary dining solutions.",
        dailyRate: 25,
        weeklyRate: 150,
        monthlyRate: 450,
        category: "furniture",
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: true,
        available: true,
        rating: 4.8,
        impact: "Sustainably sourced • Prevents 45kg CO2 • Local artisan"
    },
    {
        id: 2,
        title: "Professional Camera Kit",
        description: "Complete DSLR camera kit with lenses and accessories for photography projects.",
        dailyRate: 45,
        weeklyRate: 250,
        monthlyRate: 800,
        category: "electronics",
        condition: "Like New",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: true,
        available: true,
        rating: 4.9,
        impact: "Prevents e-waste • Shared usage • Professional grade"
    },
    {
        id: 3,
        title: "Power Drill Set",
        description: "Complete power drill set with bits and accessories for DIY projects.",
        dailyRate: 15,
        weeklyRate: 75,
        monthlyRate: 200,
        category: "tools",
        condition: "Very Good",
        image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: true,
        available: true,
        rating: 4.6,
        impact: "Reduces tool waste • Quality tools • Perfect for projects"
    },
    {
        id: 4,
        title: "Wedding Arch Decoration",
        description: "Elegant wooden wedding arch with floral decoration options available.",
        dailyRate: 80,
        weeklyRate: 400,
        monthlyRate: 1000,
        category: "events",
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: true,
        available: true,
        rating: 4.9,
        impact: "Event reuse • Reduces waste • Creates memories"
    },
    {
        id: 5,
        title: "Camping Tent (4-Person)",
        description: "Spacious 4-person camping tent with rainfly and footprint included.",
        dailyRate: 20,
        weeklyRate: 100,
        monthlyRate: 300,
        category: "outdoor",
        condition: "Good",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: true,
        available: true,
        rating: 4.7,
        impact: "Outdoor access • Reduces gear waste • Adventure ready"
    },
    {
        id: 6,
        title: "Stand Mixer",
        description: "Professional stand mixer perfect for baking projects and special occasions.",
        dailyRate: 12,
        weeklyRate: 60,
        monthlyRate: 180,
        category: "home",
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: true,
        available: true,
        rating: 4.8,
        impact: "Kitchen efficiency • Try before buy • Occasional use perfect"
    },
    {
        id: 7,
        title: "MacBook Pro 16-inch",
        description: "High-performance laptop with M2 Pro chip, perfect for creative projects and development work.",
        dailyRate: 50,
        weeklyRate: 300,
        monthlyRate: 1000,
        category: "electronics",
        condition: "Like New",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: false,
        available: true,
        rating: 4.9,
        impact: "Extends device lifespan • Reduced e-waste • Professional grade"
    },
    {
        id: 8,
        title: "Sony A7 III Mirrorless Camera",
        description: "Professional mirrorless camera with full-frame sensor and 4K video capabilities.",
        dailyRate: 40,
        weeklyRate: 220,
        monthlyRate: 750,
        category: "electronics",
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: false,
        available: true,
        rating: 4.8,
        impact: "Professional imaging • Shared access • Prevents overproduction"
    },
    {
        id: 9,
        title: "iPad Pro 12.9-inch with Apple Pencil",
        description: "Latest iPad Pro with M2 chip, Apple Pencil, and keyboard for creative and business work.",
        dailyRate: 25,
        weeklyRate: 140,
        monthlyRate: 480,
        category: "electronics",
        condition: "Like New",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: false,
        available: true,
        rating: 4.7,
        impact: "Creative tools access • Educational support • Tech sustainability"
    },
    {
        id: 10,
        title: "Gaming Setup: RTX 4080 PC",
        description: "High-end gaming PC with RTX 4080, 32GB RAM, perfect for gaming events or content creation.",
        dailyRate: 75,
        weeklyRate: 450,
        monthlyRate: 1500,
        category: "electronics",
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1591238372338-d1ba7db11e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: false,
        available: true,
        rating: 4.9,
        impact: "Gaming accessibility • Shared high-end tech • Prevents redundant purchases"
    },
    {
        id: 11,
        title: "4K Video Projector",
        description: "Professional 4K projector with 3000 lumens, perfect for presentations and events.",
        dailyRate: 60,
        weeklyRate: 350,
        monthlyRate: 1200,
        category: "electronics",
        condition: "Very Good",
        image: "https://images.unsplash.com/photo-1478720568477-b319ff4e968c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: false,
        available: true,
        rating: 4.6,
        impact: "Event sustainability • Professional presentations • Shared resources"
    },
    {
        id: 12,
        title: "Audio Recording Kit",
        description: "Complete podcast/music recording setup with microphones, interface, and monitoring.",
        dailyRate: 35,
        weeklyRate: 200,
        monthlyRate: 650,
        category: "electronics",
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: false,
        available: true,
        rating: 4.8,
        impact: "Creative accessibility • Professional audio • Supports content creators"
    },
    {
        id: 13,
        title: "Drone with 4K Camera",
        description: "Professional drone with 4K camera, gimbal stabilization, perfect for aerial photography.",
        dailyRate: 45,
        weeklyRate: 250,
        monthlyRate: 850,
        category: "electronics",
        condition: "Like New",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: false,
        available: true,
        rating: 4.7,
        impact: "Aerial photography access • Shared expensive tech • Creative empowerment"
    },
    {
        id: 14,
        title: "VR Headset - Meta Quest 3",
        description: "Latest VR headset with mixed reality capabilities for gaming, training, and experiences.",
        dailyRate: 30,
        weeklyRate: 170,
        monthlyRate: 580,
        category: "electronics",
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        featured: false,
        available: true,
        rating: 4.5,
        impact: "VR accessibility • Educational tool • Tech exploration"
    }
];

// Initialize rentals page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('rentals.html')) {
        initializeRentalsPage();
        loadFeaturedRentals();
        setupRentalEventListeners();
        updateCartCount();
    }
});

function initializeRentalsPage() {
    // Setup theme toggle
    setupThemeToggle();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
}

function setupRentalEventListeners() {
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            showToast('Thank you for subscribing to our rental updates!', 'success');
            this.reset();
        });
    }
}

function loadFeaturedRentals() {
    const featuredRentals = rentalItems.filter(item => item.featured);
    const featuredGrid = document.getElementById('featuredRentalsGrid');
    
    if (featuredGrid) {
        featuredGrid.innerHTML = featuredRentals.map(item => `
            <div class="rental-card">
                <img src="${item.image}" alt="${item.title}" class="rental-image">
                <div class="rental-badge">${item.condition}</div>
                <div class="rental-info">
                    <h3 class="rental-title">${item.title}</h3>
                    <p class="rental-description">${item.description}</p>
                    
                    <div class="rental-pricing">
                        <div class="price-option">
                            <span class="price-label">Daily</span>
                            <span class="price-value">$${item.dailyRate}</span>
                        </div>
                        <div class="price-option featured">
                            <span class="price-label">Weekly</span>
                            <span class="price-value">$${item.weeklyRate}</span>
                        </div>
                        <div class="price-option">
                            <span class="price-label">Monthly</span>
                            <span class="price-value">$${item.monthlyRate}</span>
                        </div>
                    </div>
                    
                    <div class="rental-rating">
                        ${generateStars(item.rating)}
                        <span class="rating-value">${item.rating}</span>
                    </div>
                    
                    <div class="rental-impact">
                        <i class="fas fa-leaf"></i>
                        <span>${item.impact}</span>
                    </div>
                    
                    <div class="rental-actions">
                        <button class="btn btn-primary" onclick="rentNow(${item.id})">
                            <i class="fas fa-calendar-check"></i>
                            Rent Now
                        </button>
                        <button class="btn btn-outline" onclick="viewRentalDetails(${item.id})">
                            <i class="fas fa-info-circle"></i>
                            Details
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Category browsing functions
function browseCategory(category) {
    const categoryItems = rentalItems.filter(item => item.category === category);
    showCategoryModal(category, categoryItems);
}

function showCategoryModal(category, items) {
    const modalContent = `
        <div class="category-modal">
            <h2>${category.charAt(0).toUpperCase() + category.slice(1)} Rentals</h2>
            <div class="category-items-grid">
                ${items.map(item => `
                    <div class="mini-rental-card">
                        <img src="${item.image}" alt="${item.title}" class="mini-rental-image">
                        <div class="mini-rental-info">
                            <h4>${item.title}</h4>
                            <div class="mini-rental-price">From $${item.dailyRate}/day</div>
                            <button class="btn btn-primary btn-small" onclick="rentNow(${item.id}); closeModal();">
                                Rent Now
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="modal-actions">
                <button class="btn btn-outline" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
    
    showModal(modalContent);
}

// Rental action functions
function rentNow(itemId) {
    const item = rentalItems.find(i => i.id === itemId);
    if (!item) return;
    
    showRentalModal(item);
}

function showRentalModal(item) {
    const modalContent = `
        <div class="rental-booking-modal">
            <h2>Rent: ${item.title}</h2>
            <div class="rental-booking-content">
                <div class="booking-image-section">
                    <img src="${item.image}" alt="${item.title}" class="booking-image">
                    <div class="item-condition">Condition: ${item.condition}</div>
                </div>
                
                <div class="booking-form-section">
                    <form id="rentalBookingForm" class="rental-booking-form">
                        <div class="form-group">
                            <label for="rentalDuration">Rental Duration</label>
                            <select id="rentalDuration" name="rentalDuration" required onchange="updateRentalPrice(${item.id})">
                                <option value="">Select duration...</option>
                                <option value="daily">Daily - $${item.dailyRate}/day</option>
                                <option value="weekly">Weekly - $${item.weeklyRate}/week</option>
                                <option value="monthly">Monthly - $${item.monthlyRate}/month</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="startDate">Start Date</label>
                            <input type="date" id="startDate" name="startDate" required min="${new Date().toISOString().split('T')[0]}">
                        </div>
                        
                        <div class="form-group">
                            <label for="endDate">End Date</label>
                            <input type="date" id="endDate" name="endDate" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="renterName">Your Name</label>
                            <input type="text" id="renterName" name="renterName" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="renterEmail">Email Address</label>
                            <input type="email" id="renterEmail" name="renterEmail" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="renterPhone">Phone Number</label>
                            <input type="tel" id="renterPhone" name="renterPhone" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="deliveryAddress">Delivery Address</label>
                            <textarea id="deliveryAddress" name="deliveryAddress" rows="3" placeholder="Enter your full address for delivery..." required></textarea>
                        </div>
                        
                        <div class="rental-summary">
                            <h3>Rental Summary</h3>
                            <div class="summary-line">
                                <span>Item:</span>
                                <span>${item.title}</span>
                            </div>
                            <div class="summary-line">
                                <span>Duration:</span>
                                <span id="summaryDuration">-</span>
                            </div>
                            <div class="summary-line">
                                <span>Rental Cost:</span>
                                <span id="summaryRentalCost">-</span>
                            </div>
                            <div class="summary-line">
                                <span>Security Deposit:</span>
                                <span id="summaryDeposit">-</span>
                            </div>
                            <div class="summary-line total">
                                <span>Total Due Today:</span>
                                <span id="summaryTotal">-</span>
                            </div>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-large">
                            <i class="fas fa-calendar-check"></i>
                            Confirm Rental Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    showModal(modalContent);
    
    // Add event listener for the form
    setTimeout(() => {
        document.getElementById('rentalBookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            processRentalBooking(item, e.target);
        });
        
        // Set minimum end date when start date changes
        document.getElementById('startDate').addEventListener('change', function() {
            const startDate = new Date(this.value);
            const endDate = document.getElementById('endDate');
            startDate.setDate(startDate.getDate() + 1);
            endDate.min = startDate.toISOString().split('T')[0];
        });
    }, 100);
}

function updateRentalPrice(itemId) {
    const item = rentalItems.find(i => i.id === itemId);
    const duration = document.getElementById('rentalDuration').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    if (!duration || !startDate || !endDate) return;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    let rentalCost = 0;
    let durationText = '';
    
    switch(duration) {
        case 'daily':
            rentalCost = item.dailyRate * days;
            durationText = `${days} days`;
            break;
        case 'weekly':
            const weeks = Math.ceil(days / 7);
            rentalCost = item.weeklyRate * weeks;
            durationText = `${weeks} week(s)`;
            break;
        case 'monthly':
            const months = Math.ceil(days / 30);
            rentalCost = item.monthlyRate * months;
            durationText = `${months} month(s)`;
            break;
    }
    
    const deposit = Math.round(rentalCost * 0.3); // 30% security deposit
    const total = rentalCost + deposit;
    
    document.getElementById('summaryDuration').textContent = durationText;
    document.getElementById('summaryRentalCost').textContent = `$${rentalCost}`;
    document.getElementById('summaryDeposit').textContent = `$${deposit}`;
    document.getElementById('summaryTotal').textContent = `$${total}`;
}

function processRentalBooking(item, form) {
    const formData = new FormData(form);
    
    // Simulate booking process
    showToast('Processing your rental booking...', 'info');
    
    setTimeout(() => {
        const bookingData = {
            item: item,
            duration: formData.get('rentalDuration'),
            startDate: formData.get('startDate'),
            endDate: formData.get('endDate'),
            renterName: formData.get('renterName'),
            renterEmail: formData.get('renterEmail'),
            renterPhone: formData.get('renterPhone'),
            deliveryAddress: formData.get('deliveryAddress'),
            bookingDate: new Date().toISOString()
        };
        
        // Store booking in localStorage (mock backend)
        const bookings = JSON.parse(localStorage.getItem('rentalBookings') || '[]');
        bookings.push(bookingData);
        localStorage.setItem('rentalBookings', JSON.stringify(bookings));
        
        showToast('Rental booking confirmed! You will receive a confirmation email shortly.', 'success');
        closeModal();
    }, 2000);
}

function viewRentalDetails(itemId) {
    const item = rentalItems.find(i => i.id === itemId);
    if (!item) return;
    
    const modalContent = `
        <div class="rental-details-modal">
            <h2>${item.title}</h2>
            <img src="${item.image}" alt="${item.title}" class="details-image">
            
            <div class="details-content">
                <p class="item-description">${item.description}</p>
                
                <div class="item-specifications">
                    <h3>Specifications</h3>
                    <div class="spec-grid">
                        <div class="spec-item">
                            <span class="spec-label">Condition:</span>
                            <span class="spec-value">${item.condition}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Category:</span>
                            <span class="spec-value">${item.category}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Rating:</span>
                            <span class="spec-value">${item.rating}/5 stars</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Availability:</span>
                            <span class="spec-value">${item.available ? 'Available' : 'Currently rented'}</span>
                        </div>
                    </div>
                </div>
                
                <div class="pricing-details">
                    <h3>Pricing</h3>
                    <div class="pricing-grid">
                        <div class="price-tier">
                            <div class="tier-name">Daily Rate</div>
                            <div class="tier-price">$${item.dailyRate}</div>
                            <div class="tier-description">Perfect for short-term needs</div>
                        </div>
                        <div class="price-tier recommended">
                            <div class="tier-badge">Most Popular</div>
                            <div class="tier-name">Weekly Rate</div>
                            <div class="tier-price">$${item.weeklyRate}</div>
                            <div class="tier-description">Best value for projects</div>
                        </div>
                        <div class="price-tier">
                            <div class="tier-name">Monthly Rate</div>
                            <div class="tier-price">$${item.monthlyRate}</div>
                            <div class="tier-description">Long-term solutions</div>
                        </div>
                    </div>
                </div>
                
                <div class="environmental-impact">
                    <h3>Environmental Impact</h3>
                    <p><i class="fas fa-leaf"></i> ${item.impact}</p>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="rentNow(${item.id}); closeModal();">
                        <i class="fas fa-calendar-check"></i>
                        Rent This Item
                    </button>
                    <button class="btn btn-outline" onclick="closeModal()">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    showModal(modalContent);
}

// Navigation functions for offers
function viewAllRentals() {
    showToast('Redirecting to full rental catalog...', 'info');
    // In a real application, this would navigate to a full catalog page
}

function applyStudentDiscount() {
    const modalContent = `
        <div class="student-verification-modal">
            <h2>Student Verification</h2>
            <p>Get 30% off your first rental with valid student identification!</p>
            
            <form id="studentVerificationForm">
                <div class="form-group">
                    <label for="studentName">Full Name</label>
                    <input type="text" id="studentName" name="studentName" required>
                </div>
                
                <div class="form-group">
                    <label for="studentEmail">Student Email (.edu address)</label>
                    <input type="email" id="studentEmail" name="studentEmail" required>
                </div>
                
                <div class="form-group">
                    <label for="schoolName">School/University Name</label>
                    <input type="text" id="schoolName" name="schoolName" required>
                </div>
                
                <div class="form-group">
                    <label for="studentId">Student ID Number</label>
                    <input type="text" id="studentId" name="studentId" required>
                </div>
                
                <div class="form-group">
                    <label for="graduationYear">Expected Graduation Year</label>
                    <select id="graduationYear" name="graduationYear" required>
                        <option value="">Select year...</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                    </select>
                </div>
                
                <button type="submit" class="btn btn-primary">
                    <i class="fas fa-graduation-cap"></i>
                    Verify Student Status
                </button>
            </form>
        </div>
    `;
    
    showModal(modalContent);
    
    setTimeout(() => {
        document.getElementById('studentVerificationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            showToast('Student verification submitted! You will receive a discount code via email within 24 hours.', 'success');
            closeModal();
        });
    }, 100);
}

function browseLongTermRentals() {
    const longTermItems = rentalItems.filter(item => item.monthlyRate < item.weeklyRate * 4);
    showCategoryModal('Long-term Rentals', longTermItems);
}

function browseEventPackages() {
    const eventItems = rentalItems.filter(item => item.category === 'events');
    showCategoryModal('Event Packages', eventItems);
}

function browseBulkRentals() {
    showToast('Bulk rental options available! Contact us for custom packages.', 'info');
}

// Fixed FAQ Functions
function toggleFAQ(faqId) {
    const faqItem = document.querySelector(`[data-faq="${faqId}"]`);
    if (!faqItem) return;
    
    const answer = faqItem.querySelector('.faq-answer');
    const icon = faqItem.querySelector('.faq-question i');
    
    // Close other FAQs first
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            const otherAnswer = item.querySelector('.faq-answer');
            const otherIcon = item.querySelector('.faq-question i');
            otherAnswer.style.display = 'none';
            otherIcon.classList.remove('fa-chevron-up');
            otherIcon.classList.add('fa-chevron-down');
        }
    });
    
    // Toggle current FAQ
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        answer.style.display = 'block';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}

// Initialize FAQ section when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Hide all FAQ answers by default
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });
});


// Modal functions for footer links
function showModal(content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    if (typeof content === 'string') {
        modalBody.innerHTML = content;
    } else {
        modalBody.innerHTML = getModalContent(content);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function getModalContent(type) {
    switch (type) {
        case 'rental-terms':
            return `
                <h2>Rental Terms & Conditions</h2>
                <h3>Rental Agreement</h3>
                <ul>
                    <li>All rentals require a valid credit card and government-issued ID</li>
                    <li>Security deposit ranges from 20-30% of item's retail value</li>
                    <li>Minimum rental period varies by item (typically 1-7 days)</li>
                    <li>Late returns incur a $5/day fee after grace period</li>
                </ul>
                <h3>Responsibility & Liability</h3>
                <ul>
                    <li>Renter is responsible for item care during rental period</li>
                    <li>Normal wear and tear is expected and included</li>
                    <li>Damage beyond normal use will be charged to renter</li>
                    <li>Lost or stolen items charged at full replacement cost</li>
                </ul>
            `;
        case 'damage-policy':
            return `
                <h2>Damage Policy</h2>
                <h3>What's Covered</h3>
                <ul>
                    <li>Normal wear and tear from intended use</li>
                    <li>Minor scuffs and scratches</li>
                    <li>Basic cleaning requirements</li>
                </ul>
                <h3>What's Not Covered</h3>
                <ul>
                    <li>Damage from misuse or negligence</li>
                    <li>Stains that require professional cleaning</li>
                    <li>Structural damage or breakage</li>
                    <li>Modifications or alterations</li>
                </ul>
                <h3>Damage Fees</h3>
                <ul>
                    <li>Minor damage: $10-$50 depending on item</li>
                    <li>Major damage: Up to 50% of retail value</li>
                    <li>Total loss: 100% of current retail value</li>
                </ul>
            `;
        case 'delivery-info':
            return `
                <h2>Delivery Information</h2>
                <h3>Delivery Areas</h3>
                <ul>
                    <li>Free delivery within 25 miles of our location</li>
                    <li>Extended delivery available for additional fee</li>
                    <li>Same-day delivery available for urgent needs</li>
                </ul>
                <h3>Delivery Schedule</h3>
                <ul>
                    <li>Standard delivery: 24-48 hours from booking</li>
                    <li>Morning slots: 8AM-12PM</li>
                    <li>Afternoon slots: 1PM-5PM</li>
                    <li>Evening slots: 5PM-8PM (limited availability)</li>
                </ul>
                <h3>Pickup Service</h3>
                <ul>
                    <li>Scheduled pickup at end of rental period</li>
                    <li>Flexible pickup windows available</li>
                    <li>Early return pickup can be arranged</li>
                </ul>
            `;
        case 'contact':
            return `
                <h2>Contact Support</h2>
                <div class="contact-options">
                    <div class="contact-method">
                        <i class="fas fa-phone"></i>
                        <h3>Phone</h3>
                        <p>(555) 123-RENT<br>Mon-Fri 8AM-8PM<br>Sat-Sun 9AM-6PM</p>
                    </div>
                    <div class="contact-method">
                        <i class="fas fa-envelope"></i>
                        <h3>Email</h3>
                        <p>rentals@ecomarket.com<br>Response within 4 hours<br>24/7 emergency support</p>
                    </div>
                    <div class="contact-method">
                        <i class="fas fa-comment"></i>
                        <h3>Live Chat</h3>
                        <p>Available on website<br>Instant responses<br>Mon-Fri 9AM-6PM</p>
                    </div>
                </div>
            `;
        default:
            return content;
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Utility functions
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-primary);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        border-left: 4px solid var(--accent-primary);
        z-index: 2001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    toast.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Reuse functions from main script.js
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            const icon = this.querySelector('i');
            icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.querySelector('i').className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
