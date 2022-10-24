

const CartWidget = () => {
    return (
        <>
            <button type="button" class="btn btn-dark boton-carrito" id="open" href="#" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            <i class="fa-solid fa-cart-shopping"></i>
            {/* <h5 class="inf-pedido">Carrito</h5> */}
            {/* <h5 class="itemCarTotal" id="contador-carrito">$0</h5> */}
        </button>
        </>
    );
}

export default CartWidget;
