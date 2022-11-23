const initialState = {
    user:[]
}


const uiReduser = (state = initialState, action) => {
     console.log(action.id);
   
if (action.type === 'ADD_USER') {
    return {
        ...state,
        user:   action.payload
    }
}
if (action.type === 'REMOVE') {
    
    return {
        ...state,
        user: state.user.filter((item) => {
            if(item.id !==  action.id){
                return item
            }
            return null
        })
    }
}


    return state
}

export default uiReduser