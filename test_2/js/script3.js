const dragElement = document.querySelector('.drag-element');
dragElement.addEventListener('mousedown', dragStart);

console.log(dragElement );
const dropZone = document.getElementById('drop-zone');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

// Événement mousemove sur la fenêtre
window.addEventListener('mousemove', drag);

// Événement mouseup sur l'élément draggable
window.addEventListener('mouseup', dragEnd);

// Événement mouseleave sur l'élément draggable
window.addEventListener('mouseleave', dragEnd);

function dragStart(e) {
  initialX = e.pageX - xOffset;
  initialY = e.pageY - yOffset;

  if (e.target === dragElement) {
    isDragging = true;
  }
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();

    currentX = e.pageX - initialX;
    currentY = e.pageY - initialY;

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
    setTranslate(0, 0, dragElement);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

function isDropped(e) {
  const dropZoneRect = dropZone.getBoundingClientRect();
  const dragElementRect = dragElement.getBoundingClientRect();

  return (
    dragElementRect.left >= dropZoneRect.left &&
    dragElementRect.right <= dropZoneRect.right &&
    dragElementRect.top >= dropZoneRect.top &&
    dragElementRect.bottom <= dropZoneRect.bottom
  );
}
