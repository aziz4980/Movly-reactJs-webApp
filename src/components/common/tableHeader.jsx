import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderSort = (column) => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-sort-down"></i>;
    return <i className="fa fa-sort-up"></i>;
  };

  render() {
    return (
      <tr>
        {this.props.columns.map((column) => (
          <th
            className="clickable"
            key={column.path || column.key}
            onClick={() => this.raiseSort(column.path)}
          >
            {column.label} {this.renderSort(column)}
          </th>
        ))}
      </tr>
    );
  }
}

export default TableHeader;
