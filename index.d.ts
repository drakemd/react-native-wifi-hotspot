declare module 'react-native-wifi-hotspot' {
    import { NativeModules } from 'react-native'

    enum protocols {
        RSN = 0,
        WPA = 1,
        BOTH = 2
    }
    enum auth {
        OPEN = 0,
        SHARED = 1,
        LEAP = 2
    }
    enum security {
        WPA_PSK = 1,
        WPA_EAP = 2,
        IEEE8021X = 3,
        WPA2_PSK = 4
    }


    function enable(onSuccess: any, onError: any): void
    function disable(onSuccess: any, onError: any): void
    function create(info: any, onSuccess: any, onError: any): void
    function getConfig(onSuccess: any, onError: any): void
    function peersList(onSuccess: any, onError: any): void
    function checkStatus(callback: any): void
    function checkPermission(callback: any): void
    function getWritePermissionSettings(): void

    export {
        protocols,
        auth,
        security,
        enable,
        disable,
        create,
        getConfig,
        peersList,
        checkStatus,
        checkPermission,
        getWritePermissionSettings
    }
}