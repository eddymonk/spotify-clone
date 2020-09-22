export const initialState = {   //This is empty DataLayer
 user: null,
 playlists: [],
 spotify:null,
 playing: false,
 item: null,
 token:null,
};     // Solo x non fare il login inserisco su token il vero token

const reducer = (state, action) => {
 console.log(action);   //debugging tool

 //Action -> type, [payload]

 switch(action.type) {
  case 'SET_USER' :
   return {
    ...state,
    user: action.user //[user is the payload]
   };

   case 'SET_TOKEN':
    return {
     ...state,
     token: action.token,
    };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

   default: 
   return state;
 }
};

export default reducer;