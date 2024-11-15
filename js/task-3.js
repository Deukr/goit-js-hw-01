function getElementWidth(content, padding, border) {
  content = Number.parseFloat(content);
  padding = Number.parseFloat(padding);
  border = Number.parseFloat(border);

  // Обчислюємо повну ширину елемента і приводимо результат до цілого числа
  let totalElementWidth = content + 2 * padding + 2 * border;
  totalElementWidth = Number.parseInt(totalElementWidth);
  return totalElementWidth;
}
//Results
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
