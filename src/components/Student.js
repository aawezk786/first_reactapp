import React,{Component} from 'react';

// const Student = (props) => {
//  return <h1>Hello {props.name}</h1>;
// };

class Student extends Component{
    render(){
    return <h1>Hello {this.props.name}</h1>
    }
}

export default Student;