'use strict';

/* ============================================================
   MEEJAZ STOREFRONT CONFIGURATION
   Change demo prices, delivery fee and product details here.
============================================================ */

const PRODUCT_IMAGES = Object.freeze({

  oud:
    'https://images.pexels.com/photos/11482468/pexels-photo-11482468.jpeg?auto=compress&cs=tinysrgb&w=900',

  musk:
    'https://images.pexels.com/photos/11711822/pexels-photo-11711822.jpeg?auto=compress&cs=tinysrgb&w=900',

  rose:
    'https://images.pexels.com/photos/15097508/pexels-photo-15097508.jpeg?auto=compress&cs=tinysrgb&w=900',

  citrus:
    'https://images.pexels.com/photos/36833968/pexels-photo-36833968.jpeg?auto=compress&cs=tinysrgb&w=900',

  vanilla:
    'https://images.pexels.com/photos/29538704/pexels-photo-29538704.jpeg?auto=compress&cs=tinysrgb&w=900',

  saffron:
    'https://images.pexels.com/photos/11711828/pexels-photo-11711828.jpeg?auto=compress&cs=tinysrgb&w=900',

  jasmine:
    'https://images.pexels.com/photos/32291048/pexels-photo-32291048.jpeg?auto=compress&cs=tinysrgb&w=900',

  traditional:
    'https://images.pexels.com/photos/17155311/pexels-photo-17155311.jpeg?auto=compress&cs=tinysrgb&w=900'

});

const IMAGE_FALLBACK = PRODUCT_IMAGES.traditional;


const MEEJAZ_CONFIG = {

  deliveryFee: 250,

  currencyPrefix: 'Rs',

  products: [

    {
      id: 'royal-oud',
      name: 'Royal Oud',
      category: 'Oud',
      price: 1850,
      size: '10ml',
      image: PRODUCT_IMAGES.oud,
      tag: 'SIGNATURE PICK',
      featured: true,
      notes: 'Oud · Amber · Saffron',
      intensity: 'bold',
      occasions: ['evening', 'special'],
      noteTags: ['woody', 'warm'],
      description:
        'A deep, confident oud character with a warm amber finish.'
    },

    {
      id: 'white-musk',
      name: 'White Musk',
      category: 'Musk',
      price: 1250,
      size: '10ml',
      image: PRODUCT_IMAGES.musk,
      tag: 'SOFT & CLEAN',
      featured: true,
      notes: 'White Musk · Powder · Vanilla',
      intensity: 'soft',
      occasions: ['everyday', 'special'],
      noteTags: ['sweet', 'soft'],
      description:
        'A gentle, clean musk with a soft and comforting finish.'
    },

    {
      id: 'rose-royale',
      name: 'Rose Royale',
      category: 'Floral',
      price: 1050,
      size: '10ml',
      image: PRODUCT_IMAGES.rose,
      tag: 'FLORAL FAVOURITE',
      featured: true,
      notes: 'Rose · Geranium · Soft Musk',
      intensity: 'balanced',
      occasions: ['everyday', 'special'],
      noteTags: ['floral', 'soft'],
      description:
        'A graceful floral blend with a delicate rose character.'
    },

    {
      id: 'citrus-dawn',
      name: 'Citrus Dawn',
      category: 'Fresh',
      price: 950,
      size: '10ml',
      image: PRODUCT_IMAGES.citrus,
      tag: 'FRESH NOTES',
      featured: false,
      notes: 'Bergamot · Lemon · Neroli',
      intensity: 'soft',
      occasions: ['everyday'],
      noteTags: ['citrus', 'fresh'],
      description:
        'Bright citrus notes with a light, refreshing impression.'
    },

    {
      id: 'saffron-amber',
      name: 'Saffron Amber',
      category: 'Sweet',
      price: 1450,
      size: '10ml',
      image: PRODUCT_IMAGES.saffron,
      tag: 'WARM & RICH',
      featured: false,
      notes: 'Saffron · Amber · Spice',
      intensity: 'bold',
      occasions: ['evening', 'special'],
      noteTags: ['warm', 'sweet'],
      description:
        'A warm amber profile with a rich saffron accent.'
    },

    {
      id: 'vanilla-dusk',
      name: 'Vanilla Dusk',
      category: 'Sweet',
      price: 1100,
      size: '10ml',
      image: PRODUCT_IMAGES.vanilla,
      tag: 'COMFORTING',
      featured: false,
      notes: 'Vanilla · Tonka · Sandalwood',
      intensity: 'balanced',
      occasions: ['everyday', 'evening'],
      noteTags: ['sweet', 'woody'],
      description:
        'Smooth vanilla and sandalwood for a cosy, mellow scent.'
    },

    {
      id: 'sandal-essence',
      name: 'Sandal Essence',
      category: 'Woody',
      price: 1350,
      size: '10ml',
      image: PRODUCT_IMAGES.vanilla,
      tag: 'TIMELESS WOODS',
      featured: true,
      notes: 'Sandalwood · Cedar · Musk',
      intensity: 'balanced',
      occasions: ['everyday', 'evening'],
      noteTags: ['woody', 'warm'],
      description:
        'A smooth woody blend with a calm sandalwood heart.'
    },

    {
      id: 'majestic-mukhallat',
      name: 'Majestic Mukhallat',
      category: 'Oud',
      price: 1750,
      size: '10ml',
      image: PRODUCT_IMAGES.saffron,
      tag: 'ORIENTAL BLEND',
      featured: false,
      notes: 'Oud · Rose · Amber',
      intensity: 'bold',
      occasions: ['evening', 'special'],
      noteTags: ['woody', 'floral', 'warm'],
      description:
        'A layered oriental profile combining oud, rose and amber.'
    },

    {
      id: 'jasmine-silk',
      name: 'Jasmine Silk',
      category: 'Floral',
      price: 1150,
      size: '10ml',
      image: PRODUCT_IMAGES.jasmine,
      tag: 'DELICATE FLORAL',
      featured: false,
      notes: 'Jasmine · Orange Blossom · Musk',
      intensity: 'soft',
      occasions: ['everyday', 'special'],
      noteTags: ['floral', 'soft'],
      description:
        'A soft floral character with an airy jasmine finish.'
    }

  ]

};


