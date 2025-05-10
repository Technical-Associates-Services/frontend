import React, { useState } from "react";
import { Link } from "react-router-dom";
import SendIcon from "../../../icons/SendIcon";
import axios from "axios";
import toast from "react-hot-toast";
import { Form, Spinner } from "react-bootstrap";

const SubscriberForm = () => {
      const [loading, setLoading] = useState(false);
      const [email, setEmail] = useState("");

      const handleForm = async (event) => {
            event.preventDefault();
            setLoading(true);

            if (email === "") {
                  toast.error("Please enter email address.");
                  setLoading(false);
                  return
            }

            await axios
                  .post(
                        `${process.env.REACT_APP_SECRET_KEY}/api/subscribers`,
                        { email: email },
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              toast.success(response.data.message);
                              setEmail("");
                        }
                        if (response.data.result === "error") {
                              if (response.data.message.email) {
                                    toast.error(response.data.message.email);
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
                  <Form>
                        <input
                              type="text"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                              placeholder="Email address"
                        />
                        <Link to="">
                              <div className="send-btn" onClick={handleForm}>
                                    {!loading ? (
                                          <SendIcon
                                                style={{
                                                      fontSize: "16px",
                                                }}
                                          />
                                    ) : (
                                          <Spinner />
                                    )}
                              </div>
                        </Link>
                  </Form>
            </>
      );
};

export default SubscriberForm;
