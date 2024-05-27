Tasks :

1. Repeat the class
2. Repeat all the class code
3. Push to git and configure
4. Take few actions and reducer ex: CHANGE_PROFILE_NAME, ADDRESS_CHANGE

5. Props
6. Context api
7. Redux :

Redux :
Redux is a third party js library which is used to manage the state globally
Redux is predictable state container for managing state in js apps

Redux contains 3 main core principles

1. Actions
2. Reducers
3. Store

4. Actions: Actions are objects , which tells what to happen to the application state
   Actions must contain type property , payload is option property

{
type:"BUY_BOOK",
payload:2
}

{
type:"RETURN_BOOK",
payload:2
}

1. BUY_BOOK
2. RETURN_BOOK

Action creators : It is the function which returns the action

const buyBookFunction = () =>{
return {
type:"RETURN_BOOK",
payload:2
}
}

const initialState={
bookCount:100
}

Reducers : It is pure function which changes or manipulates the state based on the action

const reducer = (initialState,action)=>{

switch(action.type){
case "BUY_BOOK"
return {...initialState,bookCount:initialState.bookCount-1}
default :
return state
}

}

3. Store: Store is centralized place where our application data can be stored

Flux contains the multiple stores

Redux contains the single store

To change the state in redux we must dispatch the action

React-Redux is third party library which links react nd redux for state communication and manipulation

1. UseSelector : useSelector is a react-redux hook , which enables us to extract the data
   or redux state to the react layer
   redux - react

2. useDispatch : useDispatch is a react-redux hook , which enables us to trigger an action

react-redux
