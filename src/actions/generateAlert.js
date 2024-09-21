import { GENERATE_CRITICAL_ALERT, GENERATE_NONCRITICAL_ALERT } from "../constants/actionTypes";

const generateAlert = (alert) => async (dispatch) => {
    try {
      if ( alert.alert_type === "InsuranceRenewal" ) {
        dispatch({ type: GENERATE_NONCRITICAL_ALERT, payload: alert });
      } else {
        dispatch({ type: GENERATE_CRITICAL_ALERT, payload: alert });
      }
    } catch (error) {
      console.log(error.message);
    }
};

export default generateAlert;