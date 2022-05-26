import React, {Component} from 'react';
import './Contact.css';
import {init} from 'emailjs-com';
import emailjs from 'emailjs-com';
import {GMAIL_SERVICE_ID, MAIL_JS_TEMPLATE_ID, MAIL_JS_USER_ID} from '../../shared/Const';

class Contact extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {name: '',
                  email: '',
                  subject: '',
                  message: ''};

    this.setName = this.setName.bind(this);              
    this.setEmail = this.setEmail.bind(this);
    this.setSubject = this.setSubject.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClosePage = this.handleClosePage.bind(this);
  }

  setName(e) 
  {
    this.setState({name: e.target.value});
  }

  setEmail(e) 
  {
    this.setState({email: e.target.value});
  }

  setSubject(e) 
  {
    this.setState({subject: e.target.value});
  }

  setMessage(e) 
  {
    this.setState({message: e.target.value});
  }

  mailMsg() 
  {
    let templateParams = {name: this.state.name,
                          email: this.state.email,
                          subject: this.state.subject,
                          message: this.state.message};

    init(MAIL_JS_USER_ID); 
    emailjs.send(GMAIL_SERVICE_ID, 
                 MAIL_JS_TEMPLATE_ID,
                 templateParams).then(res => 
                                      {
                                        console.log('Email successfully sent!');
                                      }).catch(err => 
                                                    {
                                                      console.error(err);
                                                    });
  }

  submitConfirm()
  {
    let submitConfirmHTML = document.querySelector('.--con-submit-confirm');
    submitConfirmHTML.setAttribute("style",
                                   "display: inline;");
  }

  disableSubmit(submitHTML)
  {
    submitHTML.setAttribute("disabled", 
                            "true");
    submitHTML.classList.add('--con-disabled');
  }

  removeFieldWarnings()
  {
    let nameClass = document.querySelector('.--con-name-text');
    let emailClass = document.querySelector('.--con-email-text');
    let subjectClass = document.querySelector('.--con-subject-text');
    let messageClass = document.querySelector('.--con-message-text');

    nameClass.classList.remove('--con-empty');
    emailClass.classList.remove('--con-empty');
    subjectClass.classList.remove('--con-empty');
    messageClass.classList.remove('--con-empty');
  }

  handleSubmit(e)
  {
    e.preventDefault();

    if (!this.state.name)
    {
      this.removeFieldWarnings();

      let nameClass = document.querySelector('.--con-name-text');
      nameClass.classList.add('--con-empty');
    }
    else if (!this.state.email)
    {
      this.removeFieldWarnings();

      let emailClass = document.querySelector('.--con-email-text');
      emailClass.classList.add('--con-empty');
    }
    else if (!this.state.subject)
    {
      this.removeFieldWarnings();

      let subjectClass = document.querySelector('.--con-subject-text');
      subjectClass.classList.add('--con-empty');
    }
    else if (!this.state.message)
    {
      this.removeFieldWarnings();
      
      let messageClass = document.querySelector('.--con-message-text');
      messageClass.classList.add('--con-empty');
    }
    else 
    {
      this.removeFieldWarnings();
      this.disableSubmit(e.target);  
      this.submitConfirm();

      this.mailMsg();
    }
  }

  handleClosePage() {
    this.props.onClose();
  }

  render()
  {
    return(<form className="--con-form">
             <div className="--con-header-content d-flex justify-content-between align-items-center">
               <span></span>
               <h2>Questions & Suggestions</h2>
               <span onClick={this.handleClosePage} className='close-page mb-2'>x</span>
             </div>
           
             <div className="--con-content --con-user-info">
               <div className="--con-name">
                 <label className="--con-name-label">
                   <input className="--con-name-text --con-textfield"
                          placeholder="Name"
                          maxLength="50"
                          type="text"
                          onChange={this.setName}></input>
                 </label>
               </div> 
               <div className="--con-email">
                 <label className="--con-email-label">
                   <input className="--con-email-text --con-textfield"
                          placeholder="Email"
                          maxLength="60"
                          type="text"
                          onChange={this.setEmail}></input>
                 </label>
               </div>
             </div> 

             <div className="--con-content --con-subject">
                 <label className="--con-subject-label">
                   <input className="--con-subject-text --con-textfield"
                          placeholder="Subject"
                          maxLength="250"
                          type="text"
                          onChange={this.setSubject}></input>
                 </label>
             </div> 

             <div className="--con-content --con-message">
               <textarea className="--con-message-text --con-textarea"
                         maxLength="1500"
                         rows="12"
                         placeholder="Message (max. 1500 chars)"
                         onChange={this.setMessage}></textarea>
             </div>
             
             <div className="--con-submit-confirm">
               <p>Thank you for your message. Expect a response shortly!</p>
             </div>

             <button className="--con-submit-btn"
                     onClick={this.handleSubmit}>Submit</button>   
           </form>);
  }
}

export default Contact;