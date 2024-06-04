interface buttonProps {
    title: string;
    type:string
  }
  
  const Button: React.FC<buttonProps> = ({ title,type }) => {
    return <button className={`button button__${type}`}>{title}</button>;
  };
  
  export default Button;
  