import React from 'react';
import './index.scss';

const SteamProfile = ({ name, roles, avatar, desc, onClick, isSelected }) => {
	const getRoles = (roles) =>
		roles.reduce((accum, curr, index, { length }) => {
			const str = accum + curr;
			if (index === length - 1) return str;
			if (index === 0 && length === 2) return `${str} and `;
			if (index !== length - 2) return str + ', ';
			return str + ', and ';
		}, '');

	return (
		<div className="steam-profile" onClick={onClick}>
			<div className="avatar">{avatar ? <img src={avatar} alt={name} /> : <span>?</span>}</div>
			{isSelected && desc ? (
        <div className="description">
          <h2>Contributions</h2>
          <p>{desc}</p>
        </div>
			) : (
				<div className="text">
					<h2>{name}</h2>
					<div className="roles">
						<span>{getRoles(roles)}</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default SteamProfile;
