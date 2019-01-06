# Authorization Using bcrypt


### To run the server

> npm run dev

### To Acess it

> localhost:5000

### To connect to the database

> You need to run mongod in your terminal and in a different terminal run mongo. Then in the command line type "use authjan" and then type "db.createCollection(users)". Monkjs will attempt and create the dbs for you but it might not and you need to create it manually.

#### To Check If specific user exists
> http://localhost:5000/auth/:username


#### http://localhost:5000/auth/signup

- [x] Users can sign up with a unique username.
- [x] Users cannot sign it with a duplicate username.

#### http://localhost:5000/auth/login
- [x] Users canot login to the app without a username.
- [x] Users canot login to the app without a password.
- [x] If the password is wrong and the username is correct then it asks you to reset it.
- [x] If the password is correct and the username is correct then you login.
- [x] If the username doesn't exists then it tells you that the username doesn't exists.

#### Extra Secure:

- [x] Using a slow hashing algorithm.
- [x] Cookies are HTTP only.
- [x] Cookies are Signed and Secured.
- [x] Cookies are HTTPs only.
- [x] Cookies secret password are in the default environment variables file.