import React, { createContext, useContext, useReducer, Dispatch } from "react";
import { reducerFunction, TopicState } from "../reducers/UpDownReducer";

interface TopicListProviderProps {
  children: React.ReactNode;
}

export const DispatchContext = createContext<Dispatch<any>>(() => {});
export const StateContext = createContext<TopicState | null>(null);

export const TopicListProvider: React.FC<TopicListProviderProps> = ({
  children
}) => {
  const initialState: TopicState = {
    topics: [],
    votes: {}
  };

  const [estados, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={estados}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useTopicListDispatch = () => useContext<Dispatch<any>>(DispatchContext);
export const useTopicListState = () => useContext(StateContext);
