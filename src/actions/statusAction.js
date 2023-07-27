export const FETCH_STATUS_START = 'FETCH_STATUS_START';
export const FETCH_STATUS_END = 'FETCH_STATUS_END';
export const FETCH_STATUS_ERROR = 'FETCH_STATUS_ERROR';

export function startFetch(){
    return {
        type: FETCH_STATUS_START
    }
}

export function endFetch(){
    return {
        type: FETCH_STATUS_END
    }  
}

export function errorFetch(error){
    return {
        type: FETCH_STATUS_ERROR,
        payload:error
    }  
}