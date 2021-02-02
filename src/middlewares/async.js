export default ({dispatch}) => next => action => {
    // .then means a response in here (if our payload property
    //  doesnt have a promise)

    if(!action.payload || !action.payload.then) {
        // forward the action to the next middleware
        return next(action);
    }

    action.payload.then(function(response) {
        const newAction =  {...action , payload : response};
        dispatch(newAction);
    });
}