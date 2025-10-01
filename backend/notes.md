starting with project's backend first 
## step 1
# creating server.js
- imported all necessaities
- created an express app
- started all dotenv , cors, and defined other things
- made it listen at port and a fnxn showing server is running
# created .env file
- added PORT = 5000
- groqapi key

## step 2
# created a route /analyze
- because we will be sending user requrest to llm we will need a post request 
- creating a post endpoint /analyze
- inside it we will be getting user input from req.body
- printing it to check if we are getting user input or not

# setting up langhchain and groq 
- installed @langchain/groq
- imported ChatGroq from it
- made model instance of ChatGroq
- we will create a chain for neater syntax
- created a prompt template
    - created a chat prompt template
    - added input variables code and language
    - added template string
- created a parser using JsonOutputParser
    - defined expected keys in the json we want from llm
    - added these keys to the parser
    - this is required bcz otherwise llm was returning text only and not exact json object so to directly get our json in result without having any manual parsing in analyze endpoint we are using langchain's parser
    -used getFormatInstructions() method of parser to get format instructions
    - added these format instructions to the prompt template
-created a safeparser fnxn because even after many tries it was returning a string only so to avoid errors in parsing we are using this fnxn
- created chain using pipe operator
    - prompt => model => parser
-invoke this chain in post request
- tested it using postman
    - sent a post request by adding a json with code and language json in the data under body

>will start with frontend now , working backend is ready , so will build frontend api first then the actual frontend

done with frontend setup , need storage for futrther frontend 
# setting up storage
- installed all dependencies
- created a project and cluster on mongo atlas
- got connection string and stored in env 
- now in server.js
    - imported mongoose
    - connected mongoose to our db using connection string from env

## models
to store schema of data 
created user.js and history.js

>installed bcrypt and jsonwebtoken for authentication
## settingup auth routes
- created auth.js in routes
  - It’s just an Express router file where we put routes for signup and login.
  - express.Router() gives us a little “sub-application” where we can define routes (router.get, router.post, etc.).
  - We need two main routes:
        - POST /auth/signup → Register a new user.
        - POST /auth/login → Login existing user.
    - in signup route 
        - first get everything from req body 
        - then use bcrypt to hash the passowrd 
            - const salt = await bcrypt.genSalt(10);
            - const hashedPassword = await bcrypt.hash(password, salt);
        - then create a new user using our User model and save it to db
        - then send success response
    - in login route
        - we will take in email and password from user 
        - first match the emial to find an existing user 
        - check if user  dont exit we will return a status 400 
        - then is user exists so will compare the asswords using bcrypt 
        - if paswords doen t match then will show error setttig status to 400
        - if password matches then it is a valid login so will create a token using jwt
        - then token is created using jwt 
        -the response is sent 

### setting up middleware 
- importing jwt
- exportig a async fnxn taking in req res and next
- making atry catch where catch sends themessage as invalid token
- in try block
    1. getting the authorisation from headers 
    2. checking if token is there or not else retrn status 401 no token
    3. textracting the token from this header by using split
        - Header looks like: Authorization: Bearer <JWT_TOKEN>
        - We split by space and take the second part → the actual token
    4. verify token using jwt.verify 
    5. then attch this info to the user re.user = decoded
        - Now every route that uses this middleware can access req.user.id without asking frontend to send userId.
    6. continue to route handle so next()

# in server.js
## import authRoutes from auth.js
1️⃣ In auth.js At the bottom, you wrote: 
>export default router;
export default means:
“When someone imports this file, this is the main thing they get.”
So router is being exported as the default export.
2️⃣ How to import a default export
When you have a default export, you can name it anything you want during import. Example:
>import authRoutes from "./routes/auth.js";
Here, authRoutes is just the name you give to the imported default.

## set up the /auth route
app.use("/auth", authRoutes);
This tells your server:

“Any request that starts with /auth should be handled by the auth.js router.”

After this, your backend will recognize /auth/signup and /auth/login.

done with login storage thing and the user database 
now moving to frontend to complete the home page with modes tab before creating the history storage

somehow finally using context and local strage the login an dsignuo is errorfree and diplaying wcorrect info on ui 

now making settings app because we need to update the id's 
# settings.jsx

## adding a route in routes/authcontroller.js for updation
router.put
user. findbyidandupdate fnxn will be use d to make call
✅ This updates user info in MongoDB.

## in authcontext add updateuser fnxn
const updateUser = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

## in api/auth.js a fnxn to update user
export const updateUserApi = async (id, userData) => {
  const res = await API.put(`/user/${id}`, userData);
  return res.data;
};

## finally the settings.jsx page 

### route handler user.js
get and put route 

### in api.js 
adding api handler fnxn in api.js
to get and update user

### update context
