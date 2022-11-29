<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos.
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno del ```.env```

7. Ejecutar la aplicación en dev con:
```
npm run start:dev
```

8. Reconstruir la base de datos con la semilla
```
http://localhost:3000//api/v2/seed
```


## Stack usado
* MongoDB
* Nest



# Production Build

1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno para producción
3. Construir o crear la nueva imagen.
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```


* En caso de que quieras utilizar tu imagen luego de crearla
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up 
```


