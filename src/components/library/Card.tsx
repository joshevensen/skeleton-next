import { ReactElement, ReactNode } from "react";

type props = {
  children: ReactNode;
  heading?: string;
  right?: ReactElement;
};

const LibCard: React.FC<props> = ({ children, heading, right }) => {
  return (
    <section className="border border-border rounded-lg p-3">
      {heading && (
        <header className="flex justify-between items-center mb-4">
          <h3 className="uppercase font-medium text-text-light">{heading}</h3>

          <div className="flex items-center space-x-3">{right}</div>
        </header>
      )}

      {children}
    </section>
  );
};

export default LibCard;
