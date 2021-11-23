import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

export const Button = ({ children, input }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(addCommentThunk(input))}>{children}</button>
  );
};
