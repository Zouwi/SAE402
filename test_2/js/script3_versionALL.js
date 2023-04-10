const dragElements = document.querySelectorAll('.drag-element');
console.log(dragElements);

// boucle à travers la liste des éléments et ajoute l'événement pour chaque élément individuellement
dragElements.forEach(function(dragElement) {
    dragElement.addEventListener('mousedown', dragStart);

    // initialise la position de chaque élément
    dragElement.style.transform = `translate3d(0px, 0px, 0)`;
});

const dropZone = document.getElementById('drop-zone');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;
let activeElement = null;



function dragStart(e) {
  initialX = e.pageX - xOffset;
  initialY = e.pageY - yOffset;

  if (e.target.classList.contains('drag-element')) {
    isDragging = true;
    activeElement = e.target;
  }
}

function drag(e) {
  if (isDragging && activeElement !== null) {
    e.preventDefault();

    currentX = e.pageX - initialX;
    currentY = e.pageY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, activeElement);
  }
}

function dragEnd(e) {
  if (activeElement !== null) {
    initialX = currentX;
    initialY = currentY;

    isDragging = false;

    if (isDropped(e, activeElement)) {
      alert('Bravo, vous avez réussi !');
      e.target.classList.remove("drag-element");
      xOffset = 0;
      yOffset = 0;
    } else {
      xOffset = 0;
      yOffset = 0;
      setTranslate(0, 0, activeElement);
    }

    activeElement = null;
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

function isDropped(e, dragElement) {
  const dropZoneRect = dropZone.getBoundingClientRect();
  const dragElementRect = dragElement.getBoundingClientRect();
  

  return (
    dragElementRect.left >= dropZoneRect.left &&
    dragElementRect.right <= dropZoneRect.right &&
    dragElementRect.top >= dropZoneRect.top &&
    dragElementRect.bottom <= dropZoneRect.bottom
  );
}

// Événement mousemove sur la fenêtre
window.addEventListener('mousemove', drag);

// Événement mouseup sur l'élément draggable
window.addEventListener('mouseup', dragEnd);

// Événement mouseleave sur l'élément draggable
window.addEventListener('mouseleave', dragEnd);