/* ============================================================
   COMMON HELPERS
============================================================ */

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));


const money = value => {

  return `${MEEJAZ_CONFIG.currencyPrefix} ${Number(value || 0).toLocaleString('en-PK')}`;

};


const getProduct = id => {

  return MEEJAZ_CONFIG.products.find(product => product.id === id);

};


function safeStorageGet(key, fallback) {

  try {

    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : fallback;

  } catch (error) {

    console.warn('MEEJAZ storage unavailable:', error);

    return fallback;

  }

}


function safeStorageSet(key, value) {

  try {

    localStorage.setItem(key, JSON.stringify(value));

  } catch (error) {

    console.warn('MEEJAZ could not save local data:', error);

  }

}


/* ============================================================
   APPLICATION STATE
============================================================ */

let cart = safeStorageGet('meejazCart', {});

let activeCategory = 'All';

let searchTerm = '';

let toastTimer = null;

let quizStep = 0;

let quizAnswers = {};


/* ============================================================
   PRODUCT CARD GENERATOR
============================================================ */

function productCard(product) {

  const addLabel = `Add ${product.name} to bag`;

  return `

    <article class="product-card" data-product-card="${product.id}">

      <div class="product-image-wrap">

        <img

          class="product-image"

          src="${product.image}"

          alt="${product.name} attar bottle"

          loading="lazy"

          onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}'"

        >

        <span class="product-tag">${product.tag}</span>


        <button

          class="product-view"

          type="button"

          data-add="${product.id}"

          aria-label="Quick add ${product.name}"

          title="Quick add to bag"

        >＋</button>

      </div>


      <div class="product-info">

        <span class="product-family">
          ${product.category} · ${product.size}
        </span>


        <div class="product-title-row">

          <h3>${product.name}</h3>

          <span class="product-price">
            ${money(product.price)}
          </span>

        </div>


        <p class="product-notes">
          ${product.notes}
        </p>


        <button

          class="add-button"

          type="button"

          data-add="${product.id}"

          aria-label="${addLabel}"

        >

          ADD TO BAG

          <span>＋</span>

        </button>

      </div>

    </article>

  `;

}


/* ============================================================
   FEATURED PRODUCTS
============================================================ */

function renderFeatured() {

  const track = $('#featuredTrack');

  if (!track) return;

  const featured = MEEJAZ_CONFIG.products.filter(
    product => product.featured
  );

  track.innerHTML = featured.map(productCard).join('');

}


/* ============================================================
   PRODUCT SEARCH AND CATEGORY FILTERING
============================================================ */

function productMatches(product) {

  const categoryMatch =
    activeCategory === 'All' ||
    product.category === activeCategory;

  const haystack = `

    ${product.name}

    ${product.category}

    ${product.notes}

    ${product.description}

  `.toLowerCase();

  const searchMatch =
    !searchTerm || haystack.includes(searchTerm);

  return categoryMatch && searchMatch;

}


function renderCatalog() {

  const grid = $('#catalogGrid');

  if (!grid) return;

  const products =
    MEEJAZ_CONFIG.products.filter(productMatches);

  grid.innerHTML =
    products.map(productCard).join('');


  $('#catalogCount').textContent =

    `${String(products.length).padStart(2, '0')} FRAGRANCE${products.length === 1 ? '' : 'S'}`;


  $('#noResults').classList.toggle(
    'hidden',
    products.length > 0
  );

  grid.classList.toggle(
    'hidden',
    products.length === 0
  );

}


/* ============================================================
   CART STORAGE
============================================================ */

function saveCart() {

  safeStorageSet('meejazCart', cart);

  renderCart();

}


function cartEntries() {

  return Object.entries(cart)

    .map(([id, quantity]) => ({

      product: getProduct(id),

      quantity: Number(quantity)

    }))

    .filter(item =>

      item.product && item.quantity > 0

    );

}


/* ============================================================
   ADD TO CART
============================================================ */

