import {size} from 'lodash'
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './styles.css'
import * as selectors from '../../reducers';
import * as actions from '../../actions/Babies';
import Baby from '../Baby';

const Babies = ({ babies }) => (
    <div className="babies-container">
      {
        size(babies) === 0 ? (
          <h1>
            {'No hay bebes :('}
          </h1>
        ) : (
          babies.map(
            id => (
              <Baby
                key={id}
                id = {id}
              />
            ),
          )
        )
      }

      <Link to = '/'>
        <button>
          {'Nuevo Bebe'}
        </button>
      </Link>
    </div>
    
  );

export default connect(
    state => ({
        babies: selectors.getBabies(state),
    }),
)(Babies);