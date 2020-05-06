// up: o que vai acontecer quando a migration
exports.up = function(knex) {
    //Criando uma nova tabela
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
  
};
// down: caso precisse voltar a atras 
exports.down = function(knex) {
  //Deletar tabela
  return knex.schema.dropTable('ongs');
};
