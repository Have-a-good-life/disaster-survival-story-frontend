import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

const BackDrop = ({ children, isOpen }: Props) => {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }

    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] z-100 flex justify-center items-center">
      {children ?? null}
    </div>
  );
};

export default BackDrop;
