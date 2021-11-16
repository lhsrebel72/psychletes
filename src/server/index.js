const os = require('os');
var http = require('http') , https = require('https') , express = require('express') , app = express();

http.createServer(app).listen(80); https.createServer(app).listen(443);

app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const stripe = require('stripe')('sk_test_51JtxJ2JHl2ZfjKrz4BPNiiPSUOq5ZhhdwB2p24iTO7JoeT5hK5Kna0rHsasIkEP7SXXT50cSWHW7m8LdfhiUJvlX00u5ZBXtsq');
app.use(express.static('public'));
const YOUR_DOMAIN = 'http://localhost:4242/';


app.post('/create-checkout-session', async (req, res) => {
  const product_id = req.query.id;
  const price = await stripe.prices.list({
    limit: 1,
    product: product_id,
  });
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: price?.data[0]?.id,
        quantity: 1
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

app.get('/get-products', async (req, res) => {
  const products = await stripe.products.list({
    limit: 3,
  });
  res.send(products);
});

app.listen(4242, () => console.log('Running on port 4242'));