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
                        
                        // Line 26  state {}
                //     })
                // }

            
     class Fave extends Component {
        constructor() {
            super()
            this.state = {
                isFave: false
            }
            // this.handleClick = this.handleClick.bind(this)
        }


         handleClick = (e) => {
             e.stopPropagation()
             // set isFave = !isFave
             this.setState({ isFave: !this.state.isFave })
            console.log("Handling Fave click 🔥")
         }

        render() {
            // When isFave is true. icon to be remove-from-queue
            let icon =this.state.isFave ? "remove_from_queue" : "add_to_queue";
            return (
                <div 
                className={`film-row-fave ${icon}`}
                onClick={this.handleClick}>

                {/* className={`film-row-fave ${this.state.isFave ? "remove_from_queue" : "add_to_queue"}`} onClick={this.handleClick}> */}
                <p className="material-icons">{icon}</p>
                
                {/* this.state.isFave ? "remove_from_queue" : "add_to_queue"}onClick={this.handleClick}</p> */}
                
               
            </div>
            );
        }
    }


export default Fave;