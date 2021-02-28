module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '192.168.56.1',
      user : 'postgres',
      password : '12204900',
      database : 'todo-app'
      //filename: './dev.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
