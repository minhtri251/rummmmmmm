import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as actionType from '../Action/action';


function Item({item}) {
    let [check,setCheck] = useState(false)

    const showDetail = () => {
        setCheck(!check)
    }

    const dispatch = useDispatch();
    const removeNote = (id) => {
        dispatch(actionType.removeNote(id))
    }
        return (
            <div className="item">
                <h2>{item.title}</h2>
                <div className="item-content">
                    <div className="recorded">
                        <p>Recorded: {item.recorded}</p>
                    </div>
                    <div className="link">
                        <button className='btn btn-outline-primary' onClick={showDetail}>Show</button>
                        <button className='btn btn-outline-danger'  onClick={() => removeNote(item.id)}>Remove</button>
                    </div>
                </div>
                <div className={`item-detail ${check ? "active" : ""}`}>
                    {item.detail}
                </div>
            </div>
        )

}

export default Item



// export default connect(mapStateToProps, mapDispatchToProps)(Item)