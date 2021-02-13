import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/users-reduser';
import Users from './Users';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers();
	}
	render() {
		return <>
			<Users {...this.props}
				users={this.props.users}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
	}
}

export default connect(mapStateToProps, { getUsers })(UsersContainer);
