const memoList = (list = [], action) => {
  switch (action.type) {
    case 'SET_LIST':
      return action.list
    case 'LIST_ITEM_UPDATE':
      return list.map(
        memo => (memo._id === action.memo._id)
        ? action.memo
        : memo)
    default:
      return list;
  }
}

export default memoList
