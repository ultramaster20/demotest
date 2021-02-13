import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../redux/photos-reduser';
import Photos from './Photos';
import { withRouter } from 'react-router-dom';

class PhotosContainer extends React.Component {
	componentDidMount() {
		let phId = this.props.match.params.albumId;
		this.props.getPhotos(phId);
	}
	render() {
		return <>
			<Photos {...this.props}
				photos={this.props.photos}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		photos: state.photosPage.photos,
	}
}

let WithUrlDataContainerComponent = withRouter(PhotosContainer);

export default connect(mapStateToProps, { getPhotos })(WithUrlDataContainerComponent);
