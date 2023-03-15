import styled from 'styled-components'

const GridComponent = styled.div`
      grid-template-columns: repeat(${props => props.mobileCols}, 1fr);

      @media only screen and (min-width: ${props => props.tablet}px) {
            grid-template-columns: repeat(${props => props.tabletCols}, 1fr);
      }
      @media only screen and (min-width: ${props => props.desktop}px) {
            grid-template-columns: repeat(${props => props.desktopCols}, 1fr);
      }
      @media only screen and (min-width: ${props => props.largeDesktop}px) {
            grid-template-columns: repeat(${props => props.largeDesktopCols}, 1fr);
      }
`

const Grid = ({ children, mobileCols = 2, tabletCols = 12, desktopCols = 12, largeDesktopCols = 12, tablet = 768, desktop = 1280, largeDesktop = 1440 }) => {
      // return <div className='grid grid-cols-2 640:grid-cols-12 gap-x-4 640:gap-x-8'>{children}</div>
      return (
            <GridComponent
                  className='grid transition-colors'
                  tablet={tablet}
                  desktop={desktop}
                  largeDesktop={largeDesktop}
                  mobileCols={mobileCols}
                  tabletCols={tabletCols}
                  desktopCols={desktopCols}
                  largeDesktopCols={largeDesktopCols}>
                  {children}
            </GridComponent>
      )
}

export default Grid
