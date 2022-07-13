import { configureStore } from '@reduxjs/toolkit'
import topicsReducer from './topics/topicSlice'
import themeReducer from './theme/themeSlice'


export default configureStore({
  reducer: {
    topics: topicsReducer,
    theme: themeReducer,
  },
})