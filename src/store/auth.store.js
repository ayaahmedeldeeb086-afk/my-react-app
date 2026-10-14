import { useState } from "react" ;

export function useAuthStore() {
 const [user , setUser] = useState(null) ;

 function login(userData) {
  setUser(userData) ;
 }

 function logout() {
  setUser(null) ;
 }

 return { user , login , logout } ;
 }