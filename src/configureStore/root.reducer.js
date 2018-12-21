import { combineReducers } from 'redux'

import timelineReducer from '../components/content/Timeline.reducer'

const rootReducer = combineReducers({
  timeline: timelineReducer
})

export default rootReducer