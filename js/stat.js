'use strict';
window.renderStatistics = function (ctx, names, times) {
  var i = 0;
  var maxElement = -1;
  function rectDrowing(rectColor, rectX, rectY, rectWidth, rectHeight) {
    ctx.fillStyle = rectColor;
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
  }
  rectDrowing('rgba(0, 0, 0, 0.7)', 110, 20, 420, 270);
  rectDrowing('rgba(255, 255, 255, 1.0)', 100, 10, 420, 270);

  function textRender(context, textColor, textSize, textFont, textLine, textX, textY) {
    context.fillStyle = textColor;
    context.font = textSize + ' ' + textFont;
    context.fillText(textLine, textX, textY);
  }
  textRender(ctx, 'black', '16px', 'PT Mono', 'Ура вы победили!', 120, 40);
  textRender(ctx, 'black', '16px', 'PT Mono', 'Список результатов:', 110, 60);

  function searchMaxElement(array) {
    for (i = 0; i < array.length; i++) {
      var arrayElement = array[i];
      if (arrayElement > maxElement) {
        maxElement = arrayElement;
      }
    }
    return maxElement;
  }
  searchMaxElement(times);
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomColor() {
    var r = getRandomNumber(0, 255);
    var g = getRandomNumber(0, 255);
    var b = getRandomNumber(0, 255);
    var o = Math.random().toFixed(1);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + o + ')';
  }
  function histogramDrowing(histogramX, histogramY, histogramWidth, histogramHeight) {
    ctx.fillRect(histogramX, histogramY, histogramWidth, histogramHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], histogramX, histogramY + histogramHeight + 20);
    ctx.fillText(Math.round(times[i]), histogramX, histogramY - 10);
  }

  for (i = 0; i < times.length; i++) {
    var histogramHeightMax = 150;
    var step = histogramHeightMax / (maxElement - 0);
    var barWidth = 40;
    var indentX = 90;
    var initialX = 150;
    var initialY = 240;
    var histogramX = initialX + indentX * i;
    var histogramY = initialY - times[i] * step;
    var histogramWidth = barWidth;
    var histogramHeight = times[i] * step;
    if (names[i] !== 'Вы') {
      ctx.fillStyle = getRandomColor();
      histogramDrowing(histogramX, histogramY, histogramWidth, histogramHeight);
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      histogramDrowing(histogramX, histogramY, histogramWidth, histogramHeight);
    }
  }
};
