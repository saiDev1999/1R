



Tasks:
1. Repeat the class 
2. Home screen UI with cards (hover effects)
3. Cart Screen UI
4. Prop drilling and how to avoid (prepare docs)
5. Global state management ways (prepare docs)
6. Fake json db local (CRUD)













Global state management :



Whenever components hierarchy increases it is difficult to manage the state using useState
We can manage the data globally irrespective of components in the application using Global state management techniques


3 ways :
1. props 

Prop drilling :
To share the information or data between nested components through out each level of component structure


2. Context api

Context api can be used in both class and functional components 
Context api is a inbuild concept in react , which enables us to manage the data accross all 
the components by avoiding prop drill

in functional components we use useContext hook for managing the data globally

Steps to create context api:

1. Identify the data that needs to be shared (component)
2. Use the createContext method from react
3. Wrap the Provider with the created context (set of components that data needs to share)
4. pass the value attribute to the provider , and give data to the value (data needs to share)
5. identify the component to use the data, use useContext hook to consume the data



3. Redux




Local state management using useState hook
































Dynamic behaviour :

1. parameter change
2. content change in the UI

 <Route   path='/:city/:restaurantUniqueId'  Component={RestaurantDetailScreen}  />

https://www.zomato.com/
hyderabad/
krishnapatnam-kondapur











Tasks:
1. Repeat the class
2. Give navigations for all pages , Load the products in the home screen with css
3. 




React-Router-DOM 

npm i react-router-dom


1. static routes  --> fixed path ex:zomato -> investor-relation
2. Dynamic routes --> Dynamic oath ex:zomato -> location based restaurants, id based




static routes : we need to need decide the routes 

1. home screen 
2. setting screen 
3. About screen
4. Blog screen


There are 2 ways to redirect to the specific path 
1. Using Link 
2. useNavigate hook in react router dom