import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import Baby from '../Baby';


const Babies = ({ babyList }) => (
  <div className="t-wrapper">
    <div className="babies">
      {
        babyList.length === 0 ? (
          <h1>
            {'No hay bebes'}
          </h1>
        ) : (
          (babyList).map(
            index => (
              <Baby
                key={index}
                index={index}
              />
            ),
          )
        )
      }
    </div>
  </div>
);


export default connect(
  state => ({
    babyList: selectors.getBabies(state),
  }),
)(Babies);