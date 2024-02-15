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
ocker-compose -f docker-compose-mysql.yml up -d

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