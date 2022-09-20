export const UserReducer = (state,action)=>{
    switch(action.type){
        case "USER_CREATED":
            let  user = action.payload
            user = state
            return user
    }
}