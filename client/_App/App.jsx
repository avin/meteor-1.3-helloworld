import React from 'react'
import ReactDOM from 'react-dom'

App = React.createClass({
   render(){
       return (
           <div>
               <h1>Hello app</h1>
           </div>
       )
   }
});

Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('App'));
});