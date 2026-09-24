import axios from 'axios'
import { ProductResource } from '../resources/product.resource.js'
import { ProductAssembler } from '../../application/assemblers/product.assembler.js'

const productsApiUrl = import.meta.env.VITE_PRODUCTS_API_URL

export class ProductService {

    /**
     * @returns {Promise<Array>}
     */
    async getProducts() {
        const response = await axios.get(productsApiUrl)

        const resources = response.data.products.map(
            product => new ProductResource(product)
        )

        return ProductAssembler.toEntitiesFromResponse(resources)
    }
}