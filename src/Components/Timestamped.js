// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import List from './List';
// import * as act from '../Action/action';

// class Timestamped extends Component {
//     constructor() {
//         super();
//         this.state = {
//             title: "",
//             detail: ""
//         }
//     }
//     onChange = (e) => {
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }
//     addNote = (e) => {
//         e.preventDefault();
//         const { addNote, notes } = this.props;
//         const { title, detail } = this.state;
//         const date = new Date();
//         if(!title || !detail) {
//             alert("Pls input")
//         }
//         else {
//             const note = {id: notes.length, title, detail, recorded: date.toDateString()}
//             addNote(note);
//         }
//         this.setState({
//             title: "",
//             detail: ""
//         })
//     }
//     render() {
//         const { title, detail } = this.state
//         return (
//             <div className="timeStamped">
//                 <h1>Timestamped Notes App</h1>
//                 <form>
//                     <input type="text" name="title" placeholder="Note Title" onChange={this.onChange} value={title}/><br/>
//                     <input type="text" name="detail" placeholder="Note Detail" onChange={this.onChange} value={detail}/><br/>
//                     <button onClick={this.addNote}>Add Note</button>
//                 </form>
//                 <List/>
//             </div>
//         )
//     }
// }

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




import React, { Component, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import List from './List';
import * as actionType from '../Action/action';

const Timestamped = () => {
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    const notes = useSelector(state => state.notes)
    const dispatch = useDispatch();
    // const addNote = (note) => dispatch(act.addNote(note))

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const onChangeDetail = (e) => {
        setDetail(e.target.value)
    }

    const addNote = (e) => {
        e.preventDefault();
        const date = new Date();
        if(!title || !detail) {
            alert("Pls input")
        }
        else {
            const note = {id: notes.length, title, detail, recorded: date.toDateString()}
            dispatch(actionType.addNote(note))
        }
        setDetail('')
        setTitle('')
    }
        return (
            <div className="timeStamped">
                <h1>Timestamped Notes App</h1>
                <form>
                    <div className='form-group'>
                        <input className="form-control" type="text" name="title" placeholder="Note Title" onChange={onChangeTitle} value={title}/><br/>
                        <input className="form-control" type="text" name="detail" placeholder="Note Detail" onChange={onChangeDetail} value={detail}/><br/>
                        <button className='btn btn-warning' onClick={addNote}>Add Note</button>
                    </div>

                </form>
                <List/>
            </div>
        )
    
}

export default Timestamped