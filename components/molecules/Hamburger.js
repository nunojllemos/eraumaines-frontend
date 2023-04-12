import HamburgerBar from '@/atoms/HamburgerBar'

const Hamburger = ({ handleMenuClink, isMenuOpen }) => {
    return (
        <button onClick={handleMenuClink} className='hamburger z-1 border-none w-14 aspect-square transition-opacity 768:hidden relative'>
            <HamburgerBar isMenuOpen={isMenuOpen} />
            <HamburgerBar isMenuOpen={isMenuOpen} />
            <HamburgerBar isMenuOpen={isMenuOpen} />
        </button>
    )
}
export default Hamburger
