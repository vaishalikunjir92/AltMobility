import { combineReducers } from 'redux';
import criticalAlerts from './criticalAlerts';
import nonCriticalAlerts from './nonCriticalAlerts';
export const reducers = combineReducers({ criticalAlerts, nonCriticalAlerts });