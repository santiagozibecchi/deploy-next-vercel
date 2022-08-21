import React, { FC, PropsWithChildren } from "react";

const LightLayout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <div
         style={{
            backgroundColor: "rgba(256, 256, 256, 0.5)",
            padding: "10px",
            borderRadius: "5px",
         }}
      >
         <h3>White Layout</h3>
         <div>{children}</div>
      </div>
   );
};

export default LightLayout;
