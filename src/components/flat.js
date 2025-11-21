import React from "react";
import './flat.css';

class Flat extends React.Component {
  // When clicking on a flat, we call the selectFlat method received as a prop
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }
  render() {
    const title = `${this.props.flat.price}${this.props.flat.priceCurrency} - ${this.props.flat.name}`
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    }
    return (
      // On click, we call the handleClick method
      <div className="flat" onClick={this.handleClick}>
        <div className="flat-picture" style={style}>
        </div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    );
  }
}

export default Flat;
