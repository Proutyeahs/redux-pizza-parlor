function CartItem({item}) {
    console.log('ITEM', item);
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
        </tr>
    );
}

export default CartItem;