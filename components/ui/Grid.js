const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-2 640:grid-cols-12 gap-x-4 640:gap-x-8">
      {children}
    </div>
  );
};

export default Grid;
