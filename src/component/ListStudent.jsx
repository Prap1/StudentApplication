import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import StudentService from "../service/StudentService";
class ListStudent extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
  }
  addStudent(){
    // this.props.history.push("/add-employee/_add");
    window.open("/add_student/_add");
  }

  deleteStudent(id){
    StudentService.deleteStudent(id).then( res => {
        this.setState({students: this.state.students.filter(student => student.id !== id)});
    });
}



  render() {
    return (
      <div>
        <h2 className="text-center">Student Data </h2>
        <div className="row bg-white">
          <button className="btn btn-primary" onClick={this.addStudent}>Add Student </button>
        </div>
        <div className="row">
          <table className="table table-stripped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Language</th>
                <th>Framework</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.language}</td>
                  <td>{student.frameWork}</td>
                  <td>
                    <button
                      onClick={() => this.deleteStudent(student.id)}
                      block
                      outline
                      color="denger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListStudent;
