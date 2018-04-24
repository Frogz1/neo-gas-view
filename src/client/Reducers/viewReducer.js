const initialState = {
  view: '',
};

export function view(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return Object.assign({}, state, {
        view: action.view,
      });
    default: return state;
  }
}

export default view;
