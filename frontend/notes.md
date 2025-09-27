# starting with api.js as we just finished backend 

## making api.js
1. import axios
2. create an axios instance with baseURL API 
3. export the instance
    - async await fnxn 
    - await response from the post endpoint we created in backend 
    - now whatevr (here code,language) is input as props in backend server,js or in the endpoint we created , is passed as props in theis async fnxn
    - nxt try catchblock is made catch is made to handle errors 
    - within try  we make a call to the post endpoint we created in backend server.js
    - we pass the code and language as data to the post endpoint
    - we return the response data

> created a quick testapi fnxn using useeffect in app.js to test if api.js is working fine or not

### 🔧 Testing API Integration

Before building the frontend UI, we can verify that the `api.js` file (which connects frontend to backend) works properly.
useEffect(() => { ... }, []);
→ This runs once when your React app starts (empty dependency array means “run on mount only”).

Test API call
Inside useEffect, you called your backend manually:
This sends a POST request to http://your-backend-url/analyze.

1. Import the `analyzeCode` function inside `App.js`:
   ```js
   import { useEffect } from "react";
   import { analyzeCode } from "./api";

   function App() {
     useEffect(() => {
       const testApi = async () => {
         try {
           const res = await analyzeCode(
             "function sum(arr) { let total = 0; for (let i=0; i<arr.length; i++) total += arr[i]; return total; }",
             "javascript"
           );
           console.log("Test API Response:", res);
         } catch (err) {
           console.error("Test API Error:", err);
         }
       };

       testApi();
     }, []);

     return <h1>Testing API… check console</h1>;
   }

   export default App;

## Building the Frontend UI
installed tailwind css 
``` bash 
npm install tailwindcss @tailwindcss/vite
``` 
configured vite.config.js to use tailwind 
imported tailwind css in css files 

## Building the UI Components

### starting with home.jsx
- exporting a functional component Home
- first created the html structure 
  - heading 
  - language dropdown
  - textarea
  - button 
  - response box
- now importing usestate to handle state of language ,code and response
- creating the handleAnalyze fnxn
  - this fnxn is actually setting the states of input and result
  - first check for empty code and return from here stopping the process 
  - show loading or thinking or analyzing for initial state by setting the setResult 
  - next will be try catch block 
  - catch will catch the error and set the result state with the error message
  - try will make the api call to the backend using the analyzeCode fnxn we created in api.js
  - we will have to pass both language an dcode here 

- now in return section of the component 
  - created the html structure using tailwind css classes
  - heading 
  - dropdown for language selection 
    - onChange event to set the language state 
  - textarea for code input 
    - onChange event to set the code state 
  - button to analyze the code 
    - onClick event to call the handleAnalyze fnxn
  - response box to show the result or response from backend
    - showing the result state here
    - need to extract everything sepearately and use dconditional rendering to do so 
  
> the app is running now , going to push on github 
> the structure fro complete app is made now 
>going to create all components and page should render componenets so home page cod ewill eventually change as of now ,as comonents will be rendered and not the exact functionality 



