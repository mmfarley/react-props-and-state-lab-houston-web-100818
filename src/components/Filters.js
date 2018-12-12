import React from 'react'

class Filters extends React.Component {

  handleFilterChange = (e) => {
    this.props.onChangeType(e.target.value)
  }

  handleFindPetsClick = (e) => {
    this.props.onFindPetsClick()
  }

  render() {
    console.log(this.props)
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleFilterChange} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
