export type MoveHandler = (event: MouseEvent, dx: number, dy: number, x: number, y: number) => void;
export type UpHandler = (event: MouseEvent, x: number, y: number, moved: boolean) => void;

/*tslint:disable-next-line*/
export function drag(event: MouseEvent, {move: move, up: up}: { move: MoveHandler, up?: UpHandler }) {

  const startX = event.pageX;
  const startY = event.pageY;
  let x = startX;
  let y = startY;
  let moved = false;

  function mouseMoveHandler(evt: MouseEvent) {
    const dx = evt.pageX - x;
    const dy = evt.pageY - y;
    x = evt.pageX;
    y = evt.pageY;
    if (dx || dy) {
      moved = true;
    }

    move(evt, dx, dy, x, y);

    event.preventDefault(); // to avoid text selection
  }

  function mouseUpHandler(evt: MouseEvent) {
    x = evt.pageX;
    y = evt.pageY;

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    if (up) {
      up(event, x, y, moved);
    }
  }

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
}
