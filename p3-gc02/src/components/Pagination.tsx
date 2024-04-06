"use client";
export default function Pagination() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px gap-2">
        <li>
          <a
            href="#"
            className="bg-blue-500 text-white hover:bg-blue-700 ml-0 rounded-l-lg leading-tight py-2 px-3 shadow-lg"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-700 leading-tight py-2 px-3 shadow-lg"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-700 leading-tight py-2 px-3"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-3"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-700 leading-tight py-2 px-3"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-700 leading-tight py-2 px-3"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-blue-500 text-white hover:bg-blue-700 rounded-r-lg leading-tight py-2 px-3"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
