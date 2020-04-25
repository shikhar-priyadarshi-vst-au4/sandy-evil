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

//Worker
//Account Reducer - track of login/ signup 
//Profile Reducer - track of worker dashboard(Worker Info)
//Service Reducer - track of services assigned to worker
//Ticket Reducer - keep the track of ticket accepted / declined
//History Reducer - Worker activities

//Customer 
//Customer Profile Reducer
//Booking Reducer