function CartItem(item) {
    console.log('ITEM', {item});
    return (
        <>
            <td>{item.name}</td>
            <td>{item.price}</td>
        </>
    )
}

export default CartItem;