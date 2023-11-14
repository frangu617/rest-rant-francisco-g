const router = require('express').Router();

router.get('/new', (req, res) => {
  res.render(`places/new`)
})

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai-food.jpg',
    picAuthor: 'Bruna Branco',
    picAuthorAddress: 'https://unsplash.com/@brunabranco'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    picAuthor: 'Ricardo L',
    picAuthorAddress: 'https://unsplash.com/@ricardol'
  }]

  res.render(`places/index`, { places })
})
module.exports = router;