import { NavLink } from 'react-router-dom';
import { classes } from '../../../../utils/tailwindClasses';
import type { IAccordionPropsType } from '../../../propsTypes';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import sustain1 from '../../../../assets/images/sustain1.png'
import sustain2 from '../../../../assets/images/sustain2.png'


const SustainabilityMenu = ({ expanded, onChange }: IAccordionPropsType) => {
    return (
        <div className='pb-10'>
            <Accordion expanded={expanded} onChange={onChange} className="border-b rounded-none! shadow-none!">
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />} 
                    sx={{ position: 'relative', padding: 0, minHeight: 0, '& .MuiAccordionSummary-content': { margin: 0 }}}
                >
                    <Typography sx={{ fontSize: "16px", margin: 0 }}>Sustainability</Typography>
                    { expanded && <div className="absolute bottom-5 left-0 right-0 border-b"></div> }
                </AccordionSummary>
                <AccordionDetails>
                    <div className="xs:flex justify-around gap-10">
                        <div className='pb-6'>
                            <h3 className={classes.burgerMenuTitle}>Sustainability</h3>
                            <ul className={classes.burgerMenuList}>
                                <li className={classes.burgerMenuItem}><NavLink to={'/mission'}>Mission</NavLink></li>
                                <li className={classes.burgerMenuItem}><NavLink to={'/processing'}>Processing</NavLink></li>
                                <li className={classes.burgerMenuItem}><NavLink to={'/materials'}>Materials</NavLink></li>
                                <li className={classes.burgerMenuItem}><NavLink to={'/packaging '}>Packaging</NavLink></li>
                                <li className={classes.burgerMenuItem}><NavLink to={'/product-care'}>Product Care</NavLink></li>
                                <li className={classes.burgerMenuItem}><NavLink to={'/our-suppliers'}>Our Suppliers</NavLink></li>
                            </ul>
                        </div>

                        <div className="gap-5 hidden xs:flex">
                            <div>
                                <img src={sustain1} alt="blouses image" className="w-65 sm:w-55 mdx:w-65!"/>
                            </div>
                            <div className='hidden sm:block'>
                                <img src={sustain2} alt="plus size image" className="w-55 mdx:w-65"/>
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default SustainabilityMenu