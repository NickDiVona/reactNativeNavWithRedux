const INITIAL_STATE = 0;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT_CURRENT_COUNT':
      return state + 1;

    case 'DECREMENT_CURRENT_COUNT':
      return state - 1;

    default:
      return state;
  }
}
