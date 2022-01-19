import React, {Component} from 'react';
import './TurnText.css'

class BotOutcomeText extends Component
{
  render()
  {
    let turnTextOne = <div className="--tt-popup-text --tt-turn-one">
                        <b>{this.props.name}</b>'s turn
                      </div>;
    
    let turnTextTwo = <div className="--tt-popup-text --tt-turn-two">
                        <b>{this.props.name}</b>'s turn
                      </div>;

    return(<div className="--tt-popup"
                style={this.props.visible ? 
                       {"visibility": "visible"} :
                       {"visibility": "hidden"}}>
             <div className="--bo-popup-content">
               {this.props.playerNbr === 1 ? turnTextOne : turnTextTwo}
             </div>
           </div>);
  }
}

export default BotOutcomeText;