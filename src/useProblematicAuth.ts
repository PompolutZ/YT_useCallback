import { useState } from "react";
import { User } from "./types";

export const useProblematicAuth = () => {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  const fetchUserDetails = async () => {
    return new Promise<User>((res) => {
      setTimeout(
        () =>
          res({
            username: "James Holden",
          }),
        10
      );
    });
  };

  const login = () => {
    setIsOnline(true);
  };

  const logout = () => {
    setIsOnline(false);
  };

  return {
    login,
    logout,
    isOnline,
    fetchUserDetails,
  };
};
