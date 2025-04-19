import { isTMA } from '@telegram-apps/bridge';
import { init } from '@telegram-apps/sdk-vue';

export default defineNuxtPlugin( (app) => {
    // @ts-ignore
    if (process.client && isTMA('budget')) {
        init();
        alert('[Telegram SDK] Initialized inside Telegram');
    } else {
        console.warn('[Telegram SDK] Not inside Telegram WebApp. Skipping init.');
    }
});