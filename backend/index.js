const express = require('express');
const app = express();
const router = express.Router();


router.use('/', (req, res, next) => {
    res.status(200).json({ ok: true });
});

app.use(router);

app.listen(4201, () => 'listening for your commands master!');