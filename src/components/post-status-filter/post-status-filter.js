import React, {Component} from 'react';
/*import { Button } from 'reactstrap';*/

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    // поміщаємо кнопки в масив даних
    this.buttons = [
      {name: 'all', label: 'Всі'},
      {name: 'like', label: 'Сподобалось'}
    ]
  }
  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const { filter, onFilterSelect } = this.props;
      const active = filter === name;
      const clazz = active ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </button>
      )
    })
    return (
      <div className="btn-group">
        {/*<Button color='info'>
        Всі
      </Button>*/}
        { buttons }
      </div>
    )
  }
}