import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Link, Switch, Redirect,
} from 'react-router-dom';


function Options(props) {
  return (
    <div id="options" style={{ right: `${props.positionRight}%` }}>
      <div>
        <input
          type="radio"
          id="changeFlags"
          name="changeGame"
          defaultChecked={props.checkedChangeGame[0]}
          onChange={e => props.onChangeGame(0)}
        />
        <input
          type="radio"
          id="changeCapitals"
          name="changeGame"
          defaultChecked={props.checkedChangeGame[1]}
          onChange={e => props.onChangeGame(1)}
        />

        <label className="FlagGameBtn" htmlFor="changeFlags">УГАДАТЬ СТРАНУ</label>
        <label className="CapitalGameBtn" htmlFor="changeCapitals">УГАДАТЬ СТОЛИЦУ</label>
        {' '}
      </div>


      <div className="map">
        <svg viewBox="0 0 1000 648">
          <path
            d="m 377.87264,305.66038 37.4434,-48.14151 56.16509,-6.11321 v 14.90094 l 28.65566,10.69812 12.22642,
            -10.31604 37.44339,9.55189 -9.16981,6.49528 36.67925,66.48113 29.41981,-3.43868 -35.53302,60.36793 0.38208,
            38.20754 -21.01415,12.99057 -3.43868,41.64623 -17.95755,23.3066 -32.09434,-1.5283 -25.98113,-64.57076 12.60849,
            -18.7217 -12.99057,-32.09433 -4.96698,-34.76887 -49.28774,5.34905 -36.29717,
            -9.93396 z m 202.44856,145.11687 -5.40336,17.83109 9.72605,18.91177 17.8311,-47.00925 z"
            onClick={e => props.onInteractive(3)}
            style={{ opacity: props.path.opacity[3] }}
          />
          <path
            d="m 179.1934,364.11792 -11.84434,34.76887 28.65566,55.78302 13.37264,12.60849 -3.05661,86.73113 55.01887,
                44.32076 -16.81132,-29.41981 1.80114,3.11967 0.87339,-31.77533 30.94811,-25.59906 6.11321,-28.65566 21.01415,
                -17.1934 17.1934,-56.92924 -53.10849,-21.7783 -8.78774,-26.74529 -0.68737,1.19056 -23.38338,-3.86508 z"
            onClick={e => props.onInteractive(4)}
            style={{ opacity: props.path.opacity[4] }}
          />
          <path
            d="m 53.493295,248.69146 c 19.992444,56.19498 19.992444,56.73532 19.992444,56.73532 l 1.621009,
                -19.45211 20.53278,24.31513 77.268092,53.4933 -25.39581,-56.19498 0.54034,3.24202 -19.45211,8.64538 -9.72605,
                -41.06556 v 3.24202 l 46.46892,-9.72605 15.12942,17.29076 7.02437,-25.39581 51.87229,-45.38825 46.46892,-16.75043 -19.45211,
                -39.44455 0.54034,3.24202 -39.44455,-1.62101 -16.75043,24.31514 -18.91177,-24.85547 35.6622,-24.85547 -161.020223,
                -3.78236 -63.7596854,39.98489 74.0260754,-4.32269 2.161345,54.03363 z m 109.688275,55.11431 12.42773,-2.16135 13.50841,
                9.72606 -16.75043,-5.40337 z m 33.50085,15.12941 7.02437,-4.32269 5.9437,5.40337 z M 156.69753,122.7931 c 27.01682,
                -0.54033 27.01682,-0.54033 27.01682,-0.54033 l -17.8311,8.10504 z m 36.74287,0.54034 18.37144,4.86303 -12.96808,
                4.86302 z m 29.7185,4.32269 3.78235,-12.42774 16.21009,1.62101 z m 35.12186,-19.45211 39.98489,-4.86302 -36.20254,
                12.96807 z m -27.01682,34.58153 15.66976,-9.72606 -4.32269,18.37144 z m 8.10505,-16.75043 9.72605,-7.02437 25.39581,
                5.9437 11.8874,21.61345 -17.8311,11.34706 -17.29076,-8.10504 20.53278,-5.40336 z m 61.058,-17.8311 118.87399,
                -5.40336 -25.39581,24.31513 -45.92858,19.45211 -20.53278,24.85547 -14.04875,-21.61345 5.40337,-25.39581 z"
            onClick={e => props.onInteractive(5)}
            style={{ opacity: props.path.opacity[5] }}
          />
          <path
            d="m 458.20519,156.83429 30.79917,-22.15379 29.7185,-7.56471 34.04119,17.8311 8.10504,79.96978 -23.23446,
                -16.21009 -9.18571,21.61345 -10.26639,4.32269 -8.10505,19.99244 -9.18572,-25.3958 -19.99244,
                -12.42774 15.12942,15.66975 -5.9437,15.12942 -22.69413,-28.63782 -44.30758,31.87984 -14.58908,-5.9437 1.08068,
                -24.85547 19.99244,4.32269 1.08067,-23.23446 30.79917,-15.66975 v -9.72606 l 8.64538,10.80673 36.74287,-10.80673 14.58908,
                -10.26639 -14.04874,-2.70168 -3.78236,-19.45211 -21.61345,32.96052 -9.18572,-8.64538 -13.5084,2.16134 z m -17.29076,
                32.96052 -8.10504,-21.61346 -0.54034,16.21009 -7.56471,8.64538 z m -24.31513,0.54033 4.32269,-9.18572 2.70168,7.56471 z"
            onClick={e => props.onInteractive(2)}
            style={{ opacity: props.path.opacity[2] }}
          />
          <path
            d="m 556.00607,149.26958 9.72605,83.75213 -24.31513,-16.75042 -7.02438,18.37143 -10.26639,3.78235 1.62101,15.12942 28.63783,
                -1.08067 -2.70168,30.79917 32.96051,58.89666 51.87229,-34.58153 -14.58908,-16.75042 -15.66976,5.40336 -7.02437,-18.91177 25.93615,
                14.58908 29.71849,1.62101 15.66976,18.37143 7.5647,-3.78235 16.75043,52.95296 9.18572,-7.02437 V 334.0646 l 31.3395,
                -30.25883 17.29077,28.63782 8.64538,-5.9437 4.86302,36.20254 20.53278,19.4521 -13.5084,-25.3958 v -13.50841 l 14.04874,
                18.37143 16.21009,-16.75042 -22.15379,-29.17816 25.39581,-5.40337 17.29076,-8.64538 9.18572,-22.69412 -17.8311,-22.15379 -8.64538,
                -17.29076 18.37143,2.16134 23.23446,21.07312 -9.18571,-25.93615 15.66975,-13.5084 -9.72605,-29.17816 -22.69413,-8.64538 14.58908,
                -17.29077 39.44455,-7.02437 0.54034,23.7748 23.7748,13.50841 -16.21009,-32.42018 12.96807,2.16134 11.8874,-8.10504 -11.34707,
                -10.80673 12.96808,-5.40336 -146.43115,-14.04875 -93.47818,-18.91177 -25.93614,12.96808 -27.55715,-1.62101 -10.26639,
                15.66975 -49.71094,-1.08067 z m 295.56396,40.52523 c 19.45211,23.23446 20.53278,24.31513 20.53278,24.31513 l -7.02437,
                2.16135 z m 17.29076,33.50085 18.91177,-1.62101 -4.32269,11.8874 -9.72605,-0.54034 7.02437,18.91177 -11.34706,13.50841 -13.50841,
                1.08067 3.78236,-11.34706 14.04874,-3.78235 z m -32.42018,114.5513 5.9437,-11.8874 -0.54033,7.02437 16.75042,16.21009 -4.86302,
                4.32269 -11.34707,-5.40336 z m 15.66976,22.69412 7.02437,-3.78235 2.16134,8.64538 -5.40336,5.9437 z m -95.09919,14.04875 27.55715,
                15.66975 7.02437,10.80672 -2.16135,11.8874 z m 44.84791,5.94369 13.50841,0.54034 13.50841,-17.8311 8.10504,5.40337 -8.10504,
                36.20253 -17.29077,-3.78236 z m 34.04119,12.42774 21.61345,-8.10504 -9.72605,14.58908 2.70168,9.72605 -8.64538,-8.10505 -5.40337,
                12.96808 z m -41.06556,22.69412 14.04874,-2.16134 15.12942,9.18572 z"
            onClick={e => props.onInteractive(1)}
            style={{ opacity: props.path.opacity[1] }}
          />
          <path
            d="m 806.18178,476.71339 0.54034,45.38825 54.57396,-11.8874 8.64539,14.58908 11.34706,4.32269 -0.54034,8.10505 17.29076,
                1.621 12.96808,-4.32269 27.01681,-44.84791 -16.21009,-26.47648 -7.56471,-34.04119 -7.5647,24.85547 -15.12942,-9.18571 1.62101,
                -6.48404 -14.04875,-4.86303 -9.72605,11.8874 -9.18572,-4.86302 z m 72.9454,-83.75213 15.66976,9.18572 4.86302,-3.78236 14.04875,
                2.70168 19.99244,14.04875 -3.78235,5.9437 7.5647,12.42773 -15.66975,-10.80672 -19.99244,-5.9437 -16.21009,-9.18572 z m 5.9437,
                151.8345 0.54034,11.8874 10.26639,-10.26639 z m 56.19498,19.45211 8.10504,-8.64538 22.69413,-8.64538 -15.12942,17.8311 z m 39.44455,
                -24.31513 1.08067,7.02437 17.8311,-14.04874 -7.02437,-0.54034 -0.54034,-10.26639 -1.62101,11.34706 z"
            onClick={e => props.onInteractive(6)}
            style={{ opacity: props.path.opacity[6] }}
          />

        </svg>
        <img src={require('../assets/images/modesMap.png')} alt="Map" />
        <div id="AllWorld" onClick={e => props.onInteractive(0)}>ВЕСЬ МИР</div>
      </div>

      <button id="apply" onClick={e => props.onOptions()}>Применить</button>
    </div>
  );
}

