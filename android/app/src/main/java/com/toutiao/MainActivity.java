package com.toutiao;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "toutiao";
    }

    // @Override
    // protected onCreate(){
    //     if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
    //         if (!Settings.canDrawOverlays(this)) {
    //             Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
    //             Uri.parse("package:" + getPackageName()));
    //             startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
    //         }
    //     }
    // }

}
