import React from 'react';
import MemberForm from './MemberForm';
import {connect} from "react-redux";

class Edit extends React.Component {

    componentDidMount() {
        !this.props.initialValues.id && this.props.history.push('/list');
    }

    onClose = () => {
        this.props.history.push('/list');
    };

    onSubmit = (data) => {
        this.props.dispatch({type: 'UPDATE_MEMBER', data});
        this.props.history.push('/list');
    };

    delete = () => {
        const id = this.props.initialValues.id;
        this.props.dispatch({type: 'DELETE_MEMBER', id})
        this.props.history.push('/list');
    };

    render() {
        return (<div>
            <button
                onClick={this.onClose}
                className={'btn-right'}
            >
                Close
            </button>
            <h1>Edit team member</h1>
            <h6>Edit contact info, location, role</h6>
            <MemberForm
                initialValues={this.props.initialValues}
                form={'editMember'}
                onSubmit={this.onSubmit}
                submitLabel={'Update'}
            />
            {this.props.initialValues.type === 'admin' && <button onClick={this.delete}>Delete</button>}
        </div>)
    }
}

const mapStateToProps = (state) => ({
    initialValues: state.editData,
});

Edit = connect(mapStateToProps)(Edit);

export default Edit;