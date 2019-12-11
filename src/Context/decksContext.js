import React, { Component } from 'react'

const DeckContext = React.createContext({
  decks: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setDecks: () => {},
})
export default DeckContext

export class DeckProvider extends Component {
  state = {
    decks: [],
    error: null,
  };

  setDecks = decks => {
    console.log('setting decks')
    this.setState({ decks })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      decks: this.state.decks,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDecks: this.setDecks,
    }
    return (
      <DeckContext.Provider value={value}>
        {this.props.children}
      </DeckContext.Provider>
    )
  }
}
