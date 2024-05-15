



Controlled component :

1. take the general form which contains inputs
2. For input we will take separate state
3. bind the state with the input using value attribute
4. to control each input , we will attach onChange(attribute) handler for the inputs
6. collect the input value using event.target.value


7. we can apply validations (client side)
8. submit to server via API 


Tasks:
1. Repeat the class 
2. Create the registration form
3. create a fake local json db 
4. Login form UI with proper fonts and styles
5. How to apply google fonts to react app













<!-- Create Ref  -->

Forms in React:

Forms in React can be handled by 2 ways 

1. Uncontrolled components

In Uncontrolled components state or data control will be done by dom

in Uncontrolled components field validations were not possible





2. Controlled components

In Controlled components state control will be done by React

in Controlled components field validations were possible


useRef : useRef is a hook in funtional based components , it allows us to access the dom directly
useRef doesn't cause re-render when updated
useRef is also used to persists the values between renders


There are 2 types of validations 

1. server validations 
2. client validations
