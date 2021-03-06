const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async function(knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('username', 100).unique().notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }).then(() => knex.raw(onUpdateTrigger('users')));
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
