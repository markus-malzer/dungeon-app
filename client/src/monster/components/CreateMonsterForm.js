import React, { Component } from 'react';
const uuidv1 = require('uuid/v1');

export class CreateMonsterForm extends Component {

  state = {
    name: this.props.name || '',
    dungeon_floor: this.props.dungeon_floor || '',
    challenge: this.props.challenge || '',
    leben: this.props.leben || '',
    waffen: this.props.waffen || '',
    rüstung: this.props.rüstung || '',
    zäheit: this.props.zäheit || '',
    schwäche: this.props.schwäche || '',
    resistenzen: this.props.resistenzen || '',
    immunitäten: this.props.immunitäten || '',
    größe: this.props.größe || '',
    beschreibung: this.props.beschreibung || '',
    besonderheiten: this.props.besonderheiten || '',
    skills: this.props.skills || '',
    movement_speed: this.props.movement_speed || '',
    dmg: this.props.dmg || '',
    trefferrate: this.props.trefferrate || '',
  }

  static defaultProps = {
    categorys: [
      'name', 'dungeon_floor', 'challenge', 'leben',
      'waffen', 'rüstung', 'zäheit', 'schwäche', 'resistenzen',
      'immunitäten', 'größe', 'beschreibung', 'besonderheiten',
      'skills', 'movement_speed', 'dmg', 'trefferrate'
    ]
  }

  handleInputChange = (data) => (e) => {
    this.setState({
      [data]: e.target.value,
    });
    console.log(data);
  }

  handleSubmit = () => {
    // check if submit has id
    // if not create a new uuid
    let id = this.props.id || '';
    if (id === '') {
      id = uuidv1();
    }

    // save form data in the variable formData
    let formData = {
      id: id,
    };
    let categorys = this.props.categorys;
    for (let i = 0; i < categorys.length; i++) {
      formData[categorys[i]] = this.state[categorys[i]];
    }

    // pass formData as a parameter to onFormSubmit
    this.props.onFormSubmit({
      data: formData
    })
  }

  render() {
    const inputs = this.props.categorys.map((category, i) => {
      return (
        <div key={i}>
          <h3>{category}</h3>
          <input type='text' value={this.state[category]}
            onChange={this.handleInputChange(category)}
          />
        </div>
      );
    });

    const buttonText = this.props.id ? 'Update' : 'Create';
    return(
      <div className={"monster " + this.props.className}>
        {inputs}

        <button type='submit'
          onClick={this.handleSubmit}
        >
          {buttonText}
        </button>
        <div className="details_toolbar">
          <span onClick={this.props.className === 'create_monster' ? this.props.handleToggleCreateMonster : this.props.handleToggleEdit}>x</span>
        </div>
      </div>
    );
  }
}