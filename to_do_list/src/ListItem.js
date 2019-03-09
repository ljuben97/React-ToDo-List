import React, {Component} from 'react'

class ListItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <li>
                <div>
                    <h3 className="LeftItem" id="text">{this.props.index+1}.  {this.props.item}</h3>
                    <h3 className="RightItem" onClick={this.HandleRemve}>X</h3>
                </div>
            </li>
        )
    }

    HandleRemve=()=>{
        console.log(this.props.index);
        this.props.RemoveItem(this.props.index);
    }
}

export default ListItem