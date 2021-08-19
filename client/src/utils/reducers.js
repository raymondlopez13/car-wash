import {
    UPDATE_APPOINTMENT_DATE,
    UPDATE_APPOINTMENT_TIME,
    UPDATE_APPOINTMENT_TYPE
} from './actions';
import { useReducer } from 'react';


export const reducer = (state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            date: '',
            time: '',
            appointmentType: ''
        }, action) => {
    switch (action.type) {
        case UPDATE_APPOINTMENT_TIME:
            return {
                ...state,
                time: action.time,
            };
        case UPDATE_APPOINTMENT_TYPE:
            return {
                ...state,
                appointmentType: action.appointmentType
            };
        case UPDATE_APPOINTMENT_DATE:
            return {
                ...state,
                date: action.date
            }
        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}