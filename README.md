



Pure component :

Pure component allows us to skip the unneccasary re-renders  , it will check whether prop or state 
changed , it allows re-render only when component state or prop changes


pure component internally follows the shouldComponentUpdate lifecycle method in updating phase 

Advantages:
1. Only batch updates occurs

syntax :

extends Component
extends PureComponent 

