import { ConfigModule } from "@nestjs/config";
import { EnviromentConfig } from "../constants/enviroment.config";
import { DataSource, DataSourceOptions } from "typeorm";

ConfigModule.forRoot({
    envFilePath: `.${process.env.PROJECT_ENVIROMENT}.env`,
    isGlobal: true
});

/*  NOTE:  - REFACTORIZAR MENSAJE
    - el modo: EnviromentConfig.APP_RUN_MODE_DEBUGGER, únicamente sirve para hacer Debugging,
    el modo: EnviromentConfig.ENTITIES_DIRNAME_DIST_ESTTABLE debe ajustarse para la creación
    de entidades a partir de migraciones o definición de miembros en las clases de entidad para 
    mapear a tablas de la base de datos.
*/
EnviromentConfig.setEnviromentMode(
    EnviromentConfig.APP_RUN_MODE_DEVELOP_AND_SYNC
);

EnviromentConfig.setDatabaseMotorMode(
    EnviromentConfig.DATABASE_MOTOR_MYSQL
)

export const LOCATION_INIT_PATH = getInitPath();

/* NOTE: configurar según el modo 
    - modo debugger: __dirname + EnviromentConfig.getEntitiesFullPath(EnviromentConfig.APP_RUN_MODE_DEBUGGER)
    - modo develop: EnviromentConfig.getEntitiesFullPath(EnviromentConfig.APP_RUN_MODE_DEVELOP)
    - modo migration: 
*/
export const DataSourceConfig: DataSourceOptions = {    
    type:                EnviromentConfig.DATABASE_MOTOR_MYSQL,
    host:                EnviromentConfig.getDatabaseProperties().dbHost,
    port:       parseInt(EnviromentConfig.getDatabaseProperties().dbPort),
    username:            EnviromentConfig.getDatabaseProperties().dbUser,
    password:            EnviromentConfig.getDatabaseProperties().dbPassword,
    database:            EnviromentConfig.getDatabaseProperties().dbName,
    entities:            [LOCATION_INIT_PATH + EnviromentConfig.getModeEnviromentProperties().entityPath],    
    migrationsTableName: EnviromentConfig.MIGRATIONS_TABLE_NAME,  
    migrations:          [EnviromentConfig.getModeEnviromentProperties().migrationPath],
    synchronize:         EnviromentConfig.getModeEnviromentProperties().synchronizeDatabaseStatus,
    migrationsRun:       EnviromentConfig.getModeEnviromentProperties().migrationRunStatus,
}

function getInitPath () {

    return EnviromentConfig.APP_RUN_MODE_DEBUGGER == EnviromentConfig.getEnviromentMode() ? 
        __dirname : '';
}

export const AppDS = new DataSource(DataSourceConfig)
