import React, { useState } from 'react';
import './Form.css';
import Emoji from './Emojis.js'

const emoji = [
  { symbol: "😭", label: "Loudly Crying Face", value: "Terrible" },
  { symbol: "😞", label: "Disapointed Face", value: "Poor" },
  { symbol: "😐", label: "Neutral Face", value: "Okay" },
  { symbol: "😃", label: "Grinning Face With Big Eyes", value: "Good" },
  { symbol: "😍", label: "Smiling Face With Heart-Eyes", value: "Excellent" }
]

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: 'Let us know what we did well or could improve...',
      party: 2,
      satisfaction: 'Okay'
    };
  }

  loadData = async (name, target) => {
    console.log("Current Update:", name, target);
  }

  handleInputChange = (event) => {
    // Updating State
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log("Inside handle input change", event.target.name, event.target.value)
    this.loadData(event.target.name, event.target.value);

    // Sending the data to parent App.js using this.props.callback(dataToParent)
    if(event.target.name==="feedback"){
      this.props.parentCallback({
        feedback: event.target.value,
        party: this.state.party,
        satisfaction: this.state.satisfaction
      });
    }
    if(event.target.name==="party"){
      this.props.parentCallback({
        feedback: this.state.feedback,
        party:  event.target.value,
        satisfaction: this.state.satisfaction
      });
      // console.log("Inside parentCallback area", event.target.value )
    }
    if(event.target.name==="satisfaction") {
      this.props.parentCallback({
        feedback: this.state.feedback,
        party:  this.state.party,
        satisfaction: event.target.value
      });
    }
  }  

  render() {
    return (
      <div className="form">
        <label className="form-label form-label-feedback">Your feedback</label>
        <textarea className="form-textarea"
          name="feedback"
          rows="4"
          onChange={this.handleInputChange}
          placeholder="Let us know what we did well or could improve..."
        />

        <label className="form-label form-label-party">How many in your party?</label>
        <input className="form-input form-input-party"
          type="number"
          name="party"
          min="1"
          onChange={this.handleInputChange}
          placeholder="2"
        />
        <label className="form-label form-label-satisfaction">How was your meal?</label>
        <div className="containerEmoji">
          {emoji.map((a) =>
            <div className="box hvr-grow" key={a.value}>
              <div className="form-check ">
                <label>
                  <Emoji symbol={a.symbol} label={a.label} /><br />
                  <input
                    type="radio"
                    name="satisfaction"
                    value={a.value}
                    checked={this.state.satisfaction === a.value}
                    onChange={this.handleInputChange}
                    className="form-check-input"
                  />
                  <p>{a.value}</p>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}


export default Form;
