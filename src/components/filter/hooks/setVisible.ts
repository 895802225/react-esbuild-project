import { useState } from "react";

export const useSetVisible = () => {
  const [visible, setvisible] = useState(false);

  return {
    visible,
    setvisibleTrue() {
      setvisible(true);
    },
    setvisibleFalse() {
      setvisible(false);
    },
  };
};
