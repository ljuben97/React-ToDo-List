import React, {Component} from 'react'

class AddItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div>
                    <input onKeyPress={this.handleKeyPress} id="myInput" placeholder="Title..." type="text"/>
                    <span onClick={this.InsertItem} className="addBtn" id="insert">Add</span>
                </div>
            </div>
        )
    }

    InsertItem=()=>{
        let text=document.getElementById("myInput");
        if(text.value==="") return;
        this.props.AddItem(text.value);
        text.value="";
    };

    handleKeyPress=(event)=>{
        if(event.key === 'Enter'){
            this.InsertItem();
        }
    }
}

export default AddItem