# CREAR PROYECTO NEST
    - comando:
    nest new api-blog -g

    - Crear proyecto nest en el directorio actual:
    nest new .

# GENERAL CONFIG
    - Instalar module config
    npm i --save @nestjs/config

    - class validador
    npm install @nestjs/class-validator --save

# CREAR RECURSO
    - para saber las ayudas previo a la ejecición del comando:
    nest generate resource business/post --help

    - ejecutar la creación del recurso en una carpeta predefinida
    nest generate resource business/post --no-spec

# TYPE ORM INSTALL
    - Recurso web:
    https://docs.nestjs.com/techniques/database

    - comando:
    npm install --save @nestjs/typeorm typeorm mysql2

# Crear interface dentro de carpeta
    - comando:
    nest g interface user/interfaces/user


# Crear carpeta raíz constantes:
    config
        constants
            cors


# Configurar migraciones en el archivo: pachage.json

    - agregar los siguients scripts en el tag: scripts:

    "migration:generate": "npm run typeorm --migration:run",
    "migration:revert": "npm run typeorm --migration:revert",
    "orm:init": "typeorm-ts-node-esm -d ./src/config/datasources/data.source.ts",
    "m:gen": "cross-env PROJECT_ENVIROMENT=develop npm run orm:init migration:generate",
    "m:run": "cross-env PROJECT_ENVIROMENT=develop npm run orm:init migration:run"


# Generar recursos complementarios (state, city, address):
    - comando:
    nest generate resource state --no-spec
    nest generate resource city --no-spec
    nest generate resource address --no-spec

    nest generate resource location/country


# Instalar cache manager:
    - comando:
    npm install @nestjs/cache-manager cache-manager
    npm install cache-manager

# Creación de módulo para cache
    - comando
    nest g module cache
    nest g service cache

# Instalación de class validator y class transform
    - comandos:
    npm i --save class-validator class-transformer

# AUTH MODULE
    - comando:
    nest g module auth
    nest g service auth
    nest g controller auth

# LIGAS -----------------------------------------
- Crear recurso de league-manager
nest generate resource league-manager

# CATEGORY MODULE
    nest g module category
    nest g service category
    nest g controller category

# PRODUCT MODULE
    nest g module product
    nest g service product
    nest g controller product

# CORRER MIGRACIONES:
    -     La configuración de las migraciones es la siguiente según el caso:

# CONFIGURACIONES MIGRACIONES
- PARA REALIZAR MIGRACIONES AUTOMATICAS:
 
    entities:           [EnviromentConfig.getEntitiesFullPath(EnviromentConfig.APP_RUN_MODE_DEVELOP)], //[`dist/**/*.entity{.js,.ts}`], // TODO: verificar cambio [`dist/**/*.entity{.js,.ts}`],
    migrationsTableName: EnviromentConfig.MIGRATIONS_TABLE_NAME,  
    migrations:         [EnviromentConfig.MIGRATIONS_DIRNAME_ABSOLUTE_PATH_SRC], //[`dist/migration/**/*{.ts,.js}`], //<-- ok para migraciones manuales    
    synchronize:         EnviromentConfig.SINCRONIZED_DATABASE_FALSE,
    migrationsRun:       EnviromentConfig.MIGRATIONS_RUN_TRUE,
    

- PARA REALIZAR MIGRACIONES A PARTIR DE ENTIDAADES:
    entities:           [__dirname + EnviromentConfig.getEntitiesFullPath(EnviromentConfig.APP_RUN_MODE_DEBUGGER)], //[`dist/**/*.entity{.js,.ts}`], // TODO: verificar cambio [`dist/**/*.entity{.js,.ts}`],
    migrationsTableName: EnviromentConfig.MIGRATIONS_TABLE_NAME,  
    migrations:         [EnviromentConfig.MIGRATIONS_DIRNAME_DIST], //[`dist/migration/**/*{.ts,.js}`], //<-- ok para migraciones manuales
    migrationsRun:       EnviromentConfig.MIGRATIONS_RUN_FALSE,
    synchronize:         EnviromentConfig.SINCRONIZED_DATABASE_TRUE,
       