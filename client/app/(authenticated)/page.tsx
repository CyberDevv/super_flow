import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";

const tasks = [
  {
    id: 1,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 2,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 3,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 4,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 5,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 6,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 7,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 8,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 9,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 10,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 14,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 15,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 16,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 17,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 18,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 19,
    title: "Develop the navbar project",
    completed: false,
  },
  {
    id: 110,
    title: "Develop the navbar project",
    completed: false,
  },
];

export default function Home() {
  return (
    <div className="h-full ~mt-5/10">
      <div className="col-start-center lg:h-full ~space-y-5/8">
        <p className="border-2 border-red-950 rounded-full bg-red-200 ~px-3/5 ~py-1/2 ~text-sm/2xl font-medium ~space-x-1/2 center">
          <Image
            src="/svg/focus.svg"
            width={30}
            height={25.99176025390625}
            alt="focus"
            className="~w-[1.2rem]/[1.875rem]"
          />
          <span>Focus</span>
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] ~gap-5/10 w-full ~p-5/10">
          {/* Timer Section */}
          <div className="min-w-[minmax(100%,300px)] border border-red-950/20 ~p-4/6 ~rounded-xl/2xl ~space-y-5/8">
            <p className="text-red-950 ~text-[11rem]/[16rem] col-center leading-[0.85] font-extralight">
              <span>25</span>
              <span>00</span>
            </p>

            <div className="center ~space-x-2/4">
              <Menu />

              <Button
                size="icon"
                className="~rounded-[1rem]/[2rem] ~px-8/12 ~py-4/8 bg-red-400 hover:bg-red-500/90"
              >
                <Image src="/svg/play.svg" width={32} height={32} alt="menu" />
              </Button>

              <Button size="icon" className="~rounded-[1rem]/[1.5rem] ~p-4/6">
                <Image
                  src="/svg/fast-forward.svg"
                  width={32}
                  height={32}
                  alt="menu"
                />
              </Button>
            </div>
          </div>

          {/* Task List Section */}
          <div className="min-w-[200px] border border-red-950/20 ~p-4/6 ~rounded-xl/2xl flex flex-col h-full max-h-[650px]">
            <ScrollArea className="flex-grow">
              <div className="~space-y-2/4">
                {tasks.map((task) => {
                  return (
                    <div
                      key={task?.id}
                      className="bg-red-200/30 ~px-2/4 ~py-1/2 ~rounded-md/lg flex items-center justify-between"
                    >
                      <div className="flex items-center ~space-x-2/4">
                        <input
                          type="checkbox"
                          className="~size-3.5/5 accent-red-500 "
                          id={String(task?.id)}
                        />
                        <label
                          className="~text-sm/base"
                          htmlFor={String(task?.id)}
                        >
                          {task?.title}
                        </label>
                      </div>
                      <div className="flex items-center ~space-x-1/2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded ~p-0.5/1 bg-transparent !border-blue-400 text-blue-400 hover:bg-blue-500/10 hover:text-blue-500"
                        >
                          <Pencil />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded ~p-0.5/1 bg-transparent !border-red-400 text-red-400 hover:bg-red-500/10 hover:text-red-500"
                        >
                          <Trash />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            <div className="flex items-center w-full ~space-x-1/2 ~mt-2/4">
              <input className="w-full bg-transparent text-foreground text-base border ~px-2/4 ~py-3/5 ~rounded-xl/2xl border-red-950/20 focus:outline-none focus:ring-2 focus:ring-red-950" />

              <Button size="icon" className="~rounded-xl/2xl ~p-3/5">
                <Image
                  src="/svg/fast-forward.svg"
                  width={32}
                  height={32}
                  alt="menu"
                  className="~w-[1.4rem]/[2rem]"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
