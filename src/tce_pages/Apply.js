 import React, { useState } from "react";
 import "../assets/styles/utility/form.scss";
import Navbar from "../tce_components/TCE_Navbar";
import "../assets/styles/apply_page.scss";
import "../assets/styles/landing_hero.scss";
import landing_hero_img_sm from "../assets/img/hero_img_sm.png";
import landing_hero_img_lg from "../assets/img/now_hiring_lg.png";
import dax7_map from "../assets/img/DAX7_google_maps.png";
import useBreakpoints from "../custom_hooks/useBreakpoint";
import { useForm } from "react-hook-form";

import { useRouteMatch } from "react-router-dom";

import { ErrorMessage } from '@hookform/error-message';

const Apply = () => {
  const [screen, setScreen] = useState(useBreakpoints());
  const [employmentHistory, setEmploymentHistory] = useState([]);

  let { path, url } = useRouteMatch();
  console.log(path);
  console.log(url);

  const { register, handleSubmit, watch, errors } = useForm();

  const daysOfWeekSelect = ["monday_select", "tuesday_select", "wednesday_select", "thursday_select", "friday_select", "saturday_select", "sunday_select"];

  const isMondaySelected = watch(daysOfWeekSelect[0], false);
  const isTuesdaySelected = watch(daysOfWeekSelect[1], false);
  const isWednesdaySelected = watch(daysOfWeekSelect[2], false);
  const isThursdaySelected = watch(daysOfWeekSelect[3], false);
  const isFridaySelected = watch(daysOfWeekSelect[4], false);
  const isSaturdaySelected = watch(daysOfWeekSelect[5], false);
  const isSundaySelected = watch(daysOfWeekSelect[6], false);


  const onSubmit = (data) => {
    console.log(data.first_name);
    console.log(data);
  };

  const onError = (errors, e) => console.log(errors, "errors");

  // console.log(watch("first_name")); // watch input value by passing the name of it

  const addEmploymentField = (e) => {
    e.preventDefault();
    let hist = [...employmentHistory];

    let history = {
      employer_name: "",
      address: "",
      employer_phone: "",
      employee_position: "",
      date_employed_initial: "",
      date_employed_end: "",
      description: "",
      reason_for_leaving: "",
    }

    hist.push([history]);

    console.log(hist);

    setEmploymentHistory(hist);


  }

  return (
    <>
      <Navbar />
      <div className="main-content">
        <section className="hero-section">
          <div
            className="hero-container"
            id="apply-hero"
            style={
              screen === "md" || screen === "lg"
                ? {
                    backgroundImage: `url(${landing_hero_img_lg})`,
                  }
                : {
                    height: "200px",
                    backgroundImage: `url(${landing_hero_img_lg})`,
                    backgroundPosition: "15% 50%",
                  }
            }></div>
        </section>

        <div className="apply-info-container">
          <div className="apply-section-info">
            <div className="apply-section-title">
              <h3>What we look for</h3>
            </div>
            <div className="apply-section-info-body">
              <p>
                Temple-Culberson Enterprises (TCE) is seeking individuals who
                are quick learners, motivated and team players to join our
                growing driver network. We offer a safe, comfortable van while
                using the latest technology to deliver Amazon packages. At TCE,
                we want all our employees to have fun while working hard & be
                successful in life not just work. We work as a team to make it
                happen, all day every day. Come join us on this exciting journey
                with TCE & Amazon.
              </p>
            </div>
          </div>
          <div className="apply-section-info">
            <div className="apply-section-title">
              <h3>Job Title</h3>
            </div>
            <div className="job-title-container">
              <h2>Last Mile Delivery</h2>
            </div>
          </div>
          <div className="apply-section-info">
            <div className="apply-section-title">
              <h3>Job Description</h3>
            </div>
            <div className="apply-section-info-body">
              <p>
                Temple-Culberson Enterprises (TCE) is seeking individuals who
                are quick learners, motivated and team players to join our
                growing driver network. We offer a safe, comfortable van while
                using the latest technology to deliver Amazon packages. At TCE,
                we want all our employees to have fun while working hard & be
                successful in life not just work. We work as a team to make it
                happen, all day every day. Come join us on this exciting journey
                with TCE & Amazon. Currently, we are looking for delivery
                drivers to service a 20-mile radius from the City of Commerce.
                An average day consists of 9 hours driving, 3- 4 days a week
                (Monday – Sunday). Dedicated shifts with same days off if
                desired. Must be comfortable driving high roof cargo vans
                (company provided vehicle). Full-time preferred, Part-time
                acceptable
              </p>
            </div>
          </div>
          <div className="apply-section-info">
            <div className="apply-section-title">
              <h3>Location</h3>
            </div>
            <div className="apply-section-info-body">
              <p>City of South Gate</p>
            </div>
          </div>
          <div className="apply-section-info">
            <div className="apply-section-title">
              <h3>Requirements</h3>
            </div>
            <div className="apply-section-info-body">
              <ul>
                <li>Minimum 21 years old with a valid Driver's License.</li>
                <li>
                  Capable of operating a smartphone device like cell phone.
                </li>
                <li>Lift & carry packages, sometimes up to 50 lbs.</li>
                <li>
                  Follow written & verbal instructions from Dispatcher to ensure
                  packages are delivered safely & correctly.
                </li>
                <li>
                  Provide feedback to dispatcher on any issues during your day.
                </li>
                <li>
                  Complete route in the allotted time while being as safe and
                  accurate as possible.
                </li>
              </ul>
            </div>
          </div>
          <div className="apply-section-info">
            <div className="apply-section-title">
              <h3>Experience</h3>
            </div>
            <div className="apply-section-info-body">
              <ul>
                <li>Delivery Driver: 1 year (Preferred)</li>
              </ul>
            </div>
          </div>
          <div className="apply-section-info">
            <div className="apply-section-title">
              <h3>Benefits</h3>
            </div>
            <div className="apply-section-info-body">
              <ul>
                <li>Bi-Weekly Pay, Paid Time off (PTO)</li>
                <li>Medical/Dental/401K after 30 days</li>
              </ul>
            </div>
          </div>
          <div className="apply-section-info">
            <div className="apply-section-title">
              <h3>Salary</h3>
            </div>
            <div className="apply-section-info-body">
              <ul>
                <li>
                  $15/hr. plus monthly bonuses for attendance/safety/on-time &
                  successful deliveries.
                </li>
              </ul>
            </div>
          </div>
          <div className="apply-section-info">
            <div className="apply-section-title">
              <h3>Comply with Background & Testing Requirements:</h3>
            </div>
            <div className="apply-section-info-body">
              <ul>
                <li>
                  7-year Federal & State felony/misdemeanor search in all
                  countries identified
                </li>
                <li>Motor vehicle driving record.</li>
                <li>5 Panel Drug Testing</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="form-content">
          <div className="form-container">

            <div id="form-container" className="">
              <form onSubmit={handleSubmit(onSubmit)} 
                    id="form-styling"
              >
                <div className="form-inner-container">

                  <section id="personal-information" className="form-section-block" >
                    <div className={`form-title-container `}>
                      <h3>Personal Information</h3>
                    </div>
                    <div className={`form-container-element ${errors.first_name && `error-highlight`}`}>


                      <label for="first_name" className="field-name">
                        First Name
                      </label>
                      <input
                        ref={register({ required: "* First name required." })}
                        name="first_name"
                        type="text"
                        id="first_name"
                        className="form-control"
                        placeholder="First Name"
                      />
                        <ErrorMessage
                        errors={errors}
                        name="first_name"
                        render={({ message }) => <p>{message}</p>}
                      />
                    </div>

                    <div className={`form-container-element ${errors.last_name && `error-highlight`}`}>
                      <label for="last_name" className="field-name">
                        Last Name
                      </label>
                      <input
                        ref={register({ required: "* Last name required." })}
                        name="last_name"
                        type="text"
                        id="last_name"
                        className="form-control"
                        placeholder="Last Name"
                      />
                        <ErrorMessage
                          errors={errors}
                          name="last_name"
                          render={({ message }) => <p>{message}</p>}
                        />
                    </div>
                  
                    <div className={`form-container-element ${errors.user_email && `error-highlight`}`}>
                      <label for="user_email" className="field-name">
                        Email
                      </label>
                      <input
                        ref={register({ required: "* Email required." })}
                        name="user_email"
                        type="email"
                        id="user_email"
                        className="form-control"
                        placeholder="johndoe@example.com"
                      />
                        <ErrorMessage
                          errors={errors}
                          name="user_email"
                          render={({ message }) => <p>{message}</p>}
                        />
                    </div>

                    <div className={`form-container-element ${errors.user_address && `error-highlight`}`}>
                      <label for="user_address" className="field-name">
                        Address
                      </label>
                      <input
                        ref={register({ required: "* Address required." })}
                        name="user_address"
                        type="text"
                        id="user_address"
                        className="form-control"
                        placeholder=""
                      />
                        <ErrorMessage
                          errors={errors}
                          name="user_address"
                          render={({ message }) => <p>{message}</p>}
                        />
                    </div>


                    <p className="form-container-group-title">Driver's License Info</p>

                    <div className="form-container-group">
                      <div className={`form-container-element ${errors.user_license && `error-highlight`}`}>
                        
                        <label for="user_license" className="field-name">
                          Driver's License
                        </label>
                        <input
                          ref={register({ required: "* License # required." })}
                          name="user_license"
                          type="text"
                          id="user_license"
                          className="form-control"
                          placeholder=""
                        />
                        <ErrorMessage
                          errors={errors}
                          name="user_license"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </div>

                      <div className={`form-container-element ${errors.user_license && `error-highlight`}`}>
                        <label for="license_state" className="field-name">
                          State
                        </label>
                        <input
                          ref={register({ required: "* License state required." })}
                          name="license_state"
                          type="text"
                          id="license_state"
                          size="4"
                          className="form-control"
                          placeholder=""
                        />
                        <ErrorMessage
                          errors={errors}
                          name="license_state"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </div>
                    </div>

                    <p className="">Can provide verification to legally work in the United States?</p>

                    <div className="form-container-group">
                      <input name="us_verification" type="radio" value="Yes" ref={register({ required: true })}/>
                      <label for="" className="">Yes</label>
                      <input name="us_verification" type="radio" value=" No" ref={register({ required: true })}/>
                      <label for="" className=""> No </label>
                    </div>

                    <p className="">Have you ever been discharged or asked to resign by an employer? </p>

                    <div className="form-container-group">
                      <input name="discharged_resigned" type="radio" value="Yes" ref={register({ required: true })}/>
                      <label for="" className="">Yes</label>
                      <input name="discharged_resigned" type="radio" value=" No" ref={register({ required: true })}/>
                      <label for="" className=""> No </label>
                    </div>

                    <p className="">Have you had any accidents in the last five years? </p>

                    <div className="form-container-group">
                      <input name="recent_accidents" type="radio" value="Yes" ref={register({ required: true })}/>
                      <label for="" className="">Yes</label>
                      <input name="recent_accidents" type="radio" value=" No" ref={register({ required: true })}/>
                      <label for="" className=""> No </label>
                    </div>

                    <p className="">Have you been cited for any moving violations in the last five years? </p>

                    <div className="form-container-group">
                      <input name="recent_moving_violations" type="radio" value="Yes" ref={register({ required: true })}/>
                      <label for="" className="">Yes</label>
                      <input name="recent_moving_violations" type="radio" value=" No" ref={register({ required: true })}/>
                      <label for="" className=""> No </label>
                    </div>

                    <p className="">Has your driver’s license ever been suspended, revoked, denied or cancelled? </p>

                    <div className="form-container-group">
                      <input name="license_violation" type="radio" value="Yes" ref={register({ required: true })}/>
                      <label for="" className="">Yes</label>
                      <input name="license_violation" type="radio" value=" No" ref={register({ required: true })}/>
                      <label for="" className=""> No </label>
                    </div>
                  </section>

                  <section id="scheduling" className="form-section-block">
                    <div className={`form-title-container `}>
                      <h3>Scheduling</h3>
                    </div>
                    <p className="form-container-group-title">Select days available to work</p>

                    <div className="form-container-group" style={{flexWrap: "wrap"}}>
                      <p></p>
                      <div className={`checkbox-container ${isMondaySelected ? 'select-active' : ''}`}>
                        <p>Mon</p>
                        
                        <input type="checkbox" name="monday_select" ref={register} />
                      </div>
                      <div className={`checkbox-container ${isTuesdaySelected ? 'select-active' : ''}`}>
                        <p>Tue</p>
                        
                        <input type="checkbox" name="tuesday_select" ref={register} />
                      </div>
                      <div className={`checkbox-container ${isWednesdaySelected ? 'select-active' : ''}`}>
                        <p>Wed</p>
                        
                        <input type="checkbox" name="wednesday_select" ref={register} />
                      </div>
                      <div className={`checkbox-container ${isThursdaySelected ? 'select-active' : ''}`}>
                        <p>Thur</p>
                        
                        <input type="checkbox" name="thursday_select" ref={register} />
                      </div>
                      <div className={`checkbox-container ${isFridaySelected ? 'select-active' : ''}`}>
                        <p>Fri</p>
                        
                        <input type="checkbox" name="friday_select" ref={register} />
                      </div>
                      <div className={`checkbox-container ${isSaturdaySelected ? 'select-active' : ''}`}>
                        <p>Sat</p>
                        
                        <input type="checkbox" name="saturday_select" ref={register} />
                      </div>
                      <div className={`checkbox-container ${isSundaySelected ? 'select-active' : ''}`}>
                        <p>Sun</p>
                        
                        <input type="checkbox" name="sunday_select" ref={register} />
                      </div>
                      
                      {/* <input type="checkbox" name="Monday" ref={register} /> */}
                    </div>

                    <p className="form-container-group-title">Are you looking for full-time or part-time?</p>

                    <div className="form-container-group">
                      <input name="type_of_work" type="radio" value="Yes" ref={register({ required: true })}/>
                        <label for="" className="">Full-time</label>
                        <input name="type_of_work" type="radio" value=" No" ref={register({ required: true })}/>
                        <label for="" className=""> Part-time </label>
                    </div>

                    <div className={`form-container-element ${errors.date_availability && `error-highlight`}`}>
                      <label for="date_availability" className="field-name">
                        Available to start:
                      </label>
                      <input
                        ref={register({ required: "* Please enter a valid date" })}
                        name="date_availability"
                        type="text"
                        id="date_availability"
                        className="form-control"
                        placeholder="MM/DD/YYY"
                      />
                        <ErrorMessage
                        errors={errors}
                        name="first_name"
                        render={({ message }) => <p>{message}</p>}
                      />
                    </div>
                  </section>

                  <section id="employment-history" className="form-section-block">
                    <div className={`form-title-container`}>
                        <h3>Employment History</h3>
                    </div>

                    <p className="form-container-group-title">Are you currently employed?</p>

                    <div className="form-container-group">
                      <input name="presently_employed" type="radio" value="Yes" ref={register({ required: true })}/>
                        <label for="" className="">Yes</label>
                        <input name="presently_employed" type="radio" value=" No" ref={register({ required: true })}/>
                        <label for="" className=""> No </label>
                    </div>

                    <p className="form-container-group-title">Have you been laid off or subject to be recalled?</p>

                    <div className="form-container-group">
                      <input name="laid_off" type="radio" value="Yes" ref={register({ required: true })}/>
                        <label for="" className="">Yes</label>
                        <input name="laid_off" type="radio" value=" No" ref={register({ required: true })}/>
                        <label for="" className=""> No </label>
                    </div>

                    <p className="form-container-group-title">Employment History</p>

                    <div className="employment-history-content-container">
                      {employmentHistory.length > 0 ? 
                      employmentHistory.map((employment, index)=> {
                        return (
                          <>
                          <div className="job-key"><p>Employment #{index + 1}</p></div>
                          <div key={index} className="employment-history-block">
                            <div className={`form-container-element ${errors.employer_name && `error-highlight`}`}>
                              <label for="employer_name" className="field-name">
                                Employer Name
                              </label>
                              <input
                                ref={register({ required: "* Name required" })}
                                name="employer_name"
                                type="text"
                                className="form-control"
                              />
                                <ErrorMessage
                                errors={errors}
                                name="employer_name"
                                render={({ message }) => <p>{message}</p>}
                              />
                            </div>
                          <div className={`form-container-element ${errors.employer_address && `error-highlight`}`}>
                            <label for="employer_address" className="field-name">
                              Address
                            </label>
                            <input
                              ref={register({ required: "* Address required" })}
                              name="employer_address"
                              type="text"
                              className="form-control"
                            />
                              <ErrorMessage
                              errors={errors}
                              name="employer_address"
                              render={({ message }) => <p>{message}</p>}
                            />
                          </div>
                          <div className={`form-container-element ${errors.employer_phone && `error-highlight`}`}>
                            <label for="employer_phone" className="field-name">
                              Phone # <span>* Optional</span>
                            </label>
                            {/* <p>* Optional</p> */}
                            <input
                              ref={register()}
                              name="employer_phone"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className={`form-container-element ${errors.employee_position && `error-highlight`}`}>
                            <label for="" className="field-name">
                              Position
                            </label>
                            {/* <p>* Optional</p> */}
                            <input
                              ref={register({required: "* required"})}
                              name="employee_position"
                              type="text"
                              className="form-control"
                            />
                            <ErrorMessage
                              errors={errors}
                              name="employee_position"
                              render={({ message }) => <p>{message}</p>}
                            />
                          </div>
                          <div className="form-container-group" style={{justifyContent:"flex-start"}}>
                            <div className={`form-container-element ${errors.employment_date_started && `error-highlight`}`}>
                              <label for="" className="field-name">
                                Date Started
                              </label>
                              {/* <p>* Optional</p> */}
                              <input
                                ref={register({ required: "* Valid date required" })}
                                name="employment_date_started"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          <div className={`form-container-element ${errors.employement_date_ended && `error-highlight`}`}>
                            <label for="" className="field-name">
                              Date Ended
                            </label>
                            {/* <p>* Optional</p> */}
                            <input
                              ref={register({ required: "* Valid date required" })}
                              name="employment_date_ened"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                          <div className={`form-container-element ${errors.work_responsibilities && `error-highlight`}`}>
                            <label for="" className="field-name">
                              Description of work responsibilities
                            </label>
                            <textarea ref={register()} name="work_responsibilities" rows="4" cols="50">
                              
                            </textarea>
                          </div>
                          <div className={`form-container-element ${errors.reason_leaving && `error-highlight`}`}>
                            <label for="" className="field-name">
                              Reason for leaving
                            </label>
                            {/* <p>* Optional</p> */}
                            <input
                              ref={register()}
                              name="reason_leaving"
                              type="text"
                              className="form-control"
                            />
                          </div>
                      </div>
                          </>
                          );
                      })
                      :null}

                    </div>

                    <div className="form-container-group">
                          <div onClick={addEmploymentField} className="form-add-button"><i class="gg-math-plus"></i></div>
                          <p>Add Previous Employment</p>
                    </div>

                  </section>


                  <section id="education" className="form-section-block">
                    <div className={`form-title-container `}>
                        <h3>Education</h3>
                    </div>

                    <p className="form-container-group-title">Did you complete highschool?</p>

                    <div className="form-container-group">
                      <input name="type_of_work" type="radio" value="Yes" ref={register({ required: true })}/>
                        <label for="" className="">Yes</label>
                        <input name="type_of_work" type="radio" value=" No" ref={register({ required: true })}/>
                        <label for="" className=""> No </label>
                    </div>

                    <p className="form-container-group-title">Do you have a college diploma?</p>

                    <div className="form-container-group">
                      <input name="college_diploma" type="radio" value="Yes" ref={register({ required: true })}/>
                        <label for="" className="">Yes</label>
                        <input name="college_diploma" type="radio" value=" No" ref={register({ required: true })}/>
                        <label for="" className=""> No </label>
                    </div>
                  </section>






                  <div className="form-submit-button-container">
                    <input
                      className="form-control"
                      id="contact-submit"
                      type="submit"
                      className=""
                      value="submit"
                    />
                  </div>

                </div>
              </form>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
