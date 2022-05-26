import {BOT_NAMES} from './Const';
import {US_STATE_ABBR_LIST} from './Const';

function random(max) 
{
  return Math.floor(Math.random()*max);
}

function genBotName()
{
  let randNbr = random(BOT_NAMES.length);

  return BOT_NAMES[randNbr];
}

function USStateAbbrToName(abbr)
{
  let abbrNameMap = new Map(US_STATE_ABBR_LIST);

  return abbrNameMap.get(abbr);
}

function getDegreesChar()
{
  return '°';
}

function getCoordFormat(lat,
                        lng)
{
  let latDirection = lat >= 0 ? 'N' : 'S';
  let lngDirection = lng >= 0 ? 'E' : 'W';
  let newLat = Math.abs(lat).toFixed(2);
  let newLng = Math.abs(lng).toFixed(2);

  return newLat + getDegreesChar() + ' ' + latDirection + ', ' + 
         newLng + getDegreesChar() + ' ' + lngDirection;
}

function getRowBackground(rowNbr)
{
  let colourCode = '#000000';

  if (rowNbr % 2 === 0)
  {
    colourCode =  "#e7e5ddef";
  }
  else 
  {
    colourCode = "#fcfcfcef";
  }

  return colourCode;
}

function polarToCartesian(xPoint, 
                          yPoint, 
                          radius, 
                          degAngle) 
{
  let radianAngle = (Math.PI / 180.0) * (degAngle-90);

  return {x: xPoint + (radius * Math.cos(radianAngle)),
          y: yPoint + (radius * Math.sin(radianAngle))};
}

function describeArc(x, 
                     y, 
                     radius, 
                     startAngle, 
                     endAngle)
{

  let start = polarToCartesian(x, 
                               y, 
                               radius, 
                               endAngle);
  let end = polarToCartesian(x, 
                             y, 
                             radius, 
                             startAngle);

  let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  let describeArc = ['M', 
                     start.x, 
                     start.y, 
                     'A', 
                     radius, 
                     radius, 
                     0, 
                     largeArcFlag,
                     0, 
                     end.x, 
                     end.y].join(' ');

    return describeArc;       
}

function mapNumber(nbr, 
                   in_min, 
                   in_max, 
                   out_min, 
                   out_max) 
{
  return (nbr - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function playSound(name) {
  const path = require(`../sounds/${name}.mp3`).default;
  const audio = new Audio(path);
  audio.play().then(() => console.log('audio playing')).catch(err => console.log(err));
}

export {random, 
        genBotName, 
        USStateAbbrToName,
        getDegreesChar,
        getCoordFormat,
        getRowBackground,
        polarToCartesian, 
        describeArc, 
        mapNumber,
        playSound};