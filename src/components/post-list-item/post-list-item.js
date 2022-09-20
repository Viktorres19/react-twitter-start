import React, { Component } from 'react';

import './post-list-item.scss';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false
    }
    // привязуємо обробник, щоб він спрацював
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }
  // прописаний обробник подій
  onImportant() {
    this.setState(({important}) => ({
      important: !important
    }))
  }

  onLike() {
    this.setState(({like}) => ({
      like: !like
    }))
  }

  render() {
    const {label} = this.props;
    const {important, like} = this.state;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += ' important';
    }

    if (like) {
      classNames += ' like';
    }

    return (
      <div className={classNames}>
        <span
          className="app-list-item-label"
          onClick={this.onLike}
        >
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportant}
          >
            {/*<i className="fa fa-star" />*/}
            star
          </button>
          <button type="button" className="btn-trash btn-sm">
            {/*<i className="fa fa-trash-o" />*/}
            trash
          </button>
          <i className="fa fa-heart" />
        </div>
      </div>
    )
  }
}

/*
const PostListItem = ({label, important = false}) => {

  let classNames = 'app-list-item d-flex justify-content-between';
  if (important) {
    classNames += ' important';
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label">
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm">
          {/!*<i className="fa fa-star" />*!/}
          start
        </button>
        <button type="button" className="btn-trash btn-sm">
          {/!*<i className="fa fa-trash-o" />*!/}
          trash
        </button>
        {/!*<i className="fa fa-heart" />*!/}
        heart
      </div>
    </div>
  )
}

export default PostListItem;*/
