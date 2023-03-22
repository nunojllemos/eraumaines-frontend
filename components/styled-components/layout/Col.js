import styled from 'styled-components'

const defaultProps = {
	tablet: 768,
	desktop: 1280,
	largeDesktop: 1536,
}

const { tablet, desktop, largeDesktop } = defaultProps

const Col = styled.div`
	grid-column: span ${p => p.mobileCols} / span ${p => p.mobileCols};
	grid-column-start: ${p => p.offsetMobile + 1 || 'auto'};

	@media only screen and (min-width: ${p => p.tablet || tablet}px) {
		grid-column: span ${p => p.tabletCols || p.mobileCols} / span ${p => p.tabletCols || p.mobileCols};
		grid-column-start: ${p => p.offsetTablet + 1 || p.offsetMobile + 1 || 'auto'};
	}

	@media only screen and (min-width: ${p => p.desktop || desktop}px) {
		grid-column: span ${p => p.desktopCols || p.tabletCols || p.mobileCols} / span ${p => p.desktopCols || p.tabletCols || p.mobileCols};
		grid-column-start: ${p => p.offsetDesktop + 1 || p.offsetTablet + 1 || p.offsetMobile + 1 || 'auto'};
	}

	@media only screen and (min-width: ${p => p.largeDesktop || largeDesktop}px) {
		grid-column: span ${p => p.largeDesktopCols || p.desktopCols || p.tabletCols || p.mobileCols} / span
			${p => p.largeDesktopCols || p.desktopCols || p.tabletCols || p.mobileCols};
		grid-column-start: ${p => p.offsetLargeDesktop + 1 || p.offsetDesktop + 1 || p.offsetTablet + 1 || p.offsetMobile + 1 || 'auto'};
	}
`

export default Col
