import { Component } from 'react';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.phonebookWrapper}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nameInput" className={`form-label ${css.formLabel}`}>
            Name
          </label>
          <input
            className={`form-control ${css.contactInput}`}
            id="nameInput"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label
            htmlFor="numberInput"
            className={`form-label ${css.formLabel}`}
          >
            Number
          </label>
          <input
            className={`form-control ${css.contactInput}`}
            id="numberInput"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button type="submit" className="btn btn-primary">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default Phonebook;

Phonebook.propTypes = {
  addContact: PropTypes.func.isRequired,
};
