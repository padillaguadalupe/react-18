export const uriConstants = (id = 1) => {
   return {
        users: {
            path: 'users',
            stateType: 'users'
        },
        user: {
            path: `users/${id}`,
            stateType: 'user'
        }
   }
} 
