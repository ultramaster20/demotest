import React from 'react';
import { connect } from 'react-redux';
import { getAlbums } from '../../redux/albums-reduser';
import Albums from './Albums';
import { withRouter } from 'react-router-dom';

class AlbumsContainer extends React.Component {
	componentDidMount() {
		let albId = this.props.match.params.userId;
		this.props.getAlbums(albId);
	}
	render() {
		return <>
			<Albums {...this.props} albums={this.props.albums} />
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		albums: state.albumsPage.albums,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

let WithUrlDataContainerComponent = withRouter(AlbumsContainer);

export default connect(mapStateToProps, { getAlbums })(WithUrlDataContainerComponent);
