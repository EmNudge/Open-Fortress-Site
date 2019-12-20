import React from 'react';
import SteamProfile from './steamProfileBanner';
import Modal from './modal';
import './index.scss';

const SteamProfiles = ({ credits, categories }) => {
	const [selectedIndex, setSelectedIndex] = React.useState(-1);
	const [modalIsActive, setModalIsActive] = React.useState(false);

	const handleClick = (index) => {
    setSelectedIndex(index);
		setModalIsActive(true);
	};

	const getSteamProfile = (credit, index) => {
		const [name, info] = credit;
		info.name = name;
		info.isSelected = selectedIndex === index;

		return <SteamProfile key={name} {...info} onClick={() => handleClick(index)} />;
	};

	const getModalData = (index) => [...credits][index][1];

	return (
		<div className="steam-profile-container">
			{modalIsActive && <Modal {...getModalData(selectedIndex)} onOutsideClick={() => setModalIsActive(false)} />}
			{[...credits].map(getSteamProfile)}
		</div>
	);
};

export default SteamProfiles;
