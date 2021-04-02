import React from 'react';
import LanguageContext from '../context/LanguageContext';
class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <button className="ui primary button">
        <LanguageContext.Consumer>
          {(value) => (value === 'english' ? 'Submit' : 'Voorlegen')}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
export default Button;
