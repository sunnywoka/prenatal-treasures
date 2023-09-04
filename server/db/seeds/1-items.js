export async function seed(knex) {
  await knex('items').insert([
    {
      id: 1,
      category: 'Clothes',
      name: 'Little bundle going home 6 piece set',
      unit_price: 55.99,
      quantity: 1,
      total_price: 55.99,
      where_to_buy:
        'https://www.farmers.co.nz/children/baby-size-0000-2/clothing-sets/little-bundle-going-home-6-piece-set-vanilla-6530282',
      bought: false,
    },
    {
      id: 2,
      category: 'Bottles',
      name: 'Flexible Peristaltic Slim-Neck Bottle PP 240ml (M)',
      unit_price: 18.99,
      quantity: 2,
      total_price: 37.98,
      where_to_buy:
        'https://pigeonbaby.co.nz/collections/bottles/products/flexible-peristaltic-nipple-nursing-bottle-pp240ml-m',
      bought: false,
    },
    {
      id: 3,
      category: 'Books',
      name: 'The Healthy Pregnancy Book',
      unit_price: 34.05,
      quantity: 1,
      total_price: 34.05,
      where_to_buy:
        'https://www.amazon.com.au/Healthy-Pregnancy-Book-Everything-Americas/dp/0316187437',
      bought: true,
    },
  ])
}
