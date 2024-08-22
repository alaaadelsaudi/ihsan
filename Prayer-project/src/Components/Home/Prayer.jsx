
import React from 'react';
import Prayercontent from './Prayercontent';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Card from './card';

export default function Prayer() {
    const [prayerTimes, setPrayerTimes] = useState({});

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try { 
                const response = await axios.get('https://api.aladhan.com/v1/timingsByCity/13-08-2024', {
                    params: {
                        city: 'cairo',
                        country: 'egypt',
                        method: 8 
                    },
                });
            
                const { Fajr, Dhuhr, Asr, Maghrib, Isha } = response.data.data.timings;
                setPrayerTimes({ Fajr, Dhuhr, Asr, Maghrib, Isha });
    
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            }
        };
    
        fetchPrayerTimes();
    }, []);

    //  date
    const todayDate = moment().format('dddd, MMMM D, YYYY');

    return (
        <Container style={{position: 'relative', top: '35px', padding: '50px 0px',margin:'auto',width:'90%'}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <div className='mosq-part'>
                        <div>
                            <img src="src/Components/imges/logo_mosq-1.png" alt="Mosque Logo" />
                        </div> 
                        <div>
                            <h2>Welcome to Ihsan</h2>
                            <h4>Islamic Center for Muslims to Achieve Spiritual Goals</h4>
                            <p >Consectetur adipisicing elit sed eiusmod tempor ncid parrot withdrew less a darn overheard foolish ran forwards. Labore et dolore magna aliqua enim ad minim veniam quis nostrud exerc eitation nisi ut aliquip ex ea consequat duis aute irure doly reprehenderit.</p>
                            <div className='cards'>
                                <Card span={'2310'} para={'People Converted To Islam'} />
                                <Card span={'5M'} para={'Arranged & Given In Donations'} />
                                <Card span={'187'} para={'Islamic Scholors & Teachers'} />
                                <Card span={'260'} para={'Hifz-e-Quran Claas Sessions Done'} />
                            </div>
                            <button className='button'>Ask About Islam</button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className='mosq-part2'>
                        <div className="prayer-timing">
                            <span>Today’s Prayer Times</span>
                        </div>
                        <div className='date'>
                            <span style={{color:'#8a9536'}}> Islamic: 9 Safar </span>
                            <span>{todayDate}</span>
                        </div>
                        <div className="prayercontent">
                            <div className='back'>
                                <Prayercontent prayerName="Fajr" prayerTime={prayerTimes.Fajr} />
                            </div>
                            <div>
                                <Prayercontent prayerName="Dhuhr" prayerTime={prayerTimes.Dhuhr} />
                            </div>
                            <div className='back'>
                                <Prayercontent prayerName="Asr" prayerTime={prayerTimes.Asr} />
                            </div>
                            <div>
                                <Prayercontent prayerName="Maghrib" prayerTime={prayerTimes.Maghrib} />
                            </div>
                            <div className='back'>
                                <Prayercontent prayerName="Isha" prayerTime={prayerTimes.Isha} />
                            </div>
                        </div>
                    </div> 
                </Grid>
            </Grid>
        </Container>
    );
}
