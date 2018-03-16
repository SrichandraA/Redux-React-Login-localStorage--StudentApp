import { connect } from "react-redux";
import React, { Component } from 'react';
import { addStudent } from "../actions/index";
import { editStudent } from "../actions/index";
import { deleteStudent } from "../actions/index";
import '../styles/studentStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuidv1 from "uuid";
import Dialog from 'material-ui/Dialog';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import { login, logout, isLoggedIn} from './AuthService';


const mapStateToProps = state => {
    return { students: state.students };
  };
  
  const mapDispatchToProps = dispatch => {
      return {
        addStudent: student => dispatch(addStudent(student)),
        editStudent: student => dispatch(editStudent(student)),
        deleteStudent: studentId => dispatch(deleteStudent(studentId))
        };
    };

class Students extends Component{
    constructor(props){
        super(props);
        this.state = {name:'',section:''};
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSectionHandler = this.changeSectionHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
   
    }


    editHandler(event){
        this.props.editStudent(event);
    }

    deleteHandler(event){
        this.props.deleteStudent(event);
    }

    changeNameHandler(event){
        this.setState({name:event.target.value});
    }

    changeSectionHandler(event){
        this.setState({section:event.target.value});
    }

    componentWillMount(){
        if(localStorage.getItem("ID_TOKEN_KEY") === null){
   
            this.props.history.push('/login'); 
        }
      
    }

    submitHandler(event){
        this.props.addStudent({name:this.state.name,section:this.state.section,id:uuidv1()});
        event.preventDefault();
        this.setState({name:'',section:''});
    }

    render(){
      
        let listItems = this.props.students.map((student) =>
            <div className="row">
                <div className="col-xs-12 col-sm-3">
                    {student.name}
                </div>
                <div className="col-xs-12 col-sm-3">
                    {student.section}
                </div>
                <div className="col-xs-12 col-sm-3">
                    <EditModal
                        student={student}
                        onEdit={this.editHandler}
                    />
                </div>
                <div className="col-xs-12 col-sm-3">
                <DeleteModal
                        student={student}
                        onDelete={this.deleteHandler}
                    />        
                </div>
            </div>
        );
        return(
            <div className="main">
                    {
                        <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> 
                    }
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                    <h2>Students List</h2>
                    <br/>
                        <div className="col-xs-12 col-sm-10">
                            <div className="row">
                                <div className="col-xs-12 col-sm-3">
                                <b>NAME</b>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                <b>SECTION</b>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                <b>EDIT</b>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                <b>DELETE</b>
                                </div>
                            </div>
                        <br/>
                        {listItems}
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                  
                        <h2>Students Registration</h2>
                        <br/>
                            <form onSubmit={this.submitHandler}>
                                <div className="container">
                                    <div className="row col-10">
                                        <label>NAME</label>
                                    <input type="text" className="form-control" value={this.state.name} onChange={this.changeNameHandler}></input>
                                    <label>SECTION</label>
                                    <input type="text" className="form-control" value={this.state.section} onChange={this.changeSectionHandler}></input>
                                    <button type="submit" id="addButton" className="btn btn-primary">ADD</button>
                                    </div>
                                    
                                </div>
                            </form>
                    </div>
                </div>
                
            </div>
        )
    }
}
const StudentsList = connect(mapStateToProps,mapDispatchToProps)(Students);
export default StudentsList;