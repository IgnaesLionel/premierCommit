import React, {Component} from 'react';
class MyInput extends Component{

  state = {
     inputdata: '',
     data: ''
  }


  handleText = (e) => {
    this.setState({
     inputdata  : e.target.value
    })
  }


  handleClick = (e) => {
    this.setState({
      data  : e.target.value
    })
  }

  myRefInput = React.createRef();

  componentDidMount () {
    this.myRefInput.current.focus();
  }

  render(){
    return(
    <div>
    <h1> My Input React component</h1>
    <input ref = {this.myRefInput} type="text" placeholder="Entrez un pseudo" onChange={this.handleText} value={this.state.inputdata || '' }/>
    <button onClick={this.handleClick} value={this.state.inputdata}> Valider </button>
    <h3> Valeur de l'input:  {this.state.inputdata} </h3>
    <h3> Valeur de l'input stockées:  {this.state.data} </h3>
    </div>
    )
  }
}




export default MyInput;
