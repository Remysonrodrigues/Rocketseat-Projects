// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "remyson123",
      database: "knex_test",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`
    }, 
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
  onUpdateTrigger: (table) => `
  CREATE TRIGGER ${table}_updated_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  ` 

};
