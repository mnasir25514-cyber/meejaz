'use strict';


/* ==========================================
   MEEJAZ RECEIPT CONFIGURATION
========================================== */

(function renderMEEJAZReceipt() {


  const MEEJAZ_WHATSAPP_NUMBER = '923141322340';


  const root = document.getElementById('receiptContent');

  const actions = document.getElementById('receiptActions');

  const whatsappButton = document.getElementById('whatsappOrder');


  if (!root) return;



  /* ==========================================
     GET ORDER FROM SESSION STORAGE
  ========================================== */

  let order = null;


  try {

    order = JSON.parse(

      sessionStorage.getItem('meejazLatestOrder') || 'null'

    );

  } catch (error) {

    console.warn('Could not read MEEJAZ order:', error);

  }



  /* ==========================================
     IF THERE IS NO ORDER
  ========================================== */

  if (
    !order ||
    !Array.isArray(order.items) ||
    order.items.length === 0
  ) {


    root.innerHTML = `

      <div class="receipt-missing">

        <p class="eyebrow">

          NO ACTIVE RECEIPT

        </p>


        <h2>

          Your next scent story starts here.

        </h2>


        <p>

          There is no recent order summary in this browser tab.

          Return to MEEJAZ and add an attar to your bag.

        </p>


        <a class="button button-dark" href="index.html">

          Explore the collection

          <span>→</span>

        </a>

      </div>

    `;


    if (actions) {

      actions.classList.add('hidden');

    }

    return;

  }



  /* ==========================================
     MONEY FORMAT
  ========================================== */

  const formatMoney = value => {

    return `Rs ${Number(value || 0).toLocaleString('en-PK')}`;

  };



  /* ==========================================
     ORDER DATE
  ========================================== */

  const date = new Date(

    order.createdAt || Date.now()

  );


  const dateText = date.toLocaleString('en-PK', {

    dateStyle: 'medium',

    timeStyle: 'short'

  });



  document.getElementById('receiptDateTop').textContent =

    date.toLocaleDateString('en-PK', {

      day: '2-digit',

      month: 'short',

      year: 'numeric'

    });



  /* ==========================================
     SAFELY DISPLAY CUSTOMER INFORMATION
  ========================================== */

  function escapeHTML(value) {

    return String(value ?? '').replace(/[&<>"']/g, character => ({

      '&': '&amp;',

      '<': '&lt;',

      '>': '&gt;',

      '"': '&quot;',

      "'": '&#39;'

    }[character]));

  }



  /* ==========================================
     GENERATE PRODUCT ROWS
  ========================================== */

  const rows = order.items.map(item => `

    <tr>


      <td>

        ${escapeHTML(item.name)}

        <small>

          ${escapeHTML(item.category)} ·

          ${escapeHTML(item.size)}

        </small>

      </td>


      <td>

        ${Number(item.quantity)}

      </td>


      <td>

        ${formatMoney(

          Number(item.price) * Number(item.quantity)

        )}

      </td>


    </tr>

  `).join('');



  /* ==========================================
     GENERATE FULL RECEIPT
  ========================================== */

  root.innerHTML = `


    <!-- CUSTOMER INFORMATION -->

    <div class="receipt-info-grid">


      <div class="receipt-info-item">

        <span>Order reference</span>

        <strong>

          ${escapeHTML(order.orderId || 'MEEJAZ ORDER')}

        </strong>

      </div>



      <div class="receipt-info-item">

        <span>Date & time</span>

        <strong>

          ${escapeHTML(dateText)}

        </strong>

      </div>



      <div class="receipt-info-item">

        <span>Customer</span>

        <strong>

          ${escapeHTML(order.customer?.name || '')}

        </strong>

      </div>



      <div class="receipt-info-item">

        <span>Phone / WhatsApp</span>

        <strong>

          ${escapeHTML(order.customer?.phone || '')}

        </strong>

      </div>



      <div class="receipt-info-item">

        <span>City</span>

        <strong>

          ${escapeHTML(order.customer?.city || '')}

        </strong>

      </div>



      <div class="receipt-info-item">

        <span>Payment</span>

        <strong>

          Cash on delivery*

        </strong>

      </div>


    </div>



    <!-- ORDER TABLE -->

    <table class="receipt-items-table">


      <thead>

        <tr>

          <th>Attar</th>

          <th>Qty</th>

          <th>Amount</th>

        </tr>

      </thead>


      <tbody>

        ${rows}

      </tbody>


    </table>



    <!-- TOTALS -->

    <div class="receipt-totals">


      <div>

        <span>Subtotal</span>

        <strong>

          ${formatMoney(order.subtotal)}

        </strong>

      </div>



      <div>

        <span>Delivery</span>

        <strong>

          ${formatMoney(order.delivery)}

        </strong>

      </div>



      <div class="grand">

        <span>Total</span>

        <strong>

          ${formatMoney(order.total)}

        </strong>

      </div>


    </div>



    <!-- DELIVERY ADDRESS -->

    <div class="receipt-customer-note">


      <strong>DELIVERY ADDRESS</strong>

      <br>

      ${escapeHTML(order.customer?.address || '')}


      ${

        order.customer?.note

        ? `

          <br><br>

          <strong>ORDER NOTE</strong>

          <br>

          ${escapeHTML(order.customer.note)}

        `

        : ''

      }


    </div>


  `;



  /* ==========================================
     BUILD WHATSAPP ORDER MESSAGE
  ========================================== */

  function buildWhatsAppMessage(

    data,

    dateString,

    priceFormatter

  ) {


    const lines = [


      'Assalamu Alaikum MEEJAZ, I would like to confirm this order:',

      '',

      `Order: ${data.orderId || 'MEEJAZ'}`,

      `Date: ${dateString}`,

      `Name: ${data.customer?.name || ''}`,

      `Phone: ${data.customer?.phone || ''}`,

      `City: ${data.customer?.city || ''}`,

      `Address: ${data.customer?.address || ''}`,

      '',

      'ORDER ITEMS:'

    ];



    data.items.forEach(item => {


      lines.push(

        `• ${item.name} (${item.size}) × ${item.quantity} — ${priceFormatter(

          Number(item.price) * Number(item.quantity)

        )}`

      );

    });



    lines.push(

      '',

      `Subtotal: ${priceFormatter(data.subtotal)}`,

      `Delivery: ${priceFormatter(data.delivery)}`,

      `TOTAL: ${priceFormatter(data.total)}`,

      'Payment: Cash on delivery (please confirm).'

    );



    if (data.customer?.note) {

      lines.push(

        `Note: ${data.customer.note}`

      );

    }



    lines.push(

      '',

      'Please confirm availability and delivery details. Thank you.'

    );



    return lines.join('\n');

  }



  /* ==========================================
     WHATSAPP BUTTON
  ========================================== */

  const whatsappMessage = buildWhatsAppMessage(

    order,

    dateText,

    formatMoney

  );


  whatsappButton.href =

    `https://wa.me/${MEEJAZ_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;


  whatsappButton.setAttribute(

    'aria-label',

    'Send this MEEJAZ order to WhatsApp'

  );


})();