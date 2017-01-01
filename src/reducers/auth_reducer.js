export default function(state={},action) {
    switch(action.type) {
        case 'Auth_User':
        return { ...state,authenticate:true };
        case 'DeAuth_User':
        return { ...state,authenticate:false};
        case 'AuthError' :
        return { ...state,error : action.payload };
        case 'fetch_message' :
            return { ...state,message : action.payload };
    }
    return state;
}