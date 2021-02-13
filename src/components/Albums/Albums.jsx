import React from 'react';
import { NavLink } from 'react-router-dom';

let Albums = (props) => {
	return <div>
		{
			props.albums.map(a => <div key={a.key}>
				<div>
					<NavLink to={'/photos/' + a.id}>
						<div>{a.title}</div>
					</NavLink>
				</div>
			</div>)
		}
	</div>
}

export default Albums;

