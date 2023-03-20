import styled from 'styled-components'

const defaultProps = {
	tablet: 768,
	desktop: 1280,
	largeDesktop: 1536,
	mobileCols: 2,
	tabletCols: 12,
	desktopCols: 12,
	largeDesktopCols: 12,
	columnGap: 2,
	tabletColumnGap: 2,
	desktopColumnGap: 2,
	largeDesktopColumnGap: 2,
}

const {
	tablet,
	desktop,
	largeDesktop,
	mobileCols,
	tabletCols,
	desktopCols,
	largeDesktopCols,
	columnGap,
	tabletColumnGap,
	desktopColumnGap,
	largeDesktopColumnGap,
} = defaultProps

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(${p => p.mobileCols || mobileCols}, 1fr);
	column-gap: ${p => p.columnGap || columnGap}rem;

	@media only screen and (min-width: ${p => p.tablet || tablet}px) {
		grid-template-columns: repeat(${p => p.tabletCols || p.mobileCols || tabletCols}, 1fr);
		column-gap: ${p => p.tabletColumnGap || tabletColumnGap}rem;
	}

	@media only screen and (min-width: ${p => p.desktop || desktop}px) {
		grid-template-columns: repeat(${p => p.desktopCols || p.tabletCols || p.mobileCols || desktopCols}, 1fr);
		column-gap: ${p => p.desktopColumnGap || desktopColumnGap}rem;
	}

	@media only screen and (min-width: ${p => p.largeDesktop || largeDesktop}px) {
		grid-template-columns: repeat(${p => p.largeDesktopCols || p.desktopCols || p.tabletCols || p.mobileCols || largeDesktopCols}, 1fr);
		column-gap: ${p => p.largeDesktopColumnGap || largeDesktopColumnGap}rem;
	}
`

export default Grid
