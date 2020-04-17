import {combineReducers} from 'redux';

import { AccountReducer } from './AccountReducer';
import { ProfileReducer } from './WorkerReducers/ProfileReducer';
import { ServiceReducer } from './WorkerReducers/ServiceReducer';
import { TicketReducer  } from './WorkerReducers/TicketReducer';
import { HistoryReducer } from './WorkerReducers/HistoryReducer'

export const rootReducer = combineReducers({
            AccountReducer,
            ProfileReducer,
            ServiceReducer,
            TicketReducer,
            HistoryReducer
});