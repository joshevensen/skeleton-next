type props = {
  children: any;
  className?: string;
};

const LibHeading: React.FC<props> = ({ children, className }) => {
  return (
    <h3 className={`text-lg font-bold text-text-light ${className}`}>
      {children}
    </h3>
  );
};

export default LibHeading;
