import { ElevateDataInterface } from "../constant/ElevateData";

const Elevate: React.FC<ElevateDataInterface> = ({
  title,
  description,
  number,
}) => {
  return (
    <div className="elevates">
      <h1 className="elevates__title">{number}. {title}</h1>
      <p className="elevates__description">{description}</p>
    </div>
  );
};

export default Elevate;
