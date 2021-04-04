import React, {useEffect, useState} from 'react';
import "../assets/dashboard_styles/applicants_view.scss";
import { gsap } from "gsap";
import CustomProperties from 'react-custom-properties';

export default function ApplicantsView() {

    const [showMenu, setShowMenu] = useState(false);
    const [duration, setDuration] = useState(0.3);
    const [applicantArray, setApplicantArray] = useState([]);
  
    const openModal = (selector) => {
      let isOpen = showMenu;
      if (!isOpen) {
        gsap.to(".modal-container", {
          opacity: 1,
          duration,
          transform: "translateX(-100%)",
          display: "flex",
        });
      } else {
        gsap.to(".modal-container", {
          opacity: 0,
          duration,
          transform: "translateX(0)",
          display: "none",
        });
      }
  
      setShowMenu(!showMenu);

    };
  
    const closeNav = () => {
      let isOpen = showMenu;
      if (!isOpen) return;
      gsap.to(".modal-container", {
        opacity: 0,
        duration: 0.5,
        transform: "translateX(-100%)",
        display: "none",
      });
      window.scrollTo(0, 0);
      setShowMenu(!showMenu);
    };

    const InfoModal = () => {
        return (
            <div className="dude"></div>
        )
    }

    //props data will cotain database payload for applicants
    //create a map that uses applicant email as key, with it's data as the value

    let applicants = new Map();
    applicants.set('john@email.com', {

     name: "Dave doe", phone: "213-555-1234", 
     address: "123 N 1st Ave", date: "10-31-2021",
     workVerification: true, 
     
     involuntaryDischarge: false, 
     validDriverLicense: true, licenseNumber: "XXXXXXXXX", 
     recentAccidents: true, recentMovingViolations: false, 
     licenseSuspension: false, 
     
     positionApplied: "Last Mile Delivery",
     startAvailability: "10/31/2021", fullTime: true, 
     daysAvailable: ["M", "T", "W", "TH", "FR"], highschool:true, 
     college: "N/A", tradeTech: "N/A", lastSchool: "Cal State LA",

     presentlyEmployed: true, laidOff: false,
     EmployerHistory: [{
                        lastEmployer: "DLA8", address: "2815 W El Segundo Blvd, Hawthorne, CA 90250",
                        phone: "1234567890", position: "Delivery Driver", 
                        datesEmployed: ["05/2019", "05/2020"], workResponsibilities: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        reasonForLeaving: "N/A",
                        }]
    });
    
    applicants.set('mikemo@email.com', {

        name: "mike mo", phone: "213-555-1234", 
        address: "123 N 1st Ave", date: "10-31-2021",
        workVerification: true, 
        
        involuntaryDischarge: false, 
        validDriverLicense: true, licenseNumber: "XXXXXXXXX", 
        recentAccidents: true, recentMovingViolations: false, 
        licenseSuspension: false, 
        
        positionApplied: "Last Mile Delivery",
        startAvailability: "10/31/2021", fullTime: true, 
        daysAvailable: ["M", "T", "W", "TH", "FR"], highschool:true, 
        college: "N/A", tradeTech: "N/A", lastSchool: "Cal State LA",
   
        presentlyEmployed: true, laidOff: false,
        EmployerHistory: [{
                           lastEmployer: "DLA8", address: "2815 W El Segundo Blvd, Hawthorne, CA 90250",
                           phone: "1234567890", position: "Delivery Driver", 
                           datesEmployed: ["05/2019", "05/2020"], workResponsibilities: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                           reasonForLeaving: "N/A",
                           }]
       });

    let newArray = Array.from(applicants);
    console.log(newArray);





    return (
        <>

        <div className="modal-container">
            <div className="button-header">
                <div onClick={closeNav} className="close-button"></div>
            </div>
            <section id="personal-information">
                <div className="modal-title">
                    Personal Information
                </div>

                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Name:</p>
                        <p>Mike Mo</p>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Date Applied:</p>
                        <p>1/31/2021</p>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Phone:</p>
                        <p> (123) 456- 7890</p>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Email:</p>
                        <p> mikemo@lakaishoes.com</p>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Address:</p>
                        <p> 9350 Rayo Ave, South Gate, CA 90280 </p>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Can provide verification to legally work in the United States?</p>
                        <CustomProperties properties={{ '--dynamic-color-label': `${false ? "#FF0000" : "lightgreen"}` }}>
                        <div className="color-label">Yes</div>
                        </CustomProperties>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Have you ever been discharged or asked to resign by an employer? </p>
                        <CustomProperties properties={{ '--dynamic-color-label': `${true ? "#FF0000" : "lightgreen"}` }}>
                        <div className="color-label">No</div>
                        </CustomProperties>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Do you have a valid driver’s license? </p>
                        <CustomProperties properties={{ '--dynamic-color-label': `${false ? "#FF0000" : "lightgreen"}` }}>
                        <div className="color-label">Yes</div>
                        </CustomProperties>
                    </div>
                    <div className="modal-block-item col-flex">
                        <div className="modal-block-item">
                            <p>License #: </p>
                            <p>XXXXXXXXX</p>
                        </div>
                        <div className="modal-block-item">
                            <p>License State: </p>
                            <p>CA</p>
                        </div>
                    </div>
                    
                </div>

                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Have you had any accidents in the last five years?</p>
                        <CustomProperties properties={{ '--dynamic-color-label': `${true ? "#FF0000" : "lightgreen"}` }}>
                        <div className="color-label">No</div>
                        </CustomProperties>
                    </div>
                </div>

                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Have you been cited for any moving violations in the last five years?</p>
                        <CustomProperties properties={{ '--dynamic-color-label': `${true ? "#FF0000" : "lightgreen"}` }}>
                        <div className="color-label">No</div>
                        </CustomProperties>
                    </div>
                </div>

                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Has your driver’s license ever been suspended, revoked, denied or cancelled?</p>
                        <CustomProperties properties={{ '--dynamic-color-label': `${true ? "#FF0000" : "lightgreen"}` }}>
                        <div className="color-label">No</div>
                        </CustomProperties>
                    </div>
                </div>
                
            </section>

            <section id="job-interests">
                <div className="modal-title">
                    Job Interests
                </div>

                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Position:</p>
                        <p>Last Mile Delivery</p>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Avaiable to start:</p>
                        <p>1/31/2021</p>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Type of Work:</p>
                        <CustomProperties properties={{ '--dynamic-color-label': '#11CDEF' }}>
                        <div className="color-label">Full Time</div>
                        </CustomProperties>
                    </div>
                </div>

                <div className="modal-subsection">
                    <div style={{left: "0"}} className="modal-block-item col-flex">
                        <p>Days Available to Work</p>

                        <div style={{flexWrap: "wrap", height: "5em"}} className="modal-block-item">
                            <CustomProperties properties={{ '--dynamic-color-label': '#11CDEF' }}>
                            <div className="color-label">Sun</div>
                            </CustomProperties>
                            <CustomProperties properties={{ '--dynamic-color-label': '#28A7B4' }}>
                            <div className="color-label">Mon</div>
                            </CustomProperties>
                            <CustomProperties properties={{ '--dynamic-color-label': '#6BA446' }}>
                            <div className="color-label">Tue</div>
                            </CustomProperties>
                            <CustomProperties properties={{ '--dynamic-color-label': '#5483D0' }}>
                            <div className="color-label">Wed</div>
                            </CustomProperties>
                            <CustomProperties properties={{ '--dynamic-color-label': '#E2A851' }}>
                            <div className="color-label">Thur</div>
                            </CustomProperties>
                            <CustomProperties properties={{ '--dynamic-color-label': '#3697CD' }}>
                            <div className="color-label">Fri</div>
                            </CustomProperties>
                            <CustomProperties properties={{ '--dynamic-color-label': '#16C79A' }}>
                            <div className="color-label">Sat</div>
                            </CustomProperties>
                        </div>

                    </div>
                </div>


                
            </section>

            <section id="education">
                <div className="modal-title">
                    Education & Training
                </div>

                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Highschool:</p>
                        <p>Completed</p>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>College:</p>
                        <p>Bachelor's Of Science</p>
                    </div>
                </div>
                
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Trade/Tech:</p>
                        <CustomProperties properties={{ '--dynamic-color-label': '#AEAEAE' }}>
                        <div className="color-label">N/A</div>
                        </CustomProperties>
                    </div>
                </div>

                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Last School Attended:</p>
                        <p>Cal State LA</p>
                    </div>
                </div>


                
            </section>

            <section id="work-experience">
                <div className="modal-title">
                    Work Experience
                </div>

                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Presently Employed:</p>
                        <CustomProperties properties={{ '--dynamic-color-label': `${true ? "#3F3F3F" : "lightgreen"}` }}>
                        <div className="color-label">Yes</div>
                        </CustomProperties>
                    </div>
                </div>
                <div className="modal-subsection">
                    <div className="modal-block-item">
                        <p>Laid off/Subject to recall:</p>
                        <CustomProperties properties={{ '--dynamic-color-label': `${true ? "#3F3F3F" : "lightgreen"}` }}>
                        <div className="color-label">No</div>
                        </CustomProperties>
                    </div>
                </div>
                
                <p>Employer History</p>
                <div className="modal-subsection">
                    <div style={{left: "0"}} className="modal-block-item col-flex">

                        <div className="numbered-list-container">
                            <p>1</p>
                            <div className="row-info-block">
                            <div className="modal-block-item">
                                    <p>Current/Last Employer:</p>
                                    <p> Amazon DSP DAX7 </p>
                            </div>
                                <div className="modal-block-item">
                                    <p>Address:</p>
                                    <p> 9350 Rayo Ave, South Gate, CA 90280 </p>
                                </div>
                                <div className="modal-block-item">
                                    <p>Phone:</p>
                                    <p> (123) 456- 7890 </p>
                                </div>
                                <div className="modal-block-item">
                                    <p>Position:</p>
                                    <p> Delivery Driver </p>
                                </div>
                                <div className="modal-block-item">
                                    <p>Dates Employed:</p>
                                    <p> 05/2019 to 05/2020 </p>
                                </div>
                                <div style={{left: "0"}} className="modal-block-item col-flex">
                                    <p>Description of Work Responsibilities:</p>
                                    <textarea name="message" rows="10" cols="10">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quos voluptate exercitationem temporibus quis expedita fuga?
                                    </textarea>
                                </div>

                                <div className="modal-block-item">
                                    <p>Reason for leaving:</p>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                </div>

                            </div>
                        </div>

                        
                    </div>

                        <div style={{left: "0"}} className="modal-block-item col-flex">

                        <div className="numbered-list-container">
                            <p>2</p>
                            <div className="row-info-block">
                            <div className="modal-block-item">
                                    <p>Current/Last Employer:</p>
                                    <p> Amazon DSP DAX7 </p>
                            </div>
                                <div className="modal-block-item">
                                    <p>Address:</p>
                                    <p> 9350 Rayo Ave, South Gate, CA 90280 </p>
                                </div>
                                <div className="modal-block-item">
                                    <p>Phone:</p>
                                    <p> (123) 456- 7890 </p>
                                </div>
                                <div className="modal-block-item">
                                    <p>Position:</p>
                                    <p> Delivery Driver </p>
                                </div>
                                <div className="modal-block-item">
                                    <p>Dates Employed:</p>
                                    <p> 05/2019 to 05/2020 </p>
                                </div>
                                <div style={{left: "0"}} className="modal-block-item col-flex">
                                    <p>Description of Work Responsibilities:</p>
                                    <textarea name="message" rows="10" cols="10">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quos voluptate exercitationem temporibus quis expedita fuga?
                                    </textarea>
                                </div>

                                <div className="modal-block-item">
                                    <p>Reason for leaving:</p>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                </div>

                            </div>
                        </div>

                        
                    </div>
                </div>

                



                
            </section>

            <section id="references">
                <div className="modal-title">
                    References
                </div>

                <div className="numbered-list-container">
                            <p>1</p>
                            <div style={{borderLeft: "none", borderBottom: "none"}} className="row-info-block">
                                <div className="modal-block-item">
                                    <p>Name:</p>
                                    <p> John Smith </p>
                                </div>
                                <div className="modal-block-item">
                                    <p>Phone:</p>
                                    <p> (123) 456- 7890 </p>
                                </div>
                                <div className="modal-block-item">
                                    <p>Occupation:</p>
                                    <p> Supervisor </p>
                                </div>

                            </div>
                        </div>

                



                
            </section>

        </div>

        <div className="tbl-container">
            
            <div className="tbl-header-container">
                <div className="tbl-title">Applicants</div>
                <div id="action-button" className="table-button">Add Job</div>
            </div>
            <div className="col-titles">
                <ul>
                    <li>Name</li>
                    <li>Position</li>
                    <li>Action</li>
                </ul>
            </div>

                <div className="row-container">
                    {/* { applicants ? 
                        applicants.map((applicantInfo, email)=> {
                            console.log("hello", applicantInfo.name);
                            return (
                                <div className="tbl-row">
                                <div className="name tbl-cell">{applicantInfo.name}</div>
                                <div id="description" className="tbl-cell">
                                    <p>Last Mile Delivery</p>
                                    <p>2021-10-31</p>
                                </div>
                                <div  className="tbl-cell">
                                    <div onClick= {openModal} className="table-button">
                                        <div className="btn-text">VIEW</div>
                                    </div>
                                </div>
                            </div>  
                            )
                        })
                        : 
                        null
                    } */}

                    

                    {
                        newArray && newArray.length > 0 ? newArray.map( applicant => {
                            return (
                                <div className="tbl-row">
                                <div className="name tbl-cell">{applicant[1].name}</div>
                                <div id="description" className="tbl-cell">
                                    <p>Last Mile Delivery</p>
                                    <p>2021-10-31</p>
                                </div>
                                <div  className="tbl-cell">
                                    <div className="table-button">
                                        <div  onClick= {()=> {
                                        openModal(applicant[0])
                                    }} className="btn-text">VIEW</div>
                                    </div>
                                </div>
                            </div>  
                            )
                        })
                        : null
                    }



                    {/* <div className="tbl-row">
                        <div className="name tbl-cell">John Smith</div>
                        <div id="description" className="tbl-cell">
                            <p>Last Mile Delivery</p>
                            <p>2021-10-31</p>
                        </div>
                        <div  className="tbl-cell">
                            <div className="table-button">
                                <div className="btn-text">VIEW</div>
                            </div>
                        </div>
                    </div>
                    <div className="tbl-row">
                        <div className="name tbl-cell">John Smith</div>
                        <div id="description" className="tbl-cell">
                            <p>Last Mile Delivery</p>
                            <p>2021-10-31</p>
                        </div>
                        <div  className="tbl-cell">
                            <div className="table-button">
                                <div className="btn-text">VIEW</div>
                            </div>
                        </div>
                    </div>
                    <div className="tbl-row">
                        <div className="name tbl-cell">John Smith</div>
                        <div id="description" className="tbl-cell">
                            <p>Last Mile Delivery</p>
                            <p>2021-10-31</p>
                        </div>
                        <div  className="tbl-cell">
                            <div className="table-button">
                                <div className="btn-text">VIEW</div>
                            </div>
                        </div>
                    </div>
                    <div className="tbl-row">
                        <div className="name tbl-cell">John Smith</div>
                        <div id="description" className="tbl-cell">
                            <p>Last Mile Delivery</p>
                            <p>2021-10-31</p>
                        </div>
                        <div  className="tbl-cell">
                            <div className="table-button">
                                <div className="btn-text">VIEW</div>
                            </div>
                        </div>
                    </div>
                    <div className="tbl-row">
                        <div className="name tbl-cell">John Smith</div>
                        <div id="description" className="tbl-cell">
                            <p>Last Mile Delivery</p>
                            <p>2021-10-31</p>
                        </div>
                        <div  className="tbl-cell">
                            <div className="table-button">
                                <div className="btn-text">VIEW</div>
                            </div>
                        </div>
                    </div>
                    <div className="tbl-row">
                        <div className="name tbl-cell">John Smith</div>
                        <div id="description" className="tbl-cell">
                            <p>Last Mile Delivery</p>
                            <p>2021-10-31</p>
                        </div>
                        <div  className="tbl-cell">
                            <div className="table-button">
                                <div className="btn-text">VIEW</div>
                            </div>
                        </div>
                    </div>
                    <div className="tbl-row">
                        <div className="name tbl-cell">John Smith</div>
                        <div id="description" className="tbl-cell">
                            <p>Last Mile Delivery</p>
                            <p>2021-10-31</p>
                        </div>
                        <div  className="tbl-cell">
                            <div className="table-button">
                                <div className="btn-text">VIEW</div>
                            </div>
                        </div>
                    </div>
                    <div className="tbl-row">
                        <div className="name tbl-cell">John Smith</div>
                        <div id="description" className="tbl-cell">
                            <p>Last Mile Delivery</p>
                            <p>2021-10-31</p>
                        </div>
                        <div  className="tbl-cell">
                            <div className="table-button">
                                <div className="btn-text">VIEW</div>
                            </div>
                        </div>
                    </div> */}
                </div>

            <div className="pagination-block">
                <div className="button-container">
                    <div id="pagination-button-left" className="pagination-button"></div>
                    <div id="pagination-button-right" className="pagination-button"></div>
                </div>
            </div>

        </div>
        </>
    )
}
