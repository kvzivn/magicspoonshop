import React from 'react'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import PaymentIcons from '~/components/PaymentIcons'
import styled from '@emotion/styled'

const Payment = styled.div`
  max-width: 200px;
  margin: 0 auto;
`

const IndexPage = () => (
  <>
    <SEO title="magicspoon.shop" keywords={[`minispoon`, `ketspoon`, `spoon`]} />
    <ProductGrid />
    <Payment>
      <PaymentIcons />
    </Payment>
  </>
)

export default IndexPage
