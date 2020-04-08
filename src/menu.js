import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="react"
          active={activeItem === "react"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="javascript"
          active={activeItem === "javascript"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="node"
          active={activeItem === "node"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="c#"
          active={activeItem === "c#"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="python"
          active={activeItem === "python"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
