import React, {Component} from 'react';
import './BotOutcomeText.css'

class BotOutcomeText extends Component
{
  render()
  {
    let missText = <div className="--bo-popup-text --bo-wrong">
                     {this.props.name} chose <b>wrong</b>
                   </div>;

    let hitText = <div className="--bo-popup-text --bo-right">
                    {this.props.name} chose <b>right</b>
                  </div>;
    
    return(<div className="--bo-popup"
                style={this.props.visible ? 
                       {"visibility": "visible"} :
                       {"visibility": "hidden"}}>
             <div className="--bo-popup-content">
               {this.props.miss ? missText : hitText}
             </div>
           </div>);
  }
}

export default BotOutcomeText;