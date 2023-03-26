import React from "react";

interface ButtonProps {
  value: string;
  onClick: () => void;
  icon?: string;
}

interface WrapperClassProps {
  wrapperClass: string;
}

type Props = ButtonProps & WrapperClassProps;

const withWrapperClass = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<Props & Omit<P, keyof WrapperClassProps>> => {
  return ({ wrapperClass, ...rest }: Props) => {
    return (
      <div className={wrapperClass}>
        <WrappedComponent {...(rest as P)} />
      </div>
    );
  };
};

const Button: React.FC<ButtonProps> = ({ value, onClick, icon }) => {
  return (
    <button onClick={onClick} className="flex gap-2 ">
      {icon && <img src={icon} alt="icon" className="mt-1 " />}
      {value}
    </button>
  );
};

const WrappedButton = withWrapperClass(Button);

export default WrappedButton;
