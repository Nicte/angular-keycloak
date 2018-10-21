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

### Start a mysql in the new network (Optional)
This step is optional. You could also skip this step and use the embeded H2 DB that comes by default with Keycloak.

```javascript
docker run --name mysql -d --net keycloak-network -e MYSQL_DATABASE=keycloak -e MYSQL_USER=keycloak -e MYSQL_PASSWORD=password -e MYSQL_ROOT_PASSWORD=root_password mysql
```

### Start keycloak
Start a new keycloak container using the created network.

```javascript
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -d --name keycloak --net keycloak-network jboss/keycloak
```
Because we called our db `mysql` keycloak detects it by default and uses it. If not, it would use its own H2 DB. More info about [Keycloak docker image](https://hub.docker.com/r/jboss/keycloak/)

### Test you Keycloak server
Go to localhost:8080 to see the keycloak welcome page. Access the admin console with the credentials used to create the keycloak container (**admin** : **admin** in the example above).

### Configuring your server
Add a new realm by hovering over the top left where it says "Master" and click the "Add Realm" button. Create the necessary roles and users. Create a new Client and update the clientId inside `keycloak.service.ts`.

Alternatively, import the `keycloak.json` realm to get up and running faster. This will create 2 test roles ("user" and "admin") and will also create a test user (named "user" which has the "user" role but not the "admin" role). A Client with clientId `js-console` will also be created to match the configuration.

## TODO
* Add couple components and routing.
* Create an authguard to only allow access to components to logged-in users and users having the necessary roles.