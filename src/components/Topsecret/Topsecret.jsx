import React from 'react';
import { NavLink } from 'react-router-dom';
import myPhoto from '../../assets/images/Myphoto.jpg';
import s from './topsecret.module.css';

let Topsecret = (props) => {
	return <div>
		<div className={s.selectedPage}>Hi, my name is Dmitry. I want to get to work in your team!)</div>
		<div><img src={myPhoto} className={s.myPhoto} /></div>
		{/*{
			props.albums.map(a => <div key={a.key}>
				<div>
					<NavLink to={'/photos/' + a.id}>
						<div>{a.title}</div>
					</NavLink>
				</div>
			</div>)
		}*/}
	</div>
}

export default Topsecret;

