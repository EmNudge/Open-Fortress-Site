import React from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick'
import Avatar from '../avatar'
import './index.scss';

const Modal = ({ avatar, avatarLarge, name, roles, desc, onOutsideClick }) => {
    const modalRef = React.useRef(null);
    useOutsideClick(modalRef, onOutsideClick);

	return (
		<div className="modal-outer-box">
            <div className="modal" ref={modalRef}>
                <Avatar img={avatarLarge || avatar} size="184px" />
				<div className="meta">
					<h1>{name}</h1>
					<h2>{roles.join(', ')}</h2>
					<p>{desc || 'No info available.'}</p>
				</div>
			</div>
		</div>
	);
};

export default Modal;
