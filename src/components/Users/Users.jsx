import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import s from './users.module.css';

let Users = (props) => {
	return <div>
		{
			props.users.map(u => <div key={u.key}>
				<div>
					<NavLink to={'/albums/' + u.id}>
						<img src={userPhoto} className={userPhoto} />
					</NavLink>
				</div>
				<div>{u.name}</div>
				<div>{u.username}</div>
				<div>{u.email}</div>
				<div>{u.address.street}</div>
				{/*<div>
					<div>{u.address.street}</div>
					<div>{u.address.suite}</div>
					<div>{u.address.city}</div>
					<div>{u.address.zipcode}</div>
					<div>{u.address.geo}</div>
					<div>
						<div>{u.address.geo.lat}</div>
						<div>{u.address.geo.lng}</div>
					</div>
				</div>*/}
				<div>{u.phone}</div>
				<div>{u.website}</div>
				<div>{u.company.name}</div>
				{/*<div>
					<div>{u.company.name}</div>
					<div>{u.company.catchPhrase}</div>
					<div>{u.company.bs}</div>
				</div>*/}
				{/*<button>Albums</button>*/}
			</div>)
		}
	</div>
}

export default Users;