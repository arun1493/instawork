import React, {Component} from 'react';
import { connect } from 'react-redux';

class Member extends Component {

    edit = (data) => {
        this.props.dispatch({type: 'EDIT_MEMBER', data});
        this.props.history.push('/edit')
    };

    render() {
        const { member } = this.props;
        return (
            <div
                className={'container'}
                onClick={() => this.edit(member)}
            >
                    <span>{` ${member.firstName} ${member.lastName} `}</span>{member.type === 'admin' && <span>(admin)</span>}
                    <div>{member.phone}</div>
                    <div>{member.email}</div>
                    <div>{member.type}</div>

            </div>
        )
    }
}


export default connect()(Member);