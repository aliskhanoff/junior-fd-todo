exports.up = function(knex) {
    
   return knex.schema
      
      .createTable('roles', table => {
         table.increments('id');
         table.string('name', 128).notNullable();
      })

      .createTable('users', table => {
         table.increments('id');

         table.string('first_name', 64);
         table.string('sur_name',   64);
         table.string('third_name', 64);
         table.string('avatar_url', 64);
         table.string('email',    128).notNullable().unique();
         table.string('password', 256).notNullable();
         table.boolean('is_confirmed').notNullable().defaultsTo(false);
         table.boolean('is_deactivated').notNullable().defaultsTo(false);

         table.integer('role_id').references("id").inTable("roles") .defaultsTo(1);
         table.timestamps(true, true);
      })

      .createTable('lists', table => {
         table.increments('id');
         table.integer('user_id').references("id").inTable("users");
         table.string('name', 128).notNullable();
         table.date('date_created').nullable();
         table.date('date_updated').nullable();
         table.timestamps(true, true);
      })
      
      .createTable('todos', table => {
         table.increments('id');
         table.integer('list_id').references("id").inTable("lists").onDelete("CASCADE");
         table.string('title', 256).notNullable();
         table.text('content').notNullable();
         table.timestamps(true, true);
      });


  };
  
  exports.down = function(knex) {
    return knex.schema
         .dropTable("todos")
         .dropTable("lists")
         .dropTable("users")
         .dropTable("roles");
  };
  
  exports.config = { transaction: false };