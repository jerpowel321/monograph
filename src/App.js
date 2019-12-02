import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Preview from './components/Preview';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: 'Let us know what we did well or could improve...',
      party: 2,
      satisfaction: 'Okay'
    };
  }

  //  Defined a callback function that takes in a parameter which we consider having accessed from the child in App.js
  callbackFunction = (childData) => {
    this.setState({
      feedback: childData.feedback,
      party: childData.party,
      satisfaction: childData.satisfaction
    })
    // console.log("Inside callbackfunction")
  }

  render() {
    return (
      <div className="app ">
        <div className="mobile">
          <Header />
          <main className="app-main">
            <section className="app-left">
            {/* Sent the defined callback function as a props the child, Form.js */}
              <Form parentCallback={this.callbackFunction} />
            </section>

            <section className="app-right">
            {/* Parent state from App.js will be sent as a props the child, Preview.js */}
              <Preview
                feedback={this.state.feedback}
                party={this.state.party}
                satisfaction={this.state.satisfaction}
              />
            </section>
          </main>
        </div>
      </div>

    );
  }
}

export default App;
