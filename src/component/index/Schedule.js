import React, { useState } from "react";

const Schedule = () => {
  const scheduleData = {
    Monday: [
      { time: "6.00am - 8.00am", program: "Power Lifting", instructor: "John Deo" },
      { time: "8.00am - 10.00am", program: "Body Building", instructor: "James Taylor" },
      { time: "10.00am - 12.00pm", program: "Cardio Program", instructor: "Jack Sparrow" },
      { time: "12.00pm - 2.00pm", program: "Weight Loose", instructor: "Robert Smith" },
      { time: "2.00pm - 4.00pm", program: "Fitness Program", instructor: "Adam Phillips" },
      { time: "4.00pm - 6.00pm", program: "Crossfit Class", instructor: "James Alien" },
      { time: "6.00pm - 8.00pm", program: "Muscle Building", instructor: "Petter John" },
      { time: "8.00pm - 10.00pm", program: "Yoga Class", instructor: "Jessy Reo" },
    ],
    Tuesday: [
      { time: "6.00am - 8.00am", program: "Power Lifting", instructor: "John Deo" },
      { time: "8.00am - 10.00am", program: "Body Building", instructor: "James Taylor" },
      { time: "10.00am - 12.00pm", program: "Cardio Program", instructor: "Jack Sparrow" },
      { time: "12.00pm - 2.00pm", program: "Weight Loose", instructor: "Robert Smith" },
      { time: "2.00pm - 4.00pm", program: "Fitness Program", instructor: "Adam Phillips" },
      { time: "4.00pm - 6.00pm", program: "Crossfit Class", instructor: "James Alien" },
      { time: "6.00pm - 8.00pm", program: "Muscle Building", instructor: "Petter John" },
      { time: "8.00pm - 10.00pm", program: "Yoga Class", instructor: "Jessy Reo" },
    ],
    Wednesday: [
        { time: "6.00am - 8.00am", program: "Power Lifting", instructor: "John Deo" },
        { time: "8.00am - 10.00am", program: "Body Building", instructor: "James Taylor" },
        { time: "10.00am - 12.00pm", program: "Cardio Program", instructor: "Jack Sparrow" },
        { time: "12.00pm - 2.00pm", program: "Weight Loose", instructor: "Robert Smith" },
        { time: "2.00pm - 4.00pm", program: "Fitness Program", instructor: "Adam Phillips" },
        { time: "4.00pm - 6.00pm", program: "Crossfit Class", instructor: "James Alien" },
        { time: "6.00pm - 8.00pm", program: "Muscle Building", instructor: "Petter John" },
        { time: "8.00pm - 10.00pm", program: "Yoga Class", instructor: "Jessy Reo" },
      ],
      Thursday: [
        { time: "6.00am - 8.00am", program: "Power Lifting", instructor: "John Deo" },
        { time: "8.00am - 10.00am", program: "Body Building", instructor: "James Taylor" },
        { time: "10.00am - 12.00pm", program: "Cardio Program", instructor: "Jack Sparrow" },
        { time: "12.00pm - 2.00pm", program: "Weight Loose", instructor: "Robert Smith" },
        { time: "2.00pm - 4.00pm", program: "Fitness Program", instructor: "Adam Phillips" },
        { time: "4.00pm - 6.00pm", program: "Crossfit Class", instructor: "James Alien" },
        { time: "6.00pm - 8.00pm", program: "Muscle Building", instructor: "Petter John" },
        { time: "8.00pm - 10.00pm", program: "Yoga Class", instructor: "Jessy Reo" },
      ],
      Friday: [
        { time: "6.00am - 8.00am", program: "Power Lifting", instructor: "John Deo" },
        { time: "8.00am - 10.00am", program: "Body Building", instructor: "James Taylor" },
        { time: "10.00am - 12.00pm", program: "Cardio Program", instructor: "Jack Sparrow" },
        { time: "12.00pm - 2.00pm", program: "Weight Loose", instructor: "Robert Smith" },
        { time: "2.00pm - 4.00pm", program: "Fitness Program", instructor: "Adam Phillips" },
        { time: "4.00pm - 6.00pm", program: "Crossfit Class", instructor: "James Alien" },
        { time: "6.00pm - 8.00pm", program: "Muscle Building", instructor: "Petter John" },
        { time: "8.00pm - 10.00pm", program: "Yoga Class", instructor: "Jessy Reo" },
      ],
      Saturday: [
        { time: "6.00am - 8.00am", program: "Power Lifting", instructor: "John Deo" },
        { time: "8.00am - 10.00am", program: "Body Building", instructor: "James Taylor" },
        { time: "10.00am - 12.00pm", program: "Cardio Program", instructor: "Jack Sparrow" },
        { time: "12.00pm - 2.00pm", program: "Weight Loose", instructor: "Robert Smith" },
        { time: "2.00pm - 4.00pm", program: "Fitness Program", instructor: "Adam Phillips" },
        { time: "4.00pm - 6.00pm", program: "Crossfit Class", instructor: "James Alien" },
        { time: "6.00pm - 8.00pm", program: "Muscle Building", instructor: "Petter John" },
        { time: "8.00pm - 10.00pm", program: "Yoga Class", instructor: "Jessy Reo" },
      ],
      Sunday: [
        { time: "6.00am - 8.00am", program: "Power Lifting", instructor: "John Deo" },
        { time: "8.00am - 10.00am", program: "Body Building", instructor: "James Taylor" },
        { time: "10.00am - 12.00pm", program: "Cardio Program", instructor: "Jack Sparrow" },
        { time: "12.00pm - 2.00pm", program: "Weight Loose", instructor: "Robert Smith" },
        { time: "2.00pm - 4.00pm", program: "Fitness Program", instructor: "Adam Phillips" },
        { time: "4.00pm - 6.00pm", program: "Crossfit Class", instructor: "James Alien" },
        { time: "6.00pm - 8.00pm", program: "Muscle Building", instructor: "Petter John" },
        { time: "8.00pm - 10.00pm", program: "Yoga Class", instructor: "Jessy Reo" },
      ],
  };

  const [activeDay, setActiveDay] = useState("Monday");

  const handleTabClick = (day) => {
    setActiveDay(day);
  };

  return (
    <div className="container-fluid p-5">
      <div className="mb-5 text-center">
        <h5 className="text-primary text-uppercase">Class Schedule</h5>
        <h1 className="display-3 text-uppercase mb-0">Working Hours</h1>
      </div>
      <div className="tab-class text-center">
        <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
          {Object.keys(scheduleData).map((day) => (
            <li className="nav-item" key={day}>
              <button
                className={`nav-link rounded-pill text-white ${activeDay === day ? "active" : ""}`}
                onClick={() => handleTabClick(day)}
              >
                {day}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {/* Monday Tab */}
          <div
            id="tab-5"
            className={`tab-pane fade p-0 ${activeDay === "Monday" ? "show active" : ""}`}
          >
            <div className="row g-5">
              {scheduleData.Monday.map((session, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="bg-dark rounded text-center py-5 px-3">
                    <h6 className="text-uppercase text-light mb-3">{session.time}</h6>
                    <h5 className="text-uppercase text-primary">{session.program}</h5>
                    <p className="text-uppercase text-secondary mb-0">{session.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tuesday Tab */}
          <div
            id="tab-6"
            className={`tab-pane fade p-0 ${activeDay === "Tuesday" ? "show active" : ""}`}
          >
            <div className="row g-5">
              {scheduleData.Tuesday.map((session, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="bg-dark rounded text-center py-5 px-3">
                    <h6 className="text-uppercase text-light mb-3">{session.time}</h6>
                    <h5 className="text-uppercase text-primary">{session.program}</h5>
                    <p className="text-uppercase text-secondary mb-0">{session.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="tab-6"
            className={`tab-pane fade p-0 ${activeDay === "Wednesday" ? "show active" : ""}`}
          >
            <div className="row g-5">
              {scheduleData.Tuesday.map((session, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="bg-dark rounded text-center py-5 px-3">
                    <h6 className="text-uppercase text-light mb-3">{session.time}</h6>
                    <h5 className="text-uppercase text-primary">{session.program}</h5>
                    <p className="text-uppercase text-secondary mb-0">{session.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="tab-6"
            className={`tab-pane fade p-0 ${activeDay === "Thursday" ? "show active" : ""}`}
          >
            <div className="row g-5">
              {scheduleData.Tuesday.map((session, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="bg-dark rounded text-center py-5 px-3">
                    <h6 className="text-uppercase text-light mb-3">{session.time}</h6>
                    <h5 className="text-uppercase text-primary">{session.program}</h5>
                    <p className="text-uppercase text-secondary mb-0">{session.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="tab-6"
            className={`tab-pane fade p-0 ${activeDay === "Friday" ? "show active" : ""}`}
          >
            <div className="row g-5">
              {scheduleData.Tuesday.map((session, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="bg-dark rounded text-center py-5 px-3">
                    <h6 className="text-uppercase text-light mb-3">{session.time}</h6>
                    <h5 className="text-uppercase text-primary">{session.program}</h5>
                    <p className="text-uppercase text-secondary mb-0">{session.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="tab-6"
            className={`tab-pane fade p-0 ${activeDay === "Saturday" ? "show active" : ""}`}
          >
            <div className="row g-5">
              {scheduleData.Tuesday.map((session, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="bg-dark rounded text-center py-5 px-3">
                    <h6 className="text-uppercase text-light mb-3">{session.time}</h6>
                    <h5 className="text-uppercase text-primary">{session.program}</h5>
                    <p className="text-uppercase text-secondary mb-0">{session.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="tab-6"
            className={`tab-pane fade p-0 ${activeDay === "Sunday" ? "show active" : ""}`}
          >
            <div className="row g-5">
              {scheduleData.Tuesday.map((session, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="bg-dark rounded text-center py-5 px-3">
                    <h6 className="text-uppercase text-light mb-3">{session.time}</h6>
                    <h5 className="text-uppercase text-primary">{session.program}</h5>
                    <p className="text-uppercase text-secondary mb-0">{session.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Schedule;
