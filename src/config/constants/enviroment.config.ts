import { ConfigService } from "@nestjs/config";
import { 
    IDatabaseProps,
    IConfigEnviromentProps
    
} from "../interfaces/ConfigProps.interface";


export class EnviromentConfig {

    // GENERAL
    static readonly APP_RUN_MODE_DEVELOP    = `APP_RUN_MODE_DEVELOP`;
    static readonly APP_RUN_MODE_DEBUGGER   = `APP_RUN_MODE_DEBUGGER`;
    static readonly APP_RUN_MODE_MIGRATIONS = `/../../**/*.entity{.ts,.js}`;
    static APP_RUN_MODE_ASSIGNED            = ''
    static DATABASE_MOTOR_MODE_ASSIGNED     = ''

    static readonly PROJECT_ENVIROMENT      = process.env.PROJECT_ENVIROMENT;
    static readonly HASH_SALT               = +process.env.HASH_SALT;

    // INFO: escalar lectura 2 niveles astrás
    static readonly ROOT_NAVIGATION_MULTIMOMDULE_INIT_PATH = `/../../**`;
    static readonly ENTITIES_DIRNAME_DEBUG_MODE            = `${this.ROOT_NAVIGATION_MULTIMOMDULE_INIT_PATH}/*.entity{.ts,.js}`;    
    static readonly ENTITIES_DIRNAME_THREE_LEVELS          = `/../../../**/*.entity{.ts,.js}`;
    // TODO: agregar: dist/**/*.entity{.js,.ts}
    static readonly ENTITIES_DIRNAME_DIST_ESTTABLE         = `dist/**/*.entity{.ts,.js}`;
    static readonly MIGRATIONS_DIRNAME                     = `/migrations/*{.ts,*.js}`;
    static readonly MIGRATIONS_DIRNAME_ABSOLUTE_PATH       = `/migrations/{.ts,*.js}`;
    static readonly MIGRATIONS_DIRNAME_ABSOLUTE_PATH_V2    = `/src/migrations/{.ts,*.js}`;
    static readonly MIGRATIONS_DIRNAME_ABSOLUTE_PATH_SRC   = `src/migrations/**/*{.ts,.js}`;
    // TODO: dist/migration/**/*{.ts,.js}
    static readonly MIGRATIONS_DIRNAME_DIST                = `dist/src/migrations/**/*{.ts,.js}`; // TODO: evaluar `dist/db/migration/*{.ts,.js}`;
    static readonly MIGRATIONS_TABLE_NAME                  = 'migrations'; 

    // DATABASE
    static readonly DATABASE_MOTOR_MYSQL       = "mysql";
    static readonly DATABASE_MOTOR_POSTGRES    = "postgres";
    static readonly SINCRONIZED_DATABASE_FALSE = false;
    static readonly SINCRONIZED_DATABASE_TRUE  = true;
    static readonly MIGRATIONS_RUN_FALSE       = false;
    static readonly MIGRATIONS_RUN_TRUE        = true;

    // INFO: preparando el mecanismo con cargue dinámico de variables de entorno
    static readonly configService = new ConfigService();

    static readonly ENVIROMENT_DEVELOPMENT_AND_MIGRATIONS_MANUAL_MODE: string = 'DEVELOPER_AND_MIGRATIONS_MANUAL_MODDE';
    static readonly ENVIROMENT_DEBUGIN_AND_MIGRATIONS_AUTO_MODE: string       = 'DEVELOPER_AND_MIGRATIONS_MANUAL_MODDE';


    static getModeEnviromentProperties(): IConfigEnviromentProps {
        
        const envConfigProperties: IConfigEnviromentProps = {
            entityPath: '',
            migrationPath: '',
            migrationRunStatus: false,
            synchronizeDatabaseStatus: false,
        }

        if (this.ENVIROMENT_DEBUGIN_AND_MIGRATIONS_AUTO_MODE == this.getEnviromentMode()) {
            envConfigProperties.entityPath                = this.APP_RUN_MODE_DEBUGGER;
            envConfigProperties.migrationPath             = this.MIGRATIONS_DIRNAME_DIST;
            envConfigProperties.migrationRunStatus        = this.MIGRATIONS_RUN_FALSE;
            envConfigProperties.synchronizeDatabaseStatus = this.SINCRONIZED_DATABASE_TRUE;
        }

        if (this.ENVIROMENT_DEVELOPMENT_AND_MIGRATIONS_MANUAL_MODE == this.getEnviromentMode()) {
            envConfigProperties.entityPath                = this.APP_RUN_MODE_DEVELOP;
            envConfigProperties.migrationPath             = this.MIGRATIONS_DIRNAME_ABSOLUTE_PATH_SRC;
            envConfigProperties.migrationRunStatus        = this.MIGRATIONS_RUN_TRUE;
            envConfigProperties.synchronizeDatabaseStatus = this.SINCRONIZED_DATABASE_FALSE;
        }        

        return envConfigProperties;
    }

    static getDatabaseProperties(): IDatabaseProps {
        const dbProperties: IDatabaseProps = {
            dbHost: '',
            dbPort: '',
            dbUser: '',
            dbPassword: '',
            dbName: '',
        };

        if (this.DATABASE_MOTOR_MYSQL == this.getDatabaseMotorMode()) {
            dbProperties.dbHost = this.configService.get('DB_HOST_MYSQL');
            dbProperties.dbPort = this.configService.get('DB_PORT_MYSQL');
            dbProperties.dbUser = this.configService.get('DB_USER_MYSQL');
            dbProperties.dbPassword = this.configService.get('DB_PASSWORD_MYSQL');
            dbProperties.dbName = this.configService.get('DB_NAME_MYSQL');
        }

        if (this.DATABASE_MOTOR_POSTGRES == this.getDatabaseMotorMode()) {
            dbProperties.dbHost = this.configService.get('DB_HOST_POSTGRESQL');
            dbProperties.dbPort = this.configService.get('DB_PORT_POSTGRESQL');
            dbProperties.dbUser = this.configService.get('DB_USER_POSTGRESQL');
            dbProperties.dbPassword = this.configService.get('DB_PASSWORD_POSTGRESQL');
            dbProperties.dbName = this.configService.get('DB_NAME_POSTGRESQL');            
        }

        return dbProperties;
    }

    static setEnviromentMode(mode: string) {
        this.APP_RUN_MODE_ASSIGNED = mode;
    }

    static getEnviromentMode(): string {
        return this.APP_RUN_MODE_ASSIGNED;
    }    

    static setDatabaseMotorMode(mode: string) {
        this.DATABASE_MOTOR_MODE_ASSIGNED = mode;
    }

    static getDatabaseMotorMode(): string {
        return this.DATABASE_MOTOR_MODE_ASSIGNED;
    }  

    //TODO: deprecated!
    static  getEntitiesFullPath(appRunMode: string) {
        let pathEntityString = '';

        if (this.APP_RUN_MODE_DEBUGGER == appRunMode) {

            pathEntityString = this.ENTITIES_DIRNAME_DEBUG_MODE;

        } else if (this.APP_RUN_MODE_DEVELOP == appRunMode) {
            // NOTE: modo de generación manual de migraciones
            pathEntityString = this.ENTITIES_DIRNAME_DIST_ESTTABLE;

        } else if (this.APP_RUN_MODE_MIGRATIONS == appRunMode) {
            // NOTE: modo automático de migraciones
            // TODO: evaluar y complementar
        }

        return pathEntityString;
    }
}