function addToCart(id) {

  const product = getProduct(id);

  if (!product) return;

  cart[id] = (Number(cart[id]) || 0) + 1;

  saveCart();

  showToast(`${product.name} added to your bag.`);

}


/* ============================================================
   CHANGE PRODUCT QUANTITY
============================================================ */

function changeQuantity(id, change) {

  if (!cart[id]) return;

  cart[id] = Number(cart[id]) + change;

  if (cart[id] <= 0) {

    delete cart[id];

  }

  saveCart();

}


/* ============================================================
   REMOVE PRODUCT
============================================================ */

function removeFromCart(id) {

  delete cart[id];

  saveCart();

}


/* ============================================================
   RENDER CART
============================================================ */

function renderCart() {

  const entries = cartEntries();

  const quantity = entries.reduce(

    (sum, item) => sum + item.quantity,

    0

  );

  const subtotal = entries.reduce(

    (sum, item) =>

      sum + item.product.price * item.quantity,

    0

  );

  const delivery = entries.length
    ? MEEJAZ_CONFIG.deliveryFee
    : 0;


  $('#cartCount').textContent = quantity;


  $('#cartItems').innerHTML = entries.map(

    ({ product, quantity: qty }) => `

      <div class="cart-row">

        <img

          src="${product.image}"

          alt="${product.name}"

          loading="lazy"

          onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}'"

        >


        <div>

          <h3>${product.name}</h3>

          <div class="cart-row-meta">
            ${product.category} · ${product.size}
          </div>

          <div class="cart-row-price">
            ${money(product.price * qty)}
          </div>


          <div class="qty-control" aria-label="Quantity for ${product.name}">

            <button

              type="button"

              data-qty="-1"

              data-id="${product.id}"

              aria-label="Decrease ${product.name} quantity"

            >−</button>


            <span>${qty}</span>


            <button

              type="button"

              data-qty="1"

              data-id="${product.id}"

              aria-label="Increase ${product.name} quantity"

            >＋</button>

          </div>

        </div>


        <button

          class="remove-item"

          type="button"

          data-remove="${product.id}"

          aria-label="Remove ${product.name}"

        >×</button>

      </div>

    `

  ).join('');


  $('#cartEmpty').classList.toggle(
    'hidden',
    entries.length > 0
  );

  $('#cartItems').classList.toggle(
    'hidden',
    entries.length === 0
  );

  $('#cartBottom').classList.toggle(
    'hidden',
    entries.length === 0
  );


  $('#cartSubtotal').textContent = money(subtotal);

  $('#cartDelivery').textContent = money(delivery);

  $('#cartTotal').textContent = money(subtotal + delivery);

}


/* ============================================================
   OPEN CART
============================================================ */

function openCart() {

  $('#cartDrawer').classList.add('open');

  $('#drawerBackdrop').classList.add('open');

  $('#cartDrawer').setAttribute('aria-hidden', 'false');

  document.body.classList.add('no-scroll');

  $('#closeCart').focus();

}


/* ============================================================
   CLOSE CART
============================================================ */

function closeCart() {

  $('#cartDrawer').classList.remove('open');

  $('#drawerBackdrop').classList.remove('open');

  $('#cartDrawer').setAttribute('aria-hidden', 'true');


  if (!$('#quizModal').classList.contains('open')) {

    document.body.classList.remove('no-scroll');

  }

}


/* ============================================================
   TOAST NOTIFICATION
============================================================ */

function showToast(message) {

  const toast = $('#toast');

  toast.textContent = message;

  toast.classList.add('show');

  clearTimeout(toastTimer);

  toastTimer = setTimeout(

    () => toast.classList.remove('show'),

    2400

  );

}


/* ============================================================
   CATEGORY FILTER EVENT
============================================================ */

function setupCategoryFilters() {

  $('#categoryChips').addEventListener('click', event => {

    const button = event.target.closest('[data-category]');

    if (!button) return;

    activeCategory = button.dataset.category;


    $$('.category-chip').forEach(chip => {

      chip.classList.toggle('active', chip === button);

    });


    renderCatalog();

  });


  $('#productSearch').addEventListener('input', event => {

    searchTerm = event.target.value.trim().toLowerCase();

    renderCatalog();

  });


  $('#clearFilters').addEventListener('click', () => {

    activeCategory = 'All';

    searchTerm = '';

    $('#productSearch').value = '';


    $$('.category-chip').forEach(chip => {

      chip.classList.toggle(
        'active',
        chip.dataset.category === 'All'
      );

    });


    renderCatalog();

  });

}


/* ============================================================
   CART EVENTS
============================================================ */

