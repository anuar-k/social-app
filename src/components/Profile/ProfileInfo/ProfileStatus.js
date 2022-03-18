import React, {Component} from "react";

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    ActivateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus(this.state.status)
    }

    onChangeHandler = (e) => {
        this.setState( {
            status:  e.target.value
        });
    }

    render() {
        return (
            <div>
                <span>status: </span>
                {
                    !this.state.editMode
                        ? <span onDoubleClick={() => this.ActivateEditMode()}> {this.props.status}</span>
                        :
                        <span>
                            <input onChange={this.onChangeHandler} autoFocus={true}
                                   onBlur={() => this.deActivateEditMode()} type="text" value={this.state.status}/>
                        </span>
                }
            </div>
        )
    }
}

export default ProfileStatus