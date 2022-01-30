import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MonthCart from './MonthCart/MonthCart';
import CircularProgress from '@mui/material/CircularProgress';
import SpringList from 'react-spring-dnd';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FooterCalculation from './FooterCalculation/FooterCalculation';
/* 
const fakeData = [
    {
        "monthID": 1,
        "monthName": "january",
        "monthData": [
            {
                "_id": 1,
                "title": "Project A Invoice 1/3",
                "cost": "1000",
                "costClosed": true,
                "condition": "paid"
            },
            {
                "_id": 2,
                "title": "Salarys",
                "cost": "12000",
                "costClosed": true,
                "condition": "paid",
                "shortTextIcon": true
            },
            {
                "_id": 3,
                "title": "Project A Invoice 2/3",
                "cost": "95000",
                "costClosed": true,
                "condition": "paid"
            }
        ]
    },
    {
        "monthID": 2,
        "monthName": "february",
        "monthData": [
            {
                "_id": 1,
                "title": "Project C ",
                "cost": "1000",
                "condition": "paid",
                "costClosed": true
            },
            {
                "_id": 2,
                "title": "Project D",
                "cost": "15000",
                "condition": "open"
            },
            {
                "_id": 3,
                "title": "Salarys",
                "cost": "20000",
                "condition": "open"
            },
            {
                "_id": 4,
                "title": "Project B",
                "cost": "10000",
                "condition": "speculation",
                "shortTextIcon": true
            }
        ]
    },
    {
        "monthID": 3,
        "monthName": "march",
        "monthData": [
            {
                "_id": 1,
                "title": "Salarys",
                "cost": "20000",
                "condition": "scanario",
                "shortTextIcon": true
            },
            {
                "_id": 2,
                "title": "Project E",
                "cost": "2600000",
                "condition": "open",
                "shortTextIcon": true
            },
            {
                "_id": 3,
                "title": "Project ABC",
                "cost": "25000",
                "condition": "speculation",
                "shortTextIcon": true
            }
        ]
    },
    {
        "monthID": 4,
        "monthName": "april",
        "monthData": [
            {
                "_id": 1,
                "title": "Salarys",
                "cost": "2000000",
                "condition": "open",
                "shortTextIcon": true
            },
            {
                "_id": 2,
                "title": "Project ABC",
                "cost": "1500000",
                "condition": "open",
                "shortTextIcon": true
            }
        ]
    },
    {
        "monthID": 5,
        "monthName": "may",
        "monthData": [
            {
                "_id": 1,
                "title": "Salarys",
                "cost": "20000",
                "condition": "open",
                "shortTextIcon": true
            },
            {
                "_id": 2,
                "title": "Project F",
                "cost": "15000",
                "condition": "open",
                "shortTextIcon": true
            },
            {
                "_id": 3,
                "title": "Hosting",
                "cost": "250000",
                "condition": "open",
                "shortTextIcon": true
            },
            {
                "_id": 4,
                "title": "Project G",
                "cost": "1500000",
                "condition": "open",
                "shortTextIcon": true
            }
        ]
    },
    {
        "monthID": 6,
        "monthName": "june",
        "monthData": [
            {
                "_id": 1,
                "title": "Salarys",
                "cost": "20000",
                "condition": "open",
                "shortTextIcon": true
            },
        ]
    },
    {
        "monthID": 7,
        "monthName": "july",
        "monthData": [
            {
                "_id": 1,
                "title": "Project ABC",
                "cost": "20000",
                "condition": "scanario"
            },
            {
                "_id": 2,
                "title": "Project E",
                "cost": "2600000",
                "condition": "open"
            },
            {
                "_id": 3,
                "title": "Project ABC",
                "cost": "25000",
                "condition": "speculation"
            }
        ]
    },
    {
        "monthID": 8,
        "monthName": "august",
        "monthData": [
            {
                "_id": 1,
                "title": "Project ABC",
                "cost": "20000",
                "condition": "open"
            },
            {
                "_id": 2,
                "title": "Project F",
                "cost": "15000",
                "condition": "open",
                "shortTextIcon": true
            },
            {
                "_id": 3,
                "title": "Hosting",
                "cost": "250000",
                "condition": "open"
            },
            {
                "_id": 4,
                "title": "Project G",
                "cost": "1500000",
                "condition": "open",
                "shortTextIcon": true
            }
        ]
    },
    {
        "monthID": 9,
        "monthName": "september",
        "monthData": [
            {
                "_id": 1,
                "title": "Salarys",
                "cost": "2000000",
                "condition": "open"
            },
            {
                "_id": 2,
                "title": "Project ABC",
                "cost": "1500000",
                "condition": "open",
                "shortTextIcon": true
            }
        ]
    },
    {
        "monthID": 10,
        "monthName": "octber",
        "monthData": [
            {
                "_id": 1,
                "title": "Salarys",
                "cost": "20000",
                "condition": "open"
            }
        ]
    },
    {
        "monthID": 11,
        "monthName": "november",
        "monthData": [
            {
                "_id": 1,
                "title": "Project A Invoice 1/3",
                "cost": "1000",
                "condition": "paid"
            },
            {
                "_id": 2,
                "title": "Salarys",
                "cost": "12000",
                "condition": "paid",
                "shortTextIcon": true
            },
            {
                "_id": 3,
                "title": "Project A Invoice 2/3",
                "cost": "95000",
                "condition": "paid",
                "shortTextIcon": true
            }
        ]
    },
    {
        "monthID": 12,
        "monthName": "december",
        "monthData": [
            {
                "_id": 1,
                "title": "Project ABC",
                "cost": "20000",
                "condition": "open"
            },
            {
                "_id": 2,
                "title": "Project F",
                "cost": "15000",
                "condition": "open",
                "shortTextIcon": true
            },
            {
                "_id": 3,
                "title": "Hosting",
                "cost": "250000",
                "condition": "open",
                "shortTextIcon": true
            },
            {
                "_id": 4,
                "title": "Project G",
                "cost": "1500000",
                "condition": "open"
            }
        ]
    }
] */


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
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


