import { NavLink } from 'react-router-dom';
import { classes } from '../../../../utils/tailwindClasses';
import type { IAccordionPropsType } from '../../../propsTypes';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import plus1 from '../../../../assets/images/plus1.png'
import plus2 from '../../../../assets/images/plus2.png'
import plus3 from '../../../../assets/images/plus3.png'


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
                            <h3 className={classes.burgerMenuTitle}>Category</h3>
                            <ul className={classes.burgerMenuList}>
                                <li className={classes.burgerMenuItem}><NavLink to={'/plus-size'}>Shop All</NavLink></li>
                                <li className={classes.burgerMenuItem}>Boluses & Top</li>
                                <li className={classes.burgerMenuItem}>Tees</li>
                                <li className={classes.burgerMenuItem}>Pants</li>
                                <li className={classes.burgerMenuItem}>Outwear & Jackets </li>
                                <li className={classes.burgerMenuItem}>Pullovers</li>
                                <li className={classes.burgerMenuItem}>Dresses & Jumpsuits</li>
                                <li className={classes.burgerMenuItem}>Shorts & Skirts</li>
                            </ul>
                        </div>

                        <div className="gap-5 hidden xs:flex">
                            <div>
                                <img src={plus1} alt="blouses image" className="w-45" />
                                <p className={classes.burgerMenuImgName}>Pants</p>
                            </div>
                            <div className='hidden sm:block'>
                                <img src={plus2} alt="plus size image" className="w-45" />
                                <p className={classes.burgerMenuImgName}>Dresses</p>
                            </div>
                            <div className='hidden mdx:block'>
                                <img src={plus3} alt="plus size image" className="w-45" />
                                <p className={classes.burgerMenuImgName}>Blouses</p>
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div >
    )
}

export default PlusSizeMenu