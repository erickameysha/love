
const initialState = []

export const catalogReducer = (state = initialState, action) => {
   debugger
    switch (action.type) {

        case 'SET-CATALOG':

            return action.catalog.map(el=>({...el}) )
        default:
            return state
    }
}
export const setCatalogAC = (catalog) => ({type: 'SET-CATALOG', catalog})
