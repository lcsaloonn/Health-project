import { ButtonStyleEnum } from "utils/types/enums/buttonStyleEnum";
import { SizeEnum } from "utils/types/enums/sizeEnum";

type IButton = {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonStyle?: ButtonStyleEnum;
  buttonSize?: SizeEnum;
};

const BasicButton = ({
  children,
  onClick,
  buttonSize,
  buttonStyle,
}: IButton) => {
  const setBtnDefaultStyle =
    buttonStyle != null ? buttonStyle : ButtonStyleEnum.PRIMARY;

  const setBtnDefaultSize = buttonSize != null ? buttonSize : SizeEnum.MEDIUM;

  return (
    <button
      onClick={onClick}
      className={`btn ${setBtnDefaultStyle} ${setBtnDefaultSize} `}
      type="button"
    >
      {children}
    </button>
  );
};
export default BasicButton;
