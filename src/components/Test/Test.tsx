import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';
import type { IAccordionPropsType } from '../propsTypes';

const Test = ({ expanded, onChange }: IAccordionPropsType) => {
    return (

        <div className="pb-8">
            <Accordion expanded={expanded} onChange={onChange} className="border-b rounded-none! shadow-none!">
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0, minHeight: 0, '& .MuiAccordionSummary-content': { margin: 0 } }}>
                    <Typography sx={{ fontSize: '16px' }}>New In</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <h3 className='text-[14px] font-semibold pb-4 pl-4'>Category</h3>
                    <ul className="flex flex-col gap-4">
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to={'/shop-all'}>Shop All</NavLink></li>
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to={'/blouses&top'}>Boluses & Top</NavLink></li>
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to={'/tees'}>Tees</NavLink></li>
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to={'/pants'}>Pants</NavLink></li>
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to={'/outwear&jackets '}>Outwear & Jackets </NavLink></li>
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to={'/pullovers'}>Pullovers</NavLink></li>
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to={'/dresses&jumpsuits'}>Dresses & Jumpsuits</NavLink></li>
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to={'/shorts&skirts'}>Shorts & Skirts</NavLink></li>
                    </ul>

                    <h3 className='text-[14px] font-semibold pb-4 pt-6 pl-4'>Tranding</h3>
                    <ul>
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to="/plus-size">Plus Size</NavLink></li>
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to="/Collection">Full Collection</NavLink></li>
                        <li className='text-[14px] leading-[1.8] pt-[7px] pl-9'><NavLink to="/modiWeek">ModiWeek</NavLink></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>

    )
}

export default Test