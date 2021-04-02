import React from 'react';
import './App.css';
import UserCreate from './components/UserCreate';
import LanguageContext from './context/LanguageContext';
import ColorContext from './context/ColorContext';
class App extends React.Component {
  state = { language: 'english', color: 'red' };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.setState({ language: 'english', color: 'red' })}
          />
          <i
            className="flag nl"
            onClick={() =>
              this.setState({ language: 'dutch', color: 'primary' })
            }
          />
          {this.state.language}
          <LanguageContext.Provider value={this.state.language}>
            <ColorContext.Provider value={this.state.color}>
              <UserCreate />
            </ColorContext.Provider>
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
