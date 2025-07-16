(function(){
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  const player = {
    x: canvas.width/2,
    y: canvas.height/2,
    targetX: null,
    targetY: null,
    speed: 200 // pixels per second
  };

  let lastTime = null;

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    player.targetX = e.clientX - rect.left;
    player.targetY = e.clientY - rect.top;
  });

  function update(dt){
    if(player.targetX !== null){
      const dx = player.targetX - player.x;
      const dy = player.targetY - player.y;
      const dist = Math.hypot(dx, dy);
      if(dist > 1){
        const move = Math.min(dist, player.speed * dt);
        player.x += dx / dist * move;
        player.y += dy / dist * move;
      } else {
        player.x = player.targetX;
        player.y = player.targetY;
        player.targetX = player.targetY = null;
      }
    }
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(player.x, player.y, 10, 0, Math.PI*2);
    ctx.fill();
  }

  function loop(timestamp){
    if(!lastTime) lastTime = timestamp;
    const dt = (timestamp - lastTime)/1000;
    lastTime = timestamp;

    update(dt);
    draw();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();
