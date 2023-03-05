import {
    AspectRatio,
    Box,
    HStack,
    Icon,
    Image,
    Skeleton,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'

import { FiEye, FiHeart } from 'react-icons/fi'
import { Rating } from './Rating'
import { PriceTag } from './PriceTag'
import { ProductCardButton } from './ProductCardButton'

export const ProductCard = (props) => {
    const { product } = props
    return (
        <Stack spacing="4" bg={mode("white", "gray.700")} shadow="2xl" p={3} borderRadius="md">
            <Box position="relative" className="group" overflow="hidden"  >
                <Image
                    w="100%"
                    h="250px"
                    objectFit='contain'
                    src={product.imageUrl}
                    alt={product.name}
                    draggable="false"
                    fallback={<Skeleton />}
                />

                <Box
                    opacity={0}
                    transition="opacity 0.1s"
                    position="absolute"
                    className="container"
                    bottom="3"
                    left="3"
                    _groupHover={{
                        opacity: 1,
                    }}
                >
                    <HStack spacing="3">
                        <ProductCardButton
                            aria-label="Add to favourite"
                            icon={<Icon as={FiHeart} boxSize="5" />}
                        />
                        <ProductCardButton aria-label="View details" icon={<Icon as={FiEye} boxSize="5" />} />
                    </HStack>
                </Box>
            </Box>
            <Stack spacing="1">
                <HStack justifyContent="space-between" alignItems="flex-start">
                    <Text
                        color={mode('black', 'white')}
                        fontSize="sm"
                        fontWeight="semibold"
                        letterSpacing="wider"
                        textTransform="uppercase"
                    >
                        {product.name}
                    </Text>
                    <PriceTag
                        currency={product.currency}
                        price={product.price}
                        priceProps={{
                            fontSize: 'sm',
                            fontWeight: 'semibold',
                            color: mode('black', 'white'),
                        }}
                    />
                </HStack>
                <HStack>
                    <Rating defaultValue={product.rating} size="sm" />
                    <Text fontWeight="medium" fontSize="sm" color={mode('gray.500', 'gray.200')}>
                        ({product.numReviews})
                    </Text>
                </HStack>
            </Stack>
        </Stack>
    )
}
