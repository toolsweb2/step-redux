import React from "react";

export default function CartSummary(props) {
  console.log(props)
  return (
    <>
      <span>Caddies ({props.total})</span>
    </>
  );
}
