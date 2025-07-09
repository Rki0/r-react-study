import React from "react";

interface MemoizedComponent {
  isReRender: boolean;
}

const MemoizedComponent = React.memo(function MemoizedComponent({
  isReRender,
}: MemoizedComponent) {
  console.log("Re-render: MemoizedComponent.tsx");

  return <div>Memo(Re-Render): {isReRender}</div>;
});

export default MemoizedComponent;

// interface MemoizedComponent {
//   isReRender: boolean;
// }

// function MemoizedComponent({ isReRender }: MemoizedComponent) {
//   console.log("Re-render: MemoizedComponent.tsx");

//   return <div>Memo(Re-Render): {isReRender}</div>;
// }

// export default MemoizedComponent;
