import axios from "axios";
import Card from "../../../functional/card/card";
import CircleSpinner from "../../../functional/spinners/circle-spinner";

const { Component } = require("react");

class Mounting extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      message: "GOOD MORNING",
      products: [],
      color:"red",
      categories:[],
      loading:false
    };
  }
  componentDidMount() {
    console.log("componentDidMount",document);
    document.title=this.state.message
    //side effects
    this.fetchData();
    this.fetchCategories()
  
  }
  fetchData = async () => {
    try{
      this.setState({
        loading:true
      })
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status === 200) {
      this.setState({
        products: response.data,
        loading:false
      });
    } else {
      alert("something went wrong");
    }
}catch(err){
    console.log(err)
}
  };

  fetchCategories = async ()=>{
   const {data} = await axios.get("https://fakestoreapi.com/products/categories")
    
   const newResponse= [...data,"All"]

   

   this.setState({
    categories: newResponse
   })
    
  }

  static getDerivedStateFromProps(props) {
    console.log(props)
    // it changes the state based on the props over the time

    console.log("getDerivedStateFromProps",props);
    return {
        color:props.color
    };
  }
 
  filterButton=async(selected)=>{
    this.setState({
      loading:true
    })
    if(selected==="All"){
      this.fetchData()

    }else{
      const response = await axios.get(`https://fakestoreapi.com/products/category/${selected}`)
      console.log(response)

      this.setState({
       products:response.data,
       loading:false
      },()=>{})

    }
  }
   
  render() {
    console.log("render");
    return (
      <>
        <h1 style={{color:this.state.color}} >Mounting phase</h1>
        {
          this.state.categories.length >0 && this.state.categories.map((each)=>{
            return(
              <button onClick={()=>this.filterButton(each)} >{each}</button>
            )
          })
        }
        <div
          style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}
        >
          { !this.state.loading  ? (
            this.state.products.map((eachProduct) => {
              const { title } = eachProduct;
              return (
                <>
                  <Card product={eachProduct} />
                </>
              );
            })
          ) : (
            <CircleSpinner />
          )}
        </div>
      </>
    );
  }
}

export default Mounting;
