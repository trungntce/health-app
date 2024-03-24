const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const { authenticate } = require('./service/AuthService');
const { getAllProducts, findByIdProduct, getAllAboutNews, findByIdAboutNews } = require('./models/AboutHealthModel');
const { getMyPageChart, getAllMyPageProducts, findByMyPageProduct } = require('./models/MyPageModel');
const {
    getAllMyRecordProducts,
    getMyRecordChart,
    getMyRecordExercise,
    getMyRecordDiary,
} = require('./models/MyRecordModel');

app.use(express.json());
const cors = require('cors');
// Use CORS with default configuration to allow all origins
app.use(cors());
const SECRET_KEY = 'your_secret_key_here';
const API_PATH = '/api';
const ABOUT_HEALTH_PATH = '/about';
const PRODUCTS_PATH = '/products';
const PRODUCT_PATH = '/product';
const NEWS_PATH = '/news';
const MY_PAGE_PATH = '/my-page';
const MY_RECORD_PATH = '/my-record';
const CHART_PATH = '/chart';
const CHART_EXERCISE = '/exercise';
const CHART_DIARY = '/Diary';

const ID_PATH = '/:id';

// USER AUTHENTICATION
app.post(API_PATH + '/login', async (req, res) => {
    const { username, password } = req.body;
    const result = await authenticate(username, password);

    if (result.success) {
        res.json({ success: true, token: result.token });
    } else {
        res.status(401).json({ success: false, message: result.message });
    }
});

app.post(API_PATH + '/verify-token', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Lấy token từ header

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token.' });
        }

        res.json({ message: 'Token is valid.', user });
    });
});

//ABOUT HEALTH
app.get(API_PATH + ABOUT_HEALTH_PATH + PRODUCTS_PATH, (req, res) => {
    const aboutAll = getAllProducts();
    res.json(aboutAll);
});

app.get(API_PATH + ABOUT_HEALTH_PATH + PRODUCT_PATH + ID_PATH, (req, res) => {
    const { id } = req.params;
    const aboutByid = findByIdProduct(parseInt(id));

    if (aboutByid) {
        res.json(aboutByid);
    } else {
        res.status(404).json({ message: 'about produc not found.' });
    }
});

app.get(API_PATH + ABOUT_HEALTH_PATH + NEWS_PATH, (req, res) => {
    const aboutAll = getAllAboutNews();
    res.json(aboutAll);
});

app.get(API_PATH + ABOUT_HEALTH_PATH + NEWS_PATH + ID_PATH, (req, res) => {
    const { id } = req.params;
    const aboutByid = findByIdAboutNews(parseInt(id));

    if (aboutByid) {
        res.json(aboutByid);
    } else {
        res.status(404).json({ message: 'product not found.' });
    }
});

// MY_PAGE
app.get(API_PATH + MY_PAGE_PATH + CHART_PATH, (req, res) => {
    const aboutAll = getMyPageChart();
    res.json(aboutAll);
});
app.get(API_PATH + MY_PAGE_PATH + PRODUCTS_PATH, (req, res) => {
    const aboutAll = getAllMyPageProducts();
    res.json(aboutAll);
});
app.get(API_PATH + MY_PAGE_PATH + PRODUCT_PATH + ID_PATH, (req, res) => {
    const { id } = req.params;
    const productByid = findByMyPageProduct(parseInt(id));

    if (productByid) {
        res.json(productByid);
    } else {
        res.status(404).json({ message: 'product not found.' });
    }
});

// MY RECORD

app.get(API_PATH + MY_RECORD_PATH + PRODUCTS_PATH, (req, res) => {
    const record = getAllMyRecordProducts();
    res.json(record);
});
app.get(API_PATH + MY_RECORD_PATH + CHART_PATH, (req, res) => {
    const record = getMyRecordChart();
    res.json(record);
});
app.get(API_PATH + MY_RECORD_PATH + CHART_EXERCISE, (req, res) => {
    const record = getMyRecordExercise();
    res.json(record);
});
app.get(API_PATH + MY_RECORD_PATH + CHART_DIARY, (req, res) => {
    const record = getMyRecordDiary();
    res.json(record);
});

app.use('/images', express.static('public/images'));
const port = 3031;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
