
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {

      return knex('roles').insert([
        {name: 'authenticated'},
        {name: 'admin'}
      ]);
    });
};
