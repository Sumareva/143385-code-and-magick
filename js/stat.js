'use strict';
window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 110, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indentX = 90;
  var indentY = 10;
  var initialX = 150;
  var initialY = 270;
  var histogramPainting = function () {
    ctx.fillRect(initialX + indentX * i, initialY - times[i] * step - indentY * 3, barWidth, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + indentX * i, initialY - indentY);
    ctx.fillText(Math.round(times[i]), initialX + indentX * i, initialY - times[i] * step - indentY * 4);
  };

  for (i = 0; i < times.length; i++) {
    if (names[i] !== 'Вы') {
      ctx.fillStyle = 'rgba(0, 0, 255, 0.7)';
      histogramPainting();
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      histogramPainting();
    }
  }
};
