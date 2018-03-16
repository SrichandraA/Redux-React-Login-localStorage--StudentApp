import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class EditModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            name:'',
            section:''
          };
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSectionHandler = this.changeSectionHandler.bind(this);
    }

    changeNameHandler(event){
        this.setState({name:event.target.value});
    }

    changeSectionHandler(event){
        this.setState({section:event.target.value});
    }

    componentDidMount(){
        this.setState({name:this.props.student.name,section:this.props.student.section});

    }

    handleSubmit = () => {
        this.props.onEdit({name:this.state.name,
                            section:this.state.section,
                            id:this.props.student.id});
        this.setState({open: false});
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
        />,
        <FlatButton
            label="Submit"
            primary={true}
            onClick={this.handleSubmit}
        />,
        ];
        return (
            <MuiThemeProvider>
        <div>
            <button type="button" className="btn btn-primary btn-sm" onClick={this.handleOpen} >Edit</button>
            <Dialog
            title="Student Profile"
            actions={actions}
            modal={true}
            open={this.state.open}
            >
            <label>NAME</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.changeNameHandler} ></input>
                <label>SECTION</label>
                <input type="text" className="form-control" value={this.state.section} onChange={this.changeSectionHandler}></input>
                                        
            </Dialog>
        </div>
        </MuiThemeProvider>
        );
    }
}