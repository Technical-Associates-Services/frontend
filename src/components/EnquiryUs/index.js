import React, { useState } from 'react'

const Enquiry = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
      <div className="enquiry">
        <div className="enquiry__button" onClick={() => setShowForm(!showForm)}>
          Enquire Us
          <i className="ri-mail-line"></i>
        </div>

        <div className={`enquiry__card ${showForm ? 'active' : ' '} `}>
          <div className="custom-wrapper">
            <h4>
              Send Us A Message
              <i
                className="ri-close-line"
                onClick={() => setShowForm(!showForm)}
              ></i>
            </h4>

            <form className="enquiry__form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Enquiry
