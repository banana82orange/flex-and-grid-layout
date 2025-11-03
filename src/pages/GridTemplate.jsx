import React from "react";
import Card_v2 from "../component/Card_v2";

function GridTemplate() {
  return (
    <div class="grid grid-rows-[auto_1fr_auto] grid-cols-[150px_1fr] h-screen">
      <header class="col-start-1 col-span-2 bg-black text-white p-4">
        Header Content
      </header>

      <main class="bg-gray-200 p-4">side bar</main>
      <main class="bg-gray-500 p-4"></main>

      <footer class="col-start-1 col-span-2 bg-black text-white p-2 text-center">
        Footer Content
      </footer>
    </div>
  );
}

export default GridTemplate;
