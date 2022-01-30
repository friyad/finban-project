import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import AllMonthsData from './AllMonthsData/AllMonthsData';



const AppMainPage = () => {
    const [editSalary, setEditSalary] = useState(false)

    //------------- For semi header Pagination -------------
    let allYears = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];
    const todayDate = new Date().getFullYear()
    const defaultYear = allYears.indexOf(todayDate)

    const [forwardPagi, setForwardPagi] = useState(defaultYear + 5)
    const [backPagi, setBackPagi] = useState(defaultYear - 1)
    const handleForwardPagination = () => {
        if (allYears.length > forwardPagi) {
            setForwardPagi(forwardPagi + 1)
            setBackPagi(backPagi + 1)
        }
    }
    const handleBackwordPagination = () => {
        if (backPagi) {
            setForwardPagi(forwardPagi - 1)
            setBackPagi(backPagi - 1)
        }
    }


    // ---------Update Top semi header Salary value---------
    const [headerSalary, setHeaderSalary] = useState(100000)
    const hanldeSalaryOnSubmit = (e) => {
        e.preventDefault()
        const newSalaryValue = document.getElementById('salaryInput').value
        setHeaderSalary(newSalaryValue)
    }





    return (
        <Box sx={{ mt: 20, mx: 'auto' }} maxWidth="1750px">

            {/* ----------------Top Header---------------- */}
            <Box sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                flexDirection: { xs: 'column', xl: 'row' }
            }}>
                <form action="" onSubmit={hanldeSalaryOnSubmit} >
                    <Box
                        sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            my: { xs: 2, xl: 0 }, width: '100%'
                        }}>
                        <Typography
                            sx={{
                                fontSize: 26, fontWeight: 700, color: '#501F71', mr: 2,
                                display: `${editSalary ? 'none' : 'inline-block'}`
                            }}>
                            ${headerSalary}
                        </Typography>

                        <TextField
                            type="number"
                            defaultValue={headerSalary}
                            sx={{
                                width: 160,
                                mr: 2,
                                display: `${editSalary ? 'inline-block' : 'none'}`
                            }}
                            id="salaryInput"
                            variant="standard" />


                        <Button
                            onClick={() => setEditSalary(true)}
                            sx={{
                                color: '#501F71', textTransform: 'capitalize',
                                fontWeight: 600, boxShadow: 1, backgroundColor: '#e3e7ea',
                                display: `${!editSalary ? 'inline-block' : 'none'}`,
                            }}>
                            Edit
                        </Button>

                        <Button
                            type="submit"
                            onClick={() => setEditSalary(false)}
                            sx={{
                                color: '#501F71', textTransform: 'capitalize',
                                fontWeight: 600, boxShadow: 1, backgroundColor: '#e3e7ea',
                                display: `${!editSalary ? 'none' : 'inline-block'}`,
                            }}>
                            Update
                        </Button>
                    </Box>
                </form>



                {/* ------------Pagination------------ */}
                <Box sx={{ mx: { xs: 0, xl: 4 } }}>
                    <Box
                        sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            flexDirection: { xs: 'column', sm: 'row' }
                        }}>

                        <Button
                            onClick={handleBackwordPagination}
                            sx={{ m: 0, px: 1.6, color: '#501F71', }}
                        >
                            <ArrowBackIosIcon
                                sx={{ transform: { xs: 'rotate(90deg)', sm: 'rotate(0deg)' } }} />
                        </Button>

                        {!allYears
                            ? <h1>loading..</h1>
                            : allYears.slice(backPagi, forwardPagi).map(year =>
                                <Button
                                    disabled={todayDate <= year ? false : true}
                                    key={year}
                                    style={todayDate <= year
                                        ? { color: '#501F71' }
                                        : { color: 'gray' }
                                    }
                                    sx={{
                                        m: 0,
                                        px: 0, py: 0.5,
                                        borderRadius: 2,
                                        fontSize: 16,
                                        fontWeight: 700,
                                    }}>
                                    {year}
                                </Button>
                            )}

                        <Button
                            onClick={handleForwardPagination}
                            sx={{ m: 0, px: 1.6, color: '#501F71', }}
                        >
                            <ArrowForwardIosIcon
                                sx={{ transform: { xs: 'rotate(90deg)', sm: 'rotate(0deg)' } }} />
                        </Button>
                    </Box>
                </Box>


                <Box
                    sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        flexDirection: { xs: 'column', sm: 'row' }
                    }}
                >
                    <Box sx={{ my: { xs: 3, xl: 0 } }}>
                        <Button sx={{
                            color: '#501F71', textTransform: 'capitalize',
                            fontWeight: 600, boxShadow: 1, backgroundColor: '#e3e7ea',
                            px: 2, mr: 4
                        }}>Add New Year</Button>
                        <Button sx={{
                            color: '#501F71', textTransform: 'capitalize',
                            fontWeight: 600, boxShadow: 1, backgroundColor: '#e3e7ea', px: 2
                        }}>Manage Year's</Button>
                    </Box>


                    <Box sx={{
                        ml: { xs: 0, sm: 4 }, display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Typography sx={{ fontSize: { xs: 12, sm: 16 }, fontWeight: 600, color: '#501F71', mr: 1 }}>
                            Sort:
                        </Typography>

                        <Button sx={{
                            color: '#501F71', textTransform: 'capitalize',
                            fontWeight: 600, backgroundColor: '#e3e7ea', px: 2, fontSize: { xs: 10, sm: 14 }
                        }}>
                            Category
                            <ArrowForwardIcon sx={{ fontSize: 20, }} />
                            State
                            <ArrowForwardIcon sx={{ fontSize: 20, }} />
                            Income/Expense
                        </Button>
                    </Box>
                </Box>






            </Box>


            <AllMonthsData />






        </Box >
    );
};


export default AppMainPage;