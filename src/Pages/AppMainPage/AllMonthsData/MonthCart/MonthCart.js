import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShortTextIcon from '@mui/icons-material/ShortText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const MonthCart = ({ cartData, month, handleCartDelete, handleCartEdit }) => {
    const { condition, cost, title, _id, costClosed, shortTextIcon } = cartData;



    // ------------------for modal------------------
    const [modalOpen, setModalOpen] = React.useState(false);
    const [openedMonth, setOpenedMonth] = useState('')
    const handleOpen = (monthName) => {
        setModalOpen(true)
        setOpenedMonth(monthName)
    };
    const hanldeModalClose = () => {
        setModalOpen(false)
    };
    const hanldeEditCartOnSubmit = (e) => {
        // e.preventDefault()
        const titleValue = document.getElementById('addNewCardtitle').value;
        const costValue = document.getElementById('addNewCardCost').value;
        const shortTextIcon = document.getElementById('shortTextIconCheckbox').checked;

        const updatedCardData = {
            _id: _id,
            title: titleValue,
            cost: JSON.parse(costValue),
            costClosed: costClosed,
            condition: condition,
            shortTextIcon,
        }
        handleCartEdit(updatedCardData, month)
        hanldeModalClose()
    }




    // for Card More Menu---------------
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const cartDelete = (data, monthData) => {
        handleCartDelete(data, monthData)
        setAnchorEl(null);
    };
    const cartEdit = (data, monthData) => {
        handleOpen()
        setAnchorEl(null);
    }



    return (
        <Box

            sx={{
                backgroundColor: `${title.toLowerCase() === 'salarys'
                    ? '#ffebed'
                    : '#f4f4f4'
                    }`,
                borderLeft:
                    `${condition.toLowerCase() === 'paid' ? '5px solid #65c876'
                        : condition.toLowerCase() === 'speculation' ? '5px solid #0086ca'
                            : '5px solid #dbdbdb'
                    }`,
                mt: 1.5, borderRadius: 2, p: 0.5,
            }}
        >

            <Typography sx={{ textAlign: 'right', m: 0, p: 0 }}>
                <MoreHorizIcon sx={{ m: 0, p: 0, fontSize: 17, cursor: 'pointer' }}
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} />
            </Typography>


            {/* For Card More menu */}
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem
                    onClick={() => cartDelete(cartData, month)}
                >Delete</MenuItem>
                <MenuItem onClick={() => cartEdit(cartData, month)}>Edit</MenuItem>
            </Menu>










            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalOpen}
                onClose={hanldeModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 300,
                }}
                sx={{
                    '& .css-1wnsr1i': {
                        width: { xs: 200, sm: 350, md: 450 },
                        border: 0,
                    }
                }}
            >
                <Fade in={modalOpen}>
                    <Box sx={style}>
                        <form onSubmit={hanldeEditCartOnSubmit}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Edit Your Card
                            </Typography>

                            <Box sx={{ mt: 2 }}>
                                <TextField
                                    defaultValue={title}
                                    name="title"
                                    required
                                    fullWidth
                                    id="addNewCardtitle"
                                    label="Title"
                                    type="text"
                                    variant="standard" />
                                {/* condition, cost, title, _id, costClosed, shortTextIcon */}

                                <TextField
                                    defaultValue={cost}
                                    name="cost"
                                    required
                                    fullWidth
                                    type="number"
                                    id="addNewCardCost"
                                    label="Total Cost"
                                    variant="standard" />

                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mt: 2 }}>
                                    <Checkbox
                                        checked={shortTextIcon}
                                        {...label}
                                        id="shortTextIconCheckbox"
                                    />
                                    <Typography >
                                        Short Text Icon
                                    </Typography>
                                </Box>


                                <Box sx={{ mt: 4, textAlign: 'right' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        sx={{ px: 5, py: 1 }}
                                    >
                                        Update Now
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </Fade>
            </Modal>









            <Typography sx={{
                textAlign: 'left', fontSize: 14, color: '#440355', fontWeight: 700,
                display: 'flex', justifyContent: 'start', alignItems: 'center',
            }}>
                {title}{shortTextIcon && <ShortTextIcon />}
            </Typography>

            <Typography sx={{
                textAlign: 'left', fontSize: 18, color: '#440355', fontWeight: 700,
                my: 1, textDecoration: `${costClosed ? 'line-through' : 'none'}`
            }}>
                ${cost}
            </Typography>






            {/* Catagories and Condition */}
            <Typography sx={{
                fontSize: 11, textTransform: 'capitalize',
                color: `${condition.toLowerCase() === 'paid' ? '#008e21'
                    : condition.toLowerCase() === 'open' ? 'gray'
                        : condition.toLowerCase() === 'speculation' && '#51295e'
                    }`, my: 0.6, textAlign: 'left'
            }}>
                {condition}
            </Typography>

            <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>



                <Typography
                    sx={{
                        borderRadius: '10px', fontSize: { xs: 10, xl: 8 }, color: '#008e21', px: 0.7, py: 0.1,
                        backgroundColor: '#8df3cb',
                    }}>
                    ABC
                </Typography>

                <Typography
                    sx={{
                        borderRadius: '10px', fontSize: { xs: 10, xl: 8 }, color: '#006fb9', px: 0.7, py: 0.1,
                        backgroundColor: '#b2dbf7',
                    }}>
                    Sales
                </Typography>

                <Typography
                    sx={{
                        borderRadius: '10px', fontSize: { xs: 10, xl: 8 }, color: '#b81c2b', px: 0.7, py: 0.1,
                        backgroundColor: '#ffcfd4',
                    }}>
                    Projects
                </Typography>
            </Box>





        </Box>
    );
};

export default MonthCart;