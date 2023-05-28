const btnUp = document.querySelector('.btnUp');
const btnDown = document.querySelector('.btnDown');
const panel = document.querySelector('.panel');
const panel_li = document.querySelectorAll('li');
const len = panel_li.length-1;
let enableClick = true;

btnUp.addEventListener('click', e=> {
  e.preventDefault();
  
  if(enableClick){
    enableClick = false;
    moveUp();
  }
  
})
btnDown.addEventListener('click', e=> {
  e.preventDefault();
  
  if(enableClick){
    enableClick = false;
    moveDown();
  }
  
})

function moveUp(){
  let current_item = panel.querySelector('.on'); // 패널 안에서 .on클래스를 찾는다
  // 데이터 인덱스값을 담는다. ( .on클래스 활성화 패널의 인덱스명)
  let current_index = parseInt(current_item.getAttribute('data-index')); 
  let next_index = null;

  (current_index !== len) ? next_index = current_index+1 : next_index=0;
  current_item.classList.remove('on');
  current_item.classList.add('up');

  panel_li[next_index].classList.add('down');
  setTimeout(()=>{
    panel_li[next_index].classList.remove('down');
    panel_li[next_index].classList.add('on');
    panel.querySelector('.up').classList.remove('up');
    enableClick = true;
  },500);
}
// 여기서 len의 값은 현재 3이고, current_index가 현재 2라고 가정하면
// next_index의 값은 +1이 되어 3이 된다.
// 만약 current_index 값이 3이라면 next_index는 0이 된다.
// 즉 len 의 값인 3과, current_index값을 맞추는 과정이다. current 값이 3 이후에
// 다시 0이 되도록 만드는 과정

// 1. current_item에 .up 클래스를 추가하여 현재 활성화된 패널을 위로 이동시킵니다.
// 2. panel_li[next_index]에 .down 클래스를 추가하여 다음에 활성화될 패널을 아래로 이동시킵니다.
// 3. 500ms(0.5초) 후에 .down 클래스를 제거하고 .on 클래스를 추가하여 다음 패널을 활성화시킵니다.
// 4. 마지막으로 .up 클래스를 제거하여 현재 활성화된 패널의 스타일을 초기화합니다.

function moveDown(){
  let current_item = panel.querySelector('.on'); 
  let current_index = parseInt(current_item.getAttribute('data-index')); 
  let prev_index = null;

  (current_index !== 0) ? prev_index = current_index-1 : prev_index=len;
  current_item.classList.remove('on');
  current_item.classList.add('down');

  panel_li[prev_index].classList.add('up');
  setTimeout(()=>{
    panel_li[prev_index].classList.remove('up');
    panel_li[prev_index].classList.add('on');
    panel.querySelector('.down').classList.remove('down');
    enableClick = true;
  },500);
}