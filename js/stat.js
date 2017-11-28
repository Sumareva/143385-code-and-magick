'use strict';
window.renderStatistics = function (ctx, names, times) {
  var i = 0;
  function drawRect(context, rectColor, rectX, rectY, rectWidth, rectHeight) {
    context.fillStyle = rectColor;
    context.fillRect(rectX, rectY, rectWidth, rectHeight);
  }
  drawRect(ctx, 'rgba(0, 0, 0, 0.7)', 110, 20, 420, 270);
  drawRect(ctx, 'rgba(255, 255, 255, 1.0)', 100, 10, 420, 270);

  function renderText(context, textColor, textSize, textFont, textLine, textX, textY) {
    context.fillStyle = textColor;
    context.font = textSize + ' ' + textFont;
    context.fillText(textLine, textX, textY);
  }
  renderText(ctx, 'black', '16px', 'PT Mono', 'Ура вы победили!', 120, 40);
  renderText(ctx, 'black', '16px', 'PT Mono', 'Список результатов:', 110, 60);

  function searchMaxElement(arr) {
    var maxElement = -1;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  }
  var maxElement = searchMaxElement(times);
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomColor() {
    var b = getRandomNumber(0, 255);
    var o = Math.random().toFixed(1);
    return 'rgba(0, 0, ' + b + ', ' + o + ')';
  }
  function drawHistogram(context, histogramX, histogramY, histogramWidth, histogramHeight) {
    context.fillRect(histogramX, histogramY, histogramWidth, histogramHeight);
    context.fillStyle = 'black';
    context.fillText(names[i], histogramX, histogramY + histogramHeight + 20);
    context.fillText(Math.round(times[i]), histogramX, histogramY - 10);
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
      drawHistogram(ctx, histogramX, histogramY, histogramWidth, histogramHeight);
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      drawHistogram(ctx, histogramX, histogramY, histogramWidth, histogramHeight);
    }
  }
};
