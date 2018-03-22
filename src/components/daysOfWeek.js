import React, { Component } from 'react';
import '../assets/css/allPages.css';
import chocolate from '../assets/images/chocolate.png';
import coconut from '../assets/images/coconut.png';
import violetcassis from '../assets/images/violet-cassis.png';
import vanilla from '../assets/images/vanilla.png';
import greentea from '../assets/images/green-tea.png';
import passionfruit from '../assets/images/passion-fruit.png';
import coffee from '../assets/images/coffee.png';
import pistachio from '../assets/images/pistachio.png';
import raspbery from '../assets/images/raspbery.png';
import lemon from '../assets/images/lemon.png';
import rose from '../assets/images/rose.png';
import tiffanyblue from '../assets/images/tiffany-blue.png';
import caramel from '../assets/images/caramel.png';
import almond from '../assets/images/almond.png';

class daysOfWeek extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const daysOfWeek = [
            {
                id: "monday",
                day: "Monday",
                time: "3 - 4 pm",
                flavor1: "chocolate",
                macImg1: chocolate,
                flavor2: "coconut",
                macImg2: coconut
            },
            {
                id: "tuesday",
                day: "Tuesday",
                time: "2 - 3 pm",
                flavor1: "violet cassis",
                macImg1: violetcassis,
                flavor2: "green Tea",
                macImg2: greentea

            },
            {
                id: "wednesday",
                day: "Wednesday",
                time: "9 - 10 am",
                flavor1: "passion fruit",
                macImg1: passionfruit,
                flavor2: "vanilla",
                macImg2: vanilla
            },
            {
                id: "thursday",
                day: "Thursday",
                time: "6 - 7 pm",
                flavor1: "coffee",
                macImg1: coffee,
                flavor2: "pistachio",
                macImg2: pistachio
            },
            {
                id: "friday",
                day: "Friday",
                time: "11 - 12 pm",
                flavor1: "raspbery",
                macImg1: raspbery,
                flavor2: "lemon",
                macImg2: lemon
            },
            {
                id: "saturday",
                day: "Saturday",
                time: "1 - 2 pm",
                flavor1: "rose",
                macImg1: rose,
                flavor2: "tiffany blue",
                macImg2: tiffanyblue
            },
            {
                id: "sunday",
                day: "Sunday",
                time: "10 - 11 am",
                flavor1: "caramel",
                macImg1: caramel,
                flavor2: "almond",
                macImg2: almond
            }
        ];


        const everyDaySamples = daysOfWeek.map((item, index) => {
            return (
                <div key={index} className="everyday z-depth-1">
                    <div className="daystop">
                        <p className="daysText">{item.day}</p>
                        <p className="daysText">{item.time}</p>
                    </div>
                    <div className="daysmiddle">
                        <img src={item.macImg1} className="smallMacaronImg" />
                        <p className="pFlavor daysText">{item.flavor1}</p>
                    </div>
                    <div className="daysbottom" id={item.id}>
                        <img src={item.macImg2} className="smallMacaronImg" />
                        <p className="pFlavor daysText">{item.flavor2}</p>
                    </div>
                </div>
            )
        });
        return <div className="col s12 days hide-on-med-and-down">{everyDaySamples}</div>;
    }
}

export default daysOfWeek;