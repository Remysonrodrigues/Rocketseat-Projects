const CUSTOM_FUNCTIONS = `
CREATE OR REPLACE FUNCTION on_update_timestamp() 
RETURN trigger AS $$ 
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'mysql';
`

const DROP_CUSTOM_FUNCTIONS = `

`