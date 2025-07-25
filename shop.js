// Shop Page JavaScript

// Extended product data for the shop
const shopProducts = [
    {
        id: 1,
        title: "Vintage Wooden Chair",
        description: "Beautifully restored vintage wooden chair with unique character and sustainable materials.",
        price: 89.99,
        condition: "Excellent",
        category: "furniture",
        material: "wood",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Sarah Johnson",
        dateAdded: "2024-01-15",
        featured: true,
        rating: 4.8,
        impact: "Saved from landfill • Reduced CO2 by 15kg • Supports local artisan"
    },
    {
        id: 2,
        title: "Upcycled Bookshelf",
        description: "Creative bookshelf made from reclaimed wood and industrial materials.",
        price: 149.99,
        condition: "Like New",
        category: "furniture",
        material: "wood",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Mike Chen",
        dateAdded: "2024-01-20",
        featured: false,
        rating: 4.6,
        impact: "Reclaimed materials • Prevented 25kg waste • Local craftsman"
    },
    {
        id: 3,
        title: "Handmade Ceramic Vase",
        description: "Artisan-crafted ceramic vase perfect for sustainable home decoration.",
        price: 34.99,
        condition: "New",
        category: "home-decor",
        material: "ceramic",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Emily Rodriguez",
        dateAdded: "2024-01-25",
        featured: true,
        rating: 4.9,
        impact: "Handcrafted • No industrial production • Supports local artist"
    },
    {
        id: 4,
        title: "Refurbished Laptop",
        description: "High-quality refurbished laptop with extended warranty and reduced environmental impact.",
        price: 399.99,
        condition: "Very Good",
        category: "electronics",
        material: "metal",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Tech Renewals Inc.",
        dateAdded: "2024-01-30",
        featured: false,
        rating: 4.7,
        impact: "Refurbished • Extended lifespan • Reduced e-waste by 2.5kg"
    },
    {
        id: 5,
        title: "Organic Cotton Tote Bag",
        description: "Eco-friendly tote bag made from 100% organic cotton with beautiful hand-printed design.",
        price: 24.99,
        condition: "New",
        category: "bags",
        material: "fabric",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Green Threads Co.",
        dateAdded: "2024-02-05",
        featured: true,
        rating: 4.5,
        impact: "Organic materials • Plastic-free • Supports sustainable farming"
    },
    {
        id: 6,
        title: "Reclaimed Wood Coffee Table",
        description: "Stunning coffee table crafted from reclaimed barn wood with industrial metal legs.",
        price: 199.99,
        condition: "Excellent",
        category: "furniture",
        material: "wood",
        image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Rustic Creations",
        dateAdded: "2024-02-10",
        featured: false,
        rating: 4.8,
        impact: "Reclaimed wood • Prevented tree cutting • Local artisan"
    },
    {
        id: 7,
        title: "Recycled Plastic Backpack",
        description: "Durable backpack made from recycled plastic bottles with modern design.",
        price: 65.99,
        condition: "New",
        category: "bags",
        material: "plastic",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "EcoGear",
        dateAdded: "2024-02-12",
        featured: false,
        rating: 4.4,
        impact: "25 plastic bottles recycled • Ocean plastic cleanup • Waterproof"
    },
    {
        id: 8,
        title: "Vintage Leather Jacket",
        description: "Classic vintage leather jacket in excellent condition with timeless style.",
        price: 89.99,
        condition: "Good",
        category: "clothing",
        material: "leather",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Vintage Finds",
        dateAdded: "2024-02-15",
        featured: false,
        rating: 4.6,
        impact: "Vintage item • Extended fashion cycle • Reduced fast fashion"
    },
    {
        id: 9,
        title: "Bamboo Smartphone Case",
        description: "Eco-friendly smartphone case made from sustainable bamboo with natural finish.",
        price: 29.99,
        condition: "New",
        category: "electronics",
        material: "bamboo",
        image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Bamboo Tech",
        dateAdded: "2024-02-18",
        featured: true,
        rating: 4.3,
        impact: "Bamboo growth • Biodegradable • Carbon neutral"
    },
    {
        id: 10,
        title: "Upcycled Glass Pendant Light",
        description: "Beautiful pendant light made from upcycled wine bottles with LED bulb.",
        price: 79.99,
        condition: "New",
        category: "home-decor",
        material: "glass",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Glass Artists Co.",
        dateAdded: "2024-02-20",
        featured: false,
        rating: 4.7,
        impact: "Upcycled bottles • Energy-efficient LED • Artistic reuse"
    },
    {
        id: 11,
        title: "Sustainable Yoga Mat",
        description: "Eco-friendly yoga mat made from natural rubber and cork with superior grip.",
        price: 89.99,
        condition: "New",
        category: "fitness",
        material: "rubber",
        image: "https://images.unsplash.com/photo-1506629905498-4d2f2e73d3eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Zen Fitness",
        dateAdded: "2024-02-22",
        featured: false,
        rating: 4.8,
        impact: "Natural materials • Biodegradable • Sustainable harvesting"
    },
    {
        id: 12,
        title: "Recycled Steel Water Bottle",
        description: "Insulated water bottle made from recycled steel with 24-hour temperature retention.",
        price: 39.99,
        condition: "New",
        category: "accessories",
        material: "metal",
        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        contributor: "Hydro Eco",
        dateAdded: "2024-02-25",
        featured: true,
        rating: 4.6,
        impact: "Recycled steel • Replaces 1000 plastic bottles • BPA-free"
    }
];

