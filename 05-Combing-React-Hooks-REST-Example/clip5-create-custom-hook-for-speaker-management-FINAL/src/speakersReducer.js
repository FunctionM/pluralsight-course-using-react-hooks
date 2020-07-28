const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.speakerList.map((item) => {
      if (item.id === action.id) {
        item.favorite = favoriteValue;
      }
      return item;
    });
  }

  switch (action.type) {
    case 'setSpeakerList':
      return { ...state, isLoading: false, speakerList: action.data };
    case 'favorite': {
      return { ...state, speakerList: updateFavorite(true) };
    }
    case 'unfavorite': {
      return { ...state, speakerList: updateFavorite(false) };
    }
    default:
      return state;
  }
};

export default speakersReducer;