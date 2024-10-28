import { Static, Type } from '@sinclair/typebox';

export const Screenshot = Type.Object({
  content: Type.Optional(Type.String()),
  url: Type.Optional(Type.String()),
  selector: Type.String(),
});

export type ScreenshotType = Static<typeof Screenshot>;
