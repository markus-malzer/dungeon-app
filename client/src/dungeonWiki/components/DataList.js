//import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Data } from './Data';

function toggleDetails(id) {
  return {
    type: 'TOGGLE_DETAILS',
    id: id,
  }
}

function toggleEdit(id) {
  console.log(id);
  return {
    type: 'TOGGLE_EDIT',
    id: id,
  }
}

const mapToStateDataList = (state) => {
  const list = state.dataReducer.data.map(item => {
    let object = {};
    Object.getOwnPropertyNames(item).forEach(prop => {
      object[prop] = item[prop];
    })
    return object;
  })

  return {
    list,
  };
}

const mapToPropsDataList = (dispatch) => (
  {
    cToggleDetails: (id) => (
      dispatch(toggleDetails(id))
    ),
    cToggleEdit: (id) => (
      dispatch(toggleEdit(id))
    )
  }
)

export const DataList = connect(
  mapToStateDataList,
  mapToPropsDataList
)(Data)
