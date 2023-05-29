import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import LeftNav from "../Components/Left/LeftNav";
import { Search } from "../Components/Middle/Content";
import RightNav from "../Components/Right/RightNav";
import './Sent.css'
import { CiCircleRemove } from "react-icons/ci";
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { Button, Modal, TextField } from '@mui/material';
import { useState } from 'react';

export default function Sent(props:any){

    const [showModal,setShowModal]= useState(false)

    const user = {
      picture: 'https://image-placeholder.com/images/actual-size/120x90.png',
      name: 'John Doe',
      email: 'johndoe@example.com',
      experiences: [
        'Senior Software Engineer at XYZ Company',
        'Freelance Frontend Developer',
      ],
      education: [
        'Bachelor of Science in Computer Science',
      ],
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'ASP.Net'],
    };
    return(
        <>
        <LeftNav  icon={'send'}/>
            {props.logged==1?(
                  <div className="container">
                  <Search job={true} />
                  <div className="sent-content" >
                      <h1 className="primary">Here you can see all the jobs you have applied</h1>
                      <div className="item" id="first">
                      <CiCircleRemove className="remove-icon" />
                      <p className='primary-text'>Apple</p>
                      <p className="primary-text">React Developer</p>
                      <p className="secondary-text">Apply Date: 19.05.2023</p>
                      <p className="secondary-text">Status: Applied</p>
                      </div>
                      <div className="item" >
                      <CiCircleRemove className="remove-icon" />
                      <p className='primary-text'>Apple</p>
                      <p className="primary-text">React Developer</p>
                      <p className="secondary-text">Apply Date: 19.05.2023</p>
                      <p className="secondary-text">Status: Applied</p>
                      </div>
                      <div className="item" >
                     <CiCircleRemove className="remove-icon" />
                      <p className='primary-text'>Apple</p>
                      <p className="primary-text">React Developer</p>
                      <p className="secondary-text">Apply Date: 19.05.2023</p>
                      <p className="secondary-text">Status: Applied</p>
                      </div>
                  </div>
              </div>
            ):(
                <div className="container" id='accordions'>
                
                <div className="sent-content"  >
                    <h1 className="primary">Here you can see all the jobs you have. And users who have applied</h1>
                    <Accordion>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                               React Developer
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                        <div className="item" >
                            <p className='primary-text'>Aldrin Islami</p>
                            <p className="primary-text">aldrin@gmail.com</p>
                            <p className="secondary-text">Date Applied: 19.05.2023</p>
                            <p className="secondary-text" onClick={()=>setShowModal(!showModal)}><u> See Applicant Info </u></p>
                            </div>
                            <div className="item" >
                            <p className='primary-text'>Aldrin Islami</p>
                            <p className="primary-text">aldrin@gmail.com</p>
                            <p className="secondary-text">Date Applied: 19.05.2023</p>
                            <p className="secondary-text" onClick={()=>setShowModal(!showModal)}><u> See Applicant Info </u></p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                               .NET Developer
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="item" >
                              <p className='primary-text'>Aldrin Islami</p>
                              <p className="primary-text">aldrin@gmail.com</p>
                              <p className="secondary-text">Date Applied: 19.05.2023</p>
                              <p className="secondary-text" onClick={()=>setShowModal(!showModal)}><u> See Applicant Info </u></p>
                              </div>
                              <div className="item" >
                            <p className='primary-text'>Aldrin Islami</p>
                            <p className="primary-text">aldrin@gmail.com</p>
                            <p className="secondary-text">Date Applied: 19.05.2023</p>
                            <p className="secondary-text" onClick={()=>setShowModal(!showModal)}><u> See Applicant Info </u></p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
            )}
      
      {props.logged==1||props.logged==0?(
            <RightNav logged={props.logged}  />
        ):(null)}


    <Modal open={showModal} onClose={()=>setShowModal(!showModal)}>
              <div className="modal-user">
                  <img src={user.picture} alt="User Profile" className="profile-picture" />
                  <Typography variant="h4" className='primary-text'>{user.name}</Typography>
                  <Typography variant="body1" className='secondary-text'>{user.email}</Typography>

                  <Typography variant="h6" className='primary-text' id='exp'>Experiences</Typography>
                  <List>
                    {user.experiences.map((experience, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={experience} className='secondary-text' />
                      </ListItem>
                    ))}
                  </List>

                  <Typography variant="h6" className='primary-text'>Education</Typography>
                  <List>
                    {user.education.map((educationItem, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={educationItem} className='secondary-text' />
                      </ListItem>
                    ))}
                  </List>

                  <Typography variant="h6" className='primary-text'>Skills</Typography>
                  <List>
                    {user.skills.map((skill, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={skill} className='secondary-text' />
                      </ListItem>
                    ))}
                  </List>
                  <Typography variant="h6" className='primary-text'><u> Click to see CV </u></Typography>
                </div>
        </Modal>
        </>
    )
}