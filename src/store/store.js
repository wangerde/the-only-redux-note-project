import { createStore,applyMiddleware } from 'redux';
import reducers from '../reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

let initialState = {
    note: [
        {title: 'you are awesome', content: 'No, I do not think so'},
        {title: 'seriously?', content: 'exactly!'}
    ],
    visibility: 'awesome_tag'
};

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });


const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(),
    // other store enhancers if any
));

export default store;