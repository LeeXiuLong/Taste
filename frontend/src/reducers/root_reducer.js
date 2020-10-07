import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducers/errors_reducer';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducers/entities_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer
});

export default RootReducer;