console.log("GAME JS LOADED");
const attackBtn=document.getElementById('attackBtn');
const healBtn=document.getElementById('healBtn');
const logBox=document.getElementById('logBox');
let player={hp:100,maxHp:100,dmg:10};
let enemy={hp:60,dmg:6};
function updateUI(){
 document.getElementById('playerHp').innerText=player.hp;
 document.getElementById('enemyHp').innerText=enemy.hp;
}
function addLog(t){
 if(!logBox)return;
 let el=document.createElement("div");
 el.innerText=t;
 logBox.prepend(el);
}
attackBtn.addEventListener('click',()=>{
 if(enemy.hp<=0||player.hp<=0)return;
 enemy.hp-=player.dmg; addLog(`You deal ${player.dmg} DMG!`);
 if(enemy.hp<=0){enemy.hp=0;addLog("Enemy defeated!");updateUI();return;}
 player.hp-=enemy.dmg; addLog(`Enemy deals ${enemy.dmg} DMG!`);
 if(player.hp<=0){player.hp=0;addLog("YOU DIED!");}
 updateUI();
});
healBtn.addEventListener('click',()=>{
 if(player.hp<=0)return;
 let heal=15; player.hp=Math.min(player.hp+heal,player.maxHp);
 addLog(`You heal for ${heal} HP!`);
 player.hp-=enemy.dmg; addLog(`Enemy hits you for ${enemy.dmg} DMG!`);
 if(player.hp<=0){player.hp=0;addLog("YOU DIED!");}
 updateUI();
});
updateUI();