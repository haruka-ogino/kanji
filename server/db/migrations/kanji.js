export async function up(knex) {
  return knex.schema.createTable('kanji', (table) => {
    table.increments('id')
    table.string('character')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('kanji')
}
