# EJECUTAR MIGRACIONES:

- Setear la variable de enviroment en dataSource:
EnviromentConfig.setEnviromentMode(
    EnviromentConfig.APP_RUN_MODE_DEVELOP_AND_SYNC  // <--- esta es la variable
);

- Luego ejecutar estas consultas SQL para vaciar las referencias de migraciones actuales:
SELECT * FROM tipsterbyte_main.migrations;
DELETE FROM tipsterbyte_main.migrations;

- Borrar el contenido de: src/migrations
Se elimina el archivo generado auttomáticamente

- Se ejecuta el comando para generar nueva migración:
npm run m:gen -n ./src/migrations/init

- Se ejecuta el comando para correr la migración:
npm run m:run



# VACIAR DB:
DROP TABLE tipsterbyte_main.user;
DROP TABLE tipsterbyte_main.person;
DROP TABLE tipsterbyte_main.city;
DROP TABLE tipsterbyte_main.state;
DROP TABLE tipsterbyte_main.country;
DROP TABLE tipsterbyte_main.continent;
DROP TABLE tipsterbyte_main.migrations;