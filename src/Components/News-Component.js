/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react'


class NewsComponets extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
    super(props);
    this.state ={
        lists:[]
    }
    
}



componentDidMount(){
const url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=626633f093cd40b7bda4ca1a94cc2b89"
fetch(url)
.then(res =>res.json())

.then(res =>{

this.setState({lists:res.articles})
})

.catch(err=> console.log(err)) 
}



render(){
    return(
       
        <div>
            {
                this.state.lists.map((item)=>{
               return <ul>
                <li key = {item.id}>
               <h1>{item.title}</h1>
               <p>{item.description}</p>
               <button >translate</button>
                </li>
                
                    </ul>
                })
            }
        </div>
    )
    
}
}



export default NewsComponets;