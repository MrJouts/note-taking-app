import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styled components
import { Card, CardTitle, CardContent, CardActions, CardButton } from './styles/Card';

class NoteItem extends Component {
  render() {
    const { id, title, content, color } = this.props.note;
    const { deleteNote } = this.props;

    return (
      <Card className={color}>
        <CardActions className="card-actions">
          <Link
            to={`/edit/${id}`}
            title="Edit note">
            <CardButton>
              <i className="fas fa-pencil-alt"></i>
              <span>Edit note</span>
            </CardButton>
          </Link>
          <CardButton
            onClick={deleteNote.bind(this, id)}
            title="Delete note">
            <i className="fas fa-trash-alt"></i>
            <span>Delete note</span>
          </CardButton>
        </CardActions>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </Card>
    );
  }
}

// PropTypes
NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired
}

export default NoteItem;