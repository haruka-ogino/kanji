export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('kanji').del()

  // Inserts seed entries
  await knex('kanji').insert([
    { id: 1, name: '机' },
    { id: 2, name: '持' },
    { id: 3, name: '観' },
  ])
}
