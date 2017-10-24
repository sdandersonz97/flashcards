import React, { Component } from "react";
import { Platform } from "react-native";
import { Picker, Body, Header, Title } from "native-base";
import { primary } from '../../styles/colors'
const Item = Picker.Item;
export default class CategoryPicker extends Component {
  render() {
    return (
        <Picker
            renderHeader={backAction =>
            <Header style={{ backgroundColor: primary }}>
                <Body style={{ flex: 1 }}>
                <Title style={{ color: "#fff" }}>Select a Category</Title>
                </Body>
            </Header>}
                mode="dropdown"
                style={{ width: Platform.OS === "ios" ? undefined : 200 }}
                selectedValue={this.props.value}
                onValueChange={this.props.onValueChange.bind(this)}
        >
            <Item label="Select a Category" value="selectCategory" />
            <Item label="Full Stack Web Developer" value="FullStack" />
            <Item label="Front End Web Developer" value="FrontEnd" />
            <Item label="Android" value="Android" />
            <Item label="Ios" value="Ios" />
        </Picker>
    )
  }
}