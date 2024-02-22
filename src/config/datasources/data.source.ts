import { ConfigModule } from "@nestjs/config";
import { EnviromentConfig } from "../constants/enviroment.config";
import { DataSource, DataSourceOptions } from "typeorm";

ConfigModule.forRoot({
    envFilePath: `.${process.env.PROJECT_ENVIROMENT}.env`,
    isGlobal: true
});

/*  INFO:  
    - el modo: EnviromentConfig.APP_RUN_MODE_DEBUGGER, únicamente sirve para hacer Debugging,
    el modo: EnviromentConfig.ENTITIES_DIRNAME_DIST_ESTTABLE debe ajustarse para la creación
    de entidades a partir de migraciones o definición de miembros en las clases de entidad para 
    mapear a tablas de la base de datos.
*/

export const DataSourceConfig: DataSourceOptions = {
    type:               EnviromentConfig.DATABASE_MOTOR_MYSQL,
    host:               EnviromentConfig.getDatabaseProperties(EnviromentConfig.DATABASE_MOTOR_MYSQL).dbHost,
    port:      parseInt(EnviromentConfig.getDatabaseProperties(EnviromentConfig.DATABASE_MOTOR_MYSQL).dbPort),
    username:           EnviromentConfig.getDatabaseProperties(EnviromentConfig.DATABASE_MOTOR_MYSQL).dbUser,
    password:           EnviromentConfig.getDatabaseProperties(EnviromentConfig.DATABASE_MOTOR_MYSQL).dbPassword,
    database:           EnviromentConfig.getDatabaseProperties(EnviromentConfig.DATABASE_MOTOR_MYSQL).dbName,
    entities:           [__dirname + EnviromentConfig.getEntitiesFullPath(EnviromentConfig.APP_RUN_MODE_DEBUGGER)], //[`dist/**/*.entity{.js,.ts}`], // TODO: verificar cambio [`dist/**/*.entity{.js,.ts}`],
    migrationsTableName: EnviromentConfig.MIGRATIONS_TABLE_NAME,  
    migrations:         [EnviromentConfig.MIGRATIONS_DIRNAME_DIST], //[`dist/migration/**/*{.ts,.js}`], //<-- ok para migraciones manuales
    migrationsRun:       EnviromentConfig.MIGRATIONS_RUN_FALSE,
    synchronize:         EnviromentConfig.SINCRONIZED_DATABASE_TRUE,
} 

export const AppDS = new DataSource(DataSourceConfig)
