import React from 'react';

let Photos = (props) => {
	return <div>
		{
			props.photos.map(p => <div key={p.key}>
				<div>{p.title}</div>
				<div>
					<img src={p.url} />
				</div>
				<div>
					<img src={p.thumbnailUrl} />
				</div>
			</div>)
		}
	</div>
}
export default Photos;