export async function up(knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id')
    table.string('category')
    table.string('name')
    table.float('unit_price')
    table.integer('quantity')
    table.float('total_price')
    table.string('where_to_buy')
    table.boolean('bought')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('items')
}
