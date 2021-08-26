import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    meals: []
  };

  async componentDidMount() {
    const response = await fetch('/api/meals');
    const body = await response.json();
    this.setState({ meals: body, isLoading: false });
  }

  render() {
    const {meals, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading ... </p>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <div className="App-intro">
            <h1>Meal List</h1>
            {meals.map(meal => 
              <div key={meal.mealId}>
                {meal.mealName}
              </div>
              )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