function setupCartEvents() {


  document.addEventListener('click', event => {


    const addButton = event.target.closest('[data-add]');

    if (addButton) {

      addToCart(addButton.dataset.add);

    }


    const qtyButton = event.target.closest('[data-qty]');

    if (qtyButton) {

      changeQuantity(

        qtyButton.dataset.id,

        Number(qtyButton.dataset.qty)

      );

    }


    const removeButton = event.target.closest('[data-remove]');

    if (removeButton) {

      removeFromCart(removeButton.dataset.remove);

    }

  });



  $('#cartTrigger').addEventListener('click', openCart);

  $('#closeCart').addEventListener('click', closeCart);

  $('#drawerBackdrop').addEventListener('click', closeCart);



  $('#continueShopping').addEventListener('click', () => {

    closeCart();

    $('#categories').scrollIntoView({

      behavior: 'smooth'

    });

  });



  $('#startCheckout').addEventListener('click', () => {

    $('#checkoutForm').classList.remove('hidden');

    $('#startCheckout').classList.add('hidden');


    $('#checkoutForm').scrollIntoView({

      behavior: 'smooth',

      block: 'nearest'

    });


    $('#customerName').focus({

      preventScroll: true

    });

  });



  $('#checkoutForm').addEventListener(

    'submit',

    handleCheckout

  );

}


/* ============================================================
   CHECKOUT AND ORDER CREATION
============================================================ */

function handleCheckout(event) {

  event.preventDefault();

  const entries = cartEntries();


  if (!entries.length) {

    showToast('Your bag is empty. Add an attar first.');

    return;

  }


  const form = event.currentTarget;

  if (!form.reportValidity()) return;


  const phone = $('#customerPhone').value.trim();

  const digits = phone.replace(/\D/g, '');


  if (digits.length < 10 || digits.length > 15) {

    $('#customerPhone').setCustomValidity(
      'Please enter a valid phone number.'
    );

    $('#customerPhone').reportValidity();

    $('#customerPhone').setCustomValidity('');

    return;

  }


  const subtotal = entries.reduce(

    (sum, item) =>

      sum + item.product.price * item.quantity,

    0

  );


  const order = {

    orderId: `MZ-${Date.now().toString().slice(-8)}`,

    createdAt: new Date().toISOString(),


    customer: {

      name: $('#customerName').value.trim(),

      phone,

      city: $('#customerCity').value.trim(),

      address: $('#customerAddress').value.trim(),

      note: $('#customerNote').value.trim()

    },


    items: entries.map(({ product, quantity }) => ({

      id: product.id,

      name: product.name,

      category: product.category,

      size: product.size,

      price: product.price,

      quantity,

      image: product.image

    })),


    subtotal,

    delivery: MEEJAZ_CONFIG.deliveryFee,

    total: subtotal + MEEJAZ_CONFIG.deliveryFee,

    payment: 'Cash on delivery — to be confirmed'

  };


  try {

    sessionStorage.setItem(

      'meejazLatestOrder',

      JSON.stringify(order)

    );

  } catch (error) {

    showToast(
      'Your browser could not save the receipt. Please enable site storage.'
    );

    return;

  }


  cart = {};

  safeStorageSet('meejazCart', cart);

  window.location.href = 'receipt.html';

}


/* ============================================================
   SCENT FINDER QUESTIONS
============================================================ */

const QUIZ_QUESTIONS = [

  {

    kicker: '01 / YOUR FRAGRANCE FAMILY',

    title: 'Which scent world feels like you?',

    subtitle:
      'Choose the fragrance family you naturally gravitate towards.',

    key: 'family',

    options: [

      {
        value: 'Oud',
        label: 'Deep oud & oriental woods',
        icon: '◈'
      },

      {
        value: 'Musk',
        label: 'Clean, soft & musky',
        icon: '✧'
      },

      {
        value: 'Floral',
        label: 'Graceful flowers & petals',
        icon: '❀'
      },

      {
        value: 'Fresh',
        label: 'Fresh, bright & citrusy',
        icon: '☼'
      },

      {
        value: 'Sweet',
        label: 'Warm, sweet & comforting',
        icon: '✳'
      }

    ]

  },


  {

    kicker: '02 / YOUR PRESENCE',

    title: 'How would you like it to feel?',

    subtitle:
      'Think about the kind of fragrance presence you enjoy.',

    key: 'intensity',

    options: [

      {
        value: 'soft',
        label: 'Soft and close to the skin',
        icon: '○'
      },

      {
        value: 'balanced',
        label: 'Balanced and noticeable',
        icon: '◉'
      },

      {
        value: 'bold',
        label: 'Rich and memorable',
        icon: '✦'
      }

    ]

  },


  {

    kicker: '03 / YOUR MOMENT',

    title: 'When will you reach for it most?',

    subtitle:
      'Choose the moment you have in mind.',

    key: 'occasion',

    options: [

      {
        value: 'everyday',
        label: 'Everyday moments',
        icon: '☀'
      },

      {
        value: 'evening',
        label: 'Evenings and gatherings',
        icon: '☾'
      },

      {
        value: 'special',
        label: 'Special occasions',
        icon: '✧'
      }

    ]

  },


  {

    kicker: '04 / YOUR FAVOURITE NOTES',

    title: 'Pick the notes you love most.',

    subtitle:
      'One last detail to bring your scent match together.',

    key: 'notes',

    options: [

      {
        value: 'woody',
        label: 'Woody, warm and earthy',
        icon: '⌁'
      },

      {
        value: 'floral',
        label: 'Floral, delicate and elegant',
        icon: '❀'
      },

      {
        value: 'citrus',
        label: 'Citrus, green and fresh',
        icon: '☼'
      },

      {
        value: 'sweet',
        label: 'Sweet, creamy and cosy',
        icon: '✳'
      }

    ]

  }

];


