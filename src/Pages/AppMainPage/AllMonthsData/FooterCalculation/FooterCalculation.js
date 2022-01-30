import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const FooterCalculation = ({ allMonthData }) => {

    // for monthly------------
    let allMonthly = [];
    if (allMonthData) {
        allMonthData.map(month => {
            let totalMonthly = 0;
            month.monthData.map(mnDt => {
                if (!mnDt.costClosed) {
                    totalMonthly += JSON.parse(mnDt.cost)
                }
            })
            allMonthly.push(totalMonthly)
        })
    }


    // for cash-flow (cumulative)-----------
    let cashFlow = [];
    if (allMonthly.length !== 0) {
        let januaryDefaultValue = 1000;
        const monthly = allMonthly.slice(1, allMonthly.lenght)
        cashFlow[0] = januaryDefaultValue

        monthly.map(mnthValue => {
            cashFlow.push(mnthValue + januaryDefaultValue)
        })
    }


    return (
        <div>
            {allMonthData &&
                <Box sx={{
                    pl: 1, pr: 2, pt: 3, backgroundColor: 'white', mt: 8,
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'top'
                }}>
                    <Box sx={{ width: 80 }}>
                        <Grid container>
                            <Grid item xs={12} sx={{ pb: 3, color: '#878787' }}>
                                <Typography>
                                    Monthly
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ pb: 3, color: '#440355' }}>
                                <Typography>
                                    Cash-Flow (Cumulative)
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ pb: 3, color: '#878787' }}>
                                <Typography>
                                    Speculation (Cum. Scenario)
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>



                    <Box sx={{ flexGrow: 1, textAlign: 'top' }}>
                        <Grid container >
                            <Grid container columnSpacing={{ xs: 2, }} sx={{ pb: 4 }}>
                                {
                                    allMonthly.map(value =>
                                        <Grid item xs={1} key={Math.random() + value}>
                                            <Typography sx={{
                                                textAlign: 'right', pr: 0.8,
                                                color: '#878787', fontWeight: 700
                                            }}>
                                                ${value}
                                            </Typography>
                                        </Grid>)
                                }
                            </Grid>

                            <Grid container columnSpacing={{ xs: 2, }} sx={{ pb: 6 }}>
                                {
                                    cashFlow.map(value =>
                                        <Grid item xs={1} key={Math.random() + value}>
                                            <Typography sx={{
                                                textAlign: 'right', pr: 0.8,
                                                color: `${value >= 1 ? '#8cb53c' : '#e62149'}`
                                                , fontWeight: 700
                                            }}>
                                                ${value}
                                            </Typography>
                                        </Grid>)
                                }
                            </Grid>

                            <Grid container columnSpacing={{ xs: 2, }}>
                                {
                                    allMonthly.map(value =>
                                        <Grid item xs={1} key={Math.random() + value}>
                                            <Typography sx={{
                                                textAlign: 'right', pr: 0.8,
                                                color: '#878787', fontWeight: 700
                                            }}>
                                                ${value}
                                            </Typography>
                                        </Grid>)
                                }
                            </Grid>





                        </Grid>
                    </Box>
                </Box>}
        </div >
    );
};

export default FooterCalculation;