function Table(props) {
  const arr = [];
  for (let i = 0; i < props.checkedContinent.length; i++) {
    if (props.recordes.flagsRecordsName[i] === null && props.recordes.capitalsRecordsName[i] === null) {
      arr.push(props.recordes.flagsRecordsName[i]);
      arr.push(props.recordes.capitalsRecordsName[i]);
    }
  }
  if (arr.length === 14) {
    return (
      <div id="recordsTable" style={{ right: `${props.positionRightTable}%` }}>
        <h1 id="noRecords">У вас нет рекордов</h1>
        <button id="backFromTable" onClick={e => props.onRecordsTable()}>В меню</button>
      </div>
    );
  }
  const arrName = [];
  const arrPoint = [];
  for (let i = 0; i < props.checkedContinent.length; i++) {
    arrName.push(props.recordes.flagsRecordsName[i]);
    arrName.push(props.recordes.capitalsRecordsName[i]);
    arrPoint.push(props.recordes.flagsRecordsPoint[i]);
    arrPoint.push(props.recordes.capitalsRecordsPoint[i]);
  }
  return (
    <div id="recordsTable" style={{ right: `${props.positionRightTable}%` }}>
      <table id="records">
        <tbody>
          {
						arrName.map((value, index) => {
						  if (value != null) {
						    return (
  <tr key={index}>
    <td>{arrName[index]}</td>
    <td>{arrPoint[index]}</td>
  </tr>
						    );
						  }
						})

					}
        </tbody>
      </table>
      <button id="backFromTable" onClick={e => props.onRecordsTable()}>В меню</button>
    </div>
  );
}

