import { GridList } from "../Ui/GridList";
export const Plans = () => {
  return (
    <section id="plans" className="">
      <h2 className=" text-6xl md:text-9xl text-center py-16">Plans</h2>
      <div className="container">
        <GridList>
          <div className=" p-8 gap-3 w-full flex flex-col justify-center items-center bg-card bg-center bg-no-repeat">
            <h3 className="text-2xl py-4">Standerd</h3>
            <ul className=" list-disc w-full px-8 text-xl">
              <li>
                Branding
                <ul className="list-disc px-6">
                  <li>Logo Mark</li>
                  <li>Typography</li>
                  <li>Brand Guidelines</li>
                  <li>Social Media Direction</li>
                  <li>12 Monthly Designs</li>
                </ul>
              </li>
              <li>
                Monthly Analysis
                <ul className="list-disc px-6">
                  <li>Brand</li>
                  <li>Competitors</li>
                  <li>Algorithms Analysis</li>
                </ul>
              </li>
              <li>Content Scheduling & Publishing
                <ul className="list-disc px-6">
                    <li>Content Writing & Scheduled Posting</li>
                    <li>Content Marketing</li>
                    <li>Audience Targeting</li>
                </ul>
              </li>
              <li>Social Media Management 
                <ul>12 Posts Monthly</ul>
              </li>
            </ul>
            <a href="https://wa.me/+201121520271" className="bg-gray-300 text-gray-900 p-4 text-xl rounded-md">Contact Sales Team</a>
          </div>
          <div className=" p-8 w-full flex flex-col justify-center items-center bg-card bg-center bg-no-repeat">
            <h3 className="text-2xl py-4">Plus</h3>
            <ul className=" list-disc w-full px-8 text-xl">
              <li>All standard plan features plus: </li>
              <li>Weekly Analysis</li>
              <li>Video Production
                <ul className="list-disc w-full px-8 text-xl">
                  <li>Reels</li>
                  <li>Stories</li>
                  <li>Posts</li>
                </ul>
              </li>
              <li>Motion Graphics</li>
              <li>Artificial Intelligence</li>
              <li>CGI</li>
              <li>Up to 56 posts on social media</li>
            </ul>
            <a href="https://wa.me/+201121520271" className="my-2 bg-gray-300 text-gray-900 p-4 text-xl rounded-md">Contact Sales Team</a>

          </div>
          <div className=" w-full flex flex-col justify-center items-center bg-card bg-center bg-no-repeat">
            <h3 className="text-2xl py-4">Premium Plan</h3>
            coming soon . . .
          </div>
        </GridList>
      </div>
    </section>
  );
};
