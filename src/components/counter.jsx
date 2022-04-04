import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Counter extends Component {
    constructor(){
        super()

        this.increase = this.increase.bind(this);
        
    }
    state = {  count : 0,
    imgUrl : 'https://picsum.photos/200',
    persons : ['jabbar','arslan','hizbullah','ghafoor']
    
    } 
    render() { 
        
        let classes = 'btn btn-';
        classes+=this.state.count===0? "warning" : "primary";

        return <>
        {console.log(this.props)}

    
        <span >{this.formatCounter()}</span>
        {/* <img src={this.state.imgUrl} alt="" />
        <br/> */}
        <button type="button" className={classes} onClick={this.increase}>Increment</button>
        <button type="button" className="btn btn-warning" onClick={this.decrease.bind(this)}>Decrease</button>
        <button type="button" className="btn btn-danger" onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>

        {/* <ul className="list-group">
            {
                this.state.persons.map((it)=>(<li key ={it} className="list-group-item">{it}</li>))

            }

        </ul> */}
        </>

    }

    componentDidMount(){

        this.setState({count:this.props.value})

    }

    formatCounter(){

        const {count} = this.state;
        return(count ===0? <h1>Zero</h1> : <h1>{count}</h1>)

    }

    increase(){

        this.setState({count:this.state.count+1})


    }

    decrease(){

        this.setState({count:this.state.count-1})

    }
}
 
