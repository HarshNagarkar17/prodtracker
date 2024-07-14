const page = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
        <div className="pb-12 pt-36 max-w-5xl">
          <h2 className="text-4xl font-semibold mb-4">What is Prodtracker?</h2>
          <p>
            Prodtracker is a cutting-edge tasks tracker app designed
            specifically for developers. Our mission is to help coders
            streamline their workflows, track their tasks efficiently, and gain
            deep insights into how they spend their time.
          </p>

          <div className="ps-4 mt-4">
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <p>
                  With Prodtracker, you can elevate your productivity and make
                  informed decisions to optimize your coding practices.
                </p>
              </li>
            </ul>
            <ul
              style={{ listStyle: "circle", paddingLeft: "18px" }}
              className="text-[14px] mt-2"
            >
              <li>
                <p>
                  Easily assign yourself tasks and mark them as completed. Keep
                  your work organized and stay on top of your projects
                  effortlessly.
                </p>
              </li>
              <li>
                <p>
                  View your task history in an intuitive chart-like format where
                  tasks are referred to as processes
                </p>
              </li>
              <li>
                <p>
                  Filter and analyze how much time you spend on different tasks.
                  Understand where your time goes and make adjustments to
                  improve your efficiency.
                </p>
              </li>
              <li>
                <p>
                  Analyze what you have learned and worked on daily, weekly, or
                  monthly. Track your growth and ensure you are constantly
                  improving your skills.
                </p>
              </li>
            </ul>
            <ul style={{ listStyle: "disc" }} className="mt-4">
              <li>
                <p>
                  Create non-removable tasks for those critical to-dos that you
                  don't want to lose track of. Mark them as completed when done
                  to maintain a clear overview of your essential tasks.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
