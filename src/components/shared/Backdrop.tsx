interface BackdropProp {
  children: React.ReactNode;
  toggle?: () => void;
  isCenter?: boolean;
}

const Backdrop = ({ children, toggle, isCenter = false }: BackdropProp) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`z-0 h-full w-full bg-black-200/40 ${
        isCenter && "flex items-center justify-center"
      }`}
      onClick={toggle}
    >
      <div onClick={handleClick} className="">
        {children}
      </div>
    </div>
  );
};

export default Backdrop;
