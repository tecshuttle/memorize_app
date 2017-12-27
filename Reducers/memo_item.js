const memoItem = (state = {}, action) => {
  switch (action.type) {
    case 'ITEM_RESET':
      return {};
    case 'SET_EDIT_ITEM':
      return action.memo;
    case 'ITEM_SET_QUESTION':
      return {
        ...state,
        question: action.question
      };
    case 'ITEM_SET_ANSWER':
      return {
        ...state,
        answer: action.answer
      };
    default:
      return state;
  }
}

export default memoItem
