import {BOT_NAMES} from './Const';

function random(max) 
{
  return Math.floor(Math.random()*max);
}

function genBotName()
{
  let randNbr = random(BOT_NAMES.length-1);

  return BOT_NAMES[randNbr];
}

function polarToCartesian(centerX, 
                          centerY, 
                          radius, 
                          angleInDegrees) 
{
  let angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {x: centerX + (radius * Math.cos(angleInRadians)),
          y: centerY + (radius * Math.sin(angleInRadians))};
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

  let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  let d = ["M", 
           start.x, 
           start.y, 
           "A", 
           radius, 
           radius, 
           0, 
           largeArcFlag,
           0, 
           end.x, 
           end.y].join(" ");

    return d;       
}

function mapNumber(number, 
                   in_min, 
                   in_max, 
                   out_min, 
                   out_max) 
{
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export {random, 
        genBotName, 
        polarToCartesian, 
        describeArc, 
        mapNumber};