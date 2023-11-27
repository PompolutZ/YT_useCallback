import { useState, useMemo } from "react";
import { User } from "./types";

export const useMemoAuth = () => {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  const fetchUserDetails = useMemo(
    () => async () => {
      if (!isOnline) {
        throw Error("User must be online.");
      }

      return new Promise<User>((res) => {
        setTimeout(
          () =>
            res({
              username: "James Holden",
            }),
          10
        );
      });
    },
    [isOnline]
  );

  const login = useMemo(
    () => () => {
      setIsOnline(true);
    },
    [setIsOnline]
  );

  const logout = useMemo(
    () => () => {
      setIsOnline(false);
    },
    [setIsOnline]
  );

  return {
    login,
    logout,
    isOnline,
    fetchUserDetails,
  };
};
