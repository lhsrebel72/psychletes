const stripe = require('stripe')('sk_test_51JtxJ2JHl2ZfjKrz4BPNiiPSUOq5ZhhdwB2p24iTO7JoeT5hK5Kna0rHsasIkEP7SXXT50cSWHW7m8LdfhiUJvlX00u5ZBXtsq');
const express = require('express');
const app = express();
app.use(express.static('public'));
const YOUR_DOMAIN = 'http://localhost:3000/checkout';
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1Ju0Y3JHl2ZfjKrzq6DsfTYK',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.redirect(303, session.url);
});
app.listen(4242, () => console.log('Running on port 4242'));