import { useState, useCallback } from "react";
import { User } from "./types";

export const useAuth = () => {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  const fetchUserDetails = useCallback(async () => {
    if (!isOnline) {
      throw Error("User must be online.");
    }

    return new Promise<User>((res) => {
      setTimeout(
        () =>
          res({
            username: "James Holden",
          }),
        1000
      );
    });
  }, [isOnline]);

  const login = useCallback(() => {
    setIsOnline(true);
  }, []);

  const logout = useCallback(() => {
    setIsOnline(false);
  }, []);

  return {
    login,
    logout,
    isOnline,
    fetchUserDetails,
  };
};
