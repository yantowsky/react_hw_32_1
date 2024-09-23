import React from 'react';
import myPhoto from '../images/yantowsky.png';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const About = () => {
    return (
        <Card sx={{ p: '15px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <CardMedia
                sx={{ p: '5px', border: '2px solid' }}
                component='img'
                height={500}
                src={myPhoto}
                alt="my_photo"
            />
            <CardContent
                sx={{ display: 'flex', flexDirection: 'column' }}
            >
                <Typography variant='h5' fontFamily={'Play'}>Євген Янтовський</Typography>
                <Typography variant='body1' fontFamily={'Play'}>
                    Мені 45 роки. Я з міста Дніпра, народився в місті Покров, Дніпропетровської області. Більше 20 років присвятив автомобільному бренду "Mercedes-Benz", на цій роботі багато спількуюсь з людьми. Дуже подобається все прогресивне та технологічне, девайси, комп'ютери, різноманітна електронна музика. Улюбленний вид спорту - баскетбол. До початку війни з дружиною часто полюбляли їздити відпочивати в Буковель.
                </Typography>
                <Typography variant='body1' fontFamily={'Play'}>
                    Моя мета на цьому курсі. Змінити свою професію. Відкрити більше своїх можливостей. Меньше бути прив'язаним до одного місця. Багато подорожувати.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default About;