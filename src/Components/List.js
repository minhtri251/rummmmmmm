import React, { Component } from 'react'
import { connect,useSelector } from 'react-redux';

import Item from './Item';

function List({item}) {
    const notes = useSelector(state => state.notes)
    return (
        <div className="list">
            {notes.map((item, index) => (<Item item={item} key={index}/>))}
        </div>
    )
}

export default List;


// ==================================================



// const mapStateToProps = (state) => ({
//     notes: state.notes
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps,mapDispatchToProps)(List);



//     const notes = useSelector(state => state.notes)
//     const dispatch = useDispatch();

// // const mapStateToProps = (state) => ({
// //     notes: state.notes
// // })

// // const mapDispatchToProps = dispatch => ({
// //     addNote: note => {
// //         dispatch(act.addNote(note))
// //     }
// // })

// // export default connect(mapStateToProps, mapDispatchToProps)(Timestamped)