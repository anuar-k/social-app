import React, {Component} from "react";

class ProfileStatus extends Component{
    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    ActivateEditMode = () => {
       this.setState({
           ...this.state, editMode: !this.state.editMode
       })
    }

    deActivateEditMode = () => {
        this.setState({
            ...this.state, editMode: !this.state.editMode,
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler = (e) =>{
        this.setState({
            ...this.state, status: e.target.value
        })
    }

    render() {
        return(
            <div>
                {
                    !this.state.editMode
                    ?   <div>
                            <span onDoubleClick={()=> this.ActivateEditMode()}> status: {this.props.status  }</span>
                        </div>
                    :
                        <div>
                            <input onChange={this.onChangeHandler} autoFocus={true} onBlur={()=> this.deActivateEditMode()} type="text" value={this.state.status}/>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus