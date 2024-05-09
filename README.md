
Tasks :

0. repeat the class 
1. Timer using useState in react
2. Todo (CRUD) , array of string or array of objects 
3. card transitions in react




Drawbacks of using class based component for functional layer 
1. More boiler plate of code
2. This keyword can be confusing
3. Tasks will be splitted to different lifecycles 
4. Code cannot be run from top to bottom , methods will invoke based on life cycle


2018 before class 
2018 after functional -> Hooks , 16.8 Version


Hooks can replace the life cycle methods in class components 

Hooks : Hooks let us use of state and other react features (lifecycle methods)  without writing the class 

Rules of Hooks :
1. Hooks must always used in functional based components
2. Hooks must always call at the top of the functional components , and must import from react 
3. Hooks cannot be conditional , hooks cannot be used in loops 


Examples : 
1. useState hook
2. useEffect hook
3. useRef hook 
4. useCallback hook 
5. useReducer hook 
6. useMemmo hook
7. useContext hook
8. Custom hooks 


useState :
useState is a hook in functional based components which creates and manages the state (data)

replica : constructor and setState in class based components

syntax :
1. useState will accept the initial argument of  any data type

useState(0)

2. useState will retun an array 

const data = useState(0)

3. useState array will contains 2 elements , 1st elememt -> current state , 2nd element -> updater function

const [currentState,updaterFunction] = useState(0)

const -> immutability of state , to change the state we must use updaterFunction


 const [count,setCount]=useState(0)
 const [isSubscribe,setIsSubscribe]=useState(false)
 const[products,setProducts]=useState([])
 const [product,setProduct]=useState({})


 Lifting state up: 

 Lifting state up is a technique used in React to share state between multiple components. Instead of each component having its own local state, the state is lifted up to their closest common ancestor. This common ancestor then passes the state down to the components through props

