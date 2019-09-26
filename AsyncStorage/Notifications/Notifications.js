import React from 'react';
import { AsyncStorage} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'reminderToQuiz';

function createNotification () {
    return {
        title: 'Did you forget to study?',
        body: 'Make sure u complete atleast one quiz for today! ',
        ios: {
            sound: true 
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    };
};

export function clearLocalNotifications() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then( Notifications.cancelAllScheduledNotificationsAsync())
}

export function setLocalNotifications () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.prase)
    .then((data) => {
        if (data===null) {
            console.log(data)
            Permissions.getAsync(Permissions.NOTIFICATIONS)
            .then((status) => {
                if(status.status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()
                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(20)
                    tomorrow.setMinutes(0)
                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day'
                        }
                    )
                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}