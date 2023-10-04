interface BackdropProp {
  children: React.ReactNode;
  toggle: () => void
}

const Backdrop = ({ children, toggle }: BackdropProp) => {

    const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }
  return (
    <div className="z-[0] h-full w-full bg-black-200/40" onClick={toggle}>
      <div onClick={handleClick}>{children}</div>
    </div>
  );
};

export default Backdrop;
