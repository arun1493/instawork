import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

class MemberForm extends React.Component {

    onSubmit = (data) => {
        this.props.onSubmit && this.props.onSubmit(data);
    };

    render() {
        return <div>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <h6>Info</h6>
                <Field
                    required
                    name={'firstName'}
                    placeHolder={'FirstName'}
                    component={'input'}
                    type={'text'}
                />
                <Field
                    required
                    name={'lastName'}
                    placeHolder={'LastName'}
                    component={'input'}
                    type={'text'}
                />
                <Field
                    required
                    name={'phone'}
                    type={'tel'}
                    placeHolder={'Phone'}
                    component={'input'}
                />
                <Field
                    required
                    type={'email'}
                    placeHolder={'Email'}
                    name={'email'}
                    component={'input'}
                />
                <h6>Role</h6>
                <Field
                    required
                    name={'type'}
                    type={'radio'}
                    value={'regular'}
                    component={'input'}
                />
                <label>Regular - Can't delete members</label>
                <Field
                    required
                    name={'type'}
                    type={'radio'}
                    value={'admin'}
                    component={'input'}
                />
                <label>Admin - Can delete members</label>
                <div
                    className={'submit-btn'}
                >
                    <button
                        type={'submit'}>
                        {this.props.submitLabel}
                    </button>
                </div>
            </form>
        </div>
    }
};

MemberForm = reduxForm({
    enableReinitialize: true
})(MemberForm);

const mapStateToProps = (state, props) => ({
    initialValues: props.initialValues || {},
    form: props.form
});

MemberForm = connect(mapStateToProps)(MemberForm);

export default MemberForm;

git commit -m "first commit"
git remote add origin https://github.com/arun1493/instawork.git
    git push -u origin master