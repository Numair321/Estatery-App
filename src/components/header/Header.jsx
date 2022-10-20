import React, { useState } from 'react'
import './header.css'
import Cards from '../cards/Card'
import { card } from '../data.jsx'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiCalendarEventFill } from "react-icons/ri";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Header = () => {

    const [data, setData] = useState(card);
    const [loc, setLoc] = useState([]);
    const [price, setprice] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [isActivePrice, setIsActivePrice] = useState(false);
    const [isSelected, setisSelected] = useState("Choose property type");
    const [isSelectedPrice, setisSelectedPrice] = useState("Select price range");
    const [isSelectedPriceMin, setisSelectedPriceMin] = useState(0);
    const [isSelectedPriceMax, setisSelectedPriceMax] = useState(0);
    const[date,setDate]=useState(null);

    const handleSearch = () => {
        if (isSelectedPrice == "Select price range" || isSelected == "Choose property type")
            alert("Please fill all the fields");
        if (isSelected == 'All') {
            const newData = card.filter(x => x.location == loc || ((x.price >= isSelectedPriceMin && x.price <= isSelectedPriceMax)));
            setData(newData);
        }
        else if(loc.length==0)
        {
            const newData = card.filter(x=>(x.price >= isSelectedPriceMin && x.price <= isSelectedPriceMax) && x.type == isSelected);
            setData(newData);
        }
        else {
            const newData = card.filter(x => x.location == loc && ((x.price >= isSelectedPriceMin && x.price <= isSelectedPriceMax) && x.type == isSelected));
            setData(newData);
        }
    }

    return (
        <>
            <div className='header'>
                <div className='header-head'>
                    <div className='heading'>Search properties to rent</div>
                    <input type='text' placeholder='Search with Search Bar'></input>
                </div>
                <br />
                <br />
                <br />
                <div className='filters'>
                    <div className='filter'>
                        <div className='head'>Location</div>
                        <input type='text' placeholder='Eg. Canada' onChange={(e) => { setLoc(e.target.value) }}></input>
                    </div>
                    <div className='vl'></div>
                    <div className='filter'>
                        <div className='head'>When</div>
                        <div className='date'>
                        <DatePicker onChange={date=>setDate(date)} selected={date} className='pick'/>
                        <RiCalendarEventFill size="3rem" style={{marginLeft:'5rem',marginTop:'0.6rem',cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div className='vl'></div>
                    <div className='filter'>
                        <div className='head'>Price</div>
                        <div className='dropdown'>
                            <div className="dropdown-btn" onClick={() => setIsActivePrice(true)}>{isSelectedPrice}<RiArrowDropDownLine size='1.5rem' /></div>
                            {isActivePrice && <div className="dropdown-content">
                                <div className="dropdown-item" onClick={() => { setisSelectedPrice("All"); setIsActivePrice(false); setisSelectedPriceMax(8000); setisSelectedPriceMin(0) }}>All</div>
                                <div className="dropdown-item" onClick={() => { setisSelectedPrice("$0-3000"); setIsActivePrice(false); setisSelectedPriceMax(3000); setisSelectedPriceMin(0) }}>$0-3000</div>
                                <div className="dropdown-item" onClick={() => { setisSelectedPrice("$3001-5000"); setIsActivePrice(false); setisSelectedPriceMax(5000); setisSelectedPriceMin(3001) }}>$3001-5000</div>
                                <div className="dropdown-item" onClick={() => { setisSelectedPrice("$5001-8000"); setIsActivePrice(false); setisSelectedPriceMax(8000); setisSelectedPriceMin(5001) }}>$5001-8000</div>
                            </div>}
                        </div>
                    </div>
                    <div className='vl'></div>
                    <div className='filter'>
                        <div className='head'>Property Type</div>
                        <div className='dropdown'>
                            <div className="dropdown-btn" onClick={() => setIsActive(true)}>{isSelected}<RiArrowDropDownLine size='1.5rem' /></div>
                            {isActive && <div className="dropdown-content">
                                <div className="dropdown-item" onClick={() => { setisSelected("All"); setIsActive(false) }}>All</div>
                                <div className="dropdown-item" onClick={() => { setisSelected("Rent"); setIsActive(false) }}>Rent</div>
                                <div className="dropdown-item" onClick={() => { setisSelected("Office"); setIsActive(false) }}>Office</div>
                                <div className="dropdown-item" onClick={() => { setisSelected("Property"); setIsActive(false) }}>Property</div>
                            </div>}
                        </div>
                    </div>
                    <div className='vl'></div>
                    <button className='search' onClick={() => handleSearch()}>Search</button>
                </div>
            </div>
            <Cards card={data} />
        </>
    )
}

export default Header