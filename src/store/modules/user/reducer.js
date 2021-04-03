import produce from 'immer'

const INITIAL_STATE = {
  signed: false,
  user: {
    name: {
      first: '...',
      last: '...',
      complete: '...'
    },
    type: 'user'
  },
}

export default function user (state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
        return state
    }
  })
}