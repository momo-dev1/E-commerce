import { Box } from '@chakra-ui/react'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { products } from '../productsData'
import { SimpleGrid } from '@chakra-ui/react'
import { Children, isValidElement, useMemo } from 'react'

export const ProductGrid = (props) => {
    const columns = useMemo(() => {
        const count = Children.toArray(props.children).filter(isValidElement).length
        return {
            base: Math.min(2, count),
            md: Math.min(3, count),
            lg: Math.min(4, count),
        }
    }, [props.children])

    return (
        <SimpleGrid
            columns={columns}
            columnGap={{ base: '4', md: '6' }}
            rowGap={{ base: '8', md: '10' }}
            {...props}
        />
    )
}

const ProductsPage = () => {
    return (
        <Box
            maxW="7xl"
            mx="auto"
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}
        >
            <ProductGrid>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ProductGrid>
        </Box>
    )
}

export default ProductsPage