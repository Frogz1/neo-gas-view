const initialState = {
  view: 'welcome',
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return Object.assign({}, state, {
        view: action.view,
      });
    default: return state;
  }
};

export default viewReducer;
