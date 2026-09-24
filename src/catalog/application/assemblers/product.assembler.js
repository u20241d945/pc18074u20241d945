/**
 * @summary Transforms product resources into Product domain entities.
 * @author Tu Nombre Apellido
 */

import { Product } from '../../domain/model/product.entity.js'

export class ProductAssembler {

    /**
     * @param {ProductResource} resource
     * @returns {Product}
     */
    static toEntityFromResource(resource) {
        return new Product(
            resource.id,
            resource.title,
            resource.description,
            resource.category,
            resource.brand,
            resource.price,
            resource.discountPercentage,
            resource.stock,
            resource.availabilityStatus,
            resource.dimensions,
            resource.warrantyInformation,
            resource.shippingInformation,
            resource.reviews,
            resource.images,
            resource.thumbnail
        )
    }

    /**
     * @param {Array<ProductResource>} resources
     * @returns {Array<Product>}
     */
    static toEntitiesFromResponse(resources) {
        return resources.map(resource =>
            ProductAssembler.toEntityFromResource(resource)
        )
    }
}