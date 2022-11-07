import React, { Component } from "react";
import StudentService from "../service/StudentService";
class CreateStudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      language: "",
      frameWork: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
    this.changeFrameWorkHandler = this.changeFrameWorkHandler.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
  }
  saveStudent = (e) => {
    e.preventDefault();
    let students = {
      name: this.state.name,
      language: this.state.language,
      frameWork: this.state.frameWork,
    };
    StudentService.createStudents(students).then((res) => {
      window.open("/student");
    });
  };
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeLanguageHandler = (event) => {
    this.setState({ language: event.target.value });
  };
  changeFrameWorkHandler = (event) => {
    this.setState({ frameWork: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Student</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Name :</label>
                    <input
                      type="text"
                      placeholder="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                    <label>Language :</label>
                    <input
                      type="text"
                      placeholder="language"
                      className="form-control"
                      value={this.state.language}
                      onChange={this.changeLanguageHandler}
                    />
                    <label>FrameWork :</label>
                    <input
                      type="text"
                      placeholder="framework"
                      className="form-control"
                      value={this.state.frameWork}
                      onChange={this.changeFrameWorkHandler}
                    />
                    <button
                      className="btn btn-success"
                      onClick={this.saveStudent}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateStudentComponent;
