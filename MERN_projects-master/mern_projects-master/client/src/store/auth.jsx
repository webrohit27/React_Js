import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true); //this is for securing admin panel, jevha non admin /dmin vr jate tevha te page diste so isloading lun tyala secure kele
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken); //refresh error
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  // const isAdmin = user.isAdmin;
  const isAdmin = user.isAdmin  ? true : false;


  // tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:4000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("userdata", data.userData);
        setUser(data.userData);
        setIsLoading(false) // jo prynt data bhetat nhi to prynt loading state mdhe thevel ani nntr loading off hoil
      }else{
        setIsLoading(false)
      }
    } catch (error) {
      console.error("error fetching user data");
    }
  };

  // to fetch th e services
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();

        console.log("msg from ser", data.msg);
        setServices(data.msg);
        // console.log("msg from ser",data);
      }
    } catch (error) {
      console.log(`services frontend error ${error}`);
    }
  };

  // jwt authentication - to get the currently logedin user data
  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        userAuthentication,
        getServices,
        user,
        services,
        authorizationToken,
        isAdmin,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
