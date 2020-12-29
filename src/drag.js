
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
        setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd() {
        this.className = 'content__fill'
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


export {
    main
};