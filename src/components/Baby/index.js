import React from 'react';

import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';

const Baby = ({
    name,
    lastName,
    isSelected = false,
    onClick,
}) => (
    <div className = {
        `baby-wrapper ${isSelected ? 'baby--selected' : ''}`
    } onClick={onClick}>
        <div className="baby_name">
            Nombre: {(Object.entries(Object.entries(baby)[1])[1]).slice(1)}
        </div>
        <div className="baby_last_name">
            Apellido: {(Object.entries(Object.entries(baby)[2])[1]).slice(1)}
        </div>
    </div>
);

