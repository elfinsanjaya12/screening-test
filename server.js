const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

const data = {
  visitor: {
    id: 1,
    title: 'Visitor',
    icon: '/images/arrow.png',
    value: '20 Visitor',
    imageUrl: '/images/name-image.png',
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
    icon: '/images/arrow.png',
    value: '124 Views',
    imageUrl: '/images/name-image.png',
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
    icon: '/images/arrow.png',
    value: '24 Sold',
    imageUrl: '/images/name-image.png',
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
    icon: '/images/arrow.png',
    value: 'Rp. 350.000',
    imageUrl: '/images/name-image.png',
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


// create a GET route
app.get('/dashboard', (req, res) => {
  res.send({ express: data });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
