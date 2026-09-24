export class Product {

    /**
     * @param {number} id
     * @param {string} title
     * @param {string} description
     * @param {string} category
     * @param {string} brand
     * @param {number} price
     * @param {number} discountPercentage
     * @param {number} stock
     * @param {string} availabilityStatus
     * @param {Object} dimensions
     * @param {string} warrantyInformation
     * @param {string} shippingInformation
     * @param {Array} reviews
     * @param {Array} images
     * @param {string} thumbnail
     */
    constructor(
        id,
        title,
        description,
        category,
        brand,
        price,
        discountPercentage,
        stock,
        availabilityStatus,
        dimensions,
        warrantyInformation,
        shippingInformation,
        reviews,
        images,
        thumbnail
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.category = category
        this.brand = brand
        this.price = price
        this.discountPercentage = discountPercentage
        this.stock = stock
        this.availabilityStatus = availabilityStatus
        this.dimensions = dimensions
        this.warrantyInformation = warrantyInformation
        this.shippingInformation = shippingInformation
        this.reviews = reviews
        this.images = images
        this.thumbnail = thumbnail
    }

    /**
     * @returns {string}
     */
    getImageUrl() {
        return this.thumbnail || this.images?.[0] || ''
    }

    /**
     * @returns {number}
     */
    getDiscountedPrice() {
        return this.price - (this.price * this.discountPercentage / 100)
    }
}