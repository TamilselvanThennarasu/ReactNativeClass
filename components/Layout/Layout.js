import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export class Layout extends Component {
   
    render() {
        const styles = StyleSheet.create({
            container1: {
                flex: 1,
                flexDirection: "column",
                width: 310,
                display: "flex",
                flexWrap: "wrap"
            },
            innerSection1: {
                backgroundColor: "red",
                height: 125,                
                flexGrow: 1
            },
            innerSection2: {
                backgroundColor: "green",
                height: 125,
            }, 
            container2 : {
                flex: 1,
                flexDirection: "row",
                display: "flex",
                flexWrap: "wrap",
                flexGrow: 1
            },
            blueSection: {
                width: 100,
                height: 100,
                backgroundColor: "blue",
                marginRight: 5,
                marginBottom: 5
            }
        })
        return (
            <View>
                <View style={styles.container1}>
                    <Text style={styles.innerSection1}>Layout</Text>
                    <Text style={styles.innerSection2}>Layout 2</Text>
                </View>
                <View style = {styles.container2}>
                    <Text style={styles.blueSection}></Text>
                    <Text style={styles.blueSection}></Text>
                    <Text style={styles.blueSection}></Text>
                    <Text style={styles.blueSection}></Text>
                    <Text style={styles.blueSection}></Text>
                    <Text style={styles.blueSection}></Text>
                    <Text style={styles.blueSection}></Text>
                    <Text style={styles.blueSection}></Text>
                    <Text style={styles.blueSection}></Text>
                </View>
            </View>
        )
    }
}