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
                time: "15:00 - 16:00",
                flavor1: "chocolate",
                macImg1: chocolate,
                flavor2: "coconut",
                macImg2: coconut
            },
            {
                id: "tuesday",
                day: "Tuesday",
                time: "14:00 - 15:00",
                flavor1: "violet Cassis",
                macImg1: violetcassis,
                flavor2: "green Tea",
                macImg2: greentea

            },
            {
                id: "wednesday",
                day: "Wednesday",
                time: "9:00 - 10:00",
                flavor1: "passion Fruit",
                macImg1: passionfruit,
                flavor2: "vanilla",
                macImg2: vanilla
            },
            {
                id: "thursday",
                day: "Thursday",
                time: "18:00 - 19:00",
                flavor1: "coffee",
                macImg1: coffee,
                flavor2: "pistachio",
                macImg2: pistachio
            },
            {
                id: "friday",
                day: "Friday",
                time: "11:00 - 12:00",
                flavor1: "raspbery",
                macImg1: raspbery,
                flavor2: "lemon",
                macImg2: lemon
            },
            {
                id: "saturday",
                day: "Saturday",
                time: "13:00 - 14:00",
                flavor1: "rose",
                macImg1: rose,
                flavor2: "tiffany Blue",
                macImg2: tiffanyblue
            },
            {
                id: "sunday",
                day: "Sunday",
                time: "10:00 - 11:00",
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
                        <p>{item.day}</p>
                        <p>{item.time}</p>
                    </div>
                    <div className="daysmiddle">
                        <img src={item.macImg1} className="smallMacaronImg" />
                        <p>{item.flavor1}</p>
                    </div>
                    <div className="daysbottom" id={item.id}>
                        <img src={item.macImg2} className="smallMacaronImg" />
                        <p>{item.flavor2}</p>
                    </div>
                </div>
            )
        });
        return <div className="col s12 days">{everyDaySamples}</div>;
    }
}

export default daysOfWeek;