const AllMonthsData = () => {
    const [allMonthData, setAllMonthData] = useState(null)


    useEffect(() => {
        fetch('http://localhost:1337/api/all-month-datas/2')
            .then(res => res.json())
            .then(result => {
                setAllMonthData(result.data.attributes.allData)
                // console.log(result)
            })
    }, [])


    // for change order of array when drag and drop----------
    //(when we will work on back end it will be help us)***
    // const swapElement = (array, indexA, indexB) => {
    //     const tmp = array[indexA];
    //     array[indexA] = array[indexB];
    //     array[indexB] = tmp;
    // }
    const handleMonthCart = (arrayOrder, monthsName) => {
        // console.log(arrayOrder, monthsName)
    }


    // ------------------for modal------------------
    const [open, setOpen] = React.useState(false);
    const [openedMonth, setOpenedMonth] = useState('')
    const handleOpen = (monthName) => {
        setOpen(true)
        setOpenedMonth(monthName)
    };
    const handleClose = () => setOpen(false);




    // add new card---------------------------
    const handleAddNewCardOnSubmit = async (e) => {
        // e.preventDefault()
        const titleValue = document.getElementById('addNewCardtitle').value;
        const costValue = document.getElementById('addNewCardCost').value;
        const shortTextIcon = document.getElementById('shortTextIconCheckbox').checked;

        let previousMonthData = [...allMonthData]
        previousMonthData.map(month => {
            let previousDataID = 0;
            if (month.monthName === openedMonth) {
                previousDataID = month.monthData.length;
            }
            const cardData = {
                _id: previousDataID + 1,
                title: titleValue,
                cost: JSON.parse(costValue),
                costClosed: false,
                condition: 'open',
                shortTextIcon,
            }
            if (month.monthName === openedMonth) {
                const previousData = [...month.monthData]
                previousData.push(cardData)
                month.monthData = previousData
            }
        })
        fetch('http://localhost:1337/api/all-month-datas/2', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: { allData: previousMonthData } })
        })
            .then(res => res.json())
            .then(result => {
                if (result.data.attributes.allData) {
                    alert('Added Successfully!')
                }
                else {
                    alert('Something was wrong!')
                }
            })

        setAllMonthData(null)
        handleClose(true)
    }




    // Delete a card--------------------
    const handleCartDelete = (deleteData, deleteMonth) => {

        let previousMonthData = [...allMonthData]
        previousMonthData.map(month => {
            if (month.monthName === deleteMonth.monthName) {
                const withoutDeletedData = month.monthData.filter(dt => dt._id !== deleteData._id)
                month.monthData = withoutDeletedData
            }
        })

        const permission = window.confirm('Are you sure, you want to delte this card?')
        if (permission) {
            fetch('http://localhost:1337/api/all-month-datas/2', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: { allData: previousMonthData } })
            })
                .then(res => res.json())
                .then(result => {
                    if (result.data.attributes.allData) {
                        alert('Delete Successfully!')
                        setAllMonthData(previousMonthData)
                    }
                    else {
                        alert('Something was wrong!')
                    }
                })
        }
    }



    // Edit a Card--------------
    const handleCartEdit = (updatedCardData, updatedMonth) => {
        let previousMonthData = [...allMonthData]
        previousMonthData.map(month => {
            if (month.monthName === updatedMonth.monthName) {
                month.monthData.map(mnDt => {
                    const findUnUpdatedData = month.monthData.find(mnDt => mnDt._id === updatedCardData._id)
                    // update finded data-------
                    month.monthData[month.monthData.indexOf(findUnUpdatedData)] = updatedCardData
                })
            }
        })
        fetch('http://localhost:1337/api/all-month-datas/2', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: { allData: previousMonthData } })
        })
            .then(res => res.json())
            .then(result => {
                if (result.data.attributes.allData) {
                    alert('Updated Successfully!')
                }
                else {
                    alert('Something was wrong!')
                }
            })
    }





    return (
        <Box sx={{ mt: 7 }}>

            <Grid container
                rowSpacing={5}
                columnSpacing={{ xs: 2, }}
                sx={{ pr: { xs: 1, md: 2, lg: 3 }, pl: { xs: 1, md: 2, lg: 12 } }}>

                {!allMonthData
                    ? <CircularProgress color="secondary"
                        sx={{ mx: 'auto', my: { xs: 20, md: 36, xl: 46 } }} />
                    : allMonthData.map(month =>
                        <>
                            <Grid key={month.monthName} item xs={12} sm={6} md={4} lg={3} xl={1}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{
                                        fontSize: 18, color: '#878787',
                                        textTransform: 'capitalize'
                                    }}>
                                        {month.monthName}
                                    </Typography>
                                    <IconButton
                                        onClick={() => handleOpen(month.monthName)}
                                        aria-label="delete"
                                        sx={{ p: 0.4, color: '#440355', }}>
                                        <AddIcon sx={{ fontSize: 20 }} />
                                    </IconButton>
                                </Box>

                                <Box sx={{ mt: 2, }}>
                                    <SpringList
                                        onDragEnd={(order) => handleMonthCart(order, month.monthName)}>
                                        {month.monthData.map(cartData =>
                                            <MonthCart
                                                key={cartData._id}
                                                cartData={cartData}
                                                month={month}
                                                handleCartDelete={handleCartDelete}
                                                handleCartEdit={handleCartEdit}
                                            />
                                        )}
                                    </SpringList>
                                </Box>
                            </Grid>

                        </>)}
            </Grid>



            {/* ------------------Modal------------------ */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
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
                <Fade in={open}>
                    <Box sx={style}>
                        <form onSubmit={handleAddNewCardOnSubmit}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Add New Cart
                            </Typography>

                            <Box sx={{ mt: 2 }}>
                                <TextField
                                    name="title"
                                    required
                                    fullWidth
                                    id="addNewCardtitle"
                                    label="Title"
                                    type="text"
                                    variant="standard" />


                                <TextField
                                    name="cost"
                                    required
                                    fullWidth
                                    type="number"
                                    id="addNewCardCost"
                                    label="Total Cost"
                                    variant="standard" />

                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mt: 2 }}>
                                    <Checkbox {...label} id="shortTextIconCheckbox" />
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
                                        Add Now
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </Fade>
            </Modal>


            <FooterCalculation allMonthData={allMonthData} />





        </Box>
    );
};

export default AllMonthsData;