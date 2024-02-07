-- CREATE DATABASE IF NOT EXISTS codrrdb
SELECT 'CREATE DATABASE tipsterbyte_main'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'tipsterbyte_main')\gexec