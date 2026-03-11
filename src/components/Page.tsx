import { UniformSlot } from "@uniformdev/canvas-react";

export default function Page() {
  return (
    <>
      <UniformSlot name="header" />
      <UniformSlot name="content" />
      <UniformSlot name="footer" />
    </>
  );
}
