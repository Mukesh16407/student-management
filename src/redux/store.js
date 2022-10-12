
import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { loginReducer } from "./authStore/reducer";
import { contestReducer } from "./contestStore/reucer";
import { studentReducer } from "./studentStore/reducer";
import { userReducer } from "./userStore/reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    contest: contestReducer,
    student: studentReducer,
    user : userReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
