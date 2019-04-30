const onRouteChange = () => {
    const mobileNavigation = document.getElementById('mobileNavigation');
    mobileNavigation.classList.remove('show-mobile-menu');

    const navigation = document.getElementById('navigation');
    if (!navigation.classList.contains('shadow-1')) {
        navigation.classList.add('shadow-1');
    }

    window.scrollTo(0, 0);
}

export default onRouteChange;