/* ============================================================
   OPEN SCENT FINDER
============================================================ */

function openQuiz() {

  quizStep = 0;

  quizAnswers = {};


  renderQuizQuestion();


  $('#quizModal').classList.add('open');

  $('#quizBackdrop').classList.add('open');

  $('#quizModal').setAttribute('aria-hidden', 'false');

  document.body.classList.add('no-scroll');

  $('#closeQuiz').focus();

}


/* ============================================================
   CLOSE SCENT FINDER
============================================================ */

function closeQuiz() {

  $('#quizModal').classList.remove('open');

  $('#quizBackdrop').classList.remove('open');

  $('#quizModal').setAttribute('aria-hidden', 'true');


  if (!$('#cartDrawer').classList.contains('open')) {

    document.body.classList.remove('no-scroll');

  }

}


/* ============================================================
   DISPLAY QUIZ QUESTION
============================================================ */

function renderQuizQuestion() {

  const question = QUIZ_QUESTIONS[quizStep];


  $('#quizStepLabel').textContent =

    `${String(quizStep + 1).padStart(2, '0')} / 04`;


  $('#quizProgress').style.width =

    `${((quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%`;


  const options = question.options.map((option, index) => `

    <label class="quiz-option">

      <input

        type="radio"

        name="quizAnswer"

        value="${option.value}"

        ${quizAnswers[question.key] === option.value ? 'checked' : ''}

      >


      <span>

        <b aria-hidden="true">${option.icon}</b>

        ${option.label}

      </span>

    </label>

  `).join('');



  $('#quizContent').innerHTML = `

    <p class="quiz-question-kicker">
      ${question.kicker}
    </p>


    <h2 class="quiz-question-title" id="quizTitle">

      ${question.title}

    </h2>


    <p class="quiz-question-sub">

      ${question.subtitle}

    </p>


    <div class="quiz-options">

      ${options}

    </div>


    <div class="quiz-actions">

      ${
        quizStep > 0

        ? '<button class="quiz-back" type="button" id="quizBack">← Back</button>'

        : '<span></span>'
      }


      <button

        class="button button-dark quiz-next"

        type="button"

        id="quizNext"

      >

        ${quizStep === 3 ? 'Reveal my match' : 'Continue'}

        <span>→</span>

      </button>

    </div>

  `;



  $('#quizContent')

    .querySelectorAll('input[name="quizAnswer"]')

    .forEach(input => {

      input.addEventListener('change', () => {

        quizAnswers[question.key] = input.value;

      });

    });



  $('#quizNext').addEventListener('click', () => {


    if (!quizAnswers[question.key]) {

      showToast('Choose an answer to continue.');

      return;

    }


    if (quizStep < QUIZ_QUESTIONS.length - 1) {

      quizStep += 1;

      renderQuizQuestion();

    } else {

      renderQuizResult();

    }

  });



  const back = $('#quizBack');


  if (back) {

    back.addEventListener('click', () => {

      quizStep -= 1;

      renderQuizQuestion();

    });

  }

}


/* ============================================================
   MATCH PRODUCTS WITH CUSTOMER ANSWERS
============================================================ */

function scoreProduct(product) {

  let score = 0;


  if (product.category === quizAnswers.family) {

    score += 5;

  }


  if (product.intensity === quizAnswers.intensity) {

    score += 3;

  }


  if (product.occasions.includes(quizAnswers.occasion)) {

    score += 2;

  }


  if (product.noteTags.includes(quizAnswers.notes)) {

    score += 3;

  }


  return score;

}


/* ============================================================
   DISPLAY MATCHED ATTAR
============================================================ */

function renderQuizResult() {

  const match = [...MEEJAZ_CONFIG.products]

    .sort((a, b) => scoreProduct(b) - scoreProduct(a))[0];


  $('#quizStepLabel').textContent = 'YOUR MATCH';

  $('#quizProgress').style.width = '100%';


  $('#quizContent').innerHTML = `

    <div class="quiz-result">


      <img

        class="quiz-result-image"

        src="${match.image}"

        alt="${match.name} attar"

        onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}'"

      >


      <p class="eyebrow">
        A MEEJAZ MATCH FOR YOU
      </p>


      <h3>${match.name}</h3>


      <p>

        ${match.description}

        With its ${match.notes.toLowerCase()} character,
        this is our closest match to the preferences you selected.

      </p>


      <span class="quiz-result-price">

        ${money(match.price)} · ${match.size}

      </span>


      <button

        class="button button-dark"

        type="button"

        id="quizAddMatch"

      >

        Add this attar to my bag

        <span>＋</span>

      </button>


      <div class="quiz-actions">

        <button class="quiz-back" type="button" id="quizRestart">

          Start again ↺

        </button>


        <button class="quiz-back" type="button" id="quizDone">

          Close

        </button>

      </div>


    </div>

  `;



  $('#quizAddMatch').addEventListener('click', () => {

    addToCart(match.id);

    closeQuiz();

  });


  $('#quizRestart').addEventListener('click', () => {

    quizStep = 0;

    quizAnswers = {};

    renderQuizQuestion();

  });


  $('#quizDone').addEventListener('click', closeQuiz);

}


