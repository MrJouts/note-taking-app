import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ROUTE_NOTES, ROUTE_COLORS } from '../constants/conection';

// Styled components
import { ButtonPrimary, ButtonIconBack } from './styles/Button';
import { PageTitle } from './styles/Title';
import { InputTitle, Textarea, ErrorMsg } from './styles/Forms';


class AddNote extends Component {
  state = {
    title: '',
    content: '',
    color: 'dark',
    colors: [],
    colorActive: 'dark',
    hasError: false,
    errorMsg: ''
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.content.trim()) {
      return (
        this.setState({
          hasError: true,
          errorMsg: 'The content of the note can\'t be empty.'
        })
      )
    }

    const note = {
      title: this.state.title,
      content: this.state.content,
      color: this.state.color
    }

    axios.post(ROUTE_NOTES, note)
      .then(res => {
        console.log(res.data)
        this.props.history.push('/');
      })
  }

  onChangeTitle = (e) => this.setState({ title: e.target.value })

  onChange = (e) => {
    this.setState({
      content: e.target.value,
      hasError: false
    })
  }

  onChangeColor = (e) => {
    this.setState({
      colorActive: e.target.value,
      color: e.target.value
    })
  }

  componentDidMount() {
    /** Get Colors */
    axios.get(ROUTE_COLORS)
      .then(res => {
        const colors = res.data;
        this.setState({ colors })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="flex">

          <div className="col-1">
            <div className="wrapper-title">
              <Link to="/">
                <ButtonIconBack>
                  <i className="fas fa-chevron-left"></i>
                </ButtonIconBack>
              </Link>
              <PageTitle>Add note</PageTitle>
            </div>
          </div>

          <div className="col-2">
            <form onSubmit={this.onSubmit}>
              
              <InputTitle
                className="form-title"
                type="text"
                name="content"
                value={this.state.title}
                placeholder="Add title"
                onChange={this.onChangeTitle.bind(this)}
              />

              <div className="form-control">
                <Textarea
                  name="content"
                  value={this.state.content}
                  onChange={this.onChange.bind(this)}
                  cols="10"
                  rows="5">
                </Textarea>
                <div className={this.state.hasError ? 'show' : 'hide'}>
                  <ErrorMsg>{this.state.errorMsg}</ErrorMsg>
                </div>
              </div>

              <div className="form-radio">
                {
                  this.state.colors.map((color) => (
                    <label className={color + (color === this.state.colorActive ? ' active' : '')} key={color}>
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={this.state.color === color}
                        onChange={this.onChangeColor.bind(this)}
                      />
                      {color}
                    </label>
                  ))
                }
              </div>

              <ButtonPrimary>Create note</ButtonPrimary>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNote;