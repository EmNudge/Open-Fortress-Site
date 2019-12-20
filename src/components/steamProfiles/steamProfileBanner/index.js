import React from 'react';
import Avatar from '../avatar';
import './index.scss';

const SteamProfile = ({ name, roles, avatar, desc, onClick, isSelected }) => (
	<div className="steam-profile" onClick={onClick}>
		<Avatar img={avatar} alt={name} size="45px" />
		<div className="text">
			<h2>{name}</h2>
			<div className="roles">
				<span>{roles.join(', ')}</span>
			</div>
		</div>
	</div>
);

export default SteamProfile;
