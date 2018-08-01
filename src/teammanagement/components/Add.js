import React from 'react';
import {connect} from 'react-redux';
import MemberForm from './MemberForm';

class Add extends React.Component {

    onClose = () => {
        this.props.history.push('/list');
    };

    onSubmit = (data) => {
        data.id = new Date();
        this.props.dispatch({type: 'ADD_MEMBER', data});
        this.props.history.push('/list');
    };

    render() {
        return (<div>
            <button
                className={'btn-right'}
                onClick={this.onClose}
            >
                Close
            </button>
            <h1>Add a team member</h1>
            <h6>Set email, location and role</h6>
            <MemberForm
                form={'addMember'}
                onSubmit={this.onSubmit}
                submitLabel={'Save'}
            />
        </div>)
    }
}

export default connect()(Add);