import React from "react";
import { withToastManager } from "react-toast-notifications";

class ToastNotification extends React.Component {
  state = { alert: this.props.alert };

  componentDidUpdate(prevProps) {
    // if the props are new compared to previous props on update
    if (this.props.alert !== prevProps.alert) {
      // set the state to the new alert prop
      this.setState({ alert: this.props.alert }, () => {
        // because the state receieves one alert at a time and clears all the alerts on refresh
        // this "new alert prop" may be empty
        // so only display a new alert if there is a message
        if (this.state.alert.message) {
          this.addAlert();
        }
      });
    }
  }

  addAlert = () => {
    const { toastManager } = this.props;
    const { alert } = this.state;
    toastManager.add(alert.message, {
      appearance: alert.type === "alert-success" ? "success" : "error",
      autoDismiss: true,
    });
  };

  render() {
    return null;
  }
}

export default withToastManager(ToastNotification);
