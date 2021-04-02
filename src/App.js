import React from 'react';
import './App.css';
import UserCreate from './components/UserCreate';
import LanguageContext from './context/LanguageContext';
import ColorContext from './context/ColorContext';
import LanguageSelector from './components/LanguageSelector';
class App extends React.Component {
  state = { language: 'english', color: 'red' };
  onLanguageChange = (val) => {
    this.setState({
      language: val.language,
      color: val.color,
    });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          {this.state.language.toUpperCase()}
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
