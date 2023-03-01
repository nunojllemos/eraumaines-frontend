const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 640:grid-cols-12 gap-x-4">
      {children}
    </div>
  );
};  

export default Grid;
