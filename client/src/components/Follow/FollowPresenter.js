import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";


    const style = theme => ({

        modal: {            
            maxWidth:'md',
            fullWidth:'true'
        }
    })


class FollowPresenter extends Component {

    state = { open : false };

    handleClickOpen = () => {        
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({           
            open: false
        })
    }   

    render() {
        const { classes } = this.props;
        return(
            <div>
            <span onClick={this.handleClickOpen}>Follow {this.props.cnt}</span>
            <Dialog open={this.state.open} onClose={this.handleClose} className={classes.modal}>
                    <DialogTitle>Follow</DialogTitle>
                    <DialogContent>                        
                        <div><Link to={location => `/${this.props.to_user}`}>{this.props.to_user}</Link></div>
                    </DialogContent>
                    <DialogActions>                        
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>Cancel</Button>                        
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default (withStyles)(style)(FollowPresenter);