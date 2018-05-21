import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { WebGLView } from "react-native-webgl";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    webglView: {
        flex: 1,
        width: '100%'
    }
});

export class ThreeView extends React.Component {

    componentWillUnmount() {
        cancelAnimationFrame(this.lastFrameTime);
    }

    _onGLContextCreate = async gl => {

        await this.props.onContextCreate(gl);

        const rngl = gl.getExtension("RN");

        this.lastFrameTime;

        const render = () => {
            const now = 0.001 * global.nativePerformanceNow();
            const dt = (this.lastFrameTime !== "undefined") ? now - this.lastFrameTime : 0.16666;
            requestAnimationFrame(render);

            this.props.render(dt);

            gl.flush();
            rngl.endFrame();

            this.lastFrameTime = now;
        };

        render();
    };

    render() {
        return (
            <View style={styles.container}>
                <WebGLView style={styles.webglView} onContextCreate={this._onGLContextCreate} />
            </View>
        );
    }
}
