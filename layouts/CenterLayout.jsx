

const styles = {
  parentContainer: "w-full h-full px-4 md:px-8   ",
  container: "xl:container 2xl:mx-auto ",
};

const CenterLayout = ({ children }) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default CenterLayout;
