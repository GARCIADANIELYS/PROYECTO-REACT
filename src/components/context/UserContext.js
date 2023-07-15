import { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}