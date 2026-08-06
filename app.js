/* ==========================================================================
   BillBot India - Interactive Client Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initWhatsAppSimulator();
});

/* Navbar scroll blur & shadow effect */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 15, 29, 0.95)';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
      navbar.style.background = 'rgba(10, 15, 29, 0.85)';
      navbar.style.boxShadow = 'none';
    }
  });
}

/* Interactive WhatsApp Chat Simulator */
function initWhatsAppSimulator() {
  const simChat = document.getElementById('simChat');
  const btnCatalog = document.getElementById('btnCatalog');
  const btnOrder = document.getElementById('btnOrder');
  const btnInvoice = document.getElementById('btnInvoice');

  if (!simChat) return;

  btnCatalog?.addEventListener('click', () => {
    appendOutgoing('1');
    setTimeout(() => {
      appendIncoming(`🛍️ *BillBot Store Catalog*\n\n1. Premium Basmati Rice 5kg - ₹450\n2. Pure Organic Cow Ghee 1L - ₹650\n3. Tata Salt 1kg - ₹28\n\n*Reply with Item # to Order!*`);
    }, 600);
  });

  btnOrder?.addEventListener('click', () => {
    appendOutgoing('Order 2');
    setTimeout(() => {
      appendIncoming(`✅ *Order Placed! (ID: #ORD-9482)*\nItem: Pure Organic Cow Ghee 1L\nTotal: ₹650 (Incl. 5% GST)\n\n👇 *Pay via Meta UPI:*`);
      setTimeout(() => {
        appendIncoming(`📲 *UPI QR Code Generated*\nUPI ID: billbot@upi\nAmount: ₹650.00\nStatus: ⏳ Pending Payment`);
      }, 700);
    }, 600);
  });

  btnInvoice?.addEventListener('click', () => {
    appendOutgoing('Payment Completed');
    setTimeout(() => {
      appendIncoming(`🎉 *Payment Received via Meta UPI!*\nOrder Status: 🟢 Confirmed & Processing.\n\n📄 *Download Tax Invoice:* \nhttps://billbot-india.workers.dev/download/inv-9482.pdf`);
    }, 700);
  });
}

function appendOutgoing(text) {
  const simChat = document.getElementById('simChat');
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble chat-outgoing';
  bubble.innerText = text;
  simChat.appendChild(bubble);
  simChat.scrollTop = simChat.scrollHeight;
}

function appendIncoming(text) {
  const simChat = document.getElementById('simChat');
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble chat-incoming';
  bubble.innerHTML = text.replace(/\n/g, '<br>').replace(/\*(.*?)\*/g, '<strong>$1</strong>');
  simChat.appendChild(bubble);
  simChat.scrollTop = simChat.scrollHeight;
}
