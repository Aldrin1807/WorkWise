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

export default function Sent(props:any){
    
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
                <div className="container">
                
                <div className="sent-content"  id='accordions'>
                    <h1 className="primary">Here you can see all the jobs you have. And users who have applied</h1>
                    <Accordion>
                    <AccordionItem>
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
                            <p className="secondary-text">Handle Application</p>
                            </div>
                            <div className="item" >
                            <p className='primary-text'>Aldrin Islami</p>
                            <p className="primary-text">aldrin@gmail.com</p>
                            <p className="secondary-text">Date Applied: 19.05.2023</p>
                            <p className="secondary-text">Handle Application</p>
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
                              <p className="secondary-text">Handle Application</p>
                              </div>
                              <div className="item" >
                            <p className='primary-text'>Aldrin Islami</p>
                            <p className="primary-text">aldrin@gmail.com</p>
                            <p className="secondary-text">Date Applied: 19.05.2023</p>
                            <p className="secondary-text">Handle Application</p>
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

        </>
    )
}