import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { login, logout, isLoggedIn } from './AuthService';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={username:'',password:''};
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }

    changeUsernameHandler(event){
        this.setState({username:event.target.value});
    }

    changePasswordHandler(event){
        this.setState({password:event.target.value});
    }

    componentWillMount(){
        if(localStorage.getItem("ID_TOKEN_KEY") != null){
   
            this.props.history.push('/studentApp'); 
        }
      
    }


    submitHandler(e) {
        e.preventDefault();
        
        var data = {};
        data.username=this.state.username;
        data.password=this.state.password;
                
        $.ajax({
            url: 'http://localhost:3000/insert',
            dataType: 'json',
            type: 'POST',
            data: data,
            success: function(data) {
                console.log(data);
            }.bind(this),
                error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this)
        });
      }

    render(){
        return(
            <div>

            <h2>Login</h2>
                        <br/>
                            <form onSubmit={this.submitHandler}>
                                <div className="container">
                                    <div className="row col-10">
                                        <label>USERNAME</label>
                                        <input type="text" className="form-control" value={this.state.username} onChange={this.changeUsernameHandler}></input>
                                        <label>PASSWORD</label>
                                        <input type="text" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}></input>
                                        {/* <button type="submit" id="addButton" className="btn btn-primary" >Login</button> */}
                                        {
                                            (isLoggedIn()) ? ( null ) : ( <button className="btn btn-info log" onClick={() => login(this.state.username,this.state.password)}>Log In</button> )
                                        }
                                    </div>
                                    
                                </div>
                            </form>

            </div>
        );
    }
}

export default Login;