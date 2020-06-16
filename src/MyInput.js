import React, {Component} from 'react';
class MyInput extends Component{

  state = {
     input: ''
  }

  handleText = (e) => {
    this.setState({
      inputdata  : e.target.value
    })
  }

  handleClick = (e) => {
    this.setState({
      inputdata  : e.target.value
    })
  }

  myRefInput = React.createRef();

  componentDidMount () {
    this.myRefInput.current.focus();
  }

  render(){
    return(
    <div>
    <h3> Valeur :  {this.state.inputdata} </h3>
    <input ref = {this.myRefInput} type="text" onChange={this.handleText} value={this.state.inputdata || ''}/>
    <button onClick={this.handleClick}> Valider </button>
    </div>
    )
  }
}


export default MyInput;
