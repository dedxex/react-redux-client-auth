/**
 * Created by taranjeet on 08-01-2017.
 */
export default function(state={dataloading : false},action) {
    switch(action.type) {
        case 'Collection_Data':
            return { ...state,collection_data:action.payload};
        case 'DeAuth_User':
            return { ...state,authenticate:false,error : ""};
        case 'AuthError' :
            return { ...state,error : action.payload };
        case 'fetch_message' :
            return { ...state,message : action.payload };
        case 'DataLoading' :
            return { ...state,dataloading : action.payload };
    }
    return state;
}