import React, {Component} from 'react'
import MainList from './MainList.js'

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Main">
                <MainList/>
            </div>
        )
    }
}

export default Main