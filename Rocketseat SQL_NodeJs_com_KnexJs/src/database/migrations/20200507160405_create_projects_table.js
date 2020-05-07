

exports.up = function(knex) {
    return knex.schema.createTable('projects', (table) => {
      table.increments('id');
      table.string('title', 100);
      table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE'); 
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projects');
  };
