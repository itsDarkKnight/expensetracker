export default(state, action)=>
    {
        switch(action.type)
        {
            case 'DeleteTxn':
                return{
                    ...state,
                    transaction: state.transaction.filter(data=>data.id!==action.payload)
                }
            case 'Addtxn':
                return{
                    ...state,
                    transaction: [action.payload, ...state.transaction]
                }

            default:
                return state;
        }
    }