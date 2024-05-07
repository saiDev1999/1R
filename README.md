



7th May Task :
1. Repeat the class
2. Populate the buttons based on the size of response, 
3. Each button should be numbered , when we click on particular number ,populate the data in UI
4. fetch and axios
5. Class based component and functional based difference
6. take a corousel , by default 3 , give add new button , by adding new dummy image has to add to the corousel

6th may Tasks:
1. Repeat the class 
2. Hit the category api using axios (async and await)
3. Populate the category button on th UI
4. Add interaction to the button (filters via button)
5. All button for showing all the list

1. Fetch vs Axios

Axios : Axios is a third party library which helps us to make http calls efficiently
Advanatages of axios over fetch :
1. Automatic json response 
2. Status codes will be provided by the axios
3. intercept the request and response using axios








Tasks:
1. Repeat the class
2. Replace today class with array of objects (TODO  based on ID)
3. Style the class topics , TODO 
4. Prepare for git hub , tasks , till date topics 





Human life cycle :
Earth 

1. Birth stage 
2. Survival stage
3. Expiry stage



Component life cycle : Life cycle of components tells us how elements behaving from creation 
to removal from dom
Dom

1. Mounting stage 

    1. Constructor : To create and initialize the state in class component , we need constructor

    2. Render : To insert the jsx inside the dom we actually need this method

    3. Component did mount : it is a method where we can perform the side effects 
    side effects : 
    1. Http calls (Api calls) when page load
    2. dom manipulations when page load
    3. Timers trigger when page load
    4. Event listeners when page load
 Note : Component did mount will runs only once in a life cycle 

    4.  GetDerivedStateFromProps

       // it changes the state based on the props over the time 

2. Updating stage 

1. render
2. GetDerivedStateFromProps
3. component did update : To cause or perform side effects in the updating phase
4. shouldComponentUpdate : it is internally used in pure component 
in general a component has to update when state or prop changes
if state or props doesn't change , we should not update the component
5. getSnapShotBeforeUpdate: To get the state or props of the previous cycle


3. UnMounting stage :
whenever component removed from the dom , we call it as UnMounting stage
component by default can have some memory leaks or data leaks ,
we should prevent these data leaks , we can use Component will unmount 
1. Component will unmount 
