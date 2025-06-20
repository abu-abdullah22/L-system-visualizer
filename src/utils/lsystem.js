export function generateLSystem({ axiom, rules, iterations }) {
  let output = axiom;
  for (let i = 0; i < iterations; i++) {
    output = output
      .split('')
      .map((char) => rules[char] || char)
      .join('');
  }
  return output;
}

export function drawLSystem(ctx, lsystem, { angle, lineLength }) {
  let x = ctx.canvas.width / 2;
  let y = ctx.canvas.height;
  let dir = -90;
  const stack = [];

  ctx.beginPath();
  ctx.moveTo(x, y);

  for (let char of lsystem) {
    switch (char) {
      case 'F':
      case 'G':
        x += lineLength * Math.cos((dir * Math.PI) / 180);
        y += lineLength * Math.sin((dir * Math.PI) / 180);
        ctx.lineTo(x, y);
        break;
      case '+':
        dir += angle;
        break;
      case '-':
        dir -= angle;
        break;
      case '[':
        stack.push([x, y, dir]);
        break;
      case ']':
        [x, y, dir] = stack.pop();
        ctx.moveTo(x, y);
        break;
    }
  }

  ctx.stroke();
}