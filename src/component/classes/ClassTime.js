import React, { useState } from 'react';

const ClassTimetable = () => {
  const [activeTab, setActiveTab] = useState(1);

  

  const schedule = {
    Monday:[ 
        { time: '6.00am - 8.00am', class: 'Power Lifting', instructor: 'John Deo' },
        { time: '8.00am - 10.00am', class: 'Body Building', instructor: 'James Taylor' },
        { time: '10.00am - 12.00pm', class: 'Cardio Program', instructor: 'Jack Sparrow' },
        { time: '12.00pm - 2.00pm', class: 'Weight Loose', instructor: 'Robert Smith' },
        { time: '2.00pm - 4.00pm', class: 'Fitness Program', instructor: 'Adam Phillips' },
        { time: '4.00pm - 6.00pm', class: 'Crossfit Class', instructor: 'James Alien' },
        { time: '6.00pm - 8.00pm', class: 'Muscle Building', instructor: 'Petter John' },
        { time: '8.00pm - 10.00pm', class: 'Yoga Class', instructor: 'Jessy Reo' },
    ],
    Tuesday:[ 
        { time: '6.00am - 8.00am', class: 'Power Lifting', instructor: 'John Deo' },
        { time: '8.00am - 10.00am', class: 'Body Building', instructor: 'James Taylor' },
        { time: '10.00am - 12.00pm', class: 'Cardio Program', instructor: 'Jack Sparrow' },
        { time: '12.00pm - 2.00pm', class: 'Weight Loose', instructor: 'Robert Smith' },
        { time: '2.00pm - 4.00pm', class: 'Fitness Program', instructor: 'Adam Phillips' },
        { time: '4.00pm - 6.00pm', class: 'Crossfit Class', instructor: 'James Alien' },
        { time: '6.00pm - 8.00pm', class: 'Muscle Building', instructor: 'Petter John' },
        { time: '8.00pm - 10.00pm', class: 'Yoga Class', instructor: 'Jessy Reo' },
    ],
    Wednesday:[ 
        { time: '6.00am - 8.00am', class: 'Power Lifting', instructor: 'John Deo' },
        { time: '8.00am - 10.00am', class: 'Body Building', instructor: 'James Taylor' },
        { time: '10.00am - 12.00pm', class: 'Cardio Program', instructor: 'Jack Sparrow' },
        { time: '12.00pm - 2.00pm', class: 'Weight Loose', instructor: 'Robert Smith' },
        { time: '2.00pm - 4.00pm', class: 'Fitness Program', instructor: 'Adam Phillips' },
        { time: '4.00pm - 6.00pm', class: 'Crossfit Class', instructor: 'James Alien' },
        { time: '6.00pm - 8.00pm', class: 'Muscle Building', instructor: 'Petter John' },
        { time: '8.00pm - 10.00pm', class: 'Yoga Class', instructor: 'Jessy Reo' },
    ],
    Thursday:[ 
        { time: '6.00am - 8.00am', class: 'Power Lifting', instructor: 'John Deo' },
        { time: '8.00am - 10.00am', class: 'Body Building', instructor: 'James Taylor' },
        { time: '10.00am - 12.00pm', class: 'Cardio Program', instructor: 'Jack Sparrow' },
        { time: '12.00pm - 2.00pm', class: 'Weight Loose', instructor: 'Robert Smith' },
        { time: '2.00pm - 4.00pm', class: 'Fitness Program', instructor: 'Adam Phillips' },
        { time: '4.00pm - 6.00pm', class: 'Crossfit Class', instructor: 'James Alien' },
        { time: '6.00pm - 8.00pm', class: 'Muscle Building', instructor: 'Petter John' },
        { time: '8.00pm - 10.00pm', class: 'Yoga Class', instructor: 'Jessy Reo' },
    ],
    Friday:[ 
        { time: '6.00am - 8.00am', class: 'Power Lifting', instructor: 'John Deo' },
        { time: '8.00am - 10.00am', class: 'Body Building', instructor: 'James Taylor' },
        { time: '10.00am - 12.00pm', class: 'Cardio Program', instructor: 'Jack Sparrow' },
        { time: '12.00pm - 2.00pm', class: 'Weight Loose', instructor: 'Robert Smith' },
        { time: '2.00pm - 4.00pm', class: 'Fitness Program', instructor: 'Adam Phillips' },
        { time: '4.00pm - 6.00pm', class: 'Crossfit Class', instructor: 'James Alien' },
        { time: '6.00pm - 8.00pm', class: 'Muscle Building', instructor: 'Petter John' },
        { time: '8.00pm - 10.00pm', class: 'Yoga Class', instructor: 'Jessy Reo' },
    ],
    Saturday:[ 
        { time: '6.00am - 8.00am', class: 'Power Lifting', instructor: 'John Deo' },
        { time: '8.00am - 10.00am', class: 'Body Building', instructor: 'James Taylor' },
        { time: '10.00am - 12.00pm', class: 'Cardio Program', instructor: 'Jack Sparrow' },
        { time: '12.00pm - 2.00pm', class: 'Weight Loose', instructor: 'Robert Smith' },
        { time: '2.00pm - 4.00pm', class: 'Fitness Program', instructor: 'Adam Phillips' },
        { time: '4.00pm - 6.00pm', class: 'Crossfit Class', instructor: 'James Alien' },
        { time: '6.00pm - 8.00pm', class: 'Muscle Building', instructor: 'Petter John' },
        { time: '8.00pm - 10.00pm', class: 'Yoga Class', instructor: 'Jessy Reo' },
    ],
    Sunday:[ 
        { time: '6.00am - 8.00am', class: 'Power Lifting', instructor: 'John Deo' },
        { time: '8.00am - 10.00am', class: 'Body Building', instructor: 'James Taylor' },
        { time: '10.00am - 12.00pm', class: 'Cardio Program', instructor: 'Jack Sparrow' },
        { time: '12.00pm - 2.00pm', class: 'Weight Loose', instructor: 'Robert Smith' },
        { time: '2.00pm - 4.00pm', class: 'Fitness Program', instructor: 'Adam Phillips' },
        { time: '4.00pm - 6.00pm', class: 'Crossfit Class', instructor: 'James Alien' },
        { time: '6.00pm - 8.00pm', class: 'Muscle Building', instructor: 'Petter John' },
        { time: '8.00pm - 10.00pm', class: 'Yoga Class', instructor: 'Jessy Reo' },
    ]
};

const renderTabContent = (day) => {
    const dailySchedule = schedule[day] || [];  // Lấy lịch theo ngày, mặc định là mảng rỗng nếu không có lịch
    return (
      <div className="row g-5">
        {dailySchedule.map((session, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div className="bg-dark rounded text-center py-5 px-3">
              <h6 className="text-uppercase text-light mb-3">{session.time}</h6>
              <h5 className="text-uppercase text-primary">{session.class}</h5>
              <p className="text-uppercase text-secondary mb-0">{session.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Các tab cho các ngày trong tuần
  const tabs = [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 7, name: 'Sunday' },
  ];

  return (
    <div>
      <div className="container-fluid bg-primary p-5 bg-hero mb-5">
        <div className="row py-5">
          <div className="col-12 text-center">
            <h1 className="display-2 text-uppercase text-white mb-md-4">Classes</h1>
            <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
            <a href="/" className="btn btn-light py-md-3 px-md-5">Classes</a>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5">
        <div className="mb-5 text-center">
          <h5 className="text-primary text-uppercase">Class Schedule</h5>
          <h1 className="display-3 text-uppercase mb-0">Working Hours</h1>
        </div>

        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.id}>
                <a
                  className={`nav-link rounded-pill text-white ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  href={`#tab-${tab.id}`}
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane fade p-0 ${activeTab === tab.id ? 'show active' : ''}`}
                id={`tab-${tab.id}`}
              >
                {activeTab === tab.id && renderTabContent(tab.name)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassTimetable;
