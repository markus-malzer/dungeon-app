import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { ReduxContainer } from './ReduxContainer';

import { getServerData } from '../actions/userActions';

import { NavContainer } from '../nav/NavContainer';
import { DataList } from './components/DataList';
import { ToggleCreateDataForm } from './components/ToggleCreateDataForm';


export class DataContainer extends Component {
  componentWillMount() {
    this.props.getServerData(this.props.filepath);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.filepath !== this.props.filepath) {
      this.props.getServerData(nextProps.filepath);
    }
  }

  render() {
    return (
      <div className='data_container'>
        <DataList />
        <ToggleCreateDataForm
          itemData={this.props.data}
          cToggleCreate={this.props.cToggleCreate}
          toggleCreate={this.props.toggleCreate}
        />
        <NavContainer />
      </div>
    );
  }
}

const toggleCreate = () => (
  {
    type: 'TOGGLE_CREATE'
  }
)


const mapStateToReduxContainer = (state) => (
  {
    filepath: state.navReducer.filepath,
    data: state.dataReducer.data[0],
    toggleCreate: state.dataReducer.toggleCreate,
  }
);

const mapDispatchToReduxContainer = (dispatch) => (
  {
    getServerData: (filepath) => (
      dispatch(getServerData(filepath))
    ),
    cToggleCreate: () => (
      dispatch(toggleCreate())
    )
  }
);

export const ReduxContainer = connect(
  mapStateToReduxContainer,
  mapDispatchToReduxContainer
)(DataContainer);
