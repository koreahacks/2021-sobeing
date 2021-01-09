import React, {Component} from "react";
import { ActivityIndicator, Dimensions, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons'; 
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";


const { width, height } = Dimensions.get("window");

const ALBUM_NAME = "Sobeing Contract";


export default class CameraScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasPermission: null,
            type: Camera.Constants.Type.back
        };

        this.cameraRef = React.createRef();
    }

    componentDidMount = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status === "granted") {
            this.setState({ hasPermission: true });
        } else {
            this.setState({ hasPermission: false });
        }
    };

    render() {
        const { hasPermission } = this.state;

        if (hasPermission === true) {
            return (
                <View style= {styles.Center}>
                    <Camera
                        style={{
                            width: width - 40,
                            height: height / 1.5,
                            borderRadius: 3,
                            overflow: "hidden"
                        }}
                       
                        ref={this.cameraRef}
                    />
                    <View style = {styles.Iconbar} >
                        <TouchableOpacity onPress={this.setSnap}>
                            <MaterialIcons
                                name="camera-alt"
                                size={44}
                                color="gray"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Check')}>
                            <EvilIcons name="arrow-right" size={44} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else if (hasPermission === false) {
            return (
                <View style={styles.Center}>
                    <Text style= {styles.TextContainer}>카메라 사용권한이 없습니다.</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.center}>
                    <ActivityIndicator color="white" size={1} />
                </View>
            );
        }
    }



    setSnap = async () => {
        try {
            if (this.cameraRef.current) {
                let { uri } = await this.cameraRef.current.takePictureAsync({
                    quality: 1
                });

                if (uri) {
                    this.savePhoto(uri);
                }
            }
        } catch (error) {
            alert(error);

        }
    };

    savePhoto = async uri => {
        try {
            const { status } = await Permissions.askAsync(
                "camera", "cameraRoll"
            );

            if (status === "granted") {
                const asset = await MediaLibrary.createAssetAsync(uri);
                let album = await MediaLibrary.getAlbumAsync(ALBUM_NAME);

                if (album === null) {
                    album = await MediaLibrary.createAlbumAsync(
                        ALBUM_NAME,
                        asset
                    );
                } else {
                    await MediaLibrary.addAssetsToAlbumAsync([asset], album.id);
                }
                
            } else {
                this.setState({ hasPermission: false });
            }
        } catch (error) {
            console.log(error);
        }
    };
}

const styles = StyleSheet.create({
    Iconbar : {
        marginTop: 40, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    Center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    TextContainer: {
        fontSize: 24
    }
})