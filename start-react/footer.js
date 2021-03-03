//https://de.reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// ... Der Start Code, den du gerade eingefügt hast ...

const domContainer = document.querySelector('#footer');
ReactDOM.render(e(LikeButton), domContainer);