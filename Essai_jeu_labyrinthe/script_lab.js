const cells = document.querySelectorAll('.cell');
let startCell = null;
let endCell = null;

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (cell.classList.contains('empty')) {
      return;
    }

    if (cell.classList.contains('start')) {
      startCell = cell;
      endCell = null;
    } else if (cell.classList.contains('end')) {
      startCell = null;
      endCell = cell;
    } else if (startCell && !endCell) {
      if (isValidMove(startCell, cell)) {
        startCell.classList.remove('start');
        startCell = null;
        endCell.classList.remove('end');
        endCell = null;
        cell.classList.add('end');
      }
    }
  });
});

function isValidMove(startCell, endCell) {
  // Check if cells are adjacent
  const startRow = startCell.parentNode;
  const endRow = endCell.parentNode;
  const rowDiff = Math.abs(Array.from(startRow.parentNode.children).indexOf(startRow) - Array.from(endRow.parentNode.children).indexOf(endRow));
  const cellDiff = Math.abs(Array.from(startRow.children).indexOf(startCell) - Array.from(endRow.children).indexOf(endCell));
  if (rowDiff > 1 || cellDiff > 1) {
    return false;
  }

  // Check if cells form a valid pipe
  if (startCell.classList.contains('straight')) {
    if (endCell.classList.contains('straight')) {
      return true;
    } else if (endCell.classList.contains('curve-top') && startCell.classList.contains('horizontal')) {
      return true;
    } else if (endCell.classList.contains('curve-right') && startCell.classList.contains('vertical')) {
      return true;
    }
  } else if (startCell.classList.contains('curve-top')) {
    if (endCell.classList.contains('straight') && startCell.classList.contains('horizontal')) {
      return true;
    } else if (endCell.classList.contains('curve-right') && startCell.classList.contains('curve-top')) {
      return true;
    }
  } else if (startCell.classList.contains('curve-right')) {
    if (endCell.classList.contains('straight') && startCell.classList.contains('vertical')) {
      return true;
    } else if (endCell.classList.contains('curve-top') && start
