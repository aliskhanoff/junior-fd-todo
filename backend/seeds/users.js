const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: "Ahmad",   sur_name: "Askhabov",   email: 'ravillion@mail.ru',        password: bcrypt.hashSync('12204900', 10)},
        { first_name: "Idris",   sur_name: "Djamaev",    email: 'ramzess3000@gmail.com',    password: bcrypt.hashSync('12204901', 10)},
        { first_name: "Ramazan", sur_name: "Aliskhanov", email: 'sociprogrammer@gmail.com', password: bcrypt.hashSync('12204902', 10)}
      ]);

    });
};
