const HamburgerBar = ({ isMenuOpen }) => {
    return <span className={isMenuOpen ? 'is-open' : ''}></span>
}
export default HamburgerBar
