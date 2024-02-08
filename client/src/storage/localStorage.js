//these functions store, get, and delete elements from the session storage. 
//!!!!the session storage only keeps the cookies, other elements, till the window is open!!!!

export const getAuthToken = () => {
    return window.sessionStorage.getItem("auth_token");
  };
  
  export const setAuthToken = (token) => {
    window.sessionStorage.setItem("auth_token", token);
  };
  
  export const setUserPublicId = (publicId) => {
    return window.sessionStorage.setItem("publicId", publicId);
  };
  
  export const getUserPublicId = () => {
    return window.sessionStorage.getItem("publicId");
  }
  
  export const deleteAuthToken = () => {
    return window.sessionStorage.setItem("auth_token", null);
  };
  
  export const deleteUserPublicId = () => {
    window.sessionStorage.setItem("publicId", null);
  }
  
  
  
  
  