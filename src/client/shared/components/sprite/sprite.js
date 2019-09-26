import React, { Component } from 'react';
import './sprite.scss';

class Sprite extends Component {

  constructor(props) {
    super(props);

    this.props = props;
  }

  imageTranslator(color) {
    switch (color) {
      case 'B': return 'b';
      case 'B/G': return 'bg';
      case 'B/P': return 'bp';
      case 'B/R': return 'br';
      case 'U': return 'u';
      case 'U/B': return 'ub';
      case 'U/P': return 'up';
      case 'U/R': return 'ur';
      case 'G': return 'g';
      case 'G/U': return 'gu';
      case 'G/P': return 'gp';
      case 'G/W': return 'gw';
      case 'R': return 'r';
      case 'R/G': return 'rg';
      case 'R/P': return 'rp';
      case 'R/W': return 'rw';
      case 'W': return 'w';
      case 'W/B': return 'wb';
      case 'W/U': return 'wu';
      case 'W/P': return 'wp';
      case 'T': return 'tap';
      case 'Q': return 'untap';
      default: return color;
    }
  };

  render() {
    const colorIdentity = this.imageTranslator(this.props.colorIdentity);
    return (
      <div className={`sprite 
                      ${colorIdentity !== undefined ? colorIdentity : ''} 
                      ${this.props.isInlineManaSymbol !== undefined ? 'inline-mana-symbol' : ''} 
                      ${this.props.colorlessNumber !== undefined ? 'colorless-number' : ''}`}>
        {this.props.colorlessNumber}
      </div>
    );
  }
};

export default Sprite;
