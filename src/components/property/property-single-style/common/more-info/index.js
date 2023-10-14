"use client";
import Select from "react-select";
import SingleAgentInfo from "./SingleAgentInfo";
import { useState } from "react";
import { submitContactForm } from "@/api/properties";
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
import { DetailPageContactForm } from "@/api/properties";

const InfoWithForm = (agentsDetails) => {
  const onlyEmail = /^((\w+\.)*\w+)@(\w+\.)+(\w)/
	const onlyText = /^[a-zA-Z ]*$/
	const onlyContactNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
	const [ValidFirstName, setValidFirstName] = useState(true)
  const [ValidLastName, setValidLastName] = useState(true)
	const [ValidEmail, setValidEmail] = useState(true)
	const [ValidPhone, setValidPhone] = useState(true)
	const [alertMsg, setAlertMsg] = useState([])
	const [alertTitle, setAlertTitle] = useState([])
	const [alertSeverity, setAlertSeverity] = useState([])
	const [error, setError] = useState(false)
	const [formSubmit, setFormSubmit] = useState(false)
	const [messageEmpty, setMessageEmpty] = useState(false)
	const [responsData, setRespons] = useState(false)
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
	const [open, setOpen] = useState(false)
	const [formData, setFormData] = useState({
	  first_name: "",
    last_name: "",
		email: "",
		phone: "",
		message: "",
	})

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
          throw new Error("Fill the correct first name");
        }
        else if (formData.last_name == "") {
          // check the first name empty
          setError(true);
          setValidLastName(false);
          throw new Error("Fill the last name");
        } else if (!formData.last_name.match(onlyText)) {
          // check the first
          setValidLastName(false);
          setError(true);
          throw new Error("Fill the correct last name");
        }
        else if (formData.phone == "") {
          setError(true);
          setValidPhone(false);
          throw new Error("Fill the contact number");
        } else if (!formData.phone.match(onlyContactNumber)) {
          setError(true);
          setValidPhone(false);
          throw new Error("Fill the correct contact number");
        } 
         else if (formData.email == "") {
          setError(true);
          setValidEmail(false);
          throw new Error("Fill the email");
        } else if (!formData.email.match(onlyEmail)) {
          setError(true);
          setValidEmail(false);
          throw new Error("Fill the correct email");
        } else if (formData.message == "") {
          setValidEmail(true);
          setError(true);
          setMessageEmpty(true);
          throw new Error("Fill the message");
        } else {
          setMessageEmpty(false);
          setError(false);
          console.log("no error");
          console.log(formData);
          DetailPageContactForm(formData).then((res) => {
            console.log(res.data);

            if (res.data === true) {
              setRespons(true);
              setFormData({
                first_name: "",
                last_name:"",
                email: "",
                phone: "",
                message: "",
              });
              setFormSubmit(false);
              document.getElementById("form").reset();
              handleClickOpen();
            }
          });
        }
      } catch (error) {
        console.log("Error occur " + error.message);
        setAlertMsg(error.message);
        setAlertTitle("Error");
        setAlertSeverity("error");
      }
    }
  };

  const inqueryType = [
    { value: "Engineer", label: "Engineer" },
    { value: "Doctor", label: "Doctor" },
    { value: "Employee", label: "Employee" },
    { value: "Businessman", label: "Businessman" },
    { value: "Other", label: "Other" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  return (
    <>
    {
      agentsDetails != undefined ? 
      <SingleAgentInfo agentsDetails={agentsDetails}/>
      :
      ""
    }
      
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
      <div className="row">
        <div className="col-md-12">

          <form className="form-style1 row" id="form">
            <div className="col-md-6">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10 paragraph-theme">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ali Tufan"
                  onChange={(event) => {
                    setFormData({ ...formData, first_name: event.target.value });
                  }}
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10 paragraph-theme">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone"
                  onChange={(event) => {
                    setFormData({ ...formData, phone: event.target.value });
                  }}
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10 paragraph-theme">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="creativelayers088"
                  onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value });
                  }}
                />
              </div>
            </div>
            {/* End .col */}

            {/* <div className="col-md-6">
              <div className="widget-wrapper sideborder-dropdown">
                <label className="heading-color ff-heading fw600 mb10 paragraph-theme">
                  I&apos;m a
                </label>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[inqueryType[0]]}
                    name="colors"
                    options={inqueryType}
                    styles={customStyles}
                    className="custom-react_select"
                    classNamePrefix="select"
                    required
                    isClearable={false}
                  />
                </div>
              </div>
            </div> */}
            {/* End .col */}

            <div className="col-md-12">
              <div className="mb10">
                <label className="heading-color ff-heading fw600 mb10 paragraph-theme">
                  Message
                </label>
                <textarea
                  cols={30}
                  rows={4}
                  placeholder="Hello, I am interested in [Renovated apartment at last floor]"
                  defaultValue={""}
                  onChange={(event) => {
                    setFormData({ ...formData, message: event.target.value });
                  }}
                />
              </div>
            </div>
            {/* End .col */}

            {/* <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
              <label className="custom_checkbox fz14 ff-heading">
                By submitting this form I agree to Terms of Use
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div> */}
            {/* End .col */}

            <div className="btn-area mt20">
              <button className="ud-btn btn-white2" onClick={(event)=>onSubmitForm(event)}>
                Request Information <i className="fal fa-arrow-right-long" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InfoWithForm;
