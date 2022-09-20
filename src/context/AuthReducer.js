export const AuthReducer = (state,action)=>{
         switch(action.type){
            case 'REGISTER':
                return {...state,user_id:action.payload.user_id,signup:action.payload.signup}
            default:
                break;
         }
}  