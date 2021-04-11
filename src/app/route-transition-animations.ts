import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';
export const slideInAnimation = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                /* style({ left: '-100%', opacity: 0 }) */
                style({ left: '-100%' })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    /* animate('1s ease-out', style({ opacity: 0 })) */
                    /* animate('200ms ease-out', style({ left: '100%' })) */
                    style({ opacity: 0  })
                ], { optional: true }),
                query(':enter', [
                    /* animate('1s ease-out', style({ left: '0%', opacity: 1 })) */
                    animate('300ms ease-out', style({ left: '0%' }))
                ], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true })
    ])
]);