function Rules(props) {
  return (


    <div id="rulesSheet" style={{ left: `${props.positionLeftRules}%` }}>
      <h2>Правила игры</h2>
      <div>
			Правила игры довольно просты. Существует 2 режима игры:
        {' '}
        <span>"Угадать страну по флагу"</span>
        {' '}
и
        <span>"Угадать столицу страны".</span>
			Так же есть возможность выбора части мира для игры. Выбор перечисленного ранее осуществляется в
        {' '}
        <span>"Режимы игры".</span>
      </div>
      <div>
        <span>"Угадать страну по флагу"</span>
: отображается флаг страны, Вам необходимо выбрать один из
			предложенных
        <span>четырех</span>
        {' '}
вариантов.

      </div>
      <div>
        <span>"Угадать столицу страны"</span>
: отображается флаг страны с указанием ее названия ниже,
			Вам необходимо выбрать один из предложенных
        <span>четырех</span>
        {' '}
вариантов.

      </div>
      <div>
			За каждый правильный ответ вы получаете
        {' '}
        <span>1 балл</span>
. Вам дается
        {' '}
        <span>3</span>
        {' '}
права на ошибку.
			После 3 ошибки игра прекращается.

      </div>
      <div>
        <span>Примечание:</span>
Во всех режимах у вас есть возможность воспользоваться подсказкой, нажав на кнопку с соответсвующим названием
			во время начатой игры. В случае выбора данной опции вам отобразиться и засчитается правильный вариант ответа.

        <br />
        <span>Удачной игры!</span>
      </div>
      <button id="backFromRules" onClick={e => props.onRules()}>В меню</button>
    </div>
  );
}

export default function StartPage(props) {
  return (
    <div id="wrapStart" style={{ display: props.display.wrapStart }}>
      <div id="earth" />
      <div className="forMedia">
        <button id="start" onClick={e => props.onStart()}> ИГРА </button>

        <div>
          <button id="rules" onClick={e => props.onRules()}>ПРАВИЛА</button>

          <button id="yourRecords" onClick={e => props.onRecordsTable()}>
ТАБЛИЦА
            <br />
РЕКОРДОВ
          </button>
        </div>
        <button id="settings" onClick={e => props.onOptions()}>РЕЖИМЫ ИГРЫ</button>
        <button id="back" style={{ display: props.display.btnContinue }} onClick={e => props.onContinue()}>ПРОДОЛЖИТЬ</button>
      </div>

      <Options {...props} />
      <Table {...props} />
      <Rules {...props} />
    </div>
  );
}
