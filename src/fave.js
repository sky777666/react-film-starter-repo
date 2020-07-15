import React, { Component } from 'react';

// class Fave extends Component {
//     // when you create an instance of a class Component, do this
//     constructor() {
//         // a call for the super()
//         // inherit all properties of a Component class
//         super();
//         // define inital state
//          this.state = {

//          }
            
//     }

                // handleClick = (e) => {
                //     console.log("handling Fave click ! ✅")
                //     this.setState({
                        
                        
                //     })
                // }

            
     class Fave extends Component {
        render() {
            return (
                <div className="film-row-fave add_to_queue">
                <p className="material-icons">add_to_queue</p>
                <button onClick={this.handleClick}></button>
               
            </div>
            );
        }
    }


export default Fave;