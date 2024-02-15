// NodeJS.ProcessEnv

declare namespace NodeJS {
  // DECLARACIÓN EXCPLÍCITA DE VARIABLES DE ENTORNO => TIPO
  interface ProcessEnv {
    APP_PORT:             number;
    DB_TYPE:              string;
    DB_HOST:              string;
    DB_PORT:              number;
    DB_USER:              string;
    DB_PASSWORD:          string;
    DB_NAME:              string;
    DB_NEST_ENTITY_FILES: string;
    HASH_SALT:            number;
    JWT_SECRET:           string;
    JWT_EXPIRES_IN:       string;
  }
}
