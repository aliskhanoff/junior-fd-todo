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

  staging: {

    client: 'sqlite3',
    connection: {
      filename: './data/production.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations'
    }

  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/production.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
