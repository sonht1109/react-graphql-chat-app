import { useQuery } from "@apollo/client";
import { createContext, ReactNode, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { ME } from "../queries";

export const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const { data, loading } = useQuery(ME);

  useEffect(() => {
    if (data?.info) {
      setUser({ ...data.info });
    }
  }, [data]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {loading ? <Loading size="30px" /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
