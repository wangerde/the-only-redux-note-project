import { SHOW_ALL } from '../actions/actions';
import { HIDE_ALL } from '../actions/actions';

function visibilityFilter(visibility = SHOW_ALL, action) {
  switch (action.type) {
    case SHOW_ALL:
      return SHOW_ALL;

    case HIDE_ALL:
        return HIDE_ALL;

    default:
      return visibility;
  }
}

export default visibilityFilter;