/* ============================================================
   QUIZ EVENT LISTENERS
============================================================ */

function setupQuiz() {

  $('#openQuiz').addEventListener('click', openQuiz);

  $('#closeQuiz').addEventListener('click', closeQuiz);

  $('#quizBackdrop').addEventListener('click', closeQuiz);

}


/* ============================================================
   THREE.JS INTERACTIVE ATTAR BOTTLE
============================================================ */

function initAttarModel() {

  const canvas = $('#attarCanvas');

  const fallback = $('#hero3DFallback');

  const stage = $('#modelStage');


  if (!canvas || !stage || !window.THREE) {

    if (canvas) {

      canvas.style.display = 'none';

    }

    fallback?.classList.add('show');

    return;

  }


  try {


    const THREE = window.THREE;


    const scene = new THREE.Scene();


    const camera = new THREE.PerspectiveCamera(

      34,

      1,

      0.1,

      100

    );


    camera.position.set(0, 0.28, 6.4);



    const renderer = new THREE.WebGLRenderer({

      canvas,

      alpha: true,

      antialias: true,

      powerPreference: 'high-performance'

    });


    renderer.setPixelRatio(

      Math.min(window.devicePixelRatio || 1, 2)

    );


    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure = 1.12;

    renderer.setClearColor(0x000000, 0);



    /* Lighting */

    scene.add(

      new THREE.HemisphereLight(

        0xfff4d8,

        0x775023,

        2.0

      )

    );


    const keyLight = new THREE.DirectionalLight(

      0xfff1ce,

      3.2

    );

    keyLight.position.set(3.2, 4.5, 4);

    scene.add(keyLight);



    const rimLight = new THREE.PointLight(

      0xffc35b,

      85,

      12

    );

    rimLight.position.set(-3, 1.5, -1.5);

    scene.add(rimLight);



    const fillLight = new THREE.PointLight(

      0xffffff,

      42,

      10

    );

    fillLight.position.set(2, -1, 3);

    scene.add(fillLight);



    /* Bottle group */

    const bottle = new THREE.Group();

    scene.add(bottle);



    /* Materials */

    const gold = new THREE.MeshStandardMaterial({

      color: 0xd6a648,

      metalness: 0.88,

      roughness: 0.22

    });


    const goldBright = new THREE.MeshStandardMaterial({

      color: 0xf4d58b,

      metalness: 0.82,

      roughness: 0.18

    });


    const darkGold = new THREE.MeshStandardMaterial({

      color: 0x79501d,

      metalness: 0.72,

      roughness: 0.28

    });


    const glass = new THREE.MeshPhysicalMaterial({

      color: 0xffe6aa,

      metalness: 0.08,

      roughness: 0.1,

      transparent: true,

      opacity: 0.28,

      transmission: 0.28,

      thickness: 0.45,

      clearcoat: 1,

      clearcoatRoughness: 0.08,

      side: THREE.DoubleSide

    });


    const oil = new THREE.MeshPhysicalMaterial({

      color: 0xb96b16,

      metalness: 0.15,

      roughness: 0.18,

      clearcoat: 1,

      clearcoatRoughness: 0.15

    });



    /* Main glass body */

    const mainBody = new THREE.Mesh(

      new THREE.CylinderGeometry(

        0.72,

        0.78,

        1.76,

        64,

        1

      ),

      glass

    );


    mainBody.position.y = -0.02;

    bottle.add(mainBody);



    /* Attar liquid */

    const liquid = new THREE.Mesh(

      new THREE.CylinderGeometry(

        0.655,

        0.70,

        1.43,

        64,

        1

      ),

      oil

    );


    liquid.position.y = -0.15;

    bottle.add(liquid);



    /* Glass bottom */

    const bottomGlass = new THREE.Mesh(

      new THREE.CylinderGeometry(

        0.77,

        0.77,

        0.12,

        64

      ),

      glass

    );


    bottomGlass.position.y = -0.91;

    bottle.add(bottomGlass);



    /* Decorative gold rings */

    function addRing(radius, tube, y, material) {

      const ring = new THREE.Mesh(

        new THREE.TorusGeometry(

          radius,

          tube,

          12,

          72

        ),

        material

      );


      ring.rotation.x = Math.PI / 2;

      ring.position.y = y;

      bottle.add(ring);

    }


    addRing(0.74, 0.035, 0.83, goldBright);

    addRing(0.76, 0.035, -0.87, goldBright);

    addRing(0.73, 0.016, 0.68, darkGold);

    addRing(0.75, 0.016, -0.75, darkGold);



    /* Bottle neck */

    const neck = new THREE.Mesh(

      new THREE.CylinderGeometry(

        0.25,

        0.30,

        0.35,

        48

      ),

      glass

    );


    neck.position.y = 1.0;

    bottle.add(neck);



    /* Neck gold band */

    const neckBand = new THREE.Mesh(

      new THREE.CylinderGeometry(

        0.30,

        0.30,

        0.10,

        48

      ),

      goldBright

    );


    neckBand.position.y = 1.13;

    bottle.add(neckBand);



    /* Golden cap */

    const cap = new THREE.Mesh(

      new THREE.CylinderGeometry(

        0.31,

        0.34,

        0.56,

        48,

        1

      ),

      gold

    );


    cap.position.y = 1.45;

    bottle.add(cap);



    const capTop = new THREE.Mesh(

      new THREE.CylinderGeometry(

        0.29,

        0.31,

        0.08,

        48

      ),

      goldBright

    );


    capTop.position.y = 1.77;

    bottle.add(capTop);



    const capFinial = new THREE.Mesh(

      new THREE.SphereGeometry(

        0.12,

        24,

        16

      ),

      goldBright

    );


    capFinial.position.y = 1.88;

    bottle.add(capFinial);



    /* Decorative cap lines */

    for (let i = 0; i < 12; i += 1) {

      const angle =

        (i / 12) * Math.PI * 2;


      const flute = new THREE.Mesh(

        new THREE.BoxGeometry(

          0.025,

          0.42,

          0.025

        ),

        goldBright

      );


      flute.position.set(

        Math.sin(angle) * 0.326,

        1.45,

        Math.cos(angle) * 0.326

      );


      flute.rotation.y = angle;

      bottle.add(flute);

    }



    /* MEEJAZ label texture */

    const labelCanvas = document.createElement('canvas');

    labelCanvas.width = 512;

    labelCanvas.height = 320;


    const ctx = labelCanvas.getContext('2d');


    ctx.fillStyle = '#f4e8ce';

    ctx.fillRect(0, 0, 512, 320);


    ctx.strokeStyle = '#b58a43';

    ctx.lineWidth = 8;

    ctx.strokeRect(13, 13, 486, 294);


    ctx.strokeStyle = 'rgba(181,138,67,.35)';

    ctx.lineWidth = 2;

    ctx.strokeRect(25, 25, 462, 270);


    ctx.textAlign = 'center';

    ctx.fillStyle = '#7a5525';

    ctx.font = '34px Georgia';

    ctx.fillText('THE ATTAR HOUSE', 256, 91);


    ctx.font = 'bold 78px Georgia';

    ctx.fillText('MEEJAZ', 256, 194);


    ctx.font = '22px Arial';

    ctx.letterSpacing = '7px';

    ctx.fillText('EAU DE PARFUM OIL', 256, 247);



    const labelTexture = new THREE.CanvasTexture(labelCanvas);

    labelTexture.colorSpace = THREE.SRGBColorSpace;


    const labelMaterial = new THREE.MeshBasicMaterial({

      map: labelTexture,

      transparent: true,

      side: THREE.DoubleSide

    });


    const label = new THREE.Mesh(

      new THREE.PlaneGeometry(0.91, 0.57),

      labelMaterial

    );


    label.position.set(0, -0.05, 0.785);

    bottle.add(label);



    /* Golden display platform */

    const plinth = new THREE.Mesh(

      new THREE.CylinderGeometry(

        1.0,

        1.08,

        0.12,

        72

      ),

      darkGold

    );


    plinth.position.y = -1.05;

    bottle.add(plinth);



    const plinthTop = new THREE.Mesh(

      new THREE.CylinderGeometry(

        0.98,

        0.98,

        0.035,

        72

      ),

      goldBright

    );


    plinthTop.position.y = -0.972;

    bottle.add(plinthTop);



    const plinthFoot = new THREE.Mesh(

      new THREE.CylinderGeometry(

        1.09,

        1.13,

        0.08,

        72

      ),

      gold

    );


    plinthFoot.position.y = -1.14;

    bottle.add(plinthFoot);



    /* Floating gold particles */

    const particlePositions = [];


    for (let i = 0; i < 115; i += 1) {

      const angle = Math.random() * Math.PI * 2;

      const radius = 1.15 + Math.random() * 1.3;


      particlePositions.push(

        Math.cos(angle) * radius,

        (Math.random() - 0.5) * 3.2,

        Math.sin(angle) * radius - 0.3

      );

    }



    const particleGeometry = new THREE.BufferGeometry();


    particleGeometry.setAttribute(

      'position',

      new THREE.Float32BufferAttribute(

        particlePositions,

        3

      )

    );


    const particles = new THREE.Points(

      particleGeometry,

      new THREE.PointsMaterial({

        color: 0xd5ae66,

        size: 0.022,

        transparent: true,

        opacity: 0.7

      })

    );


    scene.add(particles);



    /* Drag interaction */

    let targetRotation = 0;

    let isDragging = false;

    let lastX = 0;


    canvas.addEventListener('pointerdown', event => {

      isDragging = true;

      lastX = event.clientX;

      canvas.setPointerCapture(event.pointerId);

    });


    canvas.addEventListener('pointermove', event => {

      if (!isDragging) return;

      const delta = event.clientX - lastX;

      targetRotation += delta * 0.009;

      lastX = event.clientX;

    });


    const stopDrag = () => {

      isDragging = false;

    };


    canvas.addEventListener('pointerup', stopDrag);

    canvas.addEventListener('pointercancel', stopDrag);

    canvas.addEventListener('lostpointercapture', stopDrag);



    /* Responsive model sizing */

    function resizeModel() {

      const width = Math.max(stage.clientWidth, 1);

      const height = Math.max(stage.clientHeight, 1);


      renderer.setSize(width, height, false);


      camera.aspect = width / height;

      camera.position.z = width < 460 ? 7 : 6.4;

      camera.updateProjectionMatrix();

    }


    resizeModel();


    if ('ResizeObserver' in window) {

      new ResizeObserver(resizeModel).observe(stage);

    } else {

      window.addEventListener('resize', resizeModel);

    }



    /* Animation loop */

    let frameId = 0;


    function animate() {

      frameId = window.requestAnimationFrame(animate);


      if (!isDragging) {

        targetRotation += 0.0025;

      }


      bottle.rotation.y +=

        (targetRotation - bottle.rotation.y) * 0.055;


      bottle.rotation.x =

        Math.sin(performance.now() * 0.00055) * 0.035;


      particles.rotation.y -= 0.00035;


      renderer.render(scene, camera);

    }


    animate();


    window.addEventListener(

      'pagehide',

      () => window.cancelAnimationFrame(frameId),

      { once: true }

    );


  } catch (error) {

    console.warn(

      '3D model unavailable; showing CSS bottle fallback.',

      error

    );


    canvas.style.display = 'none';

    fallback?.classList.add('show');

  }

}


