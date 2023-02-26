function TopDiv ({mock, generateUniqueID}) {
    return(
        <div>
            {mock.map((item) => {return (
                <div key={generateUniqueID()}>
                    <h4>{item.title}</h4>
                        {item.images.map((img) => {return(
                            <img key={generateUniqueID()} src={img} alt={item.title}/>
                        )})}
                    <h5>{item.brand}</h5>
                </div>
            )})}
        </div>
    )
}
export default TopDiv;