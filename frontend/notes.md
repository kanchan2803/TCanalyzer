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

-added about and footer 

## proceeding with navbar first 

### creating routes
first creating the routes
- installed react-router-dom 
- setting up browserrouter in main.jsx
- in app.jsx setting up the routes 
  - importing all pages 
  - setting up the routes using route and routes component from react-router-dom
  - setting up the path for each page

### Navbar.jsx
- logo , pages link, and user circle
-Navlink to navigateto pages 
  navlink <NavLink to="/" end className={linkClasses}>Home</NavLink>
- user circle shows the links of leetcode and codeforce andlogot option or the login and signu option
making this meant i need storage so heading towards it 

>setting up storage in backend
>completed setting connection with mongodb and creating user db and routes fro it now making login and sign up frontend

# login & signup

## api/auth.js
It’s basically a helper file that:
Creates an axios instance (API) that knows where your backend lives.
Defines functions that hit your backend endpoints (/auth/signup, /auth/login, etc.).
Makes it easy for React components to call signup(...) or login(...) without repeating axios code everywhere.

1. import axios 
2. make API the axios instance callling the base url
3. then funcions for signup and login '
4. SIGNUP fnxn
  - export an async fnxn taking in name,email and password as input 
  - try catch block 
  - catch will have error and show it in console 
  - try will have 
    - creating data object that stores the reposnce on calling the post endpoint of signup created in backend 
    - const { data } = await API.post("/auth/signup", { name, email, password });
    - return this data 
5. Login fnxn 
   similar steps as above just keep only 2 firlds as input now email and password 

## signup.jsx frontend 
- import signup from auth .js
- useState for form 
  setForm(...)  
  form is your state object holding all fields:
const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
  leetcodeId: "",
  codeforcesId: "",
});
setForm is used to update that state.
- usestate fro message 
- handlechange fnxn 
  e (the event) 
  When you type in an <input> in React, an event is fired. That event contains info like which input triggered it, and what the current value is.
    Example: if you type "kanchan" into the name input →
    e.target.name will be "name" and e.target.value will be "kanchan".
- handleSubmit fnxn
  when submit button is clicked submits the form to signup fnxn of auth .js 
  makes a call to login fnxn fro autologin after signup and navigates to h ome page 

- in rturn we define the structure of complete form 
usin g Input tags

- add its route in app.js 
```  <Route path="/signup" element={<Signup />} />```

- similarly login.jsx is made but we store the tokens and otehr details in localstorage 

### in navbar makes necesary changes relatedto state
- we will remove the hard coded data as earlier and will make it reflect changes when logged in and logged out 

  - added one more usestate for user
  - used useeffect to markthe fields when loggedin 
    - first getting token from localstorage
    - if token is present then set logged in state and set user 
    - change the initial to user's first letter 
    >{isLoggedIn ? user.name[0].toUpperCase() : "?"} {/* Initial for logged user, ? if guest */}
    - set the details with user.name and in lc id and cfid 
    - in logout button set localstorage to clear when onclick
    
trying to fix the login and signup fnxn and to change the state in navbar 
after trying manual mounting and other things navbar details arent getting updated wiht user details 
will be using context now 

# creating authcontext.js 
authcontext created using createcintext 
making authprovider 
it is a fnxn that takes in children prop object
setting user and islogged in usestate
tehn calling useffect
that sets up details in local storage
then making login an dlogout fnxn

adding this context login in navbar and in login.jsx

wrap all components an droutes within authprovider in app.jsx

>there is some constant error in login and so i am revisiting the complete auth , odne with cleaning up and sorting the backend now its turn for frontend

step 1: creating api for backend 
- api folder is renamed to services and moved into src 
- in it auth.js is goingto handle api's for connecting to backend regarding the login and signup

step2: create a signuppage in pages
step3: create a loginpage in pages 
step4: setup routes for these files

>fixing the bug 
1. sending whole user from backend login 
2. fixing authContext
  - removed usestate for loggedin,setloggedin
  - exporting authContext by createContext
  - exporting authProvider by arrow fnxn ,{ children as props }
  - setting user with usestate
  - useeffect,{ []} with initial load once to load the already set user fetching it from localstorage and setting user with json.parse
  - const login arrow fnxn 
    - takes in data as prop
    - store loggedinUser from data.user
    - store token and user as string in localstorage
    - setuser as loggedin user
  - logout fnxn
    - remove item from localstorage 
    -setuser null
  - update fnxn
    - setuser as the updated user
    - set updated user in localstorage
  - set this line const isLoggedIn = !!user;
  - then return the provider and children with al things 
  ```js
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout , updateUser}}>
      {children}
    </AuthContext.Provider>
  ); 
  ```
  - export the usecontext hook for easy usage\

3.  The provider should only be in main.jsx to wrap your entire application once.
    and clean the app.jsx 
4. context/privateContext.jsx => component/PrivateRoute.jsx
5. fix api calls 
6. fix pages with new import paths
- will directly use  useAuth hook created and not usecontext

> login and signup are now error free 

# settings page 
1. add new api call fnxn in services/api.js
  - no need to send id now as backend is getting it from token only send data
  - add an interceptor to thisfor authorisation
2. add this to authcontext
3. create thre signup page 





