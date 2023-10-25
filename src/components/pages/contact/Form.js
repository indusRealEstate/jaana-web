"use client";
import { submitForm } from "@/api/properties";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState } from "react";
const Form = () => {
  const onlyEmail = /^((\w+\.)*\w+)@(\w+\.)+(\w)/;
  const onlyText = /^[a-zA-Z ]*$/;
  const [ValidFirstName, setValidFirstName] = useState(true);
  const [ValidLastName, setValidLastName] = useState(true);
  const [ValidEmail, setValidEmail] = useState(true);
  const [ValidMsg, setValidMsg] = useState(true);
  const [alertMsg, setAlertMsg] = useState([]);
  const [alertTitle, setAlertTitle] = useState([]);
  const [alertSeverity, setAlertSeverity] = useState([]);
  const [error, setError] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const [messageEmpty, setMessageEmpty] = useState(false);
  const [responsData, setRespons] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setRespons(false);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    // window.scrollTo(0, 0);

    if (event.type === "click") {
      setFormSubmit(true);
      try {
        if (formData.first_name == "") {
          // check the first name empty
          setError(true);
          setValidFirstName(false);
          throw new Error("Fill the first name");
        } else if (!formData.first_name.match(onlyText)) {
          // check the first
          setValidFirstName(false);
          setError(true);
          throw new Error("Fill the correct First name");
        } else if (formData.last_name == "") {
          setError(true);
          setValidLastName(false);
          throw new Error("Fill the last name");
        } else if (!formData.last_name.match(onlyText)) {
          setError(true);
          setValidLastName(false);
          throw new Error("Fill the correct last name");
        } else if (formData.email == "") {
          setError(true);
          setValidEmail(false);
          throw new Error("Fill the email");
        } else if (!formData.email.match(onlyEmail)) {
          setError(true);
          setValidEmail(false);
          throw new Error("Fill the correct email");
        } else if (formData.message == "") {
          setValidMsg(true);
          setError(true);
          setMessageEmpty(true);
          throw new Error("Fill the message");
        } else if (!formData.message.match(onlyText)) {
          setValidMsg(true);
          setError(true);
          setMessageEmpty(true);
          throw new Error("Fill the correct message");
        } else {
          setMessageEmpty(false);
          setError(false);
          setRespons(true);
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            message: "",
          });
          setFormSubmit(false);
          document.getElementById("form").reset();
          handleClickOpen();
          await submitForm(formData);
        }
      } catch (error) {
        console.log("Error occur " + error.message);
        setAlertMsg(error.message);
        setAlertTitle("Error");
        setAlertSeverity("error");
      }
    }
  };

  return (
    <>
      {responsData ? (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" color={"#1d4439"}>
            {"Thank you :)"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              We will soon connect with you.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              style={{
                color: "#1d4439",
              }}
            >
              OKAY
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        ""
      )}
      {formSubmit && error ? (
        <Alert severity={alertSeverity} className="mb-5">
          <AlertTitle>{alertTitle}</AlertTitle>
          <strong>{alertMsg}</strong>
        </Alert>
      ) : (
        ""
      )}
      <form className="form-style1" id="form">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10 paragraph-theme">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your First Name"
                required
                onChange={(event) => {
                  setFormData({ ...formData, first_name: event.target.value });
                }}
              />
            </div>
          </div>
          {/* End .col-lg-12 */}

          <div className="col-lg-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10 paragraph-theme">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Last Name"
                required
                onChange={(event) => {
                  setFormData({ ...formData, last_name: event.target.value });
                }}
              />
            </div>
          </div>
          {/* End .col-lg-12 */}

          <div className="col-md-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10 paragraph-theme">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
                onChange={(event) => {
                  setFormData({ ...formData, email: event.target.value });
                }}
              />
            </div>
          </div>
          {/* End .col-lg-12 */}

          <div className="col-md-12">
            <div className="mb10">
              <label className="heading-color ff-heading fw600 mb10 paragraph-theme">
                Message
              </label>
              <textarea
                cols={30}
                rows={4}
                placeholder="Your Message"
                defaultValue={""}
                required
                onChange={(event) => {
                  setFormData({ ...formData, message: event.target.value });
                }}
              />
            </div>
          </div>
          {/* End .col-lg-12 */}

          <div className="col-md-12">
            <div className="d-grid">
              <button
                type="submit"
                className="ud-btn btn-thm"
                onClick={(event) => onSubmitForm(event)}
              >
                Submit
                <i className="fal fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
