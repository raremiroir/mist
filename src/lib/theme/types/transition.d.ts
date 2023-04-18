export type MistTransitionDuration = 'fast' | 'normal' | 'slow';
export type MistTransitionDurationValue = '50ms' | '100ms' | '150ms' | '200ms' | '250ms' | '300ms' | '350ms' | '400ms' | '450ms' | '500ms' | '550ms' | '600ms' | '650ms' | '700ms' | '750ms' | '800ms' | '850ms' | '900ms' | '950ms' | '1000ms' | '1250ms' | '1500ms' | '1750ms' | '2000ms';
export type MistTransitionTimingModes = "linear" | 'cubic' | 'quad' | 'circ' | 'sine' | 'expo' | 'back' | 'bounce';
export type MistTransitionTiming = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export type MistTransitionDurationObject = { [key in MistTransitionDuration]: MistTransitionDurationValue; }
export type MistTransitionTimingObject = { [key in MistTransitionTimingModes]?: {[key in MistTransitionTiming]: string}|string; }

export type MistTransition = {
   duration: MistTransitionDurationValue;
   timing: MistTransitionTiming;
   delay: MistTransitionDurationValue;
}
export type MistTransitions = {
   duration: MistTransitionDurationObject;
   timing: MistTransitionTimingObject;
   delay: MistTransitionDurationObject;
}