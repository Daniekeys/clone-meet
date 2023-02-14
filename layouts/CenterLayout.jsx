import React from "react";
const styles = {
  parentContainer: "w-full h-full overflow-x-hidden md:overflow-x-auto   ",
  container: "2xl:container 2xl:mx-auto ",
  chiefCenter: "max-w-[1300px] w-full  px-4 md:px-6 mx-auto ",
  bg: " ",
};
const CenterLayout = ({ children, isNav }) => {
  return (
    <div className={`${styles.parentContainer} ${!isNav ? styles.bg : ""}`}>
      <div className={styles.container}>
        <div className={styles.chiefCenter}>{children}</div>
      </div>
    </div>
  );
};

export default CenterLayout;
