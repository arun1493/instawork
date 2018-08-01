import React, {Component} from 'react';
import {connect} from 'react-redux';
import Member from './Member';

class MemberList extends Component {

    renderTeamMembers = (members) => {

        return members.map((member, index) => {
            return <Member key={index} history={this.props.history} member={member}/>
        });

    };

    render() {
        return (
            <div>
                <button
                    className={'btn-right'}
                    onClick={() => this.props.history.push('/add')}
                >
                    Add
                </button>
                <div>
                    {`You have ${this.props.members.length} members`}

                    {
                        this.renderTeamMembers(this.props.members)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    members: state.members,

});

MemberList = connect(mapStateToProps)(MemberList);

export default MemberList;