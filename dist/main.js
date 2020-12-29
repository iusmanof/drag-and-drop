/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/drag.js
function main() {
  const fill = document.querySelector('.content__fill');
  const empties = document.querySelectorAll('.content__empty');
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);

  for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
  }

  function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
  }

  function dragEnd() {
    this.className = 'content__fill';
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
  }

  function dragLeave() {
    this.className = 'content__empty';
  }

  function dragDrop() {
    this.className = 'content__empty';
    this.append(fill);
  }
}


;// CONCATENATED MODULE: ./src/index.js



main();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnLWFuZC1kcm9wLy4vc3JjL2RyYWcuanMiLCJ3ZWJwYWNrOi8vZHJhZy1hbmQtZHJvcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtYWluIiwiZmlsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVtcHRpZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYWdTdGFydCIsImRyYWdFbmQiLCJlbXB0eSIsImRyYWdPdmVyIiwiZHJhZ0VudGVyIiwiZHJhZ0xlYXZlIiwiZHJhZ0Ryb3AiLCJjbGFzc05hbWUiLCJzZXRUaW1lb3V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXBwZW5kIiwiRHJhZyJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLFNBQVNBLElBQVQsR0FBZ0I7QUFFWixRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBYjtBQUNBLFFBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBaEI7QUFFQUosTUFBSSxDQUFDSyxnQkFBTCxDQUFzQixXQUF0QixFQUFtQ0MsU0FBbkM7QUFDQU4sTUFBSSxDQUFDSyxnQkFBTCxDQUFzQixTQUF0QixFQUFpQ0UsT0FBakM7O0FBRUEsT0FBSyxNQUFNQyxLQUFYLElBQW9CTCxPQUFwQixFQUE2QjtBQUN6QkssU0FBSyxDQUFDSCxnQkFBTixDQUF1QixVQUF2QixFQUFtQ0ksUUFBbkM7QUFDQUQsU0FBSyxDQUFDSCxnQkFBTixDQUF1QixXQUF2QixFQUFvQ0ssU0FBcEM7QUFDQUYsU0FBSyxDQUFDSCxnQkFBTixDQUF1QixXQUF2QixFQUFvQ00sU0FBcEM7QUFDQUgsU0FBSyxDQUFDSCxnQkFBTixDQUF1QixNQUF2QixFQUErQk8sUUFBL0I7QUFDSDs7QUFFRCxXQUFTTixTQUFULEdBQXFCO0FBQ2pCLFNBQUtPLFNBQUwsSUFBa0IsT0FBbEI7QUFDQUMsY0FBVSxDQUFDLE1BQU8sS0FBS0QsU0FBTCxHQUFpQixXQUF6QixFQUF1QyxDQUF2QyxDQUFWO0FBQ0g7O0FBRUQsV0FBU04sT0FBVCxHQUFtQjtBQUNmLFNBQUtNLFNBQUwsR0FBaUIsZUFBakI7QUFDSDs7QUFFRCxXQUFTSixRQUFULENBQWtCTSxDQUFsQixFQUFxQjtBQUNqQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0g7O0FBRUQsV0FBU04sU0FBVCxDQUFtQkssQ0FBbkIsRUFBc0I7QUFDbEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFNBQUtILFNBQUwsSUFBa0IsVUFBbEI7QUFDSDs7QUFFRCxXQUFTRixTQUFULEdBQXFCO0FBQ2pCLFNBQUtFLFNBQUwsR0FBaUIsZ0JBQWpCO0FBQ0g7O0FBRUQsV0FBU0QsUUFBVCxHQUFvQjtBQUNoQixTQUFLQyxTQUFMLEdBQWlCLGdCQUFqQjtBQUNBLFNBQUtJLE1BQUwsQ0FBWWpCLElBQVo7QUFDSDtBQUVKOzs7O0FDM0NEO0FBQ0E7QUFDQTtBQUNBa0IsSUFBQSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIG1haW4oKSB7XG5cbiAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX2ZpbGwnKTtcbiAgICBjb25zdCBlbXB0aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfX2VtcHR5Jyk7XG5cbiAgICBmaWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gICAgZmlsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ0VuZCk7XG5cbiAgICBmb3IgKGNvbnN0IGVtcHR5IG9mIGVtcHRpZXMpIHtcbiAgICAgICAgZW1wdHkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICAgIGVtcHR5LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgICAgIGVtcHR5LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgICAgIGVtcHR5LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnRHJvcCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ1N0YXJ0KCkge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSArPSAnIGhvbGQnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmNsYXNzTmFtZSA9ICdpbnZpc2libGUnKSwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VuZCgpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSAnY29udGVudF9fZmlsbCdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRW50ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lICs9ICcgaG92ZXJlZCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0xlYXZlKCkge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9ICdjb250ZW50X19lbXB0eSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0Ryb3AoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gJ2NvbnRlbnRfX2VtcHR5JztcbiAgICAgICAgdGhpcy5hcHBlbmQoZmlsbCk7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IHtcbiAgICBtYWluXG59OyIsImltcG9ydCAnbm9ybWFsaXplLmNzcydcbmltcG9ydCAnLi9zdHlsZS5zYXNzJ1xuaW1wb3J0ICogYXMgRHJhZyBmcm9tICcuL2RyYWcnXG5EcmFnLm1haW4oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=