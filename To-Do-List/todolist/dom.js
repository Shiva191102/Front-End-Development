// // 👇 This must be the first thing in your script!
// const { JSDOM } = require("jsdom");

// // 👇 Create fake HTML with jsdom
// const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="app"></div></body></html>`);

// // 👇 Assign global variables
// global.window = dom.window;
// global.document = dom.window.document;
// global.navigator = dom.window.navigator;

// // ✅ Now you can safely use document
// const appDiv = document.getElementById("app");
// appDiv.innerHTML = "<h1>Hello from Node.js!</h1>";

// console.log(document.body.innerHTML); // Output: <div id="app"><h1>Hello from Node.js!</h1></div>
// const inputBox = document.getElementById("inputBox");
// const listContainer = document.getElementById("list-container");

// function addTask(){
//     if(inputBox.value ===''){
//         alert("You Must Write Something!")
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value="";
// }

// // listContainer.addEventListener("click",function(e){
// //     if(e.target.tagname==="LI"){
// //         e.target.classList.toggle("checked");
// //     }
// //     else if(e.target.tagname==="SPAN"){
// //         e.target.parentElement.remove();
// //     }

// // },false)

import React, { Component } from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from 'bpk-component-calendar';
import format from 'date-fns/format';
import STYLES from './App.scss';


const c = className => STYLES[className] || 'UNKNOWN';
const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tues',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thur',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  },
];


export default class App extends Component {
  constructor () {
    super();

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      }
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: date,
      },
    });
  }

  render () {
    return (
      <div className={c('App')}>
      <header className={c('App__header')}>
        <div className={c('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Reservation Date</BpkText>
        </div>
      </header>
      <main className={c('App__main')}>
        <div>
          <BpkCalendar
            id='calendar'
            onDateSelect={this.handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={0}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={this.state.selectionConfiguration}
          />
          </div>
        <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
      </main>
    </div>
    )
  }
}