import React, {Component} from 'react'
import ListItem from './ListItem.js'

class Items extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        let self=this;
        let Items=this.props.array.map(function (item, index) {
            return <ul id="myUL">
                        <ListItem RemoveItem={self.props.RemoveItem} index={index} item={item} key={index}/>
                   </ul>
        });

        return(
            <div>
                {Items}
            </div>
        )
    }



}

export default Items