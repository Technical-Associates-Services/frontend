import React, { useState } from "react";
import ContactForm from "../../frontend/contact/ContactForm";

const Enquiry = () => {
      const [showForm, setShowForm] = useState(false);
      const [loading, setLoading] = useState(false);

      return (
            <>
                  <div className="enquiry">
                        <div
                              className="enquiry__button"
                              onClick={() => setShowForm(!showForm)}
                        >
                              Enquire Us
                              <i className="ri-mail-line"></i>
                        </div>

                        <div
                              className={`enquiry__card ${
                                    showForm ? "active" : " "
                              } `}
                        >
                              <div className="custom-wrapper">
                                    <h4>
                                          Send Us A Message
                                          <i
                                                className="ri-close-line"
                                                onClick={() =>
                                                      setShowForm(!showForm)
                                                }
                                          ></i>
                                    </h4>
                                    <ContactForm
                                          loading={loading}
                                          setLoading={setLoading}
                                    />
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Enquiry;
