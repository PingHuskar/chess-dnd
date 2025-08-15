import { forwardRef, memo, type ReactNode, useEffect } from "react";

import { autoScrollWindowForElements } from "@atlaskit/pragmatic-drag-and-drop-auto-scroll/element";
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled
import { Box, xcss } from "@atlaskit/primitives";

import { useBoardContext } from "./board-context";

type BoardProps = {
  height: number;
  children: ReactNode;
};

const getBoardStyles = (height: number) => {
  return xcss({
    display: "flex",
    justifyContent: "center",
    gap: "space.100",
    flexDirection: "column",
    height: `${height}px`,
  });
}

const Board = forwardRef<HTMLDivElement, BoardProps>(
  ({ height, children }: BoardProps, ref) => {
    const { instanceId } = useBoardContext();

    useEffect(() => {
      return autoScrollWindowForElements({
        canScroll: ({ source }) => source.data.instanceId === instanceId,
      });
    }, [instanceId]);

    return (
      <Box xcss={getBoardStyles(height)} ref={ref}>
        {children}
      </Box>
    );
  }
);

export default memo(Board);
