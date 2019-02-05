import React, { Component } from 'react';
import './../App.css';

class Footer extends Component {
  render() {
    return (
      
        <div className="App-contact">

        <h2>Contact Us</h2>
          
         <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor={"name"} >Your name</label>
            <div className="control">
              <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"email"}>Email</label>
              <div className="control">
                <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
              </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"message"}>Message</label>
            <div className="control">
              <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
            </div>
          </div>
          <div className="field">
            <button className="button is-link" type="submit">Send</button>
          </div>
        </form>

        </div>
      
    );
  }
}

export default Footer;