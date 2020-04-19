import {combineReducers} from 'redux';

import { AccountReducer } from './AccountReducer';
import { ProfileReducer } from './ProfileReducer';
import { ServiceReducer } from './ServiceReducer';
import { TicketReducer  } from './TicketReducer';
import { HistoryReducer } from './HistoryReducer';

export const rootReducer = combineReducers({
            AccountReducer,
            ProfileReducer,
            ServiceReducer,
            TicketReducer,
            HistoryReducer
});