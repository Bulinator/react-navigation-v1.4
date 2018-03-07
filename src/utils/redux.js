import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  "main",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("main");

export {
  middleware,
  addListener,
};
