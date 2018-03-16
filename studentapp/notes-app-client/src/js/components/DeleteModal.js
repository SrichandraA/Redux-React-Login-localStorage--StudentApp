import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DeleteModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
          };
        
    }



    handleSubmit = () => {
        this.props.onDelete(this.props.student.id);
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
            label="Delete"
            primary={true}
            onClick={this.handleSubmit}
        />,
        ];
        return (
            <MuiThemeProvider>
        <div>
            <button type="button" className="btn btn-danger btn-sm" onClick={this.handleOpen} >Delete</button>
            <Dialog
            title="Student Profile"
            actions={actions}
            modal={true}
            open={this.state.open}
            >
            Do you Really want to delete {this.props.student.name} profile ? 
                                
            </Dialog>
        </div>
        </MuiThemeProvider>
        );
    }
}