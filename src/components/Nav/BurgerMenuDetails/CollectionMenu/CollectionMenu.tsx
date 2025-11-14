import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import blouses from "../../../../assets/images/blouses.png"
import type { IAccordionPropsType } from "../../../propsTypes";
import { NavLink } from 'react-router-dom';


const CollectionMenu = ({ expanded, onChange }: IAccordionPropsType) => {
    return (
        <div className="pb-8">
            <Accordion expanded={expanded} onChange={onChange} className="border-b rounded-none! shadow-none!">
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />} 
                    sx={{ position: 'relative', padding: 0, minHeight: 0, '& .MuiAccordionSummary-content': { margin: 0 }}}
                >
                    <Typography sx={{ fontSize: "16px", margin: 0 }}>Collection</Typography>
                    { expanded && <div className="absolute bottom-5 left-0 right-0 border-b"></div> }
                </AccordionSummary>
                <AccordionDetails className="border-">
                    <div className="mdx:flex justify-around gap-4">
                        <div className="grid gap-x-10 xs:grid-cols-2 sm:grid-cols-3">
                            <div className="pb-6">
                                <h3 className='text-[14px] font-semibold pb-4 pl-0'>Category</h3>
                                <ul className="flex flex-col gap-4 text-nowrap">
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/shop-all">Shop All</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/blouses&top">Blouses & Top</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/pants">Pants</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/dresses&jumpsuits">Dresses & Jumpsuits</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/outwear&jackets">Outwear & Jackets</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/pullovers">Pullovers</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/tees">Tees</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/shorts&skirts">Shorts & Skirts</NavLink></li>
                                </ul>
                            </div>
                            <div className="pb-6">
                                <h3 className='text-[14px] font-semibold pb-4 pl-0'>Featured</h3>
                                <ul className="flex flex-col gap-4 text-nowrap">
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/Collection">Collection</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/new-in">New In</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/modiWeek">ModiWeek</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/plus-size">Plus Size</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/best-seller">Best Seller</NavLink></li>
                                </ul>
                            </div>
                            <div className="pb-6">
                                <h3 className='text-[14px] font-semibold pb-4 pl-0'>More</h3>
                                <ul className="flex flex-col gap-4 text-nowrap">
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/bundles">Bundles</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/occasion-wear">Occasion Wear</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/matching-set">Matching Set</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/plus-size">Plus Size</NavLink></li>
                                    <li className='text-[14px] leading-[1.8] pt-[7px] pl-9 xs:pl-0'><NavLink to="/suiting">Suiting</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="hidden mdx:block">
                            <img src={blouses} alt="blouses image" className="w-65" />
                            <p className="text-[14px] leading-[1.8] mt-3">Blouses</p>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default CollectionMenu;