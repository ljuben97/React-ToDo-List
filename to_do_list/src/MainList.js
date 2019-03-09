import React, {Component} from 'react'
import AddItem from "./AddItem.js";
import Items from "./Items.js";
import Style from "./Style.css"

class MainList extends Component{
    constructor(props){
        super(props);
        this.state={
            array:[]
        }
    }

    render(){
        return(
            <div id="Main">
                <br/>
                <br/>
                <br/>
                <div id="myDIV" className="header">
                    <h2>My To Do List</h2>
                    <AddItem AddItem={this.InsertItem}/>
                </div>
                <Items RemoveItem={this.RemoveItem} array={this.state.array}/>
            </div>
        )
    }

    InsertItem=(text)=>{
        let NewArray=this.state.array;
        NewArray.push(text);

        this.setState({
            array:NewArray
        })
    };

    RemoveItem=(index)=>{
        let NewArray=this.state.array;
        NewArray.splice(index, 1);

        this.setState({
            array:NewArray
        })
    }
}

export default MainList