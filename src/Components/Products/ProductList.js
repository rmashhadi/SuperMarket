import React, { useState } from "react";
import BulletList from "./BulletList";
import CategoryItem from "../CategoryItem";
export default function ProductList() {
  const [mode, setMode] = useState("");
  return (
    <div className="product-list2">
      <div className="categories">
        <div onMouseOver={() => setMode("1")}>
          <CategoryItem edge="top" item="ویلچر استیل" />
        </div>
        <div onMouseOver={() => setMode("2")}>
          <CategoryItem edge="false" item="ویلچر آلومینیومی" />
        </div>

        <div onMouseOver={() => setMode("3")}>
          <CategoryItem edge="false" item="ویلچر برقی" />
        </div>
        <div onMouseOver={() => setMode("4")}>
          <CategoryItem edge="false" item="عصا، واکر و بالابر" />
        </div>
        <div onMouseOver={() => setMode("5")}>
          <CategoryItem edge="false" item="تجهیزات توانبخشی سالمندان" />
        </div>
        <div onMouseOver={() => setMode("6")}>
          <CategoryItem edge="false" item="تجهیزات نابینایان" />
        </div>
        <div onMouseOver={() => setMode("7")}>
          <CategoryItem edge="bottom" item="محصولات دیگر" />
        </div>
      </div>
      {mode === "" && <h1>یک منو را انتخاب کنید</h1>}
      {mode === "1" && <h1>1</h1>}
      {mode === "2" && <h1>2</h1>}
      {mode === "3" && <h1>3</h1>}
      {mode === "4" && <h1>4</h1>}
      {mode === "5" && <h1>5</h1>}
      {mode === "6" && <BulletList />}
      {mode === "7" && <h1>7</h1>}
    </div>
  );
}
