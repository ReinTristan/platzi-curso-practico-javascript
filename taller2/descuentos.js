// const precioOriginal = 120
// const descuento = 18

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];



function buttonPriceDiscount() {
    const inputPrice = document.querySelector('#inputPrice');
    const priceValue = Number(inputPrice.value)
    const inputDiscount = document.querySelector('#inputDiscount');
    const discountValue = Number(inputDiscount.value)

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue)
    const resultParagraph = document.querySelector('#resultPrice')
    resultParagraph.innerText = `Precio con descuento  $${precioConDescuento}`
}
function buttonCouponDiscount(){
    const inputPrice = document.querySelector('#inputPrice1');
    const priceValue = Number(inputPrice.value)
    const inputCoupon = document.querySelector('#inputCoupon')
    const couponValue = inputCoupon.value


    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid)
    const resultParagraph = document.querySelector('#resultPrice1')
    if (!userCoupon) {
        resultParagraph.innerText = `El cupon ${couponValue} no es valido`
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)

        
        resultParagraph.innerText = `Precio con descuento $${precioConDescuento}`
    }

}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })