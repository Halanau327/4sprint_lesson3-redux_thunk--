import {setErrorAC, setStatusAC} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";

export const handleServerNetworkError = (dispatch: Dispatch, e: { message: string }) => {
    dispatch(setErrorAC(e.message))
    dispatch(setStatusAC('failed'))
}

export const handleServerAppError = <T>(dispatch: Dispatch, data: ResponseType<T>) => {
    {
        if (data.messages.length) {
            dispatch(setErrorAC(data.messages[0]))
        } else {
            dispatch(setErrorAC('SomeError'))
        }
        dispatch(setStatusAC('succeeded'))
    }
}
