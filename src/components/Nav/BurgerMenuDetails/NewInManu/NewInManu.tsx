import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import fall from "../../../../assets/images/new1.png"
import boluses from "../../../../assets/images/new2.png"
import { NavLink } from 'react-router-dom';
import type { IAccordionPropsType } from '../../../propsTypes';


const NewInManu = ({ expanded, onChange }: IAccordionPropsType) => {
    return (

        <div className="pb-8">
            <Accordion expanded={expanded} onChange={onChange} className="border-b rounded-none! shadow-none!">
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />} 
                    sx={{ position: 'relative', padding: 0, minHeight: 0, '& .MuiAccordionSummary-content': { margin: 0 }}}
                >
                    <Typography sx={{ fontSize: "16px", margin: 0 }}>New In</Typography>
                    { expanded && <div className="absolute bottom-5 left-0 right-0 border-b"></div> }
                </AccordionSummary>
                <AccordionDetails>
                    <div className="sm:flex justify-around gap-4">
                        <div className="grid gap-x-15 xs:grid-cols-2 lg:gap-x-10">
                            <div className="pb-6">
                                <h3 className='text-[14px] font-semibold pb-4 pl-0'>Category</h3>
                                <ul className="flex flex-col gap-4 text-nowrap">
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to={'/shop-all'}>Shop All</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to={'/blouses&top'}>Boluses & Top</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to={'/tees'}>Tees</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to={'/pants'}>Pants</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to={'/outwear&jackets '}>Outwear & Jackets </NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to={'/pullovers'}>Pullovers</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to={'/dresses&jumpsuits'}>Dresses & Jumpsuits</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to={'/shorts&skirts'}>Shorts & Skirts</NavLink></li>
                                </ul>
                            </div>
                            <div className="pb-6">
                                <h3 className='text-[14px] font-semibold pb-4 pl-0'>Tranding</h3>
                                <ul className="flex flex-col gap-4 text-nowrap">
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/plus-size">Plus Size</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/Collection">Full Collection</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/modiWeek">ModiWeek</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="pb-6 gap-5 hidden sm:flex">
                            <div>
                                <img src={fall} alt="blouses image" className="w-55 mdx:w-55" />
                                <p className="text-[14px] leading-[1.8] mt-3">Full Collection</p>
                            </div>
                            <div className='hidden mdx:block'>
                                <img src={boluses} alt="plus size image" className="w-55" />
                                <p className="text-[14px] leading-[1.8] mt-3">Boluses</p>
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default NewInManu