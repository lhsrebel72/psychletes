const os = require('os');
var http = require('http') , https = require('https') , express = require('express') , app = express();

http.createServer(app).listen(80); https.createServer(app).listen(443);

app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const stripe = require('stripe')('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');
app.use(express.static('public'));
const YOUR_DOMAIN = 'http://www.psychletes.com/';


app.post('/create-checkout-session', async (req, res) => {
  const product_id = req.query.id;
  const price = await stripe.prices.list({
    limit: 1,
    product: product_id,
  });
  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 10,
            currency: 'usd',
          },
          display_name: 'Base shipping',
          //Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          }
        }
      }
    ],
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