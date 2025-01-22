import Image from "next/image";
import LogInButton from "@/components/LogInButton";
export default function Home() {
  return (
    <div>
      <main>
        {/* NAVBAR */}
        <section>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className=" btn btn-ghost text-xl ">Sleep In Public</a>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* HERO */}
        <section>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-black">
                  Warn the world about yourself today :)
                </h1>
                <p className="py-6">
                  Inform the world about your sleeping habits, get reminded that
                  you are not a robot.
                </p>
                <LogInButton />
              </div>
            </div>
          </div>
        </section>
        {/* FEATURES */}
        <section>
          <div className="bg-base-100 min-h-screen">
            <div className="text-center flex flex-col items-center justify-center">
              <div className="max-w-md">
                <h3 className="text-lg font-bold">Features</h3>
                <p className="py-6">
                  Add Cards - Leaderboard, Track, share, connect whoop, etc.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
