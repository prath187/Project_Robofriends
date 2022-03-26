import React from "react";
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from "./SearchBox";

class App extends React.Component {

    constructor () {
        super()
        this.state= {
            robots: robots,
            searchfield : ''
        }
    }

    onSearchchange = (event) =>{
        this.setState({searchfield: event.target.value})
        


    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
    return(

            <div className="tc">
                <h1>Robo-Friends</h1>
                <SearchBox searchchange = {this.onSearchchange}/>

            <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;