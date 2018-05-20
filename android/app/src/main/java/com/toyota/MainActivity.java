package com.toyota;

import com.facebook.react.ReactActivity;
import android.content.Intent; // <--- import
import android.content.res.Configuration; // <--- import
import com.reactnativecomponent.splashscreen.RCTSplashScreen; //import RCTSplashScreen
import android.widget.ImageView;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "toyota";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // RCTSplashScreen.openSplashScreen(this); // open splashscreen

        RCTSplashScreen.openSplashScreen(this, true, ImageView.ScaleType.CENTER_INSIDE); // open splashscreen fullscreen

        super.onCreate(savedInstanceState);
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }
}
