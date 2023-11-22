// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';

// This is currently required to use waitFor (react) together with
// useFakeTimer (vitest), since fake timers support in waitFor relies
// on jest global symbol.
// See https://github.com/vitest-dev/vitest/issues/3117#issuecomment-1493249764
globalThis.jest = vi;
expect.extend(matchers);
