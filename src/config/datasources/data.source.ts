import { ConfigModule, ConfigService } from "@nestjs/config";
import { EnviromentConfig } from "../constants/enviroment.config";
import { DataSource, DataSourceOptions } from "typeorm";

ConfigModule.forRoot({
    envFilePath: `.${process.env.PROJECT_ENVIROMENT}.env`,
    isGlobal: true
});

// INFO: preparando el mecanismo con cargue dinámico de variables de entorno
const configService = new ConfigService();

/*  INFO:  
    - el modo: EnviromentConfig.APP_RUN_MODE_DEBUGGER, únicamente sirve para hacer Debugging,
    el modo: EnviromentConfig.ENTITIES_DIRNAME_DIST_ESTTABLE debe ajustarse para la creación
    de entidades a partir de migraciones o definición de miembros en las clases de entidad para 
    mapear a tablas de la base de datos.
*/

export const DataSourceConfig: DataSourceOptions = {
    type:               EnviromentConfig.DATABASE_MOTOR_MYSQL,
    host:               EnviromentConfig.getDB_HOST_MYSQL(),
    port:      parseInt(configService.get('DB_PORT_MYSQL')),
    username:           configService.get('DB_USER_MYSQL'),
    password:           configService.get('DB_PASSWORD_MYSQL'),
    database:           configService.get('DB_NAME_MYSQL'),
    entities:           [__dirname + EnviromentConfig.getEntitiesFullPath(EnviromentConfig.APP_RUN_MODE_DEBUGGER)], //[`dist/**/*.entity{.js,.ts}`], // TODO: verificar cambio [`dist/**/*.entity{.js,.ts}`],
    migrationsTableName: EnviromentConfig.MIGRATIONS_TABLE_NAME,  
    migrations:         [EnviromentConfig.MIGRATIONS_DIRNAME_DIST], //[`dist/migration/**/*{.ts,.js}`], //<-- ok para migraciones manuales
    migrationsRun:       EnviromentConfig.MIGRATIONS_RUN_FALSE,
    synchronize:         EnviromentConfig.SINCRONIZED_DATABASE_TRUE,
} 

export const AppDS = new DataSource(DataSourceConfig)
