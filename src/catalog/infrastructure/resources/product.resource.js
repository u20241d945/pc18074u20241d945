export class ProductResource {

    /**
     * @param {Object} data
     */
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.description = data.description
        this.category = data.category
        this.brand = data.brand
        this.price = data.price
        this.discountPercentage = data.discountPercentage
        this.stock = data.stock
        this.availabilityStatus = data.availabilityStatus
        this.dimensions = data.dimensions
        this.warrantyInformation = data.warrantyInformation
        this.shippingInformation = data.shippingInformation
        this.reviews = data.reviews ?? []
        this.images = data.images ?? []
        this.thumbnail = data.thumbnail
    }
}