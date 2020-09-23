export const initialState = {   //This is empty DataLayer
 user: null,
 playlists: [],
 spotify:null,
 playing: false,
 item: null,
//  token:"BQBc3uaZgKYw5qHytCuWN40IB8yVIN-iK6Wg3UiC9b88jqFUxA5ddes233-z2dUMnQApkz_JUPMXI2cNP36vJAa_pDgcbnyh632fc-PWLnnjE-NlxCLp_KqyUaqv9EMMAHlPb1sRyxh-Kic23fIkfA6yzKOs9pau1A",
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

    case 'SET_DISCOVER_WEEKLY':
      return{
        ...state,
        discover_weekly: action.discover_weekly,
      };

   default: 
   return state;
 }
};

export default reducer;