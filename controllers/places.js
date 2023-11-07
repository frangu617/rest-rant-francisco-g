const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`<h1>GET /places</h1>
    <img src="https://http.cat/200">`)
})
module.exports = router;