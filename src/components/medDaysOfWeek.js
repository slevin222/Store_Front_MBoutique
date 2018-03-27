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

class MedDaysOfWeek extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const daysOfWeek = [
            {
                id: "sMonday",
                day: "Monday",
                time: "3 - 4 pm",
                flavor1: "chocolate",
                macImg1: chocolate,
                flavor2: "coconut",
                macImg2: coconut
            },
            {
                id: "sTuesday",
                day: "Tuesday",
                time: "2 - 3 pm",
                flavor1: "violet cassis",
                macImg1: violetcassis,
                flavor2: "green Tea",
                macImg2: greentea

            },
            {
                id: "sWednesday",
                day: "Wednesday",
                time: "9 - 10 am",
                flavor1: "passion fruit",
                macImg1: passionfruit,
                flavor2: "vanilla",
                macImg2: vanilla
            },
            {
                id: "sThursday",
                day: "Thursday",
                time: "6 - 7 pm",
                flavor1: "coffee",
                macImg1: coffee,
                flavor2: "pistachio",
                macImg2: pistachio
            },
            {
                id: "sFriday",
                day: "Friday",
                time: "11 - 12 pm",
                flavor1: "raspbery",
                macImg1: raspbery,
                flavor2: "lemon",
                macImg2: lemon
            },
            {
                id: "sSaturday",
                day: "Saturday",
                time: "1 - 2 pm",
                flavor1: "rose",
                macImg1: rose,
                flavor2: "tiffany blue",
                macImg2: tiffanyblue
            },
            {
                id: "sSunday",
                day: "Sunday",
                time: "10 - 11 am",
                flavor1: "caramel",
                macImg1: caramel,
                flavor2: "almond",
                macImg2: almond
            }

        ];
        const medSizedDays = daysOfWeek.map((item, index) => {
            return (
                <div key={index} id={item.id} className="z-depth-1 col m6 s12 daysMed">
                    <div className="col s5" id="macaronsPicText">
                        <div className="macaronsPicText">
                            <p>{item.day} </p>
                        </div>
                        <div className="macaronsPicText">
                            <p>{item.time}</p>
                        </div>
                    </div>
                    <div className="col s7" id="sMacaronsPicImages">
                        <div className="macaronsPicInfo">
                            <img src={item.macImg1} className="smallMacaronImg" />
                            <p className="pFlavor">{item.flavor1}</p>
                        </div  >
                        <div className="macaronsPicInfo">
                            <img src={item.macImg2} className="smallMacaronImg" />
                            <p className="pFlavor">{item.flavor2}</p>
                        </div>
                    </div>
                </div>
            )
        });
        return <div className="col s12 m12 show-on-med-and-down hide-on-large-only" id="daysSmall">{medSizedDays}</div>;
    }
}
export default MedDaysOfWeek;