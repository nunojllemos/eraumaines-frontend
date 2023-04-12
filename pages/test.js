import Grid from '@/components/styled-components/layout/Grid'
import Container from '@/components/styled-components/layout/Container'
import Col from '@/components/styled-components/layout/Col'

const test = () => {
    return (
        <div className='text-50'>
            <Container>
                <Grid>
                    <Col mobileCols={2} tabletCols={6} offsetTablet={3} desktopCols={12} offsetDesktop={0}>
                        <div className='bg-[#e5e5e5]'>1</div>
                    </Col>
                </Grid>
            </Container>
        </div>
    )
}
export default test
