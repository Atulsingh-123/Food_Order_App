import React from 'react'

const Item = (props) => {
    return (
        <div>

            <section className='section'>
                <div className='set__section'>
                    <div className='set__img'>
                        <img src={props.img} />
                    </div>
                    <div className='details'>
                        <table>
                            <tr>
                                <td>
                                    <p><strong>Restourant</strong> : Highway Inn</p>
                                    <p><strong>Price</strong> : {props.price}</p>
                                    <p><strong>Dish</strong> : {props.title}</p>
                                    <p><strong>Total</strong> : ₹ 300</p>
                                </td>
                                <td>
                                    <p><strong>Rating</strong>: <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>3.5<span class="fa fa-star checked"></span></span></p>
                                    <p><strong>Order Review</strong>: <span>1175+ order done by here</span></p>
                                    <p><strong>Remove</strong>: <i className="material-icons" style={{ fontSize: "48px", color: "red", cursor: "pointer" }}>delete</i> </p>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            </section>


        </div>
    )
}

export default Item
