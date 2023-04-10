const dragElements = document.querySelectorAll('.drag-element');
console.log(dragElements);

// Stocke la position initiale pour chaque élément
const initialPositions = {};

dragElements.forEach((element, index) => {
  initialPositions[index] = {
    x: 0,
    y: 0
  };


  element.addEventListener('touchstart', (e) => {
    // setTranslate(initialPositions[index.x], initialPositions[index].x, element);
    dragStart(e, index);
  });
});

const dropZone = document.getElementById('drop-zone');

let isDragging = false;

function dragStart(e, index) {
  isDragging = true;

  // Stocke la position initiale de l'élément
  console.log(index);
  initialPositions[index] = {
    x: e.pageX,
    y: e.pageY
  };

  window.addEventListener('touchmove', (e) => {
    drag(e, index);
  });

  window.addEventListener('touchend', (e) => {
    dragEnd(e, index);
  });
}

function drag(e, index) {
  if (isDragging) {
    e.preventDefault();

    // Calcule le déplacement par rapport à la position initiale
    const dx = e.pageX - initialPositions[index].x;
    const dy = e.pageY - initialPositions[index].y;

    // Déplace l'élément en fonction du déplacement calculé
    setTranslate(dx, dy, dragElements[index]);
  }
}

function dragEnd(e, index) {
  isDragging = false;

  if (isDropped(dragElements[index])) {
    alert('Bravo, vous avez réussi !');
  } else {
    setTranslate(0, 0, dragElements[index]);
  }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = translate3d(${xPos}px, ${yPos}px, 0);
    }
    
    function isDropped(el) {
    const dropZoneRect = dropZone.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    
    return (
    elRect.left >= dropZoneRect.left &&
    elRect.right <= dropZoneRect.right &&
    elRect.top >= dropZoneRect.top &&
    elRect.bottom <= dropZoneRect.bottom
    );
    }

    function resetPosition(element) {
        const dropZoneRect = dropZone.getBoundingClientRect();
        const dragElementRect = element.getBoundingClientRect();
      
        // Si l'élément ne se trouve pas dans la zone cible, on réinitialise sa position
        if (
          dragElementRect.left < dropZoneRect.left ||
          dragElementRect.right > dropZoneRect.right ||
          dragElementRect.top < dropZoneRect.top ||
          dragElementRect.bottom > dropZoneRect.bottom
        ) {
          setTranslate(0, 0, element);
        }
      }






