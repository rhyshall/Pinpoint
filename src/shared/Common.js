import {BOT_NAMES} from './Const';

function random(max) 
{
  return Math.floor(Math.random()*max);
}

function genBotName()
{
  let randNbr = random(BOT_NAMES.length);

  return BOT_NAMES[randNbr];
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

export {random, 
        genBotName, 
        polarToCartesian, 
        describeArc, 
        mapNumber};