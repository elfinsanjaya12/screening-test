const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

const dashboard = {
  visitor: {
    id: 1,
    title: 'Visitor',
    icon: '/images/arrow.png',
    value: '20 Visitor',
    imageUrl: '/images/static_visitor.png',
    visitoroneweek: '56 visitor',
    parsoneweek: '7 day',
    up: '/images/up.png',
    persenoneweek: '12.31%',
    visitoramounth: '126 visitor',
    parsamounht: '30 day',
    persenamounht: '4.76%',
    down: '/images/down.png',
  },
  page: {
    id: 1,
    title: 'Pages View',
    icon: '/images/page.png',
    value: '124 Views',
    imageUrl: '/images/static_page_view.png',
    visitoroneweek: '56 visitor',
    parsoneweek: '7 day',
    up: '/images/up.png',
    persenoneweek: '12.31%',
    visitoramounth: '126 visitor',
    parsamounht: '30 day',
    persenamounht: '4.76%',
    down: '/images/down.png',
  },
  product: {
    id: 1,
    title: 'Product Sold',
    icon: '/images/product.png',
    value: '24 Sold',
    imageUrl: '/images/static_product_sold.png',
    visitoroneweek: '56 visitor',
    parsoneweek: '7 day',
    up: '/images/up.png',
    persenoneweek: '12.31%',
    visitoramounth: '126 visitor',
    parsamounht: '30 day',
    persenamounht: '4.76%',
    down: '/images/down.png',
  },
  sales: {
    id: 1,
    title: 'Total Sales',
    icon: '/images/sales.png',
    value: 'Rp. 350.000',
    imageUrl: '/images/static_total_sales.png',
    visitoroneweek: '56 visitor',
    parsoneweek: '7 day',
    up: '/images/up.png',
    persenoneweek: '12.31%',
    visitoramounth: '126 visitor',
    parsamounht: '30 day',
    persenamounht: '4.76%',
    down: '/images/down.png',
  },
};

const pageview = [
  {
    id: 1,
    icon: '/images/whatsapp.png',
    title: 'Whatsapp',
    url: 'https://elfinsanjaya12.github.io',
  },
  {
    id: 2,
    icon: '/images/facebook.png',
    title: 'Facebook',
    url: 'https://fecabook.com',
  },
  {
    id: 3,
    icon: '/images/shopee.png',
    title: 'Shopee',
    url: 'https://shopee.com',
  },
  {
    id: 4,
    icon: '/images/tokopedia.png',
    title: 'Tokopedia',
    url: 'https://tokopedia.com',
  },
];


// create a GET route
app.get('/dashboard', (req, res) => {
  res.status(200).json({data:dashboard})
});

app.get('/page-view', (req, res) => {
  res.send({ data: pageview });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
