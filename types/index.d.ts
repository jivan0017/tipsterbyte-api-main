// NodeJS.ProcessEnv

declare namespace NodeJS {
  // DECLARACIÓN EXCPLÍCITA DE VARIABLES DE ENTORNO => TIPO
  interface ProcessEnv {
        // Postgresql
        APP_PORT:             number;
        DB_TYPE:              string;
        DB_HOST:              string;
        DB_PORT:              number;
        DB_USER:              string;
        DB_PASSWORD:          string;
        DB_NAME:              string;

        // mysql
        DB_TYPE_MYSQL:        string;
        DB_HOST_MYSQL:        string;
        DB_PORT_MYSQL:        string;
        DB_USER_MYSQL:        string;
        DB_PASSWORD_MYSQL:    string;
        DB_NAME_MYSQL:        string;

        DB_NEST_ENTITY_FILES: string;
        HASH_SALT:            number;
        JWT_SECRET:           string;
        JWT_EXPIRES_IN:       string;
    }
}
