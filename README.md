# React Tutorial  

some basic of React's Logic  

## Installation

> git clone Repo  
> npm i  
> npm start  

## Contents  

+ BrowserRouter, Routes, Route from react-router-dom
+ useMemo  
+ useEffect  
+ useCallback  
+ useContext  
+ useReducer  
+ useRef  

> difference between useCallback and UseMemo:  
useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values. useCallback and useMemo both expect a function and an array of dependencies.
The difference is that useCallback returns its function when the dependencies change while
useMemo calls its function and returns the result.  
  