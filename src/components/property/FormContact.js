"use client";
import React from "react";
import { DetailPageContactForm1 } from "@/api/properties";
// submitContactForm
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
import Link from "next/link";

const FormContact = () => {
  const onlyEmail = /^((\w+\.)*\w+)@(\w+\.)+(\w)/;
  const onlyText = /^[a-zA-Z ]*$/;
  // /^\d{10}$/
  const onlyContactNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  const [ValidName, setValidName] = useState(true);
  const [ValidEmail, setValidEmail] = useState(true);
  const [ValidPhone, setValidPhone] = useState(true);
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
    name: "",
    email: "",
    phone: "",
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
        if (formData.name == "") {
          // check the first name empty
          setError(true);
          setValidName(false);
          throw new Error("Fill the name");
        } else if (!formData.name.match(onlyText)) {
          // check the first
          setValidName(false);
          setError(true);
          throw new Error("Fill the correct name");
        } else if (formData.phone == "") {
          setError(true);
          setValidPhone(false);
          throw new Error("Fill the contact number");
        } else if (!formData.phone.match(onlyContactNumber)) {
          setError(true);
          setValidPhone(false);
          throw new Error("Fill the correct contact number");
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
          // setMessageEmpty(true);
          throw new Error("Fill the message");
        } else if (!formData.message.match(onlyText)) {
          setValidMsg(true);
          setError(true);
          // setMessageEmpty(true);
          throw new Error("Fill the currect message");
        } else {
          setMessageEmpty(false);
          setError(false);
          setRespons(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setFormSubmit(false);
          document.getElementById("form").reset();
          handleClickOpen();
          await DetailPageContactForm1(formData);
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
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
                onChange={(event) => {
                  setFormData({ ...formData, name: event.target.value });
                }}
              />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-lg-12">
            <div className="mb20">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                required
                onChange={(event) => {
                  setFormData({ ...formData, phone: event.target.value });
                }}
              />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-md-12">
            <div className="mb20">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                onChange={(event) => {
                  setFormData({ ...formData, email: event.target.value });
                }}
              />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-md-12">
            <div className="mb10">
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
          {/* End .col-12 */}

          <div className="col-md-12">
            <div className="d-grid">
              <button
                type="submit"
                className="ud-btn btn-thm mb15"
                onClick={(event) => onSubmitForm(event)}
              >
                Send Message
                <i className="fal fa-arrow-right-long" />
              </button>
              <Link className="ud-btn btn-white2" href="tel:+971505527479">
                Call
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default FormContact;
