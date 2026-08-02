/* ============================================
   Noor Daudzai Computer Shop — script.js
   Shared across all pages (cart, products, forms)
   ============================================ */

/* ----- Product data ----- */
const PRODUCTS = [
  { id:1, name:'Dell Latitude E7470 14" Business Laptop - Intel Core i5-6300U, 8GB RAM, 256GB SSD', category:'laptops', brand:'Dell', price:349, original_price:499, description:'Professional-grade business laptop with powerful Intel Core i5 processor.', image_url:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80', stock_quantity:12, is_featured:true, is_deal:true, rating:4.5, reviews_count:28, condition:'refurbished' },
  { id:2, name:'HP EliteBook 840 G5 14" Ultrabook - Intel Core i7-8550U, 16GB RAM, 512GB SSD', category:'laptops', brand:'HP', price:549, original_price:799, description:'Premium ultrabook for professionals with all-day battery life.', image_url:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80', stock_quantity:8, is_featured:true, is_deal:true, rating:4.8, reviews_count:45, condition:'refurbished' },
  { id:3, name:'Lenovo ThinkPad T480 14" - Intel Core i5-8350U, 8GB RAM, 256GB SSD', category:'laptops', brand:'Lenovo', price:399, original_price:549, description:'The legendary ThinkPad reliability with modern specs.', image_url:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80', stock_quantity:15, is_featured:true, is_deal:false, rating:4.7, reviews_count:62, condition:'refurbished' },
  { id:4, name:'MacBook Air 13" (2017) - Intel Core i5, 8GB RAM, 128GB SSD', category:'laptops', brand:'Apple', price:449, original_price:599, description:'Thin and light MacBook Air with all-day battery.', image_url:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80', stock_quantity:6, is_featured:true, is_deal:true, rating:4.6, reviews_count:89, condition:'refurbished' },
  { id:5, name:'Dell OptiPlex 7050 Desktop - Intel Core i7-7700, 16GB RAM, 512GB SSD', category:'desktops', brand:'Dell', price:399, original_price:599, description:'Powerful business desktop with 7th Gen Intel Core i7.', image_url:'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&q=80', stock_quantity:10, is_featured:true, is_deal:true, rating:4.4, reviews_count:34, condition:'refurbished' },
  { id:6, name:'HP ProDesk 600 G3 Mini PC - Intel Core i5-6500T, 8GB RAM, 256GB SSD', category:'desktops', brand:'HP', price:249, original_price:349, description:'Ultra-compact mini PC that fits anywhere.', image_url:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80', stock_quantity:20, is_featured:false, is_deal:false, rating:4.3, reviews_count:22, condition:'refurbished' },
  { id:7, name:'Custom Gaming PC - AMD Ryzen 5 3600, RTX 2060, 16GB RAM, 512GB NVMe', category:'desktops', brand:'Custom Build', price:699, original_price:899, description:'Custom-built gaming PC ready for modern games.', image_url:'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=500&q=80', stock_quantity:5, is_featured:true, is_deal:true, rating:4.9, reviews_count:18, condition:'new' },
  { id:8, name:'NVIDIA GeForce GTX 1660 Super 6GB Graphics Card', category:'graphics_cards', brand:'NVIDIA', price:179, original_price:249, description:'Excellent 1080p gaming graphics card.', image_url:'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&q=80', stock_quantity:8, is_featured:true, is_deal:true, rating:4.6, reviews_count:56, condition:'refurbished' },
  { id:9, name:'AMD Radeon RX 580 8GB Graphics Card', category:'graphics_cards', brand:'AMD', price:129, original_price:179, description:'Popular 1080p gaming GPU.', image_url:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80', stock_quantity:12, is_featured:false, is_deal:false, rating:4.3, reviews_count:78, condition:'refurbished' },
  { id:10, name:'Intel Core i5-10400F Processor (6 Cores, 2.9GHz)', category:'processors', brand:'Intel', price:119, original_price:149, description:'6-core, 12-thread processor perfect for gaming and productivity.', image_url:'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500&q=80', stock_quantity:25, is_featured:false, is_deal:false, rating:4.7, reviews_count:92, condition:'new' },
  { id:11, name:'Samsung 24" Full HD Monitor - 75Hz IPS Panel', category:'monitors', brand:'Samsung', price:129, original_price:179, description:'Crisp 24-inch Full HD display with vibrant IPS panel.', image_url:'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80', stock_quantity:18, is_featured:true, is_deal:false, rating:4.4, reviews_count:67, condition:'refurbished' },
  { id:12, name:'Dell 27" QHD IPS Monitor - 60Hz, UltraSharp', category:'monitors', brand:'Dell', price:249, original_price:349, description:'Professional 27-inch QHD monitor with excellent color accuracy.', image_url:'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500&q=80', stock_quantity:7, is_featured:true, is_deal:true, rating:4.8, reviews_count:43, condition:'refurbished' },
  { id:13, name:'Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200 RAM', category:'memory', brand:'Corsair', price:45, original_price:59, description:'High-performance DDR4 memory kit for gaming and productivity.', image_url:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=80', stock_quantity:35, is_featured:false, is_deal:false, rating:4.8, reviews_count:156, condition:'new' },
  { id:14, name:'Samsung 970 EVO Plus 500GB NVMe SSD', category:'storage', brand:'Samsung', price:69, original_price:89, description:'Ultra-fast NVMe SSD with exceptional read/write speeds.', image_url:'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80', stock_quantity:42, is_featured:false, is_deal:false, rating:4.9, reviews_count:234, condition:'new' },
  { id:15, name:'Seagate Barracuda 2TB HDD - 7200RPM', category:'storage', brand:'Seagate', price:49, original_price:65, description:'Reliable 2TB hard drive for mass storage.', image_url:'https://images.unsplash.com/photo-1601737487795-dab272f52420?w=500&q=80', stock_quantity:28, is_featured:false, is_deal:false, rating:4.5, reviews_count:189, condition:'new' },
  { id:16, name:'Logitech MK270 Wireless Keyboard & Mouse Combo', category:'peripherals', brand:'Logitech', price:25, original_price:35, description:'Reliable wireless keyboard and mouse combo for everyday use.', image_url:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80', stock_quantity:50, is_featured:false, is_deal:false, rating:4.4, reviews_count:312, condition:'new' },
  { id:17, name:'TP-Link Archer T4E WiFi Adapter - AC1200 Dual Band', category:'networking', brand:'TP-Link', price:29, original_price:39, description:'High-speed dual-band WiFi adapter for desktop PCs.', image_url:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80', stock_quantity:22, is_featured:false, is_deal:false, rating:4.5, reviews_count:87, condition:'new' },
  { id:18, name:'Universal Laptop Charger 65W - Multi-tip', category:'accessories', brand:'Generic', price:19, original_price:29, description:'Universal laptop charger with multiple tips.', image_url:'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80', stock_quantity:75, is_featured:false, is_deal:false, rating:4.2, reviews_count:145, condition:'new' },
];

const CATEGORIES = [
  { id:'laptops', name:'Laptops', icon:'💻', grad:'linear-gradient(135deg,#3b82f6,#6366f1)', img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80', count:4 },
  { id:'desktops', name:'Desktops', icon:'🖥️', grad:'linear-gradient(135deg,#a855f7,#ec4899)', img:'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=400&q=80', count:3 },
  { id:'graphics_cards', name:'Graphics Cards', icon:'🎮', grad:'linear-gradient(135deg,#22c55e,#10b981)', img:'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&q=80', count:2 },
  { id:'processors', name:'Processors', icon:'⚙️', grad:'linear-gradient(135deg,#f97316,#ef4444)', img:'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&q=80', count:1 },
  { id:'memory', name:'Memory (RAM)', icon:'🧠', grad:'linear-gradient(135deg,#06b6d4,#3b82f6)', img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&q=80', count:1 },
  { id:'storage', name:'Storage', icon:'💾', grad:'linear-gradient(135deg,#14b8a6,#10b981)', img:'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80', count:2 },
  { id:'monitors', name:'Monitors', icon:'🖥️', grad:'linear-gradient(135deg,#f43f5e,#ec4899)', img:'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80', count:2 },
  { id:'peripherals', name:'Peripherals', icon:'⌨️', grad:'linear-gradient(135deg,#f59e0b,#f97316)', img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', count:1 },
];

const CONDITIONS = [
  { id:'new', name:'New' },
  { id:'refurbished', name:'Refurbished' },
  { id:'used', name:'Used' },
];

/* ----- Helpers ----- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const fmt = (n) => '$' + (n || 0).toLocaleString();
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}
function stars(rating) {
  return '★★★★★'.slice(0, Math.round(rating || 0)) + '☆☆☆☆☆'.slice(0, 5 - Math.round(rating || 0));
}

/* ----- Cart (localStorage) ----- */
function getCart() {
  try { return JSON.parse(localStorage.getItem('nd_cart') || '[]'); }
  catch (e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem('nd_cart', JSON.stringify(cart));
  updateCartCount();
}
function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (existing) { existing.qty++; }
  else { cart.push({ id: productId, qty: 1 }); }
  saveCart(cart);
  renderCart();
  openCart();
  // visual feedback on button
  const btn = event && event.currentTarget;
  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = '✓ Added!';
    setTimeout(() => { btn.classList.remove('added'); btn.innerHTML = '🛒 Add to Cart'; }, 1500);
  }
}
function removeFromCart(productId) {
  let cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  renderCart();
}
function changeQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  saveCart(cart);
  renderCart();
}
function updateCartCount() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  $$('.cart-count').forEach(el => el.textContent = count);
}
function calcCartTotal() {
  return getCart().reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}
function openCart() {
  $('#cartOverlay') && $('#cartOverlay').classList.add('open');
  $('#cartDrawer') && $('#cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $('#cartOverlay') && $('#cartOverlay').classList.remove('open');
  $('#cartDrawer') && $('#cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}
function renderCart() {
  const body = $('#cartItems');
  const foot = $('#cartFoot');
  if (!body || !foot) return;
  const cart = getCart();
  if (cart.length === 0) {
    body.innerHTML = '<div class="cart-empty"><div class="cart-empty-ico">🛒</div><h3>Your cart is empty</h3><p>Start shopping to add items!</p></div>';
    foot.innerHTML = '';
    return;
  }
  body.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${p.image_url}" alt="${p.name}" /></div>
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <div class="cart-item-price">${fmt(p.price)}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})" title="Remove">🗑️</button>
      </div>`;
  }).join('');
  const subtotal = calcCartTotal();
  const shipping = subtotal > 500 ? 0 : 25;
  foot.innerHTML = `
    <div class="cart-line"><span>Subtotal</span><strong>${fmt(subtotal)}</strong></div>
    <div class="cart-line"><span>Shipping</span><strong>${shipping === 0 ? 'FREE' : fmt(shipping)}</strong></div>
    ${shipping > 0 ? `<div class="cart-line" style="color:var(--teal);font-size:.8rem">Add ${fmt(500 - subtotal)} more for free shipping!</div>` : ''}
    <div class="cart-line total"><span>Total</span><strong>${fmt(subtotal + shipping)}</strong></div>
    <button class="cart-checkout" onclick="checkout()">Proceed to Checkout</button>`;
}
function checkout() {
  alert('Thank you for your order! In the full app this would process payment. For now, your cart has been cleared. 🎉');
  localStorage.removeItem('nd_cart');
  updateCartCount();
  renderCart();
  closeCart();
}

/* ----- Mobile menu ----- */
function toggleMenu() {
  $('#nav').classList.toggle('open');
}

/* ----- Product card HTML factory ----- */
function productCardHTML(p) {
  const discount = p.original_price ? Math.round(((p.original_price - p.price) / p.original_price) * 100) : 0;
  const condClass = p.condition === 'new' ? 'cond-new' : p.condition === 'used' ? 'cond-used' : 'cond-refurbished';
  return `
    <div class="product-card">
      <div class="pc-img">
        <img src="${p.image_url}" alt="${p.name}" loading="lazy" />
        <div class="pc-badge">
          ${discount > 0 ? `<span class="pc-tag">-${discount}%</span>` : ''}
          ${p.is_deal ? `<span class="pc-tag deal">DEAL</span>` : ''}
        </div>
        <span class="pc-cond ${condClass}">${p.condition}</span>
      </div>
      <div class="pc-body">
        <div class="pc-brand">${p.brand}</div>
        <div class="pc-name">${p.name}</div>
        ${p.rating ? `<div class="pc-rating"><span class="stars">${stars(p.rating)}</span> (${p.reviews_count})</div>` : ''}
        <div class="pc-price">
          <span class="now">${fmt(p.price)}</span>
          ${p.original_price && p.original_price > p.price ? `<span class="was">${fmt(p.original_price)}</span>` : ''}
        </div>
        <div class="pc-stock ${p.stock_quantity > 0 ? 'in-stock' : 'out-stock'}">
          ${p.stock_quantity > 0 ? `In Stock (${p.stock_quantity})` : 'Out of Stock'}
        </div>
        <button class="pc-add" onclick="addToCart(${p.id})" ${p.stock_quantity === 0 ? 'disabled' : ''}>🛒 Add to Cart</button>
      </div>
    </div>`;
}

/* ----- Category card HTML ----- */
function categoryCardHTML(c) {
  return `
    <a href="products.html?category=${c.id}" class="cat-card" style="--grad:${c.grad}">
      <img src="${c.img}" alt="${c.name}" loading="lazy" />
      <div class="cat-overlay">
        <div class="cat-ico">${c.icon}</div>
        <h3>${c.name}</h3>
        <span>${c.count}+ Products</span>
      </div>
    </a>`;
}

/* ----- Home page init ----- */
function initHome() {
  const catGrid = $('#categoryGrid');
  if (catGrid) catGrid.innerHTML = CATEGORIES.map(categoryCardHTML).join('');

  const dealsGrid = $('#dealsGrid');
  if (dealsGrid) {
    const deals = PRODUCTS.filter(p => p.is_deal).slice(0, 4);
    dealsGrid.innerHTML = deals.map(productCardHTML).join('');
  }

  const featuredGrid = $('#featuredGrid');
  if (featuredGrid) {
    const featured = PRODUCTS.filter(p => p.is_featured).slice(0, 8);
    featuredGrid.innerHTML = featured.map(productCardHTML).join('');
  }
}

/* ----- Products page ----- */
let filterState = {
  categories: [],
  conditions: [],
  priceMin: 0,
  priceMax: 5000,
  search: '',
};

function initProducts() {
  // Read URL params
  const cat = getParam('category');
  const search = getParam('search');
  const deals = getParam('deals') === 'true';
  if (cat) filterState.categories = [cat];
  if (search) filterState.search = search;

  // Title
  if (deals) {
    $('#pageTitle').textContent = '🔥 Hot Deals';
    $('#pageSubtitle').textContent = 'Limited time offers on our best products';
  } else if (cat) {
    const catObj = CATEGORIES.find(c => c.id === cat);
    if (catObj) $('#pageTitle').textContent = catObj.name;
  }

  // Search inputs
  if (search) {
    $('#searchInput') && ($('#searchInput').value = search);
    $('#searchInline') && ($('#searchInline').value = search);
    filterState.search = search;
  }

  // Build category filters
  const catFilters = $('#categoryFilters');
  if (catFilters) {
    catFilters.innerHTML = CATEGORIES.map(c => `
      <label class="filter-check">
        <input type="checkbox" value="${c.id}" ${filterState.categories.includes(c.id) ? 'checked' : ''} onchange="toggleCategory(this.value, this.checked)" />
        <span class="filter-ico">${c.icon}</span>
        <span>${c.name}</span>
      </label>`).join('');
  }

  // Build condition filters
  const condFilters = $('#conditionFilters');
  if (condFilters) {
    condFilters.innerHTML = CONDITIONS.map(c => `
      <label class="filter-check">
        <input type="checkbox" value="${c.id}" onchange="toggleCondition(this.value, this.checked)" />
        <span>${c.name}</span>
      </label>`).join('');
  }

  // Price sliders
  const priceMin = $('#priceMin');
  const priceMax = $('#priceMax');
  if (priceMin && priceMax) {
    priceMin.addEventListener('input', () => {
      filterState.priceMin = +priceMin.value;
      if (+priceMin.value > +priceMax.value) { priceMax.value = priceMin.value; filterState.priceMax = +priceMax.value; }
      $('#priceMinLabel').textContent = '$' + filterState.priceMin;
      renderProducts();
    });
    priceMax.addEventListener('input', () => {
      filterState.priceMax = +priceMax.value;
      if (+priceMax.value < +priceMin.value) { priceMin.value = priceMax.value; filterState.priceMin = +priceMin.value; }
      $('#priceMaxLabel').textContent = '$' + filterState.priceMax;
      renderProducts();
    });
  }

  // Inline search
  const searchInline = $('#searchInline');
  if (searchInline) {
    searchInline.addEventListener('input', () => {
      filterState.search = searchInline.value;
      renderProducts();
    });
  }

  // Filter toggle (mobile)
  const ft = $('#filterToggle');
  if (ft) ft.addEventListener('click', () => {
    $('#filters').classList.toggle('open');
  });

  // Deals only
  if (deals) window._dealsOnly = true;

  renderProducts();
}

function toggleCategory(id, checked) {
  if (checked) filterState.categories.push(id);
  else filterState.categories = filterState.categories.filter(c => c !== id);
  renderProducts();
}
function toggleCondition(id, checked) {
  if (checked) filterState.conditions.push(id);
  else filterState.conditions = filterState.conditions.filter(c => c !== id);
  renderProducts();
}
function doSearch(q) {
  window.location.href = 'products.html?search=' + encodeURIComponent(q);
}
function clearFilters() {
  filterState = { categories: [], conditions: [], priceMin: 0, priceMax: 5000, search: '' };
  $$('#categoryFilters input').forEach(i => i.checked = false);
  $$('#conditionFilters input').forEach(i => i.checked = false);
  const priceMin = $('#priceMin'), priceMax = $('#priceMax');
  if (priceMin) { priceMin.value = 0; }
  if (priceMax) { priceMax.value = 5000; }
  $('#priceMinLabel') && ($('#priceMinLabel').textContent = '$0');
  $('#priceMaxLabel') && ($('#priceMaxLabel').textContent = '$5000');
  const si = $('#searchInline'); if (si) si.value = '';
  renderProducts();
}

function renderProducts() {
  const grid = $('#productsGrid');
  const empty = $('#emptyState');
  if (!grid) return;

  let result = [...PRODUCTS];

  if (window._dealsOnly) result = result.filter(p => p.is_deal);

  if (filterState.search) {
    const q = filterState.search.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q)
    );
  }
  if (filterState.categories.length) {
    result = result.filter(p => filterState.categories.includes(p.category));
  }
  if (filterState.conditions.length) {
    result = result.filter(p => filterState.conditions.includes(p.condition));
  }
  result = result.filter(p => p.price >= filterState.priceMin && p.price <= filterState.priceMax);

  const sortBy = $('#sortBy') ? $('#sortBy').value : 'newest';
  switch (sortBy) {
    case 'price-low': result.sort((a, b) => a.price - b.price); break;
    case 'price-high': result.sort((a, b) => b.price - a.price); break;
    case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'rating': result.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
  }

  $('#resultCount').textContent = `Showing ${result.length} product${result.length !== 1 ? 's' : ''}`;

  // Active filters chips
  const af = $('#activeFilters');
  let chips = [];
  filterState.categories.forEach(c => {
    const cat = CATEGORIES.find(x => x.id === c);
    if (cat) chips.push(`<span class="pc-tag" style="background:var(--slate-light);color:var(--navy);cursor:pointer" onclick="toggleCategory('${c}', false);renderProducts()">${cat.name} ✕</span>`);
  });
  filterState.conditions.forEach(c => {
    const cond = CONDITIONS.find(x => x.id === c);
    if (cond) chips.push(`<span class="pc-tag" style="background:var(--slate-light);color:var(--navy);cursor:pointer" onclick="toggleCondition('${c}', false);renderProducts()">${cond.name} ✕</span>`);
  });
  if (filterState.priceMin > 0 || filterState.priceMax < 5000) {
    chips.push(`<span class="pc-tag" style="background:var(--slate-light);color:var(--navy);cursor:pointer" onclick="clearFilters()">$${filterState.priceMin} - $${filterState.priceMax} ✕</span>`);
  }
  if (af) af.innerHTML = chips.length ? `<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1rem">${chips.join('')}</div>` : '';

  if (result.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
  } else {
    if (empty) empty.style.display = 'none';
    grid.innerHTML = result.map(productCardHTML).join('');
  }
}

/* ----- Contact form ----- */
function submitContact(e) {
  e.preventDefault();
  const form = $('#contactForm');
  const success = $('#formSuccess');
  const btn = $('#submitBtn');
  btn.disabled = true;
  btn.textContent = 'Sending...';
  setTimeout(() => {
    form.style.display = 'none';
    success.style.display = 'block';
    btn.disabled = false;
    btn.textContent = '✈️ Send Message';
    form.reset();
  }, 800);
}

/* ----- Init on every page ----- */
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCart();
  initHome();
});
