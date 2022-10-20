import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { card } from '../data.jsx'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LayersIcon from '@mui/icons-material/Layers';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './card.css'

function Cards({card}) {


    const renderCard = (card, index) => {
        return (
            <>
            <div className='containers'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="160"
                        image={card.image}
                    />
                    <CardContent>
                        <div className='top'>
                            <Typography variant="h5" color="rgb(84, 9, 119)">
                                ${card.price}
                            </Typography>
                            <div className="price">/month</div>
                            <Typography variant="body2" color="text.secondary" className='price-icon'><FavoriteBorderIcon style={{marginLeft:'600%'}}/></Typography>
                        </div>
                        <Typography gutterBottom variant="h4" component="div">
                            {card.name}
                        </Typography>
                        <div className='top'>
                        <Typography variant="h5" color="text.primary">
                            <LocationOnIcon />
                            {card.location}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" style={{marginLeft:'auto', marginRight:'0'}}>{card.type}</Typography>
                        </div>
                        <div className='bottom'>
                            <div className='icon'><Typography variant="body2" color="text.secondary">
                                <SingleBedIcon />
                                {card.beds}beds
                            </Typography></div>
                            <div className='icon'><Typography variant="body2" color="text.secondary">
                                <BathtubIcon style={{height:'1.3rem'}}/>
                                {card.bathrooms}bathrooms
                            </Typography></div>
                            <div className='icon'><Typography variant="body2" color="text.secondary">
                                <LayersIcon />
                                {card.area}
                            </Typography></div>
                        </div>
                    </CardContent>
                </Card>
 </div>
            </>
        )
    }


    return (
        <>
            <div className="card-container">
                {card.map(renderCard)}
            </div>
        </>
    );
}

export default Cards;