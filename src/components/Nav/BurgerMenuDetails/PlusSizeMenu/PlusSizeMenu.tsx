import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import plus1 from '../../../../assets/images/plus1.png'
import plus2 from '../../../../assets/images/plus2.png'
import plus3 from '../../../../assets/images/plus3.png'
import type { IAccordionPropsType } from '../../../propsTypes';
import { NavLink } from 'react-router-dom';


const PlusSizeMenu = ({ expanded, onChange }: IAccordionPropsType) => {
    return (
        <div className="pb-8">
            <Accordion expanded={expanded} onChange={onChange} className="border-b rounded-none! shadow-none!">
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />} 
                    sx={{ position: 'relative', padding: 0, minHeight: 0, '& .MuiAccordionSummary-content': { margin: 0 }}}
                >
                    <Typography sx={{ fontSize: "16px", margin: 0 }}>Plus Size</Typography>
                    { expanded && <div className="absolute bottom-5 left-0 right-0 border-b"></div> }
                </AccordionSummary>
                <AccordionDetails>
                    <div className="xs:flex justify-around gap-10">
                        <div className='pb-6'>
                            <h3 className='text-[14px] font-semibold pb-4 pl-4 xs:pl-0'>Category</h3>
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

                        <div className="gap-5 hidden xs:flex">
                            <div>
                                <img src={plus1} alt="blouses image" className="w-45" />
                                <p className="text-[14px] leading-[1.8] mt-3">Pants</p>
                            </div>
                            <div className='hidden sm:block'>
                                <img src={plus2} alt="plus size image" className="w-45" />
                                <p className="text-[14px] leading-[1.8] mt-3">Dresses</p>
                            </div>
                            <div className='hidden mdx:block'>
                                <img src={plus3} alt="plus size image" className="w-45" />
                                <p className="text-[14px] leading-[1.8] mt-3">Blouses</p>
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div >
    )
}

export default PlusSizeMenu