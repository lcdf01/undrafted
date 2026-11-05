(function(){
  var target=new Date('2027-06-12T09:30:00+02:00').getTime();
  function tick(){
    var ms=Math.max(0,target-Date.now());
    var d=Math.floor(ms/864e5),h=Math.floor(ms%864e5/36e5),m=Math.floor(ms%36e5/6e4);
    document.getElementById('cd-d').textContent=d;
    document.getElementById('cd-h').textContent=h;
    document.getElementById('cd-m').textContent=m;
  }
  if(document.getElementById('cd-d')){ tick(); setInterval(tick,30000); }
  var nav=document.getElementById('nav'),btn=document.getElementById('menu');
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-carousel]').forEach(function(c){
    var t=c.querySelector('.track');
    function step(){var s=t.querySelector('.slide');return s?s.getBoundingClientRect().width+14:300}
    c.querySelector('[data-prev]').addEventListener('click',function(){t.scrollBy({left:-step()})});
    function next(){ if(t.scrollLeft+t.clientWidth>=t.scrollWidth-4){t.scrollTo({left:0})}else{t.scrollBy({left:step()})} }
    c.querySelector('[data-next]').addEventListener('click',next);
    var paused=false;
    ['mouseenter','touchstart','focusin'].forEach(function(e){c.addEventListener(e,function(){paused=true},{passive:true})});
    ['mouseleave','focusout'].forEach(function(e){c.addEventListener(e,function(){paused=false})});
    c.addEventListener('touchend',function(){setTimeout(function(){paused=false},4000)},{passive:true});
    if(!reduce) setInterval(function(){ if(!paused && !document.hidden) next(); },3500);
  });
  var bgs=document.querySelectorAll('.hero-bg img'),bi=0;
  if(bgs.length>1 && !reduce) setInterval(function(){ bgs[bi].classList.remove('on'); bi=(bi+1)%bgs.length; bgs[bi].classList.add('on'); },5000);
  document.querySelectorAll('#menu-list a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')})});
})();
