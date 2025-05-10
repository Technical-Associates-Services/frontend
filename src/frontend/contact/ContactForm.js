import axios from "axios";
import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";

const ContactForm = ({ contactStatus, loading, setLoading }) => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [message, setMessage] = useState("");

      const handleForm = async (event) => {
            event.preventDefault();
            setLoading(true);

            const data = {
                  name: name,
                  email: email,
                  phone_number: phoneNumber,
                  message: message,
            };

            await axios
                  .post(
                        `${process.env.REACT_APP_SECRET_KEY}/api/contacts`,
                        data,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              toast.success(response.data.message);
                              setName("");
                              setEmail("");
                              setPhoneNumber("");
                              setMessage("");
                        }
                        if (response.data.result === "error") {
                              if (response.data.message.name) {
                                    toast.error(response.data.message.name);
                              }
                              if (response.data.message.email) {
                                    toast.error(response.data.message.email);
                              }
                              if (response.data.message.phone_number) {
                                    toast.error(
                                          response.data.message.phone_number
                                    );
                              }
                              if (response.data.message.message) {
                                    toast.error(response.data.message.message);
                              }
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });

            setLoading(false);
      };

      return (
            <>
                  <Form
                        onSubmit={handleForm}
                        className={
                              contactStatus ? "contact__form" : "enquiry__form"
                        }
                  >
                        <div className="form-group">
                              <input
                                    type="text"
                                    onChange={(event) =>
                                          setName(event.target.value)
                                    }
                                    value={name}
                                    placeholder="Name"
                                    required
                              />
                        </div>
                        <div className="form-group">
                              <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(event) =>
                                          setEmail(event.target.value)
                                    }
                              />
                        </div>
                        <div className="form-group">
                              <input
                                    type="text"
                                    onChange={(event) =>
                                          setPhoneNumber(event.target.value)
                                    }
                                    value={phoneNumber}
                                    placeholder="Phone"
                                    required
                              />
                        </div>
                        <div className="form-group">
                              <textarea
                                    rows="6"
                                    placeholder="Message"
                                    required
                                    value={message}
                                    onChange={(event) =>
                                          setMessage(event.target.value)
                                    }
                              ></textarea>
                        </div>
                        <button type="submit">
                              {!loading ? "send message" : <Spinner />}
                        </button>
                  </Form>
            </>
      );
};

export default ContactForm;
