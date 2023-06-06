# Curso Backend

## Pruebas

** El proyecto puede ser iniciado con el comando **
> $ npm test

** Config Mongo local **
> MONGODB_CNX_STR = 'mongodb://127.0.0.1:27017/ecommerce'

### se deben cargar los datos en auth.confif.js que se encuentra en src\config\auth.config.js
```
export const githubAppId = 0
export const githubClienteId = ''
export const githubClientSecret = ''
export const githubCallbackUrl = 'http://localhost:8080/api/sessions/githubcallback'
```

.env.example
```
NODE_GITHUB_APP_ID=
NODE_GITHUB_CLIENT_ID=
NODE_GITHUB_CLIENT_SECRET=
NODE_GITHUB_CALLBACK_URL=
NODE_MONGO_URL=
NODE_ADMIN_EMAIL=
NODE_ADMIN_PASSWORD=
NODE_PORT=
```
http://localhost:8080/

### ususarios admin:
```
user: adminCoder@coder.com
pwd: adminCod3r123

user: admin
pwd: admin
```

<!-- ## Contacto

- [Instagram]()
- [LinkedIn]() -->