/* ============================================================
   VIDEO AUTOPLAY WHEN SECTION COMES INTO VIEW
============================================================ */

function setupFilmAutoplay() {

  const frame = $('#filmFrame');

  const video = $('#brandFilm');

  const placeholder = $('#filmPlaceholder');


  if (!frame || !video) return;


  const startVideo = () => {

    if (video.dataset.loaded === 'true') return;

    video.src = video.dataset.src;

    video.dataset.loaded = 'true';


    if (placeholder) {

      placeholder.style.display = 'none';

    }

  };


  if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            startVideo();

            observer.disconnect();

          }

        });

      },

      {

        threshold: 0.35

      }

    );


    observer.observe(frame);

  } else {

    startVideo();

  }

}


/* ============================================================
   SCROLL REVEAL ANIMATIONS
============================================================ */

function setupRevealAnimations() {

  const revealItems = $$('.reveal');


  if (!('IntersectionObserver' in window)) {

    revealItems.forEach(item => {

      item.classList.add('is-visible');

    });

    return;

  }


  const observer = new IntersectionObserver(

    (entries, activeObserver) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('is-visible');

          activeObserver.unobserve(entry.target);

        }

      });

    },

    {

      threshold: 0.12,

      rootMargin: '0px 0px -35px 0px'

    }

  );


  revealItems.forEach(item => {

    observer.observe(item);

  });

}


