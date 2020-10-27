import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchOne from './FetchOne'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const moduleInitialState = {
  item: {},
}

export default buildSlice('user', [FetchOne], moduleInitialState).reducer