// Shop state management
let currentProducts = [...shopProducts];
let displayedProducts = [];
let productsPerPage = 9;
let currentPage = 0;
let currentSort = 'newest';
let currentView = 'grid';

// Filter state
let activeFilters = {
    categories: [],
    materials: [],
    minPrice: 0,
    maxPrice: 1000,
    sortBy: 'newest'
};

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('shop.html')) {
        initializeShop();
        setupShopEventListeners();
        loadFeaturedProducts();
        loadProducts();
        updateCartCount();
    }
});

function initializeShop() {
    // Initialize price slider
    const priceSlider = document.getElementById('priceSlider');
    const sliderValue = document.getElementById('sliderValue');
    
    if (priceSlider) {
        priceSlider.addEventListener('input', function() {
            sliderValue.textContent = this.value;
            activeFilters.maxPrice = parseInt(this.value);
        });
    }
    
    // Initialize sort dropdown
    const sortSelect = document.getElementById('sortBy');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            activeFilters.sortBy = this.value;
            currentSort = this.value;
            applyFilters();
        });
    }
    
    // Update results count
    updateResultsCount();
}

function setupShopEventListeners() {
    // Category filters
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            if (this.checked) {
                activeFilters.categories.push(this.value);
            } else {
                activeFilters.categories = activeFilters.categories.filter(cat => cat !== this.value);
            }
        });
    });
    
    // Material filters
    const materialFilters = document.querySelectorAll('.material-filter');
    materialFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            if (this.checked) {
                activeFilters.materials.push(this.value);
            } else {
                activeFilters.materials = activeFilters.materials.filter(mat => mat !== this.value);
            }
        });
    });
    
    // Category All toggle
    const categoryAll = document.getElementById('categoryAll');
    if (categoryAll) {
        categoryAll.addEventListener('change', function() {
            const categoryFilters = document.querySelectorAll('.category-filter');
            categoryFilters.forEach(filter => {
                filter.checked = this.checked;
            });
            
            if (this.checked) {
                activeFilters.categories = [];
            }
        });
    }
    
    // Price inputs
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    
    if (minPriceInput) {
        minPriceInput.addEventListener('input', function() {
            activeFilters.minPrice = parseInt(this.value) || 0;
        });
    }
    
    if (maxPriceInput) {
        maxPriceInput.addEventListener('input', function() {
            activeFilters.maxPrice = parseInt(this.value) || 1000;
        });
    }
    
    // Filter buttons
    const applyFiltersBtn = document.getElementById('applyFilters');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
    
    // View toggles
    const viewToggles = document.querySelectorAll('.view-toggle');
    viewToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            viewToggles.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentView = this.dataset.view;
            displayProducts();
        });
    });
    
    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreProducts');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }
}