/* ============================================================
   NAVIGATION AND SCROLL BUTTON
============================================================ */

function setupNavigation() {

  const toggle = $('#mobileMenuToggle');

  const nav = $('#mainNav');


  toggle.addEventListener('click', () => {

    const isOpen = nav.classList.toggle('open');

    toggle.setAttribute(

      'aria-expanded',

      String(isOpen)

    );

  });



  nav.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      nav.classList.remove('open');

      toggle.setAttribute('aria-expanded', 'false');

    });

  });



  const scrollButton = $('#scrollTop');


  window.addEventListener(

    'scroll',

    () => {

      scrollButton.classList.toggle(

        'visible',

        window.scrollY > 550

      );

    },

    { passive: true }

  );



  scrollButton.addEventListener('click', () => {

    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });

  });



  $('#currentYear').textContent =

    new Date().getFullYear();



  /* Featured card slider arrows */

  $$('[data-scroll]').forEach(button => {

    button.addEventListener('click', () => {

      const target = document.getElementById(

        button.dataset.scroll

      );


      if (target) {

        target.scrollBy({

          left: Number(button.dataset.direction) * 300,

          behavior: 'smooth'

        });

      }

    });

  });



  /* Escape key closes open overlays */

  document.addEventListener('keydown', event => {

    if (event.key === 'Escape') {

      closeCart();

      closeQuiz();

    }

  });

}


/* ============================================================
   LOADER
============================================================ */

function initLoader() {

  const loader = $('#siteLoader');


  const hide = () => {

    window.setTimeout(

      () => loader?.classList.add('is-hidden'),

      950

    );

  };


  if (document.readyState === 'complete') {

    hide();

  } else {

    window.addEventListener('load', hide, { once: true });

  }


  // Safety timeout prevents the loader from trapping the visitor.

  window.setTimeout(

    () => loader?.classList.add('is-hidden'),

    2400

  );

}


/* ============================================================
   INITIALIZE THE WEBSITE
============================================================ */

function initMEEJAZ() {

  initLoader();

  renderFeatured();

  renderCatalog();

  renderCart();

  setupCategoryFilters();

  setupCartEvents();

  setupQuiz();

  setupNavigation();

  setupFilmAutoplay();

  setupRevealAnimations();

  initAttarModel();

}


/* ============================================================
   START
============================================================ */

document.addEventListener(

  'DOMContentLoaded',

  initMEEJAZ

);