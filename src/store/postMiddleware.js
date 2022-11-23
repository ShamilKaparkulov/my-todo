

export const getUsers = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
         const newData = await data.filter((item) =>  {
            if (item.id % 2 === 0) {
                return item;
            }
          return null
         });
         localStorage.setItem('user',JSON.stringify(newData))
         dispatch({type:'ADD_USER', payload:newData})
       }
       
}

export function removeUsersLocal (id) {
    // console.log(id);
    return async (dispatch) => {
        localStorage.setItem(
            'user',
            JSON.stringify(
              JSON
                .parse(localStorage.getItem('user') ?? '[]')
                .filter((item) => item.id !== id),
            )
          );
        dispatch({type:'REMOVE',id})
    }
}