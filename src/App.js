import React, {Component} from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters'


class App extends Component {
	state = {  }
	render() { 
		return ( 
			<React.Fragment>
				<NavBar/>
				<main clasName="container">
					<Counters/>
				</main>
			</React.Fragment>
		 );
	}
}
 
export default App;

