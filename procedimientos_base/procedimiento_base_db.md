# DOCKERIZANDO

- Se crea en la raíz misma que contiene el proyecto NEST, la carpeta /db, dentro de esta, el fichero: init.sql en cuyo contenido:

-- CREATE DATABASE IF NOT EXISTS codrrdb
SELECT 'CREATE DATABASE ventasdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'ventasdb')\gexec

- Ejecutar docker desktop

- Crear el fichero en la raíz misma del proyecto NEST, el fichero: docker-compose.yml

version: '3.1'

services:
  ventas_pg:
    image: postgres:15.1
    container_name: ventas_pg
    restart: always
    environment:
      POSTGRES_DB: ventasdb    
      POSTGRES_USER: ventasadmin
      POSTGRES_PASSWORD: secret1234
    volumes:
      - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - 5432:5432


# SUBIR IMAGEN DOCKER
- Ejecutar el comando para subir la imagen:
docker-compose up
docker-compose -f docker-compose.prod.yml up -d
docker-compose -f docker-compose.mysql.yml up -p 3307:3306 --name 
mysql-docker-test -d

- correr mysql docker (DOCKER COMPOSE)
- entrar a la carpeta contenedora del docker file:
  cd docker-files/

- Modificar  el docker compose para especificar el usuario del SO para acceder a AppData
  volumes:
      - /c/Users/usuario/AppData/Local/Programs/MySQL/MySQL Server 8.0/data:/var/lib/mysql

- correr el comando:
  docker-compose -f docker-compose-mysql.yml up -d

- verificar contenedores activos:
docker ps



INTENTO #1  con comandos directamente en el SQL d DBeaver:
    CREATE USER 'tipsterbyte_main_admin'@'localhost' IDENTIFIED BY 'secret123$';

    -- Conectar este usuario desde cualquier host
    CREATE USER 'tipsterbyte_main_admin'@'%' IDENTIFIED BY 'secret123$';

    GRANT ALL PRIVILEGES ON tipsterbyte_main.* TO 'tipsterbyte_main_admin'@'localhost';
    -- otorgar para todas las bds:
    GRANT ALL PRIVILEGES ON *.* TO 'tipsterbyte_main_admin'@'localhost';

    -- aplicar los cambios anteriores:
    FLUSH PRIVILEGES;

    -- verificar creación de usuarios:
    SELECT User, Host FROM mysql.user WHERE User = 'tipsterbyte_main_admin';





- Una vez creada la conexión con la bd a través de un IDE (DBeaver por ej.), la cadena de conexión
válida para conectar es la URL:
jdbc:mysql://localhost:3306/tipsterbyte_main?allowPublicKeyRetrieval=true&useSSL=false

- como opción 2, mirar la captura de pantalla que indica como modificar el valor de la propiedad de conexión: "allowPublicKeyRetrieval a true"


INTENTO #2:
    - pasos para configurar el usuario en la terminal de mysql:
    docker exec -it tipsterbyte_main_mysql_test mysql -u root -p
    
    Ingresa la contraseña de root: secret
    Crea el usuario y otorga permisos:

    CREATE USER 'tipsterbyte_main_admin'@'%' IDENTIFIED BY 'secret';
    GRANT ALL PRIVILEGES ON tipsterbyte_main.* TO 'tipsterbyte_main_admin'@'%';
    FLUSH PRIVILEGES;

    Verifica que el usuario tiene los permisos correctos:
    SHOW GRANTS FOR 'tipsterbyte_main_admin'@'%';

    Reinicia el contenedor de MySQL para asegurarte de que los cambios se apliquen correctamente:
    docker restart tipsterbyte_main_mysql_test

    - se conecta entonces con la misma clave asignada






- para bajara imagen:
docker-compose -f docker-compose.prod.yml down

- Ejecutar el comando para bajar la imagen:
docker-compose stop

- Descargara DBeaver y configurar de la siguiente manera teniendo en cuenta los datos de conexión del fichero docker-compose.yaml, captura de pantalla:


<p align="center">
  <a href="https://memodevs.com/repo_images/tipsterbyte/succ_docker_posgresqql.png" target="_blank"><img src="https://memodevs.com/repo_images/tipsterbyte/succ_docker_posgresqql.png" width="1200" alt="Nest Logo" /></a>
</p>

-------------------------------------------------------------------------

# MIGRACIONES
- crear manualmente migración a partir del comando:
npx typeorm migration:create ./src/migration/create_table_user
npx typeorm migration:create ./src/migration/create_table_state
npx typeorm migration:create ./src/migration/create_table_city
npx typeorm migration:create ./src/migration/create_table_address

- Generar migraaciones
npm run m:gen -- ./src/migrations/init

npm run m:gen -n ./src/migrations/init
npm run m:run

## CREAR TABLAS - REFFERENCIAS DE EJEMPLO
npx typeorm migration:create ./src/migration/create_table_category
npx typeorm migration:create ./src/migration/create_table_product

- Alter tables:
npx typeorm migration:create ./src/migration/alter-table-state
npx typeorm migration:create ./src/migration/insert-in-state
npx typeorm migration:create ./src/migration/insert-in-city
npx typeorm migration:create ./src/migration/alter-table-city

- inser user root
npx typeorm migration:create ./src/migration/insert-root-in-user

- Agregar columna
npx typeorm migration:create ./src/migration/alter-table-user

# MYSQL DOCKER:

- COORER:
  docker container run -d --name=mysql-docker -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret mysql:8.0.36

docker run -p 3307:3306 --name mysql-docker e MYSQL_ROOT_PASSWORD=secret -d mysql:8.0.36
docker exec -it mysql-docker mysql -p
create database tipsterbyte_main;
 -
 docker images
 docker ps



