import axios from "axios";
import { useNavigation } from "react-router-dom";
export const loginUser = (email, password) => async (dispatch) => {
  //  const navigate = useNavigation();
   try {
      dispatch({
         type: "LoginRequest",
      });

      const { data } = await axios.post(
         "/api/v1/login",
         { email, password },
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      dispatch({
         type: "LoginSuccess",
         payload: data.user,
      });
   } catch (error) {
      dispatch({
         type: "LoginFailure",
         payload: error,
      });
   }
};

export const loadUser = () => async (dispatch) => {
   try {
      dispatch({
         type: "LoadUserRequest",
      });

      const { data } = await axios.get(
         "/api/v1/me",

         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      dispatch({
         type: "LoadUserSuccess",
         payload: data.user,
      });
   } catch (error) {
      dispatch({
         type: "LoadUserFailure",
         payload: error,
      });
   }
};
