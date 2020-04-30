import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('app.window', {
    providedIn: 'root',
    factory: () => window,
});
