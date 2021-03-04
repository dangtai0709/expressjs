const OneSignal = require("onesignal-node");
const APP_ID = "a5b1f657-447e-4dc4-85d9-77d4a4efa1c2";
const API_TOKEN = "OTNiOTEzYTAtZmZhYS00N2NmLWIwNjktMmE1OGExNWE5MTEw";
const USER_AUTH_KEY = "NmYwZGNhMWYtYjZiOS00YWYwLTk4NDUtNmI2NDBjZDQyMjk1";
const client = new OneSignal.Client(APP_ID, API_TOKEN);
const userClient = new OneSignal.UserClient(USER_AUTH_KEY);

exports.createNotification = async (notification={}) => {
    try {
        const response = await client.createNotification({...notification,app_id:APP_ID});
        return { status: response.statusCode, body: response.body,help:"https://documentation.onesignal.com/reference/create-notification" };
    } catch (e) {
        if (e instanceof OneSignal.HTTPError) {
            return { status: e.statusCode, body: JSON.parse(e.body),help:"https://documentation.onesignal.com/reference/create-notification",example:{ 
                "contents": {"en": "English Message"},
                "included_segments": ["Active Users"]
            }};
        }
    }
};

exports.addDevice = async (data) => {
    try {
        const response = await client.addDevice({...data,app_id:APP_ID,identifier: 'user'+Math.floor(Math.random() * 9999),});
        return { status: response.statusCode, body: response.body,help:"https://documentation.onesignal.com/reference/add-a-device"};
    } catch (e) {
        if (e instanceof OneSignal.HTTPError) {
            return { status: e.statusCode, body: JSON.parse(e.body) ,help:"https://documentation.onesignal.com/reference/add-a-device",example:{"device_type":5}};
        }
    }
};
exports.viewDevice = async (device_id=null) => {
    try {
        const response = await client.viewDevice(device_id);
        return { status: response.statusCode, body: response.body };
    } catch (e) {
        if (e instanceof OneSignal.HTTPError) {
            return { status: e.statusCode, body: JSON.parse(e.body)};
        }
    }
};
exports.viewDevices = async (query={}) => {
    try {
        const response = await client.viewDevices(query);
        return { status: response.statusCode, body: response.body,help:"https://documentation.onesignal.com/reference/view-devices" };
    } catch (e) {
        if (e instanceof OneSignal.HTTPError) {
            return { status: e.statusCode, body: JSON.parse(e.body),help:"https://documentation.onesignal.com/reference/view-devices"};
        }
    }
};
exports.editDevice = async (device_id=null,body={}) => {
    try {
        const response = await client.editDevice(device_id,body);
        return { status: response.statusCode, body: response.body,help:"https://documentation.onesignal.com/reference/edit-device" };
    } catch (e) {
        if (e instanceof OneSignal.HTTPError) {
            return { status: e.statusCode, body: JSON.parse(e.body),help:"https://documentation.onesignal.com/reference/edit-device"};
        }
    }
};
exports.viewNotifications = async (query={}) => {
    try {
        const response = await client.viewNotifications(query);
        return { status: response.statusCode, body: response.body,help:"https://documentation.onesignal.com/reference/view-notifications" };
    } catch (e) {
        if (e instanceof OneSignal.HTTPError) {
            return { status: e.statusCode, body: JSON.parse(e.body),help:"https://documentation.onesignal.com/reference/view-notifications"};
        }
    }
};
exports.viewNotification = async ({notificationId}) => {
    try {
        const response = await client.viewNotification(notificationId);
        return { status: response.statusCode, body: response.body,help:"https://documentation.onesignal.com/reference/view-notification" };
    } catch (e) {
        if (e instanceof OneSignal.HTTPError) {
            return { status: e.statusCode, body: JSON.parse(e.body),help:"https://documentation.onesignal.com/reference/view-notification"};
        }
    }
};
