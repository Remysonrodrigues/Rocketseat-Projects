
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); //Cria uma chave de id auto incrementada
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        //Criando o relacionamento com a tabela 'ongs'
        table.string('ong_id').notNullable();
        //Criando a chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs');                
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
