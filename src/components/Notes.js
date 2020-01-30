import React, { Component } from 'react';
import axios from 'axios';
import { ROUTE_NOTES } from '../constants/conection';
import Masonry from 'react-masonry-css';

// Styled components
import { Modal, ModalContent, ModalTitle, ModalActions } from './styles/Modal';
import { ButtonMuted, ButtonDanger } from './styles/Button';

import NoteItem from './NoteItem';

const breakpointColumnsObj = {
  default: 3,
  768: 2,
  480: 1
};

class Notes extends Component {
  state = {
    notes: [],
    modalStatus: false,
    deleteId: ''
  }

  confirmDelete = (id) => {
    this.setState({
      deleteId: id,
    });
    this.toggleModal();
  }

  deleteNote = () => {
    /** DELETE Note by ID */
    axios.delete(ROUTE_NOTES + this.state.deleteId)
      .then(res => this.setState({ notes: [...this.state.notes.filter(note => note.id !== this.state.deleteId)] }))

      .then(this.toggleModal())
  }

  toggleModal = () => {
    this.setState({ modalStatus: !this.state.modalStatus })
  }

  componentDidMount() {
    /** GET Notes */
    axios.get(ROUTE_NOTES)
      .then(res => {
        const notes = res.data.reverse();
        this.setState({ notes })
      })
  }

  componentDidUpdate() {
    /** GET Notes */
    // axios.get(ROUTE_NOTES)
    //   .then(res => {
    //     const notes = res.data.reverse();
    //     this.setState({ notes })
    //   })
  }

  render() {
    return (
      <div>

        {/* Modal */}

        <Modal className={this.state.modalStatus ? 'show' : 'hide'}>
          <ModalContent>
            <ModalTitle>Are you sure?</ModalTitle>
            <p>Do you really want to delete this note?</p>
            <ModalActions>
              <ButtonMuted onClick={this.toggleModal}>Cancel</ButtonMuted>
              <ButtonDanger onClick={this.deleteNote}>Delete</ButtonDanger>
            </ModalActions>
          </ModalContent>
        </Modal>

        {
          !this.state.notes.length ?
            <div className="empty-notes">
              <h3>You don't have any notes</h3>
              <p>Try adding a new note pressing the "plus" button above.</p>
              <img src={process.env.PUBLIC_URL + '/empty-note.png'} alt="empty-note" />
            </div> :

            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {
                this.state.notes.map(note => (
                  <NoteItem
                    key={note.id}
                    note={note}
                    deleteNote={this.confirmDelete}
                  />
                ))
              }
            </Masonry>
        }

      </div>
    );
  }
}

export default Notes;