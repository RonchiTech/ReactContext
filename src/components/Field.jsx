import React from 'react';
import LanguageContext from '../context/LanguageContext';
class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const name = this.context === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>{name}</label>
        <input type="text" />
      </div>
    );
  }
}
export default Field;
