import React from 'react';
import './Preview.css';
import Emoji from './Emojis.js'

function Preview(props) {

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          <div className="emoji-ellipse">
            <div className="elipse-container">
              {props.satisfaction === "Terrible" ? <Emoji symbol="😭" label="Loudly Crying Face" width="80" /> : null}
              {props.satisfaction === "Poor" ? <Emoji symbol="😞" label="Disapointed Face" width="80" /> : null}
              {props.satisfaction === "Okay" ? <Emoji symbol="😐" label="Neutral Face" width="80" /> : null}
              {props.satisfaction === "Good" ? <Emoji symbol="😃" label="Smiling Face With Smiling Eyes" width="80" /> : null}
              {props.satisfaction === "Excellent" ? <Emoji symbol="😍" label="Grinning Face With Big Eyes" width="80" /> : null}
            </div>
          </div>
        </div>
        <div className="preview-feedback">
          <p> {props.feedback}</p>
        </div>
        <div className="preview-party">
          {props.party} <span>people dined here</span>
        </div>
      </div>
    </section>
  );
}

export default Preview;
