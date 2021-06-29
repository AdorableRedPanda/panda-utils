(() => {
    const $root = document.getElementById('root');
    if (!$root) {
        return;
    }

    $root.insertAdjacentHTML('afterbegin', 'hello world!');
})();