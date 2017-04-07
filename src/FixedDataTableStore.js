/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableStore
 */

'use strict';

import reducers from 'reducers'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

module.exports = store;