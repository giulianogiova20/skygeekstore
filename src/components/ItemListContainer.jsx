const ItemListContainer = (props) => {

    const { greeting, userName } = props

    return (
        <>
            <div className='body--style'>
                <h2>Welcome, {userName}!</h2>
                <h3>{greeting}</h3>
            </div>
        </>
    )
}

export default ItemListContainer