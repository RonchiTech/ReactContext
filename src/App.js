import React from 'react';
import './App.css';
import UserCreate from './components/UserCreate';
import LanguageContext from './context/LanguageContext';
class App extends React.Component {
  state = { language: 'english' };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.setState({ language: 'english' })}
          />
          <i
            className="flag nl"
            onClick={() => this.setState({ language: 'dutch' })}
          />
          {this.state.language}
          <LanguageContext.Provider value={this.state.language} >
            <UserCreate />
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
