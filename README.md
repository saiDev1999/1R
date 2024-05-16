


useEffect will replace 3 life cycle methods in class based components 

1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount



useEffect : useEffect is a hook in react functional based components 
which allows us to cause side effects with in the application

side effects:
1. http request 
2. dom manipulation
3. event liseteners 
4. timers
5. third party subscribtions

syntax : 1. useEffect will accept 2 args 

1.1 callback function
1.2 array (dependency array)

syntax : useEffect(()=>{},[])

1. No dependecy array

useEffect(()=>{})

whenever state or prop changes useEffect will repeatedetly executes (infinite loop)

2. Empty dependency array

useEffect(()=>{},[])

whenevr array is empty , useEffect will behave like a componentDidMount (execute one time)

3. array with values


useEffect(()=>{},[value,count])

whenever array with values , useEffect will behave like a componentDidUpdate (executes whenever value changes , state changes )


4. useEffect can return function (optional)

useEffect will behave like a componentWillUnmount

useEffect(()=>{
    return ()=>{
        //Preventing the memory leaks when component removing from dom
    }
},[])





Tasks:
1. Repeat the class
2. Take buttons based on the api (products api) 
3. When we click on the button show the particular data in the UI
4. list the products , give search option for filtering (debounce)




