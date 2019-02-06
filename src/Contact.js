import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';


import Icon from '@material-ui/core/Icon';

import { url } from "./constants"

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        marginRight: theme.spacing.unit,
    },
    section1: {
        margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    },
    section2: {
        margin: theme.spacing.unit * 2,
    },
    section3: {
        margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    },

});

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: {
                name: "",
                email: "",
                content: "",
            },
            error: "",
            success: ""
        };

    }

    handleChange = name => event => {
        this.setState({
            message: {
                ...this.state.message,
                [name]: event.target.value
            }
        })
    }
    handleSubmit = event => {

        event.preventDefault();
        const data = this.state.message;
        console.log(data)

        fetch(url, {
            method: 'post',
            body: JSON.stringify(data)
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data)
            this.setState({
                message: {
                    name: '',
                    email: '',
                    content: ''
                },
                success: "Message successfully sent!"
            })
        });
    }


    render() {
        const { classes } = this.props;
        const { name, email, content } = this.state.message
        return (
            <div className={classes.root}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <TextField fullWidth
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="Your Name"
                            value={name}
                            onChange={this.handleChange('name')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div>
                        <TextField fullWidth
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="Your Email"
                            value={email}
                            onChange={this.handleChange('email')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon>email</Icon>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    <div>
                        <TextField fullWidth
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="Your Message"
                            value={content}
                            onChange={this.handleChange('content')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon>message-google</Icon>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    <div className={classes.section3}>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Send
                            </Button>
                    </div>
                </form>
                <p>{this.state.success}</p>
            </div>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
