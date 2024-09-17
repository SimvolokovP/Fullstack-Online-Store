import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';
import type {AppDispatch, RootState} from '../store/index';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();  