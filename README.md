# Cached Api

A assignment based project
## Common setup


Clone the repo and install the dependencies.

```
git clone https://github.com/farman05/cacheApi.git
cd cacheApi

npm install
```




## Note
The postman collection has been shared with you there u will get all the api list

All apis are auth based so first u need to get the access token which u can get get by hitting the below url
```
http://localhost:8080/api/auth/authToken
```
From here u will get the access token which u can use to access all the other api
```
Header name : 'access-token'
```
All the environment variables are in .env file like the db,Max limit and TTl,i am commiting that file for this assignment(usually it would be in .gitignore) so that you just have to install and run the project and can easily go through the api.