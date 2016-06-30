import React from 'react';
import BaseWidget from './widget.jsx';

import './table_widget.scss';

export default class TableWidget extends BaseWidget {

  constructor(props) {
    super(props);
    this.state = {title: "init", table: [{init: "example"}]};
  }

  render() {
    var titles = Object.keys(this.state.table[0]).map(function (title) {
      return (
          <th>{title}</th>
      );
    });

    var rows = this.state.table.map(function (item) {

      var row = Object.keys(item).map(function (key) {
        return (
            <td>{item[key]}</td>
        );
      });

      return (
        <tr>
          {row}
        </tr>
      );
    });

    return (
      <div className={"table_widget widget w" + this.props.width + " h" + this.props.height}>
        <h1>{this.props.title}</h1>
        <table striped bordered condensed hover>
          <thead>
              <tr>
                {titles}
              </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
