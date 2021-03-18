import {Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:10
        }
        this.resetCounter=this.resetCounter.bind(this)
    }
    decrementCounter(){
        this.setState(prevState=>({count:prevState.count -1}))
    }
    incrementCounter(){
        this.setState(prevState=>({count:prevState.count +1}))
    }
    resetCounter(){
        this.setState(prevState=>({count:0}))
    }
    render(){
        return(
            <div className="conter">
                <h3>Book Counter</h3>
                <button onClick={(e)=>this.decrementCounter()}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.incrementCounter.bind(this)}>+</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        )
    }
}
export default Counter;