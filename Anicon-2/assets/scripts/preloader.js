window.onload = () => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('c').style.display = 'none';
    document.getElementById('p').style.display = 'none';
    document.getElementById('pp').style.display = 'none';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
        document.getElementById('footer').style.display = 'revert';
        document.getElementById('c').style.display = 'revert';
        document.getElementById('p').style.display = 'revert';
        document.getElementById('pp').style.display = 'revert';
    }, 2000);
};
