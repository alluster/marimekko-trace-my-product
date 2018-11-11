import React, { Component } from 'react';
import { Link } from 'react-router-dom' 

class ContactCard extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
    }
  }
  
render() { 
       return (
      <Link to={ "" }>
        <div className="card margin-bottom-50">
        <img className="card-image" src={this.props.data.fields.avatar.fields.file.url} alt="" />
        <div className="card-container">
          <p>{this.props.data.fields.name}</p> 
          <div className="margin-top-25">
          <p className="lighter">{this.props.data.fields.summary}</p> 
          </div>
        </div>
      </div>
      </Link>
    )
  }
}
export default ContactCard;
