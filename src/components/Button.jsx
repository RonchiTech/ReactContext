import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button
            className={`ui button ${color === 'red' ? 'red' : 'primary'}`}
          >
            <LanguageContext.Consumer>
              {(value) => (value === 'english' ? 'Submit' : 'Voorlegen')}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
