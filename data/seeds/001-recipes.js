exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'pizza'},
        {id: 2, recipe_name: 'cake'},
        {id: 3, recipe_name: 'rice and beans'}
      ]);
    });
};