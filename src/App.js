import React from "react";
import CardList from './CardList'

import SearchBox from "./SearchBox";
import './App.css'

class App extends React.Component {

    constructor () {
        super()
        this.state= {
            robots: [],
            searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots : users})});
    }

    onSearchchange = (event) =>{
        this.setState({searchfield: event.target.value})

    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })

        if(this.state.robots.length === 0)
        {
            return <h1>loading</h1>
            
        }
        else
        {
            return(

                <div className="tc">
                    <h1 className="f1">Robo-Friends</h1>
                    <SearchBox searchchange = {this.onSearchchange}/>
    
                <CardList robots={filteredRobots}/>
                </div>
            );
        }
    
    }
}

export default App;