function loadFeaturedProducts() {
    const featuredProducts = shopProducts.filter(product => product.featured);
    const featuredGrid = document.getElementById('featuredGrid');
    
    if (featuredGrid) {
        featuredGrid.innerHTML = featuredProducts.map(product => `
            <div class="product-card featured-product">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <button class="quick-view-btn" onclick="openQuickView(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-meta">
                        <span class="product-price">$${product.price}</span>
                        <span class="product-condition">${product.condition}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i>
                            Add to Cart
                        </button>
                        <button class="btn btn-rent btn-small" onclick="rentProduct(${product.id})">
                            <i class="fas fa-clock"></i>
                            Rent Now
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function loadProducts() {
    displayedProducts = currentProducts.slice(0, productsPerPage);
    displayProducts();
}

function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (productsGrid) {
        const gridClass = currentView === 'list' ? 'products-list' : 'products-grid';
        productsGrid.className = gridClass;
        
        productsGrid.innerHTML = displayedProducts.map(product => `
            <div class="product-card ${currentView === 'list' ? 'list-view' : ''}">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <button class="quick-view-btn" onclick="openQuickView(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-meta">
                        <span class="product-price">$${product.price}</span>
                        <span class="product-condition">${product.condition}</span>
                    </div>
                    <div class="product-rating">
                        ${generateStars(product.rating)}
                        <span class="rating-value">${product.rating}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i>
                            Add to Cart
                        </button>
                        <button class="btn btn-rent btn-small" onclick="rentProduct(${product.id})">
                            <i class="fas fa-clock"></i>
                            Rent Now
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    updateResultsCount();
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

function applyFilters() {
    let filteredProducts = [...shopProducts];
    
    // Apply category filter
    if (activeFilters.categories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            activeFilters.categories.includes(product.category)
        );
    }
    
    // Apply material filter
    if (activeFilters.materials.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            activeFilters.materials.includes(product.material)
        );
    }
    
    // Apply price filter
    filteredProducts = filteredProducts.filter(product => 
        product.price >= activeFilters.minPrice && product.price <= activeFilters.maxPrice
    );
    
    // Apply sorting
    filteredProducts = sortProducts(filteredProducts, activeFilters.sortBy);
    
    currentProducts = filteredProducts;
    currentPage = 0;
    loadProducts();
    
    showToast('Filters applied successfully!', 'success');
}

function sortProducts(products, sortBy) {
    switch (sortBy) {
        case 'newest':
            return products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        case 'popular':
            return products.sort((a, b) => b.rating - a.rating);
        case 'price-low':
            return products.sort((a, b) => a.price - b.price);
        case 'price-high':
            return products.sort((a, b) => b.price - a.price);
        case 'rating':
            return products.sort((a, b) => b.rating - a.rating);
        default:
            return products;
    }
}

function clearAllFilters() {
    // Reset filter state
    activeFilters = {
        categories: [],
        materials: [],
        minPrice: 0,
        maxPrice: 1000,
        sortBy: 'newest'
    };
    
    // Reset UI
    document.querySelectorAll('.category-filter, .material-filter').forEach(filter => {
        filter.checked = false;
    });
    
    document.getElementById('categoryAll').checked = true;
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('priceSlider').value = 500;
    document.getElementById('sliderValue').textContent = '500';
    document.getElementById('sortBy').value = 'newest';
    
    // Reset products
    currentProducts = [...shopProducts];
    currentPage = 0;
    loadProducts();
    
    showToast('All filters cleared!', 'success');
}

function loadMoreProducts() {
    const nextPageProducts = currentProducts.slice(
        displayedProducts.length,
        displayedProducts.length + productsPerPage
    );
    
    displayedProducts = [...displayedProducts, ...nextPageProducts];
    displayProducts();
    
    // Hide load more button if no more products
    if (displayedProducts.length >= currentProducts.length) {
        document.getElementById('loadMoreProducts').style.display = 'none';
    }
}

function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = currentProducts.length;
    }
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('loadMoreProducts');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedProducts.length < currentProducts.length ? 'block' : 'none';
    }
}

function openQuickView(productId) {
    const product = shopProducts.find(p => p.id === productId);
    if (!product) return;
    
    const quickViewBody = document.getElementById('quickViewBody');
    
    quickViewBody.innerHTML = `
        <div class="quick-view-content">
            <div class="quick-view-image-container">
                <img src="${product.image}" alt="${product.title}" class="quick-view-image">
            </div>
            <div class="quick-view-info">
                <h2>${product.title}</h2>
                <div class="quick-view-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-value">${product.rating}</span>
                </div>
                <div class="quick-view-price">$${product.price}</div>
                <p class="quick-view-description">${product.description}</p>
                
                <div class="impact-info">
                    <div class="impact-title">Environmental Impact</div>
                    <div class="impact-description">${product.impact}</div>
                </div>
                
                <div class="quick-view-details">
                    <div class="quick-view-detail">
                        <span>Condition:</span>
                        <span>${product.condition}</span>
                    </div>
                    <div class="quick-view-detail">
                        <span>Category:</span>
                        <span>${product.category}</span>
                    </div>
                    <div class="quick-view-detail">
                        <span>Material:</span>
                        <span>${product.material}</span>
                    </div>
                    <div class="quick-view-detail">
                        <span>Contributor:</span>
                        <span>${product.contributor}</span>
                    </div>
                </div>
                
                <div class="quick-view-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeQuickView();">
                        <i class="fas fa-cart-plus"></i>
                        Add to Cart
                    </button>
                    <button class="btn btn-rent" onclick="rentProduct(${product.id}); closeQuickView();">
                        <i class="fas fa-clock"></i>
                        Rent Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('quickViewModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    document.getElementById('quickViewModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const product = shopProducts.find(p => p.id === productId);
    
    if (!cart.find(item => item.id === productId)) {
        cart.push({
            id: productId,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        showToast(`${product.title} added to cart!`, 'success');
        updateCartCount();
    } else {
        showToast(`${product.title} is already in cart!`, 'info');
    }
}

function rentProduct(productId) {
    const product = shopProducts.find(p => p.id === productId);
    const rentalPrice = (product.price * 0.15).toFixed(2); // 15% of purchase price for rental
    
    showToast(`${product.title} available for rent at $${rentalPrice}/week`, 'info');
    
    // Here you would typically open a rental modal or redirect to rental page
    setTimeout(() => {
        showToast('Rental feature coming soon!', 'info');
    }, 1500);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Modal functions for footer links
function showModal(type) {
    const modal = document.getElementById('modal') || document.createElement('div');
    modal.id = 'modal';
    modal.className = 'modal';
    
    let content = '';
    switch (type) {
        case 'faq':
            content = `
                <h2>Frequently Asked Questions</h2>
                <div class="faq-item">
                    <h3>How do I return an item?</h3>
                    <p>You can return items within 7 days of purchase. Contact our support team for return instructions.</p>
                </div>
                <div class="faq-item">
                    <h3>Are the products guaranteed authentic?</h3>
                    <p>Yes, all products are verified by our team and contributors before listing.</p>
                </div>
                <div class="faq-item">
                    <h3>How does the rental system work?</h3>
                    <p>You can rent items for a weekly fee. The rental period can be extended based on availability.</p>
                </div>
            `;
            break;
        case 'shipping':
            content = `
                <h2>Shipping & Returns</h2>
                <h3>Shipping Information</h3>
                <ul>
                    <li>Free shipping on orders over $50</li>
                    <li>Standard shipping: 3-5 business days</li>
                    <li>Express shipping: 1-2 business days</li>
                    <li>Local pickup available in select areas</li>
                </ul>
                <h3>Return Policy</h3>
                <ul>
                    <li>7-day return window from purchase date</li>
                    <li>Items must be in original condition</li>
                    <li>Return shipping costs covered by seller</li>
                    <li>Refunds processed within 5-7 business days</li>
                </ul>
            `;
            break;
        default:
            content = `<h2>Information</h2><p>Content coming soon...</p>`;
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal()">&times;</span>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Toast notification function (borrowed from main script)
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
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
