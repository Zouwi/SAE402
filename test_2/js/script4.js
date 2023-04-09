
const dragElement = document.querySelector('.drag-element');
dragElement.addEventListener('touchstart', dragStart);
dragElement.addEventListener('touchmove', drag);
dragElement.addEventListener('touchend', dragEnd);

const dropZone = document.getElementById('drop-zone');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

function dragStart(e) {
  initialX = e.touches[0].clientX - xOffset;
  initialY = e.touches[0].clientY - yOffset;

  if (e.target === dragElement) {
    isDragging = true;
  }
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();

    currentX = e.touches[0].clientX - initialX;
    currentY = e.touches[0].clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragElement);
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;

  if (isDropped(e)) {
    alert('Bravo, vous avez réussi !');
  } else {
    xOffset = 0;
    yOffset = 0;
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        });
        
        dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        if (isDropped(e)) {
        dropZone.appendChild(dragElement);
        }
        });
        
        function isDropped(e) {
        const dropRect = dropZone.getBoundingClientRect();
        const dragRect = dragElement.getBoundingClientRect();
        return (
        dragRect.top >= dropRect.top &&
        dragRect.bottom <= dropRect.bottom &&
        dragRect.left >= dropRect.left &&
        dragRect.right <= dropRect.right
        );
        }
        
        function setTranslate(xPos, yPos, el) {
        el.style.transform = translate3d('${xPos}px, ${yPos}px, 0');
        }
       