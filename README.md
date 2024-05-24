









Tasks :
1. Repeat the class
2. Create a custom for internet handing 
3. Research on design patterns for react
4. Take a button , On click on button generate the circles
5. For circle give default color white , by clicking on particular circle , turn color to black , show the count of number colored circles



custom hooks in react:

Custom hooks are user defined hooks, which makes us to extract the common functuality
and resuing in multiple components
custom hooks are general JS functions which contains the logic part
custom hooks are designed using the predefined hooks


Target :
Create a hook for common functuality or logic like 
counter









Optimization techniques :

1. Using key prop when loading larger amount of data
2. Using React.Fragments as a shared parent
3. useMemo usage for memorizing the value
4. React.memo for skipping re-renderings
5. useCallback for memorizing the function
6. Lazy loading when loading huge data




HOC:
A component passed as argument to other component, this will results in reusing of
functional logic


React.memo:

React.memo is HOC(Higher order components) Pattern 
React.memo is like pure component in react class based component
 sReact.memokips the unnecassary re-renderings , it gets re-render only when state 
or prop changes









useCallback:

useCallback is hook in functional based components,
it is memorization in react , which allows us to memorize the function with out 
recreating of a function


syntax :

useCallback(callbackFn,array)
callbackFn -> Need to memorize 
array -> include the values in which function has to recreate 

