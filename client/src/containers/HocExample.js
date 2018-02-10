import React, { Component } from 'react'
import HocChild from './HocChild'

export class HocExample extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         currency: {}
      }
    }
    

    componentWillMount = () => {
            
        fetch('https://api.fixer.io/latest?base=USD')
        .then(r => r.json())
        .then(data => {
            this.setState({
                currency: data
            })
        })
     
    }
    
  render() {
    return (
      <div style={{ color: 'black', padding: 100}} > 
        <HocChild currency={this.state.currency} />
      </div>
    )
  }
}

export default HocExample
