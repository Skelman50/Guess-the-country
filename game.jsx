import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';

export default function Game(props){
	return(
<div id="wrap" style={{display:props.display.wrap}}>
	<div id="blokHealh">

		<div id="health_1"style=
		{{background:props.counts.lose<3?`url(${require('./images/heartGreen.png')}) 50% 50% / 100% 100% no-repeat`:'transparent'}} 
		/>

		<div id="health_2"style=
		{{background:props.counts.lose<2?`url(${require('./images/heartYellow.png')}) 50% 50% / 100% 100% no-repeat`:'transparent'}} 
		/>

		<div id="health_3"style=
		{{background:props.counts.lose===0?`url(${require('./images/heartRed.png')}) 50% 50% / 100% 100% no-repeat`:'transparent'}} 
		/>

		<span id="textLose">Loses {props.counts.lose}/3</span>
	</div>
	<div id="bonuses">
		<div id="biscuit"></div>
		<span id="textBonus">Wins {props.counts.win}/{props.checkedContinent.map((value,index)=>{
			if(value===true){
				return(
					<span key={index}>{props.countries.copy[index].length-6}</span>
				)
			}
		})}</span>
	</div>
	
	
	{props.checkedChangeGame[0]===true?
	props.checkedContinent.map((value,index)=>{
		
		if(value===true){
		return(	<h5 id="record" key={index}>Ваш рекорд: {+JSON.parse(localStorage.getItem(`Флаги(${props.checkedContinentName[index]})`))}	
			</h5>)
		}
	}):props.checkedContinent.map((value,index)=>{
		
		if(value===true){
		return(	<h5 id="record" key={index}>Ваш рекорд: {+JSON.parse(localStorage.getItem(`Столицы(${props.checkedContinentName[index]})`))}	
			</h5>)
		}
	})
	}


	{props.checkedContinent.map((checked,index)=>{
		if(checked===true){
			
			return(<h3 id="continentName" key={index}>{props.checkedContinentName[index]}</h3>)
		}
	})}

	{props.checkedChangeGame.map((checked,index) => {
		if(checked===true) {
			return(<h2 id="nameGame" key={index}>{props.checkedChangeGameName[index]}</h2>)
		}
	})}

	
	<div id="flag" style={{background:props.countries.all[0].flags}}></div>
	<div id="countryName" style={{display:props.checkedChangeGame[1]===true?'block':'none'}}>

	{props.countries.all[0].country}</div>

	<button id="hint" style={{background:props.buttonHint.background}}disabled={props.buttonHint.disabled}
		onClick={(e)=>props.onHints()}
	>
	Подсказка</button>

	<div  style={{background:props.backgrounds[0]}} id="firstChange" onClick={(e)=>props.onChange(0)}>
	{props.checkedChangeGame[0]===true?props.value[0]:props.valueCapital[0]}
	</div>
	<div  style={{background:props.backgrounds[1]}} id="secondChange" onClick={(e)=>props.onChange(1)}>
	{props.checkedChangeGame[0]===true?props.value[1]:props.valueCapital[1]}
	</div>
	<div  style={{background:props.backgrounds[2]}} id="thirdChange" onClick={(e)=>props.onChange(2)}>
	{props.checkedChangeGame[0]===true?props.value[2]:props.valueCapital[2]}
	</div>
	<div  style={{background:props.backgrounds[3]}} id="fourthChange" onClick={(e)=>props.onChange(3)}>
	{props.checkedChangeGame[0]===true?props.value[3]:props.valueCapital[3]}
	</div>

	<button id="goBackFlags" onClick={(e)=>props.onBack()}>Назад</button>
</div>
	)
}
