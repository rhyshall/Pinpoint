import React, {Component} from 'react';
import './BotOutcomeText.css'

class BotOutcomeText extends Component
{
  render()
  {
    let missText = <div className="popup-text wrong">
                     {this.props.name} chose <b>wrong</b>
                   </div>;

    let hitText = <div className="popup-text right">
                    {this.props.name} chose <b>right</b>
                  </div>;

    return(<div className="popup"
                style={this.props.visible ? 
                       {"visibility": "visible"} :
                       {"visibility": "hidden"}}>
             <div className="popup-content">
               {this.props.miss ? missText : hitText}
             </div>
           </div>);
  }
}

export default BotOutcomeText;