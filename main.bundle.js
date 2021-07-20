(()=>{"use strict";const e={element:document.querySelector("#game-board"),height:400,width:900},t={height:400,width:200,lives:3,elements:{container:document.getElementById("castle"),livesText:document.getElementById("castle-lives")},game:void 0,setup(e){this.game=e,this.draw()},damage(e){this.lives-=e,this.draw(),0===this.lives&&this.game.gameOver()},draw(){this.elements.livesText.textContent=Math.max(0,this.lives)}},s=new class{constructor(){this.gameBoard=e,this.castle=t,this.fieldWidth=e.width-t.width,this.enemies=[],this.gameState=0,this.update=this.update.bind(this),this.draw=this.draw.bind(this),this.spawnEnemy=this.spawnEnemy.bind(this),this.spawnTimer=new class{constructor(e,t){this.duration=e,this.onFinish=t,this.elapsed=0}tick(e){this.elapsed+=e,this.elapsed>this.duration&&(this.onFinish(),this.reset())}reset(){this.elapsed=0}}(2e3,this.spawnEnemy)}start(){this.castle.setup(this),this.gameState=1}update(e){1===this.gameState&&(this.spawnTimer.tick(e),this.enemies.forEach((t=>t.update(this,e))))}draw(){this.enemies.forEach((e=>e.draw()))}spawnEnemy(){const e=new class{constructor(e,t,s){this.element=document.createElement("div"),this.pos={x:e,y:t},this.width=50,this.height=50,this.speed=60,this.selected=!1,this.question="",this.answer="",this.game=s,this.element.classList.add("enemy"),this.element.style.width=`${this.width}px`,this.element.style.height=`${this.height}px`,this.element.addEventListener("click",(()=>{this.unSelect(),this.select()}))}select(){this.selected=!0,this.selected&&this.element.classList.add("selected")}unSelect(){const e=this.game.enemies.find((e=>e.selected));void 0!==e&&(e.selected=!1,e.element.classList.remove("selected"))}update(e,t){if(this.hasHitCastle(e))return this.delete(e),void e.castle.damage(1);this.pos.x+=this.speed*(t/1e3)}draw(){this.element.style.transform=`translate(${this.pos.x}px, ${this.pos.y}px)`}delete(e){this.element.remove(),e.deleteEnemy(this)}hasHitCastle(e){return this.pos.x>=e.fieldWidth-this.width}}(0,150,this);this.gameBoard.element.appendChild(e.element),this.enemies.push(e)}deleteEnemy(e){this.enemies=this.enemies.filter((t=>t!==e))}gameOver(){this.gameState=2}};new class{constructor(e,t){this.running=!1,this.rafID=void 0,this.update=e,this.draw=t,this.accumulatedTime=0,this.currentTime=0,this.timeStep=1e3/60,this.cycle=this.cycle.bind(this)}cycle(e){this.rafID=requestAnimationFrame(this.cycle),this.accumulatedTime+=e-this.currentTime,this.currentTime=e;let t=!1;for(this.accumulatedTime>60&&(this.accumulatedTime=this.timeStep);this.accumulatedTime>=this.timeStep;)this.update(this.timeStep),t=!0,this.accumulatedTime-=this.timeStep;t&&this.draw()}start(){this.running=!0,this.rafID=requestAnimationFrame(this.cycle)}stop(){this.running=!1,cancelAnimationFrame(this.rafID)}}(s.update,s.draw).start(),s.start()})();
//# sourceMappingURL=main.bundle.js.map