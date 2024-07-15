import React, { useState, useEffect } from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, Button, Box, Pagination} from '@mui/material';

const App = () => {
    const [selectedBrand, setSelectedBrand] = useState('');
    const [filteredCars, setFilteredCars] = useState([]);
    const [cars, setCars] = useState([]);
    const [page , setPage] = useState(1);
    const [perPage] = useState(12);

    useEffect(() => {
        fetch('/cars.json')
            .then(response => response.json())
            .then(data => {
                setCars(data);
                setFilteredCars(data);
            })
            .catch(error => console.error('Error fetching the JSON data:', error));
    }, []);

    useEffect(() => {
        if (selectedBrand) {
            const filtered = cars.filter(car => car.title.toLowerCase().includes(selectedBrand.toLowerCase()));
            setFilteredCars(filtered);
        } else {
            setFilteredCars(cars);
        }
        setPage(1)
    }, [selectedBrand, cars]);

    const handleReset = () => {
        setSelectedBrand('');
    };

    const startPage = (page - 1) * perPage; // (2 - 1) * 12 = 12
    const endPage = perPage * page // 12 * 2 = 24

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>
                Araba Kategorileri
            </Typography>
            <Box mb={3}>
                <Button variant="contained" color="primary" onClick={() => setSelectedBrand('Mazda')}>Mazda</Button>
                <Button variant="contained" color="primary" onClick={() => setSelectedBrand('Audi')}>Audi</Button>
                <Button variant="contained" color="primary" onClick={() => setSelectedBrand('Mercedes')}>Mercedes</Button>
                <Button variant="contained" color="primary" onClick={() => setSelectedBrand('Volkswagen')}>Volkswagen</Button>
                <Button variant="contained" color="secondary" onClick={handleReset}>Sıfırla</Button>
            </Box>
            <Typography variant="h5" gutterBottom>
                {selectedBrand ? `${selectedBrand} Araçları` : 'Tüm Araçlar'}
            </Typography>
            <Grid container spacing={4}>
                {filteredCars.slice(startPage, endPage).map(car => (
                    <Grid item key={car.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image={car.image}
                                alt={`${car.title} ${car.class}`}
                                style={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {car.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {car.class}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Year: {car.start_production}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: {car.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {page}
            <div className={"pagination-container"}>
                <Pagination count={Math.ceil(filteredCars.length / perPage)} page={page} rowsPerPage={perPage}  onChange={(e,page) => setPage(page)}/>
            </div>
        </Box>
    );
}

export default App;
