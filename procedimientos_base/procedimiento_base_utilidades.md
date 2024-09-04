Para eliminar la carpeta node_modules y el archivo package-lock.json en un proyecto NestJS, y luego reinstalar todas las dependencias, puedes usar el siguiente comando en Unix:

bash
Copiar código

```bash
rm -rf node_modules package-lock.json && npm install
```
Este comando:

rm -rf node_modules package-lock.json: Elimina la carpeta node_modules y el archivo package-lock.json.
npm install: Reinstala todas las dependencias listadas en package.json.
Esto asegura una instalación limpia de las dependencias


rm -rf node_modules package-lock.json && npm install

- nueva dependencia
npm i --save-dev @types/node