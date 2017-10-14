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
            <Item label="Self-Driving Cars" value="SelfDrivingCards" />
            <Item label="Deep Learning" value="DeepLearning" />
            <Item label="Machine Learning" value="MachineLearning" />
            <Item label="Artificial Intelligence" value="AI" />
            <Item label="Data Analyst" value="DataAnalyst" />
            <Item label="Full Stack Web Developer" value="FullStack" />
            <Item label="Front End Web Developer" value="FrontEnd" />
            <Item label="Robotics" value="Robotics" />
            <Item label="VR" value="VR" />
            <Item label="Android" value="Android" />
            <Item label="Ios" value="Ios" />
        </Picker>
    )
  }
}