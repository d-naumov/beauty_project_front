import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Search, MapPin } from "lucide-react";

const ExplorePage = () => {
  return (
    <div className="m-10 max-w-[800px] mx-auto mb-10 items-center flex flex-col gap-4 px-5">
      <h2 className="font-bold text-4xl tracking-wide">
        Finde einen <span className="text-green-800">Meister</span>{" "}
      </h2>
      <h2 className="text-gray-500 text-xl">
        Suchen Sie Ihren Master und buchen Sie einen Termin mit einem Klick
      </h2>

      <div className="m-10 max-w-[800px] mx-auto flex">
        <div className="flex flex-grow items-center mr-2 bg-[#f0f0f0] rounded-lg overflow-hidden">
          <Search size={20} className="ml-3 text-gray-400" />
          <input
            type="search"
            placeholder="Service, stylist or salon"
            className="flex-grow bg-transparent p-2 outline-none text-sm"
          />
        </div>

        <div className="flex flex-grow items-center bg-[#f0f0f0] rounded-lg overflow-hidden">
          <MapPin size={20} className="ml-3 text-gray-400" />
          <input
            type="search"
            placeholder="Berlin, BE"
            className="flex-grow bg-transparent p-2 outline-none text-sm"
          />
        </div>

        <button
          type="submit"
          className="ml-2 px-5 py-2 bg-green-500 text-white rounded-lg text-sm"
        >
          Finden
        </button>
      </div>

      <article className="m-3 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-green-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time datetime="2022-10-10" className="block text-xs text-gray-500">
            {" "}
            10th Oct 2022{" "}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <div className="mt-4 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-green-600">
              Snippet
            </span>

            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              JavaScript
            </span>
          </div>
        </div>
      </article>

      <article className="m-3 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-green-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time datetime="2022-10-10" className="block text-xs text-gray-500">
            {" "}
            10th Oct 2022{" "}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <div className="mt-4 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-green-600">
              Snippet
            </span>

            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              JavaScript
            </span>
          </div>
        </div>
      </article>

      <article className="m-3 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-green-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time datetime="2022-10-10" className="block text-xs text-gray-500">
            {" "}
            10th Oct 2022{" "}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <div className="mt-4 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-green-600">
              Snippet
            </span>

            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              JavaScript
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ExplorePage;

