import { ConfigService } from "@nestjs/config";

export class EnviromentConfig {

    // GENERAL
    static readonly APP_RUN_MODE_DEVELOP = `APP_RUN_MODE_DEVELOP`;
    static readonly APP_RUN_MODE_DEBUGGER = `APP_RUN_MODE_DEBUGGER`;
    static readonly PROJECT_ENVIROMENT= process.env.PROJECT_ENVIROMENT;
    static readonly HASH_SALT= +process.env.HASH_SALT;
    static readonly ROOT_NAVIGATION_MULTIMOMDULE_INIT_PATH = `/../../**`;
    
    static readonly ENTITIES_DIRNAME_DEBUG_MODE = `${this.ROOT_NAVIGATION_MULTIMOMDULE_INIT_PATH}/*.entity{.ts,.js}`;
    static readonly ENTITIES_DIRNAME_THREE_LEVELS = `/../../../**/*.entity{.ts,.js}`;
    // TODO: agregar: dist/**/*.entity{.js,.ts}
    static readonly ENTITIES_DIRNAME_DIST_ESTTABLE = `dist/**/*.entity{.ts,.js}`;

    static readonly MIGRATIONS_DIRNAME = `/migration/*{.ts,*.js}`;
    static readonly MIGRATIONS_DIRNAME_ABSOLUTE_PATH = `/migration/{.ts,*.js}`;
    static readonly MIGRATIONS_DIRNAME_ABSOLUTE_PATH_V2 = `/src/migration/{.ts,*.js}`;
    // TODO: dist/migration/**/*{.ts,.js}
    static readonly MIGRATIONS_DIRNAME_DIST = `dist/migration/**/*{.ts,.js}`; // TODO: evaluar `dist/db/migration/*{.ts,.js}`;

    static readonly MIGRATIONS_TABLE_NAME = 'migrations'; 

    // DATABASE
    static readonly DATABASE_MOTOR_MYSQL = "mysql";
    static readonly DATABASE_MOTOR_POSTGRES = "postgres";
    static readonly SINCRONIZED_DATABASE_FALSE = false;
    static readonly SINCRONIZED_DATABASE_TRUE = true;
    static readonly MIGRATIONS_RUN_FALSE = false;
    static readonly MIGRATIONS_RUN_TRUE = true;

    // INFO: preparando el mecanismo con cargue dinámico de variables de entorno
    static readonly configService = new ConfigService();

    static getDB_HOST_MYSQL() {
        return this.configService.get('DB_HOST_MYSQL');
    }

    static  getEntitiesFullPath(appRunMode: string) {
        let pathEntityString = '';

        if (this.APP_RUN_MODE_DEBUGGER == appRunMode) {
            pathEntityString = this.ENTITIES_DIRNAME_DEBUG_MODE;
        } else if (this.APP_RUN_MODE_DEVELOP == appRunMode) {
            pathEntityString = this.ENTITIES_DIRNAME_DIST_ESTTABLE;
        }

        return pathEntityString;
    }
}
