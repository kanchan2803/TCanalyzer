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



