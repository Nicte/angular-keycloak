# AngularKeycloak

Angular 7 example project to explore the usage of keycloak as an authentication and authorization service.

## Pre-requisites

Have a keycloak instance running and update your configuration on the init function inside `keycloak.service.ts`.

Alternatively setup a new Keycloak server using Docker:

## Create a Keycloak server using docker

### Create a network
```javascript
$ docker network create keycloak-network
```

### Start a mysql in the new network (Optional: you could skip this step and use the embeded H2 DB by default)
```javascript
docker run --name mysql -d --net keycloak-network -e MYSQL_DATABASE=keycloak -e MYSQL_USER=keycloak -e MYSQL_PASSWORD=password -e MYSQL_ROOT_PASSWORD=root_password mysql
```

### Start keycloak using the network and the mysql db
```javascript
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -d --name keycloak --net keycloak-network jboss/keycloak
```

### Test you Keycloak server
Go to localhost:8080 to see the keycloak welcome page. Access with the credentials used to create the keycloak container (**admin** : **admin** in the example above).

### Configuring your server
Add a new realm by hovering over the top left where it says "Master" and click the "Add Realm" button. Create the necessary roles and users.

Alternatively, import the `keycloak.json` realm to get up and running faster. This will create 2 test roles ("user" and "admin") and will also create a test user (named "user" which has the "user" role but not